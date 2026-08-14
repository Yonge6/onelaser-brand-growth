import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChatCircle,
  DownloadSimple,
  EnvelopeSimple,
  Info,
  List,
  X,
} from "@phosphor-icons/react";

const liveProjectUrl = "https://yonge6.github.io/xrf-gen2-listing/";

const translations = {
  en: {
    index: "Index",
    close: "Close",
    creativeDirection: "Creative Direction",
    chapters: ["Web experience", "Campaign systems", "Product brochure", "Archive opening soon"],
    drawer: {
      eyebrow: "OneLaser / Brand & Growth Design",
      title: "Project index",
      summary: "One connected system across brand, digital, campaign and publication.",
      about: "About this case",
      aboutNote: "Strategy, creative direction and system thinking",
      contact: "Contact Elian",
      contactNote: "Email and collaboration enquiries",
      feedback: "Leave a note",
      feedbackNote: "Tell me what could feel clearer",
      works: "Works along the way",
      worksNote: "See the world, know yourself, and learn to see beauty.",
    },
    hero: {
      eyebrow: "OneLaser / Brand & Growth System",
      title: ["Precision", "Made Visible"],
      project: "Precision at scale",
      credit: "Creative direction by Elian",
      scope: "Scope",
      scopeItems: ["Brand strategy", "Digital experience", "Campaign system", "Publication"],
      year: "Year",
      action: "View live experience",
      scroll: "Scroll to project overview",
    },
    overview: {
      index: "Overview / 00",
      title: "A single visual language, engineered to move from product truth to market impact.",
      body: "OneLaser needed more than isolated campaign assets. The work connects product storytelling, web experience, launch creative and long-form publication into one precise, premium system.",
      facts: [["Role", "Brand & Growth Design"], ["Outputs", "Web / Campaign / Print"], ["Focus", "Precision / Reliability / Throughput"]],
    },
    web: {
      label: "Web experience",
      title: "The product story becomes an experience.",
      action: "Open XRF Gen2",
      caption: "Digital launch system / XRF Gen2 / 2026",
      notes: [
        "Built around a clear product hierarchy: engineering proof, application range and confident ownership.",
        "The live experience carries that logic through an immersive product narrative designed for discovery.",
      ],
    },
    campaign: {
      label: "Campaign systems",
      title: ["One platform.", "Distinct worlds."],
      body: "A modular campaign language flexes from industrial performance to education and maker-led storytelling, while preserving OneLaser's unmistakable redline signature.",
      captions: ["Performance", "Maker economy", "Education"],
    },
    brochure: {
      label: "Product brochure",
      title: "Complex engineering, made clear on paper.",
      action: "View brochure",
      captions: ["All-in-One Product Brochure / Cover", "Engineering narrative / 02", "Application ecosystem / 03"],
    },
    archive: {
      label: "04 / Next chapter",
      title: ["More work", "in preparation."],
      body: "New web, campaign and publication work will be added as the archive develops.",
    },
    footer: "OneLaser / Brand & Growth Design / 2026",
    backToTop: "Back to top",
    comingSoon: "Coming soon",
  },
  zh: {
    index: "索引",
    close: "关闭",
    creativeDirection: "创意指导",
    chapters: ["网页体验", "推广系统", "产品画册", "更多作品即将上线"],
    drawer: {
      eyebrow: "OneLaser / 品牌与增长设计",
      title: "项目抽屉",
      summary: "从品牌、网页、推广到出版，建立一套连贯的视觉与增长系统。",
      about: "关于本案例",
      aboutNote: "策略、创意指导与系统设计",
      contact: "联系 Elian",
      contactNote: "邮箱与合作洽谈",
      feedback: "留下回响",
      feedbackNote: "告诉我，哪里还可以更清楚",
      works: "沿途所作",
      worksNote: "观世界，识自己，也学习看见美。",
    },
    hero: {
      eyebrow: "OneLaser / 品牌与增长系统",
      title: ["精准工程", "清晰可见"],
      project: "让精准实现规模化",
      credit: "创意指导：Elian",
      scope: "范围",
      scopeItems: ["品牌策略", "数字体验", "推广系统", "出版设计"],
      year: "年份",
      action: "查看线上体验",
      scroll: "滚动至项目概览",
    },
    overview: {
      index: "项目概览 / 00",
      title: "一种统一的视觉语言，让产品事实转化为市场影响力。",
      body: "OneLaser 需要的不是彼此割裂的推广素材。这套工作将产品叙事、网页体验、发布创意与长篇出版连接成一个精准、高端的系统。",
      facts: [["角色", "品牌与增长设计"], ["交付", "网页 / 推广 / 印刷"], ["重点", "精准 / 可靠 / 产能"]],
    },
    web: {
      label: "网页体验",
      title: "让产品故事成为可体验的内容。",
      action: "打开 XRF Gen2",
      caption: "数字发布系统 / XRF Gen2 / 2026",
      notes: ["以清晰的产品层级组织工程证据、应用范围与高端所有权体验。", "线上页面将这套逻辑延伸为一段沉浸式产品叙事，让发现与理解自然发生。"],
    },
    campaign: {
      label: "推广系统",
      title: ["一个平台。", "多种世界。"],
      body: "模块化的推广语言可在工业性能、教育与创客叙事之间灵活延展，同时保留 OneLaser 标志性的红线基因。",
      captions: ["性能", "创客经济", "教育"],
    },
    brochure: {
      label: "产品画册",
      title: "让复杂工程在纸面上清晰易读。",
      action: "查看画册",
      captions: ["一体化产品画册 / 封面", "工程叙事 / 02", "应用生态 / 03"],
    },
    archive: {
      label: "04 / 下一章",
      title: ["更多作品", "整理中。"],
      body: "新的网页、推广与出版作品将随档案整理陆续加入。",
    },
    footer: "OneLaser / 品牌与增长设计 / 2026",
    backToTop: "回到顶部",
    comingSoon: "敬请期待",
  },
};

const workData = {
  en: [
    ["WonderElian", "Make complex ideas clear, beautiful, and human", "An independent creative world connecting visual culture, wellbeing, and real life through design, AI, and digital products.", "https://wonderelian.com/"],
    ["Yixiu Meditation", "Return to the present", "Nature sounds, timed listening, and water breathing help you pause during work, reading, sleep, or emotional shifts.", "https://yixiu.wonderelian.com/"],
    ["Xiazi Says", "Yesterday's World", "Nine global stories and eighteen bilingual posters make yesterday's complex world easier to see.", "https://xiazishuo.com/"],
    ["Bu'er · Know Yourself", "A manual for your life", "Turn birth details into a bilingual chart and foundational reading—a different lens on how you move through life.", "https://human-design.wonderelian.com/"],
    ["Style Atlas", "Learn to see a style", "Follow the lineages of art and design, learn to see a style, and discover your own way of looking.", "https://style-atlas.wonderelian.com/"],
  ],
  zh: [
    ["WonderElian", "让复杂的想法变得清晰、好看而有人情味", "一个从武汉出发的独立创造世界，以设计、AI 与数字产品连接视觉文化、身心健康和真实生活。", "https://wonderelian.com/"],
    ["一休冥想", "让声音带你回到当下", "用真实自然声、定时聆听与水之呼吸，陪你在工作、阅读、睡眠或情绪起伏时先停一停。", "https://yixiu.wonderelian.com/"],
    ["虾子曰", "昨日世界", "每天用 9 个全球热点与 18 张双语海报，把昨天的复杂世界讲清楚。", "https://xiazishuo.com/"],
    ["不二 认识自己", "人生使用说明书", "从出生信息生成中英双语人类图与基础解读，换一个角度认识自己的运行方式。", "https://human-design.wonderelian.com/"],
    ["艺术风格图鉴", "学习看懂一种美", "沿着艺术与设计风格的脉络，看懂一种美，也找到自己的观看方式。", "https://style-atlas.wonderelian.com/"],
  ],
};

function buildChapters(t) {
  return [
    { number: "01", label: t.chapters[0], href: "#web", image: "assets/xrf-hero.png" },
    { number: "02", label: t.chapters[1], href: "#campaign", image: "assets/xrf-workshop.png" },
    { number: "03", label: t.chapters[2], href: "#brochure", image: "assets/brochure-cover.jpg" },
    { number: "04", label: t.chapters[3], href: "#archive", image: null },
  ];
}

function StudioMark({ language }) {
  const t = translations[language];
  return (
    <a className="studio-mark" href="#top" aria-label="Elian — back to top">
      <strong>ELIAN</strong>
      <span>/ {t.creativeDirection}</span>
    </a>
  );
}

function IndexOverlay({ open, onClose, language, onLanguageChange }) {
  const t = translations[language];
  const chapters = buildChapters(t);
  const works = workData[language];

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

  if (!open) return null;

  return (
    <div className="drawer-layer">
      <button className="drawer-backdrop" type="button" onClick={onClose} aria-label={t.close} />
      <aside className="index-drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
        <header className="drawer-header">
          <div>
            <span>{t.drawer.eyebrow}</span>
            <h2 id="drawer-title">{t.drawer.title}</h2>
          </div>
          <div className="drawer-header-actions">
            <button className="language-toggle" type="button" onClick={onLanguageChange} aria-label={language === "en" ? "切换到中文" : "Switch to English"}>
              {language === "en" ? "中文" : "EN"}
            </button>
            <button className="drawer-close" type="button" onClick={onClose} aria-label={t.close}>
              <X weight="light" aria-hidden="true" />
            </button>
          </div>
        </header>

        <div className="drawer-scroll">
          <p className="drawer-summary">{t.drawer.summary}</p>

          <nav className="drawer-chapters" aria-label={t.drawer.title}>
            {chapters.map((chapter) => (
              <a key={chapter.number} href={chapter.href} onClick={onClose}>
                <span>{chapter.number}</span>
                <strong>{chapter.label}</strong>
                <ArrowRight weight="light" aria-hidden="true" />
              </a>
            ))}
          </nav>

          <nav className="drawer-utility" aria-label={language === "en" ? "More information" : "更多信息"}>
            <a href="#overview" onClick={onClose}>
              <Info weight="light" aria-hidden="true" />
              <span><strong>{t.drawer.about}</strong><small>{t.drawer.aboutNote}</small></span>
              <ArrowRight weight="light" aria-hidden="true" />
            </a>
            <a href="mailto:hustyy986@gmail.com">
              <EnvelopeSimple weight="light" aria-hidden="true" />
              <span><strong>{t.drawer.contact}</strong><small>{t.drawer.contactNote}</small></span>
              <ArrowRight weight="light" aria-hidden="true" />
            </a>
            <a href={`mailto:hustyy986@gmail.com?subject=${encodeURIComponent(language === "en" ? "OneLaser portfolio feedback" : "OneLaser 作品集反馈")}`}>
              <ChatCircle weight="light" aria-hidden="true" />
              <span><strong>{t.drawer.feedback}</strong><small>{t.drawer.feedbackNote}</small></span>
              <ArrowRight weight="light" aria-hidden="true" />
            </a>
          </nav>

          <section className="drawer-works" aria-labelledby="drawer-works-title">
            <header>
              <span id="drawer-works-title">{t.drawer.works}</span>
              <p>{t.drawer.worksNote}</p>
            </header>
            <div className="drawer-work-list">
              {works.map(([name, tagline, description, href], index) => (
                <a className="drawer-work-card" href={href} target="_blank" rel="noreferrer" key={name}>
                  <span className="drawer-work-index">{language === "en" ? `0${index + 1}` : ["一", "二", "三", "四", "五"][index]}</span>
                  <span className="drawer-work-copy">
                    <span><strong>{name}</strong><em>{tagline}</em></span>
                    <small>{description}</small>
                  </span>
                  <ArrowUpRight weight="light" aria-hidden="true" />
                </a>
              ))}
            </div>
          </section>
        </div>
      </aside>
    </div>
  );
}

function ChapterStrip({ language }) {
  const t = translations[language];
  const chapters = buildChapters(t);
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
            <div className="chapter-empty"><span>{t.comingSoon}</span></div>
          )}
        </a>
      ))}
    </nav>
  );
}

export function App() {
  const [indexOpen, setIndexOpen] = useState(false);
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "en";
    return window.localStorage.getItem("onelaser-language") === "zh" ? "zh" : "en";
  });
  const t = translations[language];

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    window.localStorage.setItem("onelaser-language", language);
  }, [language]);

  const toggleLanguage = () => setLanguage((current) => current === "en" ? "zh" : "en");

  return (
    <main id="top">
      <IndexOverlay
        open={indexOpen}
        onClose={() => setIndexOpen(false)}
        language={language}
        onLanguageChange={toggleLanguage}
      />

      <header className="site-header">
        <StudioMark language={language} />
        <div className="header-actions">
          <button className="language-toggle" type="button" onClick={toggleLanguage} aria-label={language === "en" ? "切换到中文" : "Switch to English"}>
            {language === "en" ? "中文" : "EN"}
          </button>
          <button className="index-toggle" type="button" onClick={() => setIndexOpen(true)} aria-expanded={indexOpen}>
            <List weight="light" aria-hidden="true" /> {t.index}
          </button>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-visual">
          <img src="assets/xrf-hero.png" alt={language === "en" ? "OneLaser XRF Gen2 campaign visual" : "OneLaser XRF Gen2 推广视觉"} />
          <div className="hero-shade" />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 id="hero-title"><span>{t.hero.title[0]}</span><span>{t.hero.title[1]}</span></h1>
          <div className="hero-project">
            <p><strong>OneLaser</strong> — {t.hero.project}</p>
            <p>{t.hero.credit}</p>
          </div>
        </div>

        <dl className="hero-meta">
          <div><dt>{t.hero.scope}</dt><dd>{t.hero.scopeItems[0]}</dd></div>
          {t.hero.scopeItems.slice(1).map((item) => <div key={item}><dt aria-hidden="true">&nbsp;</dt><dd>{item}</dd></div>)}
          <div className="meta-year"><dt>{t.hero.year}</dt><dd>2026</dd></div>
        </dl>

        <a className="hero-action" href={liveProjectUrl} target="_blank" rel="noreferrer">
          {t.hero.action} <ArrowUpRight weight="light" aria-hidden="true" />
        </a>
        <a className="scroll-cue" href="#overview" aria-label={t.hero.scroll}>
          <ArrowDown weight="light" aria-hidden="true" />
        </a>
      </section>

      <ChapterStrip language={language} />

      <section className="overview section-shell" id="overview">
        <p className="section-index">{t.overview.index}</p>
        <div className="overview-copy">
          <h2>{t.overview.title}</h2>
          <p>{t.overview.body}</p>
        </div>
        <dl className="overview-facts">
          {t.overview.facts.map(([term, description]) => <div key={term}><dt>{term}</dt><dd>{description}</dd></div>)}
        </dl>
      </section>

      <section className="case-section section-shell" id="web">
        <div className="section-kicker"><span>01</span><span>{t.web.label}</span></div>
        <div className="section-title-row">
          <h2>{t.web.title}</h2>
          <a href={liveProjectUrl} target="_blank" rel="noreferrer">
            {t.web.action} <ArrowUpRight weight="light" aria-hidden="true" />
          </a>
        </div>
        <figure className="wide-artifact">
          <img src="assets/xrf-workshop.png" alt={language === "en" ? "OneLaser XRF Gen2 web campaign artwork in a maker studio" : "OneLaser XRF Gen2 创客工作室网页推广视觉"} />
          <figcaption>{t.web.caption}</figcaption>
        </figure>
        <div className="case-notes">
          {t.web.notes.map((note) => <p key={note}>{note}</p>)}
        </div>
      </section>

      <section className="case-section campaign-section" id="campaign">
        <div className="section-shell section-kicker"><span>02</span><span>{t.campaign.label}</span></div>
        <div className="campaign-intro section-shell">
          <h2>{t.campaign.title[0]}<br />{t.campaign.title[1]}</h2>
          <p>{t.campaign.body}</p>
        </div>
        <div className="campaign-gallery">
          <figure>
            <img src="assets/xrf-hero.png" alt={language === "en" ? "Dark OneLaser XRF Gen2 campaign visual" : "OneLaser XRF Gen2 深色推广视觉"} />
            <figcaption><span>{t.campaign.captions[0]}</span><span>01 / 03</span></figcaption>
          </figure>
          <figure>
            <img src="assets/xrf-workshop.png" alt={language === "en" ? "Warm OneLaser XRF Gen2 maker campaign visual" : "OneLaser XRF Gen2 创客推广视觉"} />
            <figcaption><span>{t.campaign.captions[1]}</span><span>02 / 03</span></figcaption>
          </figure>
          <figure>
            <img src="assets/hydra-gen2-education.png" alt={language === "en" ? "OneLaser Hydra Gen2 education campaign visual" : "OneLaser Hydra Gen2 教育推广视觉"} />
            <figcaption><span>{t.campaign.captions[2]}</span><span>03 / 03</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="case-section section-shell brochure-section" id="brochure">
        <div className="section-kicker"><span>03</span><span>{t.brochure.label}</span></div>
        <div className="section-title-row">
          <h2>{t.brochure.title}</h2>
          <a href="assets/onelaser-brand-product-brochure.pdf" target="_blank" rel="noreferrer">
            {t.brochure.action} <DownloadSimple weight="light" aria-hidden="true" />
          </a>
        </div>
        <div className="brochure-grid">
          <figure className="brochure-cover">
            <img src="assets/brochure-cover.jpg" alt={language === "en" ? "OneLaser brand product brochure cover" : "OneLaser 品牌产品画册封面"} />
            <figcaption>{t.brochure.captions[0]}</figcaption>
          </figure>
          <figure>
            <img src="assets/brochure-performance.jpg" alt={language === "en" ? "OneLaser brochure page explaining performance" : "OneLaser 画册性能解读页"} />
            <figcaption>{t.brochure.captions[1]}</figcaption>
          </figure>
          <figure>
            <img src="assets/brochure-applications.jpg" alt={language === "en" ? "OneLaser brochure page showing laser applications" : "OneLaser 画册激光应用页"} />
            <figcaption>{t.brochure.captions[2]}</figcaption>
          </figure>
        </div>
      </section>

      <section className="archive" id="archive">
        <div>
          <p>{t.archive.label}</p>
          <h2>{t.archive.title[0]}<br />{t.archive.title[1]}</h2>
        </div>
        <p>{t.archive.body}</p>
      </section>

      <footer>
        <StudioMark language={language} />
        <p>{t.footer}</p>
        <a href="#top">{t.backToTop} <ArrowUpRight weight="light" aria-hidden="true" /></a>
      </footer>
    </main>
  );
}
