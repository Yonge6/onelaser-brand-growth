import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CaretLeft,
  CaretRight,
  DownloadSimple,
  EnvelopeSimple,
  Info,
  List,
  MagnifyingGlassPlus,
  QrCode,
  X,
} from "@phosphor-icons/react";

const liveProjectUrl = "https://onelaser.wonderelian.com/xrf-gen2/?page=xrf&v=f4b82a2";
const homepageV3Url = "https://onelaser.wonderelian.com/home/";
const collectionsUrl = "https://onelaser.wonderelian.com/collections/";
const makerLabUrl = "https://maker.wonderelian.com/";
const tradeShowUrl = "https://onelaser.wonderelian.com/trade-show/";

const digitalProjectSources = [
  { id: "homepage", href: homepageV3Url, image: "assets/onelaser-homepage-v3-project.webp" },
  { id: "collections", href: collectionsUrl, image: "assets/onelaser-collections-project.jpg" },
  { id: "xrf", href: liveProjectUrl, image: "assets/onelaser-xrf-project-v3.jpg" },
  { id: "maker", href: makerLabUrl, image: "assets/maker-lab-project-v4.webp" },
  { id: "tradeShow", href: tradeShowUrl, image: "assets/onelaser-trade-show-project.webp" },
];

const bannerCampaignSources = [
  { id: "labor-day", desktop: "assets/banners/labor-day-desktop-v2.webp", mobile: "assets/banners/labor-day-mobile-v2.webp" },
  { id: "performance", desktop: "assets/xrf-hero.png", mobile: "assets/banners/performance-mobile.webp" },
  { id: "maker-economy", desktop: "assets/xrf-workshop.png", mobile: "assets/banners/maker-economy-mobile.webp" },
  { id: "education", desktop: "assets/hydra-gen2-education.png", mobile: "assets/banners/education-mobile.webp" },
];

const paidAdProductGroups = [
  { id: "xrf", label: "XRF", variants: ["comparison-chart-3", "deal-image-1", "feature-callout-2", "hero-image-1", "lifestyle-1", "monthly-price-1", "process-shot-2", "product-line-collection-1", "sample-work-1", "ugc-1"] },
  { id: "cobra", label: "Cobra", variants: ["comparison-chart-1", "deal-image-2", "feature-callout-1", "hero-image-1", "lifestyle-1", "monthly-price-2", "process-shot-1", "product-line-collection-1", "sample-work-2", "ugc-1"] },
  { id: "hydra-gen2", label: "Hydra Gen2", variants: ["comparison-chart-1", "deal-image-1", "feature-callout-3", "hero-image-1", "lifestyle-1", "monthly-price-1", "process-shot-2", "product-line-collection-1", "sample-work-3", "ugc-3"] },
  { id: "vertigo", label: "VertiGo", variants: ["comparison-chart-3", "deal-image-1", "feature-callout-2", "hero-image-1", "lifestyle-3", "monthly-price-1", "process-shot-1", "product-line-collection-1", "sample-work-2", "ugc-1"] },
];

const paidAdSources = paidAdProductGroups.flatMap((product) => product.variants.map((variant) => ({
  src: `assets/paid-ads/${product.id}-${variant}.jpg`,
  product: product.label,
  type: variant.replace(/-\d+$/, ""),
})));

const sceneImageSources = [
  { src: "assets/scenes/personalized-awards.webp", thumb: "assets/scenes/personalized-awards-thumb.jpg" },
  { src: "assets/scenes/custom-wood-goods.webp", thumb: "assets/scenes/custom-wood-goods-thumb.jpg" },
  { src: "assets/scenes/production-studio.webp", thumb: "assets/scenes/production-studio-thumb.jpg" },
  { src: "assets/scenes/personalized-drinkware.webp", thumb: "assets/scenes/personalized-drinkware-thumb.jpg" },
  { src: "assets/scenes/large-format-workshop.webp", thumb: "assets/scenes/large-format-workshop-thumb.jpg" },
  { src: "assets/scenes/market-day-engraving.webp", thumb: "assets/scenes/market-day-engraving-thumb.jpg" },
];

const translations = {
  en: {
    index: "Index",
    close: "Close",
    creativeDirection: "Creative Direction",
    chapters: ["Machines at work", "Live digital projects", "Product publications", "Banner + paid ads"],
    drawer: {
      eyebrow: "OneLaser / Brand & Growth Design",
      title: "Project index",
      summary: "One connected system across brand, digital, campaign and publication.",
      about: "About this case",
      aboutNote: "Strategy, creative direction and system thinking",
      contact: "Contact Elian",
      contactNote: "Website, email and social profiles",
      works: "Works along the way",
      worksNote: "See the world, know yourself, and learn to see beauty.",
      liveProjects: "Live projects",
      back: "Back to project index",
      aboutKicker: "OneLaser / Brand & Growth Design",
      aboutTitle: "One system, from product truth to market impact.",
      aboutBody: [
        "This case study shows how product truth becomes a connected brand, web, campaign and publication system.",
        "Elian led the creative direction and system design, balancing engineering credibility with a premium international visual language.",
      ],
      aboutFacts: [["Role", "Brand & Growth Design"], ["Scope", "Strategy / Web / Campaign / Print"], ["Year", "2026"]],
      contactKicker: "Website / Email / Social",
      contactTitle: "Start a conversation.",
      contactBody: "For collaborations, creative direction and product storytelling, reach Elian through any channel below.",
      openProfile: "Open profile",
      wechatChannels: "WeChat Channels",
      viewQr: "View QR code",
      qrTitle: "WeChat Channels",
      qrNote: "Scan to open Elian's WeChat Channels profile.",
      closeQr: "Close QR code",
    },
    hero: {
      eyebrow: "OneLaser / Brand & Growth System",
      title: ["Precision", "Made Visible"],
      project: "Precision at scale",
      credit: "Creative direction by Elian",
      scope: "Scope",
      scopeItems: ["Brand strategy", "Digital experience", "Campaign system", "Publication"],
      year: "Year",
      action: "Explore live work",
      scroll: "Scroll to project overview",
    },
    overview: {
      index: "Overview / 00",
      title: "A single visual language, engineered to move from product truth to market impact.",
      body: "OneLaser needed more than isolated campaign assets. The work connects product storytelling, web experience, launch creative and long-form publication into one precise, premium system.",
      facts: [["Role", "Brand & Growth Design"], ["Outputs", "Web / Campaign / Print"], ["Focus", "Precision / Reliability / Throughput"]],
    },
    digital: {
      label: "Live digital projects",
      liveCount: "live projects",
      title: "Live systems. One connected brand.",
      body: "From the flagship homepage and product catalog to focused launches and practical business tools, each experience gives a different audience a clear next move.",
      open: "Open live project",
      live: "Live",
      projects: {
        homepage: {
          type: "Brand & commerce website",
          title: "OneLaser Homepage V3",
          body: "A complete discovery system connecting the product range, machine finder, maker outcomes, community and ownership support.",
          note: "Product system / Finder / Community",
          alt: "OneLaser Cobra laser system in a professional maker studio",
        },
        collections: {
          type: "Product discovery platform",
          title: "OneLaser Collections",
          body: "A focused catalog that helps makers narrow the range by material, job, output level and project scale before comparing machines.",
          note: "Machine finder / Filters / Product range",
          alt: "OneLaser product collection featuring XRF, Cobra, Hydra Gen2 and VertiGo laser machines",
        },
        xrf: {
          type: "Product launch experience",
          title: "XRF Gen2 Listing",
          body: "An immersive product story that turns RF engineering, application range and performance evidence into confident product discovery.",
          note: "Product truth / Performance / Conversion",
          alt: "OneLaser XRF Gen2 digital experience shown on a studio display",
        },
        maker: {
          type: "Business planning platform",
          title: "Maker Business Lab",
          body: "A practical platform for evaluating product opportunities, modelling profit and payback, and planning the right production setup.",
          note: "Opportunity scoring / Business math / Production planning",
          alt: "Personalized walnut serving board engraved with a floral monogram",
        },
        tradeShow: {
          type: "Spatial brand experience",
          title: "U.S. Trade Show Booth",
          body: "A 10 × 40 ft exhibition environment that brings the OneLaser machine range, proof points and maker outcomes into one clear physical story.",
          note: "Exhibition / Spatial system / Product storytelling",
          alt: "OneLaser U.S. trade show booth displaying the full laser machine range",
        },
      },
    },
    campaign: {
      label: "Banner + paid ads",
      title: ["One system.", "Every paid touchpoint."],
      body: "From wide campaign banners to a complete paid-social library, the work turns product truth into repeatable creative for every machine, message and audience.",
      bannerLabel: "Banner systems",
      bannerBody: "Four campaign systems, each shown in desktop and mobile formats. Swipe to compare every responsive pair.",
      bannerCaptions: ["Labor Day", "Performance", "Maker economy", "Education"],
      bannerFormats: { desktop: "Desktop", mobile: "Mobile" },
      campaigns: "campaigns",
      adsLabel: "Paid ads library",
      adsBody: "Forty production-ready ads across Cobra, Hydra Gen2, VertiGo and XRF. Swipe to explore the full set.",
      assets: "assets",
      previousRail: "Previous ads",
      nextRail: "Next ads",
      previousBanner: "Previous banner campaign",
      nextBanner: "Next banner campaign",
      adTypes: { "comparison-chart": "Comparison chart", "deal-image": "Deal creative", "feature-callout": "Feature callout", "hero-image": "Hero", lifestyle: "Lifestyle", "monthly-price": "Monthly price", "process-shot": "Process shot", "product-line-collection": "Product line", "sample-work": "Sample work", ugc: "UGC" },
      enlarge: "Enlarge image",
      close: "Close image",
      previous: "Previous image",
      next: "Next image",
    },
    scenes: {
      label: "Machines in the real world",
      count: "scenes",
      title: "See the work. See the opportunity.",
      body: "Each scene connects a machine with a maker, a place and the products it can create—turning technical capability into an immediate picture of use and business potential.",
      browse: "Browse scenes",
      previousRail: "Previous scenes",
      nextRail: "Next scenes",
      enlarge: "Enlarge scene",
      close: "Close scene",
      previous: "Previous scene",
      next: "Next scene",
      items: [
        { title: "Personalized awards", description: "Premium, made-to-order gifts for workshops and local businesses.", alt: "Maker beside a OneLaser machine with personalized awards, drinkware and leather goods" },
        { title: "Custom wood goods", description: "From a design file to signs, keepsakes and branded pieces.", alt: "Maker holding an engraved wood sign beside a compact OneLaser machine" },
        { title: "Production studio", description: "Repeatable, high-value craft production at workshop scale.", alt: "Maker inspecting an engraved wood piece beside a large OneLaser machine" },
        { title: "Personalized drinkware", description: "Names, artwork and gifting moments made tangible on everyday products.", alt: "Two makers personalizing drinkware beside a OneLaser VertiGo machine" },
        { title: "Large-format workshop", description: "Bigger equipment for signs, wall art and commercial jobs.", alt: "Maker reviewing a large-format OneLaser Cobra machine in a workshop" },
        { title: "Market-day engraving", description: "Live personalization for pop-ups, markets and mobile businesses.", alt: "Maker using a OneLaser Galvo Flex at an outdoor market" },
      ],
    },
    brochure: {
      label: "Product publications",
      title: "A product library, designed to be read.",
      body: "Start with the All-in-One master brochure, then open a focused volume for each product family.",
      featured: "Featured / All-in-One",
      collection: "Product series",
      read: "Read digital book",
      download: "Download PDF",
      close: "Close reader",
      previous: "Previous pages",
      next: "Next pages",
      page: "Page",
      of: "of",
    },
    archive: {
      label: "Ongoing archive",
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
    chapters: ["机器真实场景", "线上数字项目", "产品出版物", "Banner + 广告投放"],
    drawer: {
      eyebrow: "OneLaser / 品牌与增长设计",
      title: "项目抽屉",
      summary: "从品牌、网页、推广到出版，建立一套连贯的视觉与增长系统。",
      about: "关于本案例",
      aboutNote: "策略、创意指导与系统设计",
      contact: "联系 Elian",
      contactNote: "网站、邮箱与社交账号",
      works: "沿途所作",
      worksNote: "观世界，识自己，也学习看见美。",
      liveProjects: "线上项目",
      back: "返回项目抽屉",
      aboutKicker: "OneLaser / 品牌与增长设计",
      aboutTitle: "从产品事实到市场影响力，建立一套完整系统。",
      aboutBody: [
        "本案例呈现产品事实如何被转化为彼此连接的品牌、网页、推广与出版系统。",
        "Elian 负责创意指导与系统设计，在工程可信度与国际化、高端的视觉语言之间建立平衡。",
      ],
      aboutFacts: [["角色", "品牌与增长设计"], ["范围", "策略 / 网页 / 推广 / 印刷"], ["年份", "2026"]],
      contactKicker: "网站 / 邮箱 / 社交账号",
      contactTitle: "开始一次交流。",
      contactBody: "有关合作、创意指导与产品叙事，可通过以下任一方式联系 Elian。",
      openProfile: "打开主页",
      wechatChannels: "视频号",
      viewQr: "查看二维码",
      qrTitle: "微信视频号",
      qrNote: "微信扫码，打开 Elian 的视频号主页。",
      closeQr: "关闭二维码",
    },
    hero: {
      eyebrow: "OneLaser / 品牌与增长系统",
      title: ["精准工程", "清晰可见"],
      project: "让精准实现规模化",
      credit: "创意指导：Elian",
      scope: "范围",
      scopeItems: ["品牌策略", "数字体验", "推广系统", "出版设计"],
      year: "年份",
      action: "浏览线上项目",
      scroll: "滚动至项目概览",
    },
    overview: {
      index: "项目概览 / 00",
      title: "一种统一的视觉语言，让产品事实转化为市场影响力。",
      body: "OneLaser 需要的不是彼此割裂的推广素材。这套工作将产品叙事、网页体验、发布创意与长篇出版连接成一个精准、高端的系统。",
      facts: [["角色", "品牌与增长设计"], ["交付", "网页 / 推广 / 印刷"], ["重点", "精准 / 可靠 / 产能"]],
    },
    digital: {
      label: "线上数字项目",
      liveCount: "个线上项目",
      title: "线上系统，一套完整品牌。",
      body: "从品牌官网与产品目录，到产品发布页和商业工具，每个体验都服务不同受众，也都给出清晰的下一步。",
      open: "打开线上项目",
      live: "已上线",
      projects: {
        homepage: {
          type: "品牌与商业官网",
          title: "OneLaser Homepage V3",
          body: "把产品矩阵、机器选型、创客成果、社区与购买后支持连接成一条完整的发现路径。",
          note: "产品系统 / 选型器 / 社区",
          alt: "专业创客工作室中的 OneLaser Cobra 激光设备",
        },
        collections: {
          type: "产品发现平台",
          title: "OneLaser Collections",
          body: "先按材料、任务、产量与项目尺寸缩小选择范围，再进入具体机型比较。",
          note: "机器选型 / 筛选 / 产品矩阵",
          alt: "由 XRF、Cobra、Hydra Gen2 与 VertiGo 激光设备组成的 OneLaser 产品矩阵",
        },
        xrf: {
          type: "产品发布体验",
          title: "XRF Gen2 Listing",
          body: "把 RF 工程原理、应用范围与性能证据组织成一段沉浸式产品叙事，帮助用户建立购买信心。",
          note: "产品事实 / 性能 / 转化",
          alt: "工作室显示器中的 OneLaser XRF Gen2 数字体验",
        },
        maker: {
          type: "商业规划平台",
          title: "Maker Business Lab",
          body: "评估创客产品机会、测算利润与回本周期，并为每个商业方向规划合适的生产配置。",
          note: "机会评分 / 商业测算 / 生产规划",
          alt: "雕刻有花卉字母纹样的个性化胡桃木托盘",
        },
        tradeShow: {
          type: "空间品牌体验",
          title: "美国展会展厅",
          body: "面向美国展会打造的 10 × 40 英尺展厅方案，把产品矩阵、核心证据与创客成果组织成清晰的线下品牌体验。",
          note: "展会空间 / 视觉系统 / 产品叙事",
          alt: "展示完整激光设备矩阵的 OneLaser 美国展会展厅",
        },
      },
    },
    campaign: {
      label: "Banner + 广告投放",
      title: ["一套系统，", "覆盖所有广告触点。"],
      body: "从横版品牌 Banner 到完整的付费社交广告素材库，把产品事实转化为可持续复用、覆盖不同机型、信息与受众的创意系统。",
      bannerLabel: "Banner 系统",
      bannerBody: "四组广告系统均包含电脑端与手机端规格，左右滑动对照浏览每组响应式视觉。",
      bannerCaptions: ["劳动节活动", "性能", "创客经济", "教育"],
      bannerFormats: { desktop: "电脑端", mobile: "手机端" },
      campaigns: "组",
      adsLabel: "Paid Ads 广告库",
      adsBody: "覆盖 Cobra、Hydra Gen2、VertiGo 与 XRF 的 40 张正式投放素材，左右滑动浏览完整作品。",
      assets: "张素材",
      previousRail: "上一组广告",
      nextRail: "下一组广告",
      previousBanner: "上一组 Banner",
      nextBanner: "下一组 Banner",
      adTypes: { "comparison-chart": "对比图", "deal-image": "促销视觉", "feature-callout": "功能亮点", "hero-image": "主视觉", lifestyle: "使用场景", "monthly-price": "月付方案", "process-shot": "工艺过程", "product-line-collection": "产品矩阵", "sample-work": "样品成果", ugc: "用户内容" },
      enlarge: "放大图片",
      close: "关闭图片",
      previous: "上一张",
      next: "下一张",
    },
    scenes: {
      label: "真实使用场景",
      count: "个场景",
      title: "看见用途，也看见机会。",
      body: "每个场景都把设备、使用者、工作环境与可生产的产品连在一起，让顾客立刻理解机器能做什么，以及它能带来怎样的生意。",
      browse: "浏览场景",
      previousRail: "上一组场景",
      nextRail: "下一组场景",
      enlarge: "放大场景图",
      close: "关闭场景图",
      previous: "上一个场景",
      next: "下一个场景",
      items: [
        { title: "个性化奖杯与礼品", description: "为工作室与本地企业制作高价值定制商品。", alt: "创客与 OneLaser 设备、定制奖杯、杯具和皮具" },
        { title: "定制木制品", description: "从设计文件到标牌、纪念品与品牌物料。", alt: "创客手持雕刻木牌，身旁是桌面型 OneLaser 设备" },
        { title: "专业生产工作室", description: "以工作室规模稳定复制高价值手作产品。", alt: "创客在大型 OneLaser 设备旁检查雕刻木件" },
        { title: "个性化杯具", description: "把姓名、图案与送礼需求落到日常商品上。", alt: "两位创客在 OneLaser VertiGo 设备旁制作定制杯具" },
        { title: "大幅面工作室", description: "面向标识、墙面艺术与商业订单的大型设备。", alt: "创客在工作室中查看大幅面 OneLaser Cobra 设备" },
        { title: "市集现场定制", description: "在快闪店、市集和移动生意中提供即时定制。", alt: "创客在户外市集使用 OneLaser Galvo Flex" },
      ],
    },
    brochure: {
      label: "产品出版物",
      title: "一套可以真正翻阅的产品图书馆。",
      body: "先从最重要的 All-in-One 总画册开始，再进入每个产品系列的独立分册。",
      featured: "重点推荐 / All-in-One",
      collection: "产品系列",
      read: "翻阅电子书",
      download: "下载 PDF",
      close: "关闭阅读器",
      previous: "上一页",
      next: "下一页",
      page: "第",
      of: "/",
    },
    archive: {
      label: "持续更新",
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
    ["WonderElian", "Making complex things clear, beautiful, and felt", "Elian's personal creative space—recording works and explorations across design, AI, products, and the slow process of becoming himself.", "https://wonderelian.com/"],
    ["Yixiu Meditation", "Return to the present", "Nature sounds, timed listening, and water breathing help you pause during work, reading, sleep, or emotional shifts.", "https://yixiu.wonderelian.com/"],
    ["Xiazi Says", "Yesterday's World", "Nine global stories and eighteen bilingual posters make yesterday's complex world easier to see.", "https://xiazishuo.com/"],
    ["Bu'er · Know Yourself", "A manual for your life", "Turn birth details into a bilingual chart and foundational reading—a different lens on how you move through life.", "https://human-design.wonderelian.com/"],
    ["Style Atlas", "Learn to see a style", "Follow the lineages of art and design, learn to see a style, and discover your own way of looking.", "https://style-atlas.wonderelian.com/"],
  ],
  zh: [
    ["WonderElian", "把复杂的事物，重新变得清楚而有品味", "WonderElian 是永歌 Elian 的个人创作空间。这里记录作品，也记录关于设计、AI、产品，以及如何慢慢成为自己的思考与探索。", "https://wonderelian.com/"],
    ["一休冥想", "让声音带你回到当下", "用真实自然声、定时聆听与水之呼吸，陪你在工作、阅读、睡眠或情绪起伏时先停一停。", "https://yixiu.wonderelian.com/"],
    ["虾子曰", "昨日世界", "每天用 9 个全球热点与 18 张双语海报，把昨天的复杂世界讲清楚。", "https://xiazishuo.com/"],
    ["不二 认识自己", "人生使用说明书", "从出生信息生成中英双语人类图与基础解读，换一个角度认识自己的运行方式。", "https://human-design.wonderelian.com/"],
    ["艺术风格图鉴", "学习看懂一种美", "沿着艺术与设计风格的脉络，看懂一种美，也找到自己的观看方式。", "https://style-atlas.wonderelian.com/"],
  ],
};

const brochureData = {
  en: [
    { slug: "all-in-one", name: "All-in-One", eyebrow: "Master portfolio", description: "The complete OneLaser product and application ecosystem in one definitive volume.", pages: 20, pdf: "assets/onelaser-brand-product-brochure.pdf" },
    { slug: "cobra", name: "Cobra Series", eyebrow: "Peak glass laser", description: "A focused guide to the accessible, precision-led Cobra family.", pages: 8, pdf: "assets/brochures/cobra.pdf" },
    { slug: "hydra-gen2", name: "Hydra Gen2", eyebrow: "Performance laser", description: "The engineering story behind OneLaser's professional performance platform.", pages: 8, pdf: "assets/brochures/hydra-gen2.pdf" },
    { slug: "vertigo", name: "VertiGo", eyebrow: "Rotary laser", description: "A specialist volume for high-margin drinkware and cylindrical production.", pages: 8, pdf: "assets/brochures/vertigo.pdf" },
    { slug: "xrf-gen2", name: "XRF Gen2", eyebrow: "RF desktop laser", description: "A focused guide to its RF architecture, smart workflow, material range, and production-ready specifications.", pages: 10, pdf: "assets/brochures/xrf-gen2.pdf" },
  ],
  zh: [
    { slug: "all-in-one", name: "All-in-One", eyebrow: "品牌与产品总画册", description: "一册完整呈现 OneLaser 的产品矩阵、工程优势与应用生态。", pages: 20, pdf: "assets/onelaser-brand-product-brochure.pdf" },
    { slug: "cobra", name: "Cobra 系列", eyebrow: "峰值玻璃激光器", description: "围绕 Cobra 产品家族的性能、易用性与应用场景展开。", pages: 8, pdf: "assets/brochures/cobra.pdf" },
    { slug: "hydra-gen2", name: "Hydra Gen2", eyebrow: "专业性能激光器", description: "完整讲述专业级性能平台背后的工程设计与产品价值。", pages: 8, pdf: "assets/brochures/hydra-gen2.pdf" },
    { slug: "vertigo", name: "VertiGo", eyebrow: "旋转激光器", description: "面向杯具与圆柱体高价值生产场景的专业分册。", pages: 8, pdf: "assets/brochures/vertigo.pdf" },
    { slug: "xrf-gen2", name: "XRF Gen2", eyebrow: "RF 桌面激光器", description: "从 RF 架构、智能工作流到材料能力与生产规格，完整呈现 XRF Gen2。", pages: 10, pdf: "assets/brochures/xrf-gen2.pdf" },
  ],
};

function buildChapters(t) {
  return [
    { number: "01", label: t.chapters[0], href: "#scenes", image: "assets/chapter-scenes-v3.jpg" },
    { number: "02", label: t.chapters[1], href: "#digital", image: "assets/chapter-digital-v3.jpg" },
    { number: "03", label: t.chapters[2], href: "#brochure", image: "assets/chapter-publications-v3.jpg" },
    { number: "04", label: t.chapters[3], href: "#campaign", image: "assets/chapter-paid-ads-v3.jpg" },
  ];
}

function buildDigitalProjects(t) {
  return digitalProjectSources.map((project) => ({ ...project, ...t.digital.projects[project.id] }));
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
  const digitalProjects = buildDigitalProjects(t);
  const works = workData[language];
  const [view, setView] = useState("home");
  const [qrOpen, setQrOpen] = useState(false);
  const drawerScrollRef = useRef(null);
  const contacts = [
    ["WonderElian", "wonderelian.com", "https://wonderelian.com/"],
    [language === "en" ? "Email" : "邮箱", "hustyy986@gmail.com", "mailto:hustyy986@gmail.com"],
    [language === "en" ? "RED" : "小红书", t.drawer.openProfile, "https://xhslink.cn/m/3OF5qu7Peui"],
    [language === "en" ? "Douyin" : "抖音", t.drawer.openProfile, "https://v.douyin.com/d9L1thkye0Y/"],
    ["X", "@yongyuan1", "https://x.com/yongyuan1?s=11"],
    ["TikTok", "@wonderelian", "https://www.tiktok.com/@wonderelian?_r=1&_t=ZP-98Tvaldfrpe"],
  ];

  useEffect(() => {
    if (!open) return;
    setView("home");
    setQrOpen(false);
  }, [open]);

  useEffect(() => {
    drawerScrollRef.current?.scrollTo({ top: 0, behavior: "instant" });
  }, [view]);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      if (qrOpen) setQrOpen(false);
      else onClose();
    };
    document.body.classList.add("menu-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose, qrOpen]);

  if (!open) return null;

  const viewTitle = view === "about" ? t.drawer.about : view === "contact" ? t.drawer.contact : t.drawer.title;

  return (
    <div className="drawer-layer">
      <button className="drawer-backdrop" type="button" onClick={onClose} aria-label={t.close} />
      <aside className="index-drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
        <header className="drawer-header">
          <div className="drawer-heading">
            {view !== "home" ? (
              <button className="drawer-back" type="button" onClick={() => setView("home")} aria-label={t.drawer.back}>
                <ArrowLeft weight="light" aria-hidden="true" />
              </button>
            ) : null}
            <div>
              <span>{t.drawer.eyebrow}</span>
              <h2 id="drawer-title">{viewTitle}</h2>
            </div>
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

        <div className="drawer-scroll" ref={drawerScrollRef}>
          {view === "home" ? (
            <>
              <p className="drawer-summary">{t.drawer.summary}</p>

              <section className="drawer-live-projects" aria-labelledby="drawer-live-projects-title">
                <header>
                  <span id="drawer-live-projects-title">{t.drawer.liveProjects}</span>
                  <span>{String(digitalProjects.length).padStart(2, "0")} / {t.digital.live}</span>
                </header>
                <div>
                  {digitalProjects.map((project, index) => (
                    <a href={project.href} target="_blank" rel="noreferrer" key={project.id}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span><strong>{project.title}</strong><small>{project.type}</small></span>
                      <ArrowUpRight weight="light" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </section>

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
                <button type="button" onClick={() => setView("about")}>
                  <Info weight="light" aria-hidden="true" />
                  <span><strong>{t.drawer.about}</strong><small>{t.drawer.aboutNote}</small></span>
                  <ArrowRight weight="light" aria-hidden="true" />
                </button>
                <button type="button" onClick={() => setView("contact")}>
                  <EnvelopeSimple weight="light" aria-hidden="true" />
                  <span><strong>{t.drawer.contact}</strong><small>{t.drawer.contactNote}</small></span>
                  <ArrowRight weight="light" aria-hidden="true" />
                </button>
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
            </>
          ) : null}

          {view === "about" ? (
            <section className="drawer-detail" aria-labelledby="drawer-about-title">
              <p className="drawer-detail-kicker">{t.drawer.aboutKicker}</p>
              <h3 id="drawer-about-title">{t.drawer.aboutTitle}</h3>
              <div className="drawer-detail-copy">
                {t.drawer.aboutBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <dl className="drawer-detail-facts">
                {t.drawer.aboutFacts.map(([term, description]) => <div key={term}><dt>{term}</dt><dd>{description}</dd></div>)}
              </dl>
            </section>
          ) : null}

          {view === "contact" ? (
            <section className="drawer-detail drawer-contact" aria-labelledby="drawer-contact-title">
              <p className="drawer-detail-kicker">{t.drawer.contactKicker}</p>
              <h3 id="drawer-contact-title">{t.drawer.contactTitle}</h3>
              <p className="drawer-contact-intro">{t.drawer.contactBody}</p>
              <div className="drawer-contact-list">
                {contacts.map(([label, value, href]) => (
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} key={label}>
                    <span>{label}</span><strong>{value}</strong><ArrowUpRight weight="light" aria-hidden="true" />
                  </a>
                ))}
                <button type="button" onClick={() => setQrOpen(true)}>
                  <span>{t.drawer.wechatChannels}</span><strong>{t.drawer.viewQr}</strong><QrCode weight="light" aria-hidden="true" />
                </button>
              </div>
            </section>
          ) : null}
        </div>

        {qrOpen ? (
          <div className="drawer-qr-modal" role="dialog" aria-modal="true" aria-labelledby="drawer-qr-title">
            <button className="drawer-qr-backdrop" type="button" onClick={() => setQrOpen(false)} aria-label={t.drawer.closeQr} />
            <figure>
              <button type="button" onClick={() => setQrOpen(false)} aria-label={t.drawer.closeQr}><X weight="light" aria-hidden="true" /></button>
              <img src="assets/video-channel.jpg" alt={t.drawer.qrTitle} />
              <figcaption><strong id="drawer-qr-title">{t.drawer.qrTitle}</strong><span>{t.drawer.qrNote}</span></figcaption>
            </figure>
          </div>
        ) : null}
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

function DigitalExperiences({ language }) {
  const t = translations[language];
  const projects = buildDigitalProjects(t);

  return (
    <section className="case-section section-shell digital-section" id="digital" aria-labelledby="digital-title">
      <div className="section-kicker"><span>02</span><span>{t.digital.label} / {String(projects.length).padStart(2, "0")} {t.digital.liveCount}</span></div>
      <div className="digital-intro">
        <h2 id="digital-title">{t.digital.title}</h2>
        <p>{t.digital.body}</p>
      </div>
      <div className="digital-project-grid">
        {projects.map((project, index) => (
          <article className="digital-project-card" data-project={project.id} key={project.id}>
            <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${t.digital.open}: ${project.title}`}>
              <div className="digital-project-visual">
                <img src={project.image} alt={project.alt} />
                <span>{t.digital.live}</span>
              </div>
              <div className="digital-project-copy">
                <div className="digital-project-meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{project.type}</span>
                  <span>2026</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.body}</p>
                <div className="digital-project-footer">
                  <span>{project.note}</span>
                  <strong>{t.digital.open}<ArrowUpRight weight="light" aria-hidden="true" /></strong>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function SceneGallery({ images, t, onOpen }) {
  const railRef = useRef(null);
  const moveRail = (direction) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * rail.clientWidth * .78, behavior: "smooth" });
  };

  return (
    <section className="case-section scene-section" id="scenes" aria-labelledby="scenes-title">
      <div className="scene-header section-shell">
        <div className="section-kicker"><span>01</span><span>{t.label} / {String(images.length).padStart(2, "0")} {t.count}</span></div>
        <div className="scene-intro">
          <h2 id="scenes-title">{t.title}</h2>
          <div>
            <p>{t.body}</p>
            <div className="scene-controls" aria-label={t.browse}>
              <button type="button" onClick={() => moveRail(-1)} aria-label={t.previousRail}><ArrowLeft weight="light" aria-hidden="true" /></button>
              <button type="button" onClick={() => moveRail(1)} aria-label={t.nextRail}><ArrowRight weight="light" aria-hidden="true" /></button>
            </div>
          </div>
        </div>
      </div>
      <div className="scene-rail" ref={railRef} aria-label={t.browse}>
        {images.map((image, index) => (
          <figure className="scene-card" key={image.src}>
            <button type="button" onClick={() => onOpen(index)} aria-label={`${t.enlarge}: ${image.title}`}>
              <img src={image.thumb} alt={image.alt} loading="lazy" decoding="async" />
              <span><MagnifyingGlassPlus weight="light" aria-hidden="true" />{t.enlarge}</span>
            </button>
            <figcaption>
              <span>{String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
              <strong>{image.title}</strong>
              <small>{image.description}</small>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function ImageLightbox({ image, index, total, onClose, onPrevious, onNext, t }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrevious();
      if (event.key === "ArrowRight") onNext();
    };
    document.body.classList.add("menu-open");
    window.addEventListener("keydown", onKeyDown);
    closeRef.current?.focus();
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, onPrevious, onNext]);

  return (
    <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={t.enlarge}>
      <button className="lightbox-backdrop" type="button" onClick={onClose} aria-label={t.close} />
      <div className="lightbox-toolbar">
        <span>{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
        <button ref={closeRef} type="button" onClick={onClose} aria-label={t.close}><X weight="light" aria-hidden="true" /></button>
      </div>
      <button className="lightbox-nav is-previous" type="button" onClick={onPrevious} aria-label={t.previous}><CaretLeft weight="light" aria-hidden="true" /></button>
      <figure>
        <img src={image.src} alt={image.alt} />
        <figcaption><span>{image.caption}</span><span>{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span></figcaption>
      </figure>
      <button className="lightbox-nav is-next" type="button" onClick={onNext} aria-label={t.next}><CaretRight weight="light" aria-hidden="true" /></button>
    </div>
  );
}

const brochurePageCache = new Map();

function preloadBrochurePage(src) {
  if (brochurePageCache.has(src)) return brochurePageCache.get(src);
  const pending = new Promise((resolve) => {
    const image = new Image();
    let finished = false;
    const finish = async (loaded) => {
      if (finished) return;
      finished = true;
      if (loaded && typeof image.decode === "function") {
        try { await image.decode(); } catch { /* The loaded bitmap is still safe to display. */ }
      }
      if (!loaded) brochurePageCache.delete(src);
      resolve(loaded);
    };
    image.onload = () => finish(true);
    image.onerror = () => finish(false);
    image.src = src;
    if (image.complete && image.naturalWidth > 0) finish(true);
  });
  brochurePageCache.set(src, pending);
  return pending;
}

function EbookReader({ book, t, onClose }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [compact, setCompact] = useState(false);
  const [turnDirection, setTurnDirection] = useState("forward");
  const [turnTarget, setTurnTarget] = useState(null);
  const [preparingTurn, setPreparingTurn] = useState(false);
  const closeRef = useRef(null);
  const turnRequestRef = useRef(false);
  const pageSrc = (index) => `assets/brochures/${book.slug}/page-${String(index + 1).padStart(2, "0")}.jpg`;
  const visibleEnd = Math.min(pageIndex + (compact || pageIndex === 0 ? 0 : 1), book.pages - 1);
  const isTurning = turnTarget !== null;
  const isBusy = isTurning || preparingTurn;
  const canGoPrevious = pageIndex > 0 && !isBusy;
  const canGoNext = visibleEnd < book.pages - 1 && !isBusy;

  const startTurn = async (target, direction) => {
    if (isBusy || turnRequestRef.current) return;
    turnRequestRef.current = true;
    setTurnDirection(direction);
    setPreparingTurn(true);
    const requiredPages = [target, target + 1]
      .filter((index) => index >= 0 && index < book.pages);
    const loadedPages = await Promise.all(requiredPages.map((index) => preloadBrochurePage(pageSrc(index))));
    setPreparingTurn(false);
    if (loadedPages.some((loaded) => !loaded)) {
      turnRequestRef.current = false;
      return;
    }
    if (compact) {
      setPageIndex(target);
      turnRequestRef.current = false;
      return;
    }
    setTurnTarget(target);
  };

  const goPrevious = () => {
    if (!canGoPrevious) return;
    const target = compact ? pageIndex - 1 : pageIndex <= 1 ? 0 : Math.max(1, pageIndex - 2);
    startTurn(target, "backward");
  };

  const goNext = () => {
    if (!canGoNext) return;
    const target = compact ? pageIndex + 1 : pageIndex === 0 ? 1 : Math.min(book.pages - 1, pageIndex + 2);
    startTurn(target, "forward");
  };

  const finishTurn = () => {
    if (turnTarget === null) return;
    setPageIndex(turnTarget);
    setTurnTarget(null);
    turnRequestRef.current = false;
  };

  useEffect(() => {
    setPageIndex(0);
    setTurnTarget(null);
    setPreparingTurn(false);
    turnRequestRef.current = false;
    closeRef.current?.focus();
  }, [book.slug]);

  useEffect(() => {
    [0, 1, 2, 3]
      .filter((index) => index < book.pages)
      .forEach((index) => preloadBrochurePage(pageSrc(index)));
    const preloadRemaining = () => {
      for (let index = 4; index < book.pages; index += 1) preloadBrochurePage(pageSrc(index));
    };
    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(preloadRemaining, { timeout: 1200 });
      return () => window.cancelIdleCallback(idleId);
    }
    const timerId = window.setTimeout(preloadRemaining, 180);
    return () => window.clearTimeout(timerId);
  }, [book.slug]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 700px)");
    const sync = () => setCompact(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (turnTarget === null) return undefined;
    const fallback = window.setTimeout(finishTurn, 1400);
    return () => window.clearTimeout(fallback);
  }, [turnTarget]);

  useEffect(() => {
    if (compact && turnTarget !== null) finishTurn();
  }, [compact, turnTarget]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" && canGoPrevious) goPrevious();
      if (event.key === "ArrowRight" && canGoNext) goNext();
    };
    document.body.classList.add("menu-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  });

  const renderPageButton = (index, side, onClick, label) => {
    if (index === null || index >= book.pages) return <div className={`ebook-page-slot is-${side} is-empty`} aria-hidden="true" />;
    return (
      <button className={`ebook-page-button is-${side}`} type="button" onClick={onClick} disabled={isBusy} aria-label={label}>
        <img className="ebook-page" src={pageSrc(index)} alt={`${book.name} — ${t.page} ${index + 1}`} decoding="sync" />
      </button>
    );
  };

  const baseLeft = turnTarget === null
    ? (pageIndex === 0 ? null : pageIndex)
    : (turnDirection === "forward" ? (pageIndex === 0 ? null : pageIndex) : (turnTarget === 0 ? null : turnTarget));
  const baseRight = turnTarget === null
    ? (pageIndex === 0 ? 0 : (pageIndex + 1 < book.pages ? pageIndex + 1 : null))
    : (turnDirection === "forward"
      ? (turnTarget + 1 < book.pages ? turnTarget + 1 : null)
      : (pageIndex + 1 < book.pages ? pageIndex + 1 : null));
  const flipFront = isTurning ? (turnDirection === "forward" ? (pageIndex === 0 ? 0 : pageIndex + 1) : pageIndex) : null;
  const flipBack = isTurning ? (turnDirection === "forward" ? turnTarget : (turnTarget === 0 ? 0 : turnTarget + 1)) : null;

  return (
    <div className="ebook-reader" role="dialog" aria-modal="true" aria-labelledby="ebook-title" aria-busy={preparingTurn}>
      <div className="ebook-reader-bar">
        <div><span>{book.eyebrow}</span><strong id="ebook-title">{book.name}</strong></div>
        <div className="ebook-reader-actions">
          <a href={book.pdf} target="_blank" rel="noreferrer">{t.download}<DownloadSimple weight="light" aria-hidden="true" /></a>
          <button ref={closeRef} type="button" onClick={onClose} aria-label={t.close}><X weight="light" aria-hidden="true" /></button>
        </div>
      </div>

      <div className={`ebook-stage ${pageIndex === 0 && !isTurning ? "is-cover" : "is-spread"}`}>
        <button className="ebook-nav is-previous" type="button" onClick={goPrevious} disabled={!canGoPrevious} aria-label={t.previous}><CaretLeft weight="light" aria-hidden="true" /></button>
        {compact ? (
          <div className={`ebook-book is-compact turn-${turnDirection}`} key={`${book.slug}-${pageIndex}-compact`} aria-live="polite">
            {renderPageButton(pageIndex, "single", canGoNext ? goNext : canGoPrevious ? goPrevious : undefined, canGoNext ? t.next : t.previous)}
          </div>
        ) : (
          <div className={`ebook-book is-desktop${isTurning ? " is-turning" : ""}`} aria-live="polite">
            {renderPageButton(baseLeft, "left", canGoPrevious ? goPrevious : undefined, t.previous)}
            {renderPageButton(baseRight, "right", canGoNext ? goNext : undefined, t.next)}
            {isTurning ? (
              <div
                className={`ebook-flip-sheet is-${turnDirection}`}
                onAnimationEnd={(event) => { if (event.target === event.currentTarget) finishTurn(); }}
                aria-hidden="true"
              >
                <div className="ebook-flip-surface">
                  <div className="ebook-flip-face is-front"><img src={pageSrc(flipFront)} alt="" decoding="sync" /></div>
                  <div className="ebook-flip-face is-back"><img src={pageSrc(flipBack)} alt="" decoding="sync" /></div>
                </div>
              </div>
            ) : null}
          </div>
        )}
        <button className="ebook-nav is-next" type="button" onClick={goNext} disabled={!canGoNext} aria-label={t.next}><CaretRight weight="light" aria-hidden="true" /></button>
      </div>

      <div className="ebook-progress">
        <span>{t.page} {pageIndex + 1}{visibleEnd > pageIndex ? `–${visibleEnd + 1}` : ""} {t.of} {book.pages}</span>
        <div><span style={{ width: `${((visibleEnd + 1) / book.pages) * 100}%` }} /></div>
      </div>
    </div>
  );
}

export function App() {
  const [indexOpen, setIndexOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [lightbox, setLightbox] = useState(null);
  const [activeBrochure, setActiveBrochure] = useState(null);
  const bannerRailRef = useRef(null);
  const adRailRef = useRef(null);
  const t = translations[language];
  const brochures = brochureData[language];
  const bannerGroups = bannerCampaignSources.map((source, index) => {
    const caption = t.campaign.bannerCaptions[index];
    const images = ["desktop", "mobile"].map((format) => ({
      src: source[format],
      format,
      formatLabel: t.campaign.bannerFormats[format],
      caption: `${caption} / ${t.campaign.bannerFormats[format]}`,
      alt: language === "en" ? `${caption} ${format} campaign banner for OneLaser` : `OneLaser ${caption}${t.campaign.bannerFormats[format]} Banner 视觉`,
    }));
    return { ...source, caption, images };
  });
  const bannerImages = bannerGroups.flatMap((group) => group.images);
  const adImages = paidAdSources.map((source) => {
    const caption = `${source.product} / ${t.campaign.adTypes[source.type]}`;
    return { ...source, caption, alt: language === "en" ? `${caption} paid ad for OneLaser` : `OneLaser ${caption}广告投放视觉` };
  });
  const sceneImages = sceneImageSources.map((source, index) => ({ ...source, ...t.scenes.items[index], caption: t.scenes.items[index].title }));
  const activeLightboxImages = lightbox?.collection === "scenes" ? sceneImages : lightbox?.collection === "ads" ? adImages : bannerImages;
  const activeLightboxCopy = lightbox?.collection === "scenes" ? t.scenes : t.campaign;

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [language]);

  const toggleLanguage = () => setLanguage((current) => current === "en" ? "zh" : "en");
  const closeLightbox = () => setLightbox(null);
  const showPreviousLightboxImage = () => setLightbox((current) => ({ ...current, index: (current.index - 1 + activeLightboxImages.length) % activeLightboxImages.length }));
  const showNextLightboxImage = () => setLightbox((current) => ({ ...current, index: (current.index + 1) % activeLightboxImages.length }));
  const moveBannerRail = (direction) => {
    const rail = bannerRailRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * rail.clientWidth * .88, behavior: "smooth" });
  };
  const moveAdRail = (direction) => {
    const rail = adRailRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * rail.clientWidth * .82, behavior: "smooth" });
  };

  return (
    <main id="top">
      <IndexOverlay
        open={indexOpen}
        onClose={() => setIndexOpen(false)}
        language={language}
        onLanguageChange={toggleLanguage}
      />
      {lightbox !== null ? (
        <ImageLightbox
          image={activeLightboxImages[lightbox.index]}
          index={lightbox.index}
          total={activeLightboxImages.length}
          onClose={closeLightbox}
          onPrevious={showPreviousLightboxImage}
          onNext={showNextLightboxImage}
          t={activeLightboxCopy}
        />
      ) : null}
      {activeBrochure ? <EbookReader book={activeBrochure} t={t.brochure} onClose={() => setActiveBrochure(null)} /> : null}

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

        <a className="hero-action" href="#digital">
          {t.hero.action} <ArrowDown weight="light" aria-hidden="true" />
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

      <SceneGallery images={sceneImages} t={t.scenes} onOpen={(index) => setLightbox({ collection: "scenes", index })} />

      <DigitalExperiences language={language} />

      <section className="case-section section-shell brochure-section" id="brochure">
        <div className="section-kicker"><span>03</span><span>{t.brochure.label}</span></div>
        <div className="brochure-heading">
          <h2>{t.brochure.title}</h2>
          <p>{t.brochure.body}</p>
        </div>

        <article className="brochure-featured">
          <button className="brochure-cover-button" type="button" onClick={() => setActiveBrochure(brochures[0])} aria-label={`${t.brochure.read}: ${brochures[0].name}`}>
            <img src="assets/brochures/all-in-one/page-01.jpg" alt={language === "en" ? "OneLaser All-in-One master brochure cover" : "OneLaser All-in-One 品牌与产品总画册封面"} />
            <span><MagnifyingGlassPlus weight="light" aria-hidden="true" />{t.brochure.read}</span>
          </button>
          <div className="brochure-featured-copy">
            <p>{t.brochure.featured}</p>
            <h3>{brochures[0].name}</h3>
            <p>{brochures[0].description}</p>
            <dl><div><dt>{language === "en" ? "Format" : "形式"}</dt><dd>{brochures[0].pages} {language === "en" ? "pages" : "页"}</dd></div><div><dt>{language === "en" ? "Edition" : "版本"}</dt><dd>EN / 2026</dd></div></dl>
            <div className="brochure-actions">
              <button type="button" onClick={() => setActiveBrochure(brochures[0])}>{t.brochure.read}<ArrowRight weight="light" aria-hidden="true" /></button>
              <a href={brochures[0].pdf} target="_blank" rel="noreferrer">{t.brochure.download}<DownloadSimple weight="light" aria-hidden="true" /></a>
            </div>
          </div>
        </article>

        <div className="brochure-library-heading"><span>{t.brochure.collection}</span><span>04 {language === "en" ? "volumes" : "册"}</span></div>
        <div className="brochure-library">
          {brochures.slice(1).map((book, index) => (
            <article className="brochure-card" key={book.slug}>
              <button className="brochure-card-cover" type="button" onClick={() => setActiveBrochure(book)} aria-label={`${t.brochure.read}: ${book.name}`}>
                <img src={`assets/brochures/${book.slug}/page-01.jpg`} alt={`${book.name} ${language === "en" ? "brochure cover" : "产品画册封面"}`} />
                <span><MagnifyingGlassPlus weight="light" aria-hidden="true" /></span>
              </button>
              <div className="brochure-card-copy">
                <span>0{index + 1}</span>
                <p>{book.eyebrow}</p>
                <h3>{book.name}</h3>
                <p>{book.description}</p>
                <button type="button" onClick={() => setActiveBrochure(book)}>{t.brochure.read}<ArrowRight weight="light" aria-hidden="true" /></button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section campaign-section" id="campaign">
        <div className="section-shell section-kicker"><span>04</span><span>{t.campaign.label}</span></div>
        <div className="campaign-intro section-shell">
          <h2>{t.campaign.title[0]}<br />{t.campaign.title[1]}</h2>
          <p>{t.campaign.body}</p>
        </div>

        <div className="campaign-subsection campaign-banner-subsection">
          <div className="campaign-subsection-heading section-shell">
            <div><span>01</span><h3>{t.campaign.bannerLabel}</h3></div>
            <p>{t.campaign.bannerBody}</p>
            <div className="campaign-rail-meta">
              <span>{String(bannerGroups.length).padStart(2, "0")} / {t.campaign.campaigns} · {String(bannerImages.length).padStart(2, "0")} / {t.campaign.assets}</span>
              <div className="campaign-rail-controls">
                <button type="button" onClick={() => moveBannerRail(-1)} aria-label={t.campaign.previousBanner}><ArrowLeft weight="light" aria-hidden="true" /></button>
                <button type="button" onClick={() => moveBannerRail(1)} aria-label={t.campaign.nextBanner}><ArrowRight weight="light" aria-hidden="true" /></button>
              </div>
            </div>
          </div>
          <div className="campaign-banner-rail" ref={bannerRailRef} aria-label={t.campaign.bannerLabel}>
            {bannerGroups.map((group, groupIndex) => (
              <article className="campaign-banner-pair" key={group.id}>
                <div className="campaign-banner-pair-heading">
                  <span>{String(groupIndex + 1).padStart(2, "0")} / {String(bannerGroups.length).padStart(2, "0")}</span>
                  <strong>{group.caption}</strong>
                </div>
                <div className="campaign-banner-pair-assets">
                  {group.images.map((image, formatIndex) => {
                    const imageIndex = groupIndex * 2 + formatIndex;
                    return (
                      <figure className={`campaign-banner-asset is-${image.format}`} key={image.src}>
                        <button className="campaign-image-button" type="button" onClick={() => setLightbox({ collection: "banner", index: imageIndex })} aria-label={`${t.campaign.enlarge}: ${image.caption}`}>
                          <img src={image.src} alt={image.alt} loading={groupIndex === 0 ? "eager" : "lazy"} decoding="async" />
                          <span className="campaign-zoom-label"><MagnifyingGlassPlus weight="light" aria-hidden="true" />{t.campaign.enlarge}</span>
                        </button>
                        <figcaption><span>{image.formatLabel}</span><span>{image.format === "desktop" ? "3840 × 1200" : "1500 × 1800"}</span></figcaption>
                      </figure>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="campaign-subsection campaign-ads-subsection">
          <div className="campaign-subsection-heading section-shell">
            <div><span>02</span><h3>{t.campaign.adsLabel}</h3></div>
            <p>{t.campaign.adsBody}</p>
            <div className="campaign-rail-meta">
              <span>{String(adImages.length).padStart(2, "0")} / {t.campaign.assets}</span>
              <div className="campaign-rail-controls">
                <button type="button" onClick={() => moveAdRail(-1)} aria-label={t.campaign.previousRail}><ArrowLeft weight="light" aria-hidden="true" /></button>
                <button type="button" onClick={() => moveAdRail(1)} aria-label={t.campaign.nextRail}><ArrowRight weight="light" aria-hidden="true" /></button>
              </div>
            </div>
          </div>
          <div className="campaign-ad-rail" ref={adRailRef}>
            {adImages.map((image, index) => (
              <figure key={image.src}>
                <button className="campaign-image-button" type="button" onClick={() => setLightbox({ collection: "ads", index })} aria-label={`${t.campaign.enlarge}: ${image.caption}`}>
                  <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
                  <span className="campaign-zoom-label"><MagnifyingGlassPlus weight="light" aria-hidden="true" />{t.campaign.enlarge}</span>
                </button>
                <figcaption><span>{image.caption}</span><span>{String(index + 1).padStart(2, "0")} / {String(adImages.length).padStart(2, "0")}</span></figcaption>
              </figure>
            ))}
          </div>
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
