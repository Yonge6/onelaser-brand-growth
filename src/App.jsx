import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  DownloadSimple,
  List,
  X,
} from "@phosphor-icons/react";

const liveProjectUrl = "https://yonge6.github.io/xrf-gen2-listing/";

const chapters = [
  { number: "01", label: "Web experience", href: "#web", image: "assets/xrf-hero.png" },
  { number: "02", label: "Campaign systems", href: "#campaign", image: "assets/xrf-workshop.png" },
  { number: "03", label: "Product brochure", href: "#brochure", image: "assets/brochure-cover.jpg" },
  { number: "04", label: "Archive opening soon", href: "#archive", image: null },
];

function StudioMark() {
  return (
    <a className="studio-mark" href="#top" aria-label="Elian — back to top">
      <strong>ELIAN</strong>
      <span>/ Creative Direction</span>
    </a>
  );
}

function IndexOverlay({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.body.classList.add("menu-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <aside className={`index-overlay ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <div className="overlay-topline">
        <StudioMark />
        <button className="index-toggle" type="button" onClick={onClose} aria-label="Close project index">
          <X weight="light" aria-hidden="true" /> Close
        </button>
      </div>
      <nav className="overlay-nav" aria-label="Project chapters">
        {chapters.map((chapter) => (
          <a key={chapter.number} href={chapter.href} onClick={onClose}>
            <span>{chapter.number}</span>
            <strong>{chapter.label}</strong>
            <ArrowRight weight="light" aria-hidden="true" />
          </a>
        ))}
      </nav>
      <p className="overlay-note">One connected system across brand, digital, campaign and publication.</p>
    </aside>
  );
}

function ChapterStrip() {
  return (
    <nav className="chapter-strip" aria-label="Case study chapters">
      {chapters.map((chapter) => (
        <a key={chapter.number} className={chapter.image ? "chapter-tile" : "chapter-tile is-soon"} href={chapter.href}>
          <div className="chapter-heading">
            <span>{chapter.number}</span>
            <span>{chapter.label}</span>
            {chapter.image ? <ArrowRight weight="light" aria-hidden="true" /> : null}
          </div>
          {chapter.image ? (
            <div className="chapter-thumb">
              <img src={chapter.image} alt="" />
            </div>
          ) : (
            <div className="chapter-empty"><span>Coming soon</span></div>
          )}
        </a>
      ))}
    </nav>
  );
}

export function App() {
  const [indexOpen, setIndexOpen] = useState(false);

  return (
    <main id="top">
      <IndexOverlay open={indexOpen} onClose={() => setIndexOpen(false)} />

      <header className="site-header">
        <StudioMark />
        <button className="index-toggle" type="button" onClick={() => setIndexOpen(true)} aria-expanded={indexOpen}>
          <List weight="light" aria-hidden="true" /> Index
        </button>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-visual">
          <img src="assets/xrf-hero.png" alt="OneLaser XRF Gen2 campaign visual" />
          <div className="hero-shade" />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">OneLaser / Brand &amp; Growth System</p>
          <h1 id="hero-title"><span>Precision</span><span>Made Visible</span></h1>
          <div className="hero-project">
            <p><strong>OneLaser</strong> — Precision at scale</p>
            <p>Creative direction by Elian</p>
          </div>
        </div>

        <dl className="hero-meta">
          <div><dt>Scope</dt><dd>Brand strategy</dd></div>
          <div><dt aria-hidden="true">&nbsp;</dt><dd>Digital experience</dd></div>
          <div><dt aria-hidden="true">&nbsp;</dt><dd>Campaign system</dd></div>
          <div><dt aria-hidden="true">&nbsp;</dt><dd>Publication</dd></div>
          <div className="meta-year"><dt>Year</dt><dd>2026</dd></div>
        </dl>

        <a className="hero-action" href={liveProjectUrl} target="_blank" rel="noreferrer">
          View live experience <ArrowUpRight weight="light" aria-hidden="true" />
        </a>
        <a className="scroll-cue" href="#overview" aria-label="Scroll to project overview">
          <ArrowDown weight="light" aria-hidden="true" />
        </a>
      </section>

      <ChapterStrip />

      <section className="overview section-shell" id="overview">
        <p className="section-index">Overview / 00</p>
        <div className="overview-copy">
          <h2>A single visual language, engineered to move from product truth to market impact.</h2>
          <p>
            OneLaser needed more than isolated campaign assets. The work connects product storytelling,
            web experience, launch creative and long-form publication into one precise, premium system.
          </p>
        </div>
        <dl className="overview-facts">
          <div><dt>Role</dt><dd>Brand &amp; Growth Design</dd></div>
          <div><dt>Outputs</dt><dd>Web / Campaign / Print</dd></div>
          <div><dt>Focus</dt><dd>Precision / Reliability / Throughput</dd></div>
        </dl>
      </section>

      <section className="case-section section-shell" id="web">
        <div className="section-kicker"><span>01</span><span>Web experience</span></div>
        <div className="section-title-row">
          <h2>The product story becomes an experience.</h2>
          <a href={liveProjectUrl} target="_blank" rel="noreferrer">
            Open XRF Gen2 <ArrowUpRight weight="light" aria-hidden="true" />
          </a>
        </div>
        <figure className="wide-artifact">
          <img src="assets/xrf-workshop.png" alt="OneLaser XRF Gen2 web campaign artwork in a maker studio" />
          <figcaption>Digital launch system / XRF Gen2 / 2026</figcaption>
        </figure>
        <div className="case-notes">
          <p>Built around a clear product hierarchy: engineering proof, application range and confident ownership.</p>
          <p>The live experience carries that logic through an immersive product narrative designed for discovery.</p>
        </div>
      </section>

      <section className="case-section campaign-section" id="campaign">
        <div className="section-shell section-kicker"><span>02</span><span>Campaign systems</span></div>
        <div className="campaign-intro section-shell">
          <h2>One platform.<br />Distinct worlds.</h2>
          <p>
            A modular campaign language flexes from industrial performance to education and maker-led storytelling,
            while preserving OneLaser&apos;s unmistakable redline signature.
          </p>
        </div>
        <div className="campaign-gallery">
          <figure>
            <img src="assets/xrf-hero.png" alt="Dark OneLaser XRF Gen2 campaign visual" />
            <figcaption><span>Performance</span><span>01 / 03</span></figcaption>
          </figure>
          <figure>
            <img src="assets/xrf-workshop.png" alt="Warm OneLaser XRF Gen2 maker campaign visual" />
            <figcaption><span>Maker economy</span><span>02 / 03</span></figcaption>
          </figure>
          <figure>
            <img src="assets/hydra-gen2-education.png" alt="OneLaser Hydra Gen2 education campaign visual" />
            <figcaption><span>Education</span><span>03 / 03</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="case-section section-shell brochure-section" id="brochure">
        <div className="section-kicker"><span>03</span><span>Product brochure</span></div>
        <div className="section-title-row">
          <h2>Complex engineering, made clear on paper.</h2>
          <a href="assets/onelaser-brand-product-brochure.pdf" target="_blank" rel="noreferrer">
            View brochure <DownloadSimple weight="light" aria-hidden="true" />
          </a>
        </div>
        <div className="brochure-grid">
          <figure className="brochure-cover">
            <img src="assets/brochure-cover.jpg" alt="OneLaser brand product brochure cover" />
            <figcaption>All-in-One Product Brochure / Cover</figcaption>
          </figure>
          <figure>
            <img src="assets/brochure-performance.jpg" alt="OneLaser brochure page explaining performance" />
            <figcaption>Engineering narrative / 02</figcaption>
          </figure>
          <figure>
            <img src="assets/brochure-applications.jpg" alt="OneLaser brochure page showing laser applications" />
            <figcaption>Application ecosystem / 03</figcaption>
          </figure>
        </div>
      </section>

      <section className="archive" id="archive">
        <div>
          <p>04 / Next chapter</p>
          <h2>More work<br />in preparation.</h2>
        </div>
        <p>New web, campaign and publication work will be added as the archive develops.</p>
      </section>

      <footer>
        <StudioMark />
        <p>OneLaser / Brand &amp; Growth Design / 2026</p>
        <a href="#top">Back to top <ArrowUpRight weight="light" aria-hidden="true" /></a>
      </footer>
    </main>
  );
}
