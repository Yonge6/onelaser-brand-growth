#!/usr/bin/env bash
set -euo pipefail

mirror_root="${ONELASER_MIRROR_ROOT:-/srv/wonderelian/mirrors}"
release_root="$mirror_root/releases"
lock_file="${ONELASER_MIRROR_LOCK:-/run/lock/onelaser-mirror-sync.lock}"

mkdir -p "$release_root"
exec 9>"$lock_file"
flock -n 9 || exit 0

sync_tmp="$(mktemp -d "$mirror_root/.sync.XXXXXX")"
cleanup() {
  rm -rf "$sync_tmp"
}
trap cleanup EXIT

log() {
  printf '[%s] %s\n' "$(date -u +%Y-%m-%dT%H:%M:%SZ)" "$*"
}

remote_sha() {
  git ls-remote "$1" refs/heads/main | awk '{print $1}'
}

atomic_link() {
  local target="$1"
  local link="$2"
  local staged_link="${link}.next"

  ln -sfn "$target" "$staged_link"
  mv -Tf "$staged_link" "$link"
}

build_home() {
  local repo="https://github.com/Yonge6/onelaser-homepage-v3.git"
  local sha short release source
  sha="$(remote_sha "$repo")"
  short="${sha:0:7}"
  release="$release_root/home-$short"

  if [[ ! -f "$release/index.html" || ! -f "$release/collections/index.html" ]]; then
    source="$sync_tmp/home"
    log "building homepage mirror at $short"
    git clone --depth 1 --branch main "$repo" "$source"
    (
      cd "$source"
      npm ci --silent
      GITHUB_REPOSITORY=Yonge6/home npm run build
    )
    test -f "$source/dist/index.html"
    test -f "$source/dist/collections/index.html"
    mv "$source/dist" "$release"
  fi

  atomic_link "$release" "$mirror_root/home"
  atomic_link "$release/collections" "$mirror_root/collections"
  log "homepage and collections now use $short"
}

build_xrf() {
  local repo="https://github.com/Yonge6/xrf-gen2-listing.git"
  local sha short release source
  sha="$(remote_sha "$repo")"
  short="${sha:0:7}"
  release="$release_root/xrf-gen2-$short"

  if [[ ! -f "$release/index.html" ]]; then
    source="$sync_tmp/xrf"
    log "building XRF Gen2 mirror at $short"
    git clone --depth 1 --branch main "$repo" "$source"
    (
      cd "$source"
      npm ci --silent
      GITHUB_REPOSITORY=Yonge6/xrf-gen2 npm run build
    )
    while IFS= read -r file; do
      sed -i 's#/xrf-gen2-listing/#/xrf-gen2/#g' "$file"
    done < <(grep -RIl '/xrf-gen2-listing/' "$source/dist" || true)
    test -f "$source/dist/index.html"
    mv "$source/dist" "$release"
  fi

  atomic_link "$release" "$mirror_root/xrf-gen2"
  log "XRF Gen2 now uses $short"
}

build_trade_show() {
  local repo="https://github.com/Yonge6/OneLaser.git"
  local sha short release source booth
  sha="$(remote_sha "$repo")"
  short="${sha:0:7}"
  release="$release_root/trade-show-$short"

  if [[ ! -f "$release/index.html" || ! -f "$release/assets/final/c02-selected.webp" ]]; then
    source="$sync_tmp/trade"
    booth="$source/august-trade-show-booth"
    log "building trade-show mirror at $short"
    git clone --depth 1 --branch main "$repo" "$source"
    test -f "$booth/index.html"
    test -f "$booth/brand.js"
    test -f "$booth/assets/final/c02-selected.webp"
    mkdir -p "$release"
    cp -a "$booth/." "$release/"
  fi

  atomic_link "$release" "$mirror_root/trade-show"
  log "trade show now uses $short"
}

build_home
build_xrf
build_trade_show

log "mirror sync complete"
