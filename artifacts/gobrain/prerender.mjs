/**
 * Static HTML prerender script for gobrain artifact.
 * Build order: vite build (client) → vite build --ssr (server) → this script.
 *
 * For each public route this script:
 *   1. Calls the SSR render() function to get full React-rendered HTML body.
 *   2. Injects route-specific <head> metadata (title, description, OG, canonical).
 *   3. Writes dist/public/<path>/index.html.
 *
 * Social bots, AI crawlers, and search engines that do not execute JS receive
 * real page content + correct metadata in the initial HTTP response.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_PUBLIC = path.resolve(__dirname, "dist/public");
const DIST_SERVER = path.resolve(__dirname, "dist/server");
const BASE = "https://gobrain.pl";
const OG_IMAGE = `${BASE}/opengraph.jpg`;

// ─── Browser globals required by React components during SSR ─────────────────

const matchMediaStub = () => ({
  matches: false,
  media: "",
  onchange: null,
  addEventListener: () => {},
  removeEventListener: () => {},
  addListener: () => {},
  removeListener: () => {},
  dispatchEvent: () => true,
});

const domElementStub = () => ({
  style: new Proxy({}, { get: () => "", set: () => true }),
  classList: { add: () => {}, remove: () => {}, toggle: () => {}, contains: () => false, replace: () => {} },
  setAttribute: () => {},
  getAttribute: () => null,
  removeAttribute: () => {},
  appendChild: (c) => c,
  insertBefore: (c) => c,
  removeChild: () => {},
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => true,
  dataset: {},
  children: [],
  childNodes: [],
  nodeType: 1,
  querySelectorAll: () => [],
  querySelector: () => null,
  closest: () => null,
  matches: () => false,
  getBoundingClientRect: () => ({ top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0, x: 0, y: 0, toJSON: () => ({}) }),
  tagName: "DIV",
  nodeName: "DIV",
  innerHTML: "",
  textContent: "",
});

const windowStub = {
  matchMedia: matchMediaStub,
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => true,
  innerWidth: 1280,
  innerHeight: 768,
  outerWidth: 1280,
  outerHeight: 768,
  scrollY: 0,
  scrollX: 0,
  pageXOffset: 0,
  pageYOffset: 0,
  scroll: () => {},
  scrollTo: () => {},
  scrollBy: () => {},
  devicePixelRatio: 1,
  requestAnimationFrame: (cb) => setTimeout(cb, 16),
  cancelAnimationFrame: (id) => clearTimeout(id),
  requestIdleCallback: (cb) => setTimeout(() => cb({ timeRemaining: () => 50, didTimeout: false }), 0),
  cancelIdleCallback: (id) => clearTimeout(id),
  performance: { now: () => Date.now(), measure: () => {}, clearMeasures: () => {}, mark: () => {}, clearMarks: () => {}, getEntriesByName: () => [], getEntriesByType: () => [] },
  location: { pathname: "/", search: "", hash: "", origin: BASE, href: BASE, protocol: "https:", host: "gobrain.pl", hostname: "gobrain.pl", port: "" },
  history: { pushState: () => {}, replaceState: () => {}, back: () => {}, forward: () => {}, go: () => {}, state: null, length: 1 },
  navigator: { userAgent: "node-prerender", language: "pl", languages: ["pl", "en"], onLine: true, platform: "Win32" },
  getComputedStyle: () => new Proxy({}, { get: (_, prop) => prop === "getPropertyValue" ? () => "" : "" }),
  CSS: { supports: () => false },
  CustomEvent: class extends (global.Event ?? class { constructor(t) { this.type = t; } }) {
    constructor(type, opts = {}) { super(type); this.detail = opts.detail ?? null; }
  },
  clearTimeout: global.clearTimeout,
  setTimeout: global.setTimeout,
  clearInterval: global.clearInterval,
  setInterval: global.setInterval,
  fetch: global.fetch ?? (() => Promise.reject(new Error("fetch not available during SSR"))),
  structuredClone: global.structuredClone ?? ((v) => JSON.parse(JSON.stringify(v))),
  ResizeObserver: class { observe() {} unobserve() {} disconnect() {} },
  IntersectionObserver: class { constructor(cb, opts) { this._cb = cb; } observe() {} unobserve() {} disconnect() { } takeRecords() { return []; } },
  MutationObserver: class { observe() {} disconnect() {} takeRecords() { return []; } },
  URL: global.URL,
  URLSearchParams: global.URLSearchParams,
  AbortController: global.AbortController,
  AbortSignal: global.AbortSignal,
  Promise: global.Promise,
  console: global.console,
  queueMicrotask: global.queueMicrotask,
  crypto: global.crypto ?? { getRandomValues: (a) => a, randomUUID: () => Math.random().toString(36).slice(2) },
};
windowStub.window = windowStub;
windowStub.self = windowStub;
windowStub.top = windowStub;
windowStub.parent = windowStub;

const documentStub = {
  ...domElementStub(),
  createElement: (_tag) => domElementStub(),
  createElementNS: (_ns, _tag) => domElementStub(),
  createTextNode: (text) => ({ textContent: text, nodeValue: text, nodeType: 3 }),
  createComment: (text) => ({ data: text, nodeType: 8 }),
  createDocumentFragment: () => ({ ...domElementStub(), nodeType: 11 }),
  documentElement: { ...domElementStub(), tagName: "HTML", lang: "pl", dir: "ltr" },
  head: { ...domElementStub(), tagName: "HEAD", children: [] },
  body: { ...domElementStub(), tagName: "BODY" },
  querySelector: () => null,
  querySelectorAll: () => [],
  getElementById: () => null,
  getElementsByTagName: () => ({ length: 0, item: () => null, [Symbol.iterator]: function*() {} }),
  getElementsByClassName: () => ({ length: 0 }),
  addEventListener: () => {},
  removeEventListener: () => {},
  dispatchEvent: () => true,
  createEvent: () => ({ initEvent: () => {}, type: "" }),
  readyState: "complete",
  visibilityState: "visible",
  hidden: false,
  title: "",
  cookie: "",
  URL: BASE + "/",
  baseURI: BASE + "/",
  nodeType: 9,
};
windowStub.document = documentStub;

function defineGlobal(name, value) {
  try {
    const desc = Object.getOwnPropertyDescriptor(global, name);
    if (desc && !desc.writable && !desc.set) {
      Object.defineProperty(global, name, { value, configurable: true, writable: true });
    } else {
      global[name] = value;
    }
  } catch (_) {
    try { Object.defineProperty(global, name, { value, configurable: true, writable: true }); } catch (__) { /* ignore */ }
  }
}

defineGlobal("window", windowStub);
defineGlobal("document", documentStub);
defineGlobal("navigator", windowStub.navigator);
defineGlobal("location", windowStub.location);
defineGlobal("history", windowStub.history);
defineGlobal("requestAnimationFrame", windowStub.requestAnimationFrame);
defineGlobal("cancelAnimationFrame", windowStub.cancelAnimationFrame);
defineGlobal("requestIdleCallback", windowStub.requestIdleCallback);
defineGlobal("cancelIdleCallback", windowStub.cancelIdleCallback);
defineGlobal("IntersectionObserver", windowStub.IntersectionObserver);
defineGlobal("ResizeObserver", windowStub.ResizeObserver);
defineGlobal("MutationObserver", windowStub.MutationObserver);
defineGlobal("matchMedia", windowStub.matchMedia);
defineGlobal("getComputedStyle", windowStub.getComputedStyle);
defineGlobal("CSS", windowStub.CSS);
defineGlobal("localStorage", { getItem: () => null, setItem: () => {}, removeItem: () => {}, clear: () => {}, length: 0, key: () => null });
defineGlobal("sessionStorage", { getItem: () => null, setItem: () => {}, removeItem: () => {}, clear: () => {}, length: 0, key: () => null });
defineGlobal("CustomEvent", windowStub.CustomEvent);
defineGlobal("screen", { width: 1280, height: 768, availWidth: 1280, availHeight: 768 });

// ─── Route definitions ────────────────────────────────────────────────────────

const BLOG_SLUGS = [
  { slug: "prasa-why-story-2021", title: "Przeczytajcie o nas w prasie #2", excerpt: "Nasza metoda oraz historia rozwoju GoBrain została opisana w czasopiśmie Why Story nr 1/2021." },
  { slug: "prasa-artykul-naukowy", title: "Przeczytajcie o nas w prasie #1", excerpt: "Metoda ITS GoBrain obok innych treningów słuchowych takich jak Tomatis, Johansen jest opisana w artykule naukowym o centralnych zaburzeniach przetwarzania słuchowego." },
  { slug: "czym-sa-zaburzenia-capd", title: "Czym są zaburzenia przetwarzania słuchowego na poziomie centralnym (CAPD)?", excerpt: "Czy dziecko, które słyszy najdrobniejszy szmer może mieć zaburzenia przetwarzania słuchowego? Z różnych przyczyn proces nauki słuchania nie przebiega prawidłowo — mózg skupia się na nieistotnych bodźcach." },
  { slug: "capd-dobrze-slyszy-zle-przetwarza", title: "Centralne zaburzenia przetwarzania słuchowego (CAPD) — dobrze słyszy, ale źle przetwarza dźwięki", excerpt: "Ale jak to? — zapyta większość z nas. Zazwyczaj, gdy mamy podejrzenia problemów ze słuchem, od razu myślimy, że coś niedobrego dzieje się z uchem. Tymczasem CAPD to problem zupełnie innej natury." },
  { slug: "szkola-podstawowa-z-gobrain", title: "Przez szkołę podstawową z GoBrain!", excerpt: "Wiek, kiedy twoje dziecko idzie do szkoły jest bardzo wyjątkowym momentem w jego życiu. Wtedy właśnie zaczyna się uczyć wielu nowych rzeczy, nie tylko tych szkolnych." },
  { slug: "pomysly-na-zabawy-z-dzieckiem", title: "4 pomysły na rozwijające zabawy z dzieckiem", excerpt: "W życiu dziecka zabawa odgrywa bardzo ważną rolę. Dzięki niej uczymy się relacji z rówieśnikami, nowych pojęć czy mechanizmów. Warto zadbać, aby zabawy dzieci niosły ze sobą wartości edukacyjne." },
  { slug: "dysleksja-i-gobrain", title: "Twoje dziecko ma dysleksję? Trening GoBrain to świetne rozwiązanie!", excerpt: "Czy wiesz, że aż 15% dzieci w Polsce ma dysleksję? Czym jest dysleksja i jak można sobie z nią poradzić? Trening słuchowy ITS GoBrain może być skutecznym wsparciem w terapii dysleksji." },
  { slug: "przedszkole-z-gobrain", title: "Do przedszkola z GoBrain", excerpt: "Gdy dziecko wchodzi w wiek przedszkolny, każdy z rodziców zastanawia się, w jaki sposób przygotować je na nowe wyzwania związane z tym okresem. Rozwój maluchów w wieku 4–6 lat to kluczowy etap." },
  { slug: "czym-jest-adhd", title: "Czym jest ADHD?", excerpt: "ADHD to nadpobudliwość psychoruchowa z deficytem uwagi i impulsywnością. Jeśli wszystkie trzy objawy występują u dziecka przez co najmniej kilka miesięcy niezależnie od środowiska, może to wskazywać na ADHD." },
];

const PROGRAM_SLUGS = [
  { slug: "zabawy-logopedyczne-01", title: "Zabawy logopedyczne 01", subtitle: "Zestaw gier logopedycznych — ćwiczenia wspierające rozwój mowy, pamięci wzrokowej i słuchowej." },
  { slug: "gloski-ciszace-01", title: "Zabawy logopedyczne. Głoski ciszące — zestaw I", subtitle: "Ćwiczenia głosek si, zi, ci, dzi — wsparcie terapii mowy dla dzieci od 3 lat." },
  { slug: "gloski-ciszace-02", title: "Zabawy logopedyczne. Zestaw 02", subtitle: "Zestaw gier logopedycznych rozwijających pamięć i koncentrację — dla dzieci od 3 lat." },
  { slug: "gloski-kr-gr", title: "Zabawy logopedyczne. Głoski KR i GR", subtitle: "Ćwiczenia głosek zwartych tylnojęzykowych i głoski drżącej — wsparcie terapii logopedycznej." },
  { slug: "gloski-pr-br", title: "Zabawy logopedyczne. Głoski PR i BR", subtitle: "Ćwiczenia głosek zwartych P, B z głoską drżącą R — dla dzieci od 3 lat." },
  { slug: "gloski-tr-dr", title: "Zabawy logopedyczne. Głoski TR i DR", subtitle: "Nowoczesna aplikacja wspierająca prawidłową wymowę głosek T, D i R." },
  { slug: "gloski-miekkie", title: "Zabawy logopedyczne. Głoski miękkie", subtitle: "Ćwiczenia głosek SI, CI, ZI, DZI oraz S i SZ — dla dzieci od 3 lat." },
  { slug: "szereg-szumiacy-sz", title: "Zabawy logopedyczne. Szereg szumiący — głoska SZ", subtitle: "Ćwiczenia szeregu szumiącego SZA, SZE, SZO, SZU, SZY na etapie sylab, wyrazów i zdań." },
  { slug: "szereg-szumiacy-cz", title: "Zabawy logopedyczne. Szereg szumiący — głoska CZ", subtitle: "Ćwiczenia szeregu szumiącego CZA, CZE, CZO, CZU, CZY na etapie sylab, wyrazów i zdań." },
  { slug: "szereg-szumiacy-rz", title: "Zabawy logopedyczne. Szereg szumiący — głoska RZ/Ż", subtitle: "Ćwiczenia szeregu szumiącego RZA, RZE, RZO, RZU, RZY na etapie sylab, wyrazów i zdań." },
  { slug: "literki-a-o-e-u-i-y", title: "Zabawy z literkami. Samogłoski A O E U I Y", subtitle: "Nauka alfabetu z ilustracjami — gry i zabawy literowe dla dzieci od 3 do 7 lat." },
  { slug: "literki-t-d", title: "Zabawy z literkami. Spółgłoski T i D", subtitle: "Nauka spółgłosek przedniojęzykowo-przyzębowych T i D — gry literowe dla dzieci od 3 do 7 lat." },
  { slug: "literki-p-b", title: "Zabawy z literkami. Spółgłoski P i B", subtitle: "Nauka spółgłosek P i B — gry i zabawy literowe dla dzieci od 3 do 7 lat." },
  { slug: "literki-m-n", title: "Zabawy z literkami. Literki M i N", subtitle: "Nauka spółgłosek M i N — gry i zabawy literowe dla dzieci od 3 do 7 lat." },
  { slug: "literki-k-g-h", title: "Zabawy z literkami. Literki K, G, H", subtitle: "Nauka spółgłosek K, G i H — gry i zabawy literowe dla dzieci od 3 do 7 lat." },
  { slug: "literki-l-r-j", title: "Zabawy z literkami. Literki L, R, J", subtitle: "Nauka spółgłosek L, R i J — gry i zabawy literowe dla dzieci od 3 do 7 lat." },
  { slug: "literki-w-f", title: "Zabawy z literkami. Literki W i F", subtitle: "Nauka spółgłosek W i F — gry i zabawy literowe dla dzieci od 3 do 7 lat." },
  { slug: "literki-c-s-z", title: "Zabawy z literkami. Literki C, S, Z", subtitle: "Nauka spółgłosek C, S i Z — gry i zabawy literowe dla dzieci od 3 do 7 lat." },
  { slug: "kreatywny-brzdac-01", title: "Kreatywny brzdąc — zestaw I", subtitle: "Zestaw gier logicznych rozwijających pamięć i koncentrację — dla dzieci od 3 do 7 lat." },
  { slug: "kreatywny-brzdac-02", title: "Kreatywny brzdąc — zestaw II", subtitle: "Gry logiczne z nauką kolorów, zegara i klasyfikacji — dla dzieci od 3 do 7 lat." },
  { slug: "pamiec-i-koncentracja-01", title: "Pamięć i koncentracja — zestaw I", subtitle: "Gry rozwijające pamięć sekwencyjną, logiczne myślenie i koncentrację — od 3 lat." },
  { slug: "mala-matematyka-01", title: "Mała matematyka — zestaw I", subtitle: "Nauka dodawania, odejmowania i mnożenia w formie zabawy — dla dzieci od 5 lat." },
];

const STATIC_ROUTES = [
  { path: "/", title: "ITS GoBrain — Trening sluchowy dla dzieci | gobrain.pl", description: "GoBrain to innowacyjny trening sluchowy dla dzieci od 5 lat. Poprawia koncentracje, pamiec sluchowa i mowe. Efekty widoczne po 4-8 tygodniach. Wyprobuj!" },
  { path: "/its", title: "Metoda ITS GoBrain — jak dziala trening sluchowy", description: "Poznaj metode ITS GoBrain — innowacyjny trening sluchowy oparty na badaniach naukowych. Dowiedz sie, jak poprawia koncentracje, pamiec i mowe dzieci." },
  { path: "/its-school", title: "ITS GoBrain dla szkol — trening sluchowy w edukacji", description: "Wdraz ITS GoBrain w swojej szkole. Program treningu sluchowego wspierajacy uczniow z trudnosciami w koncentracji, czytaniu i pisaniu." },
  { path: "/strefa-terapeuty", title: "Strefa Terapeuty — ITS GoBrain dla specjalistow", description: "ITS GoBrain w gabinecie terapeutycznym. Narzedzie dla logopedow, pedagogow i terapeutow SI. Panel zarzadzania, raporty postepu, wsparcie merytoryczne." },
  { path: "/szkolenia-i-webinary", title: "Szkolenia i webinary — ITS GoBrain", description: "Szkolenia i webinary dla terapeutow i pedagogow z zakresu treningu sluchowego ITS GoBrain. Zapisz sie na najblizsze wydarzenie." },
  { path: "/blog", title: "Blog — artykuly o treningu sluchowym i rozwoju dzieci", description: "Artykuly eksperckie o treningu sluchowym, koncentracji i rozwoju dzieci. Wiedza oparta na badaniach naukowych od tworcow ITS GoBrain." },
  { path: "/faq", title: "FAQ — najczestsze pytania o ITS GoBrain", description: "Odpowiedzi na najczestsze pytania dotyczace treningu sluchowego ITS GoBrain. Jak dziala, dla kogo jest, ile trwa i jakie daje efekty." },
  { path: "/pomoc", title: "Pomoc i wsparcie techniczne — ITS GoBrain", description: "Centrum pomocy ITS GoBrain. Instrukcje instalacji, FAQ i wsparcie techniczne dla uzytkownikow oprogramowania GoBrain." },
  { path: "/sklep", title: "Sklep — kup licencje ITS GoBrain", description: "Kup licencje ITS GoBrain dla domu, gabinetu terapeutycznego lub szkoly. Trening sluchowy dla dzieci od 5 lat. Bezpieczna platnosc online." },
  { path: "/programy-edukacyjne", title: "Programy edukacyjne GoBrain — gry logopedyczne i edukacyjne", description: "Odkryj programy edukacyjne GoBrain: zabawy logopedyczne, nauka liter, cwiczenia koncentracji i kreatywnosci dla dzieci od 3 lat." },
  { path: "/karta-mowy", title: "Karta Mowy — narzedzie diagnostyczne GoBrain", description: "Karta Mowy GoBrain — sprawdz poziom rozwoju mowy swojego dziecka za pomoca bezplatnego narzedzia diagnostycznego." },
  { path: "/darmowe-webinary", title: "Darmowe webinary — ITS GoBrain", description: "Bezplatne webinary o treningu sluchowym, CAPD i terapii mowy. Dolacz do ekspertow GoBrain i dowiedz sie, jak pomoc swojemu dziecku." },
  { path: "/ulotka", title: "Ulotka ITS GoBrain — informacje dla rodziców i terapeutów", description: "Pobierz ulotkę ITS GoBrain. Krótkie informacje o metodzie treningu słuchowego dla rodziców i specjalistów.", noindex: true },
  { path: "/polityka-prywatnosci", title: "Polityka prywatnosci — ITS GoBrain", description: "Polityka prywatnosci serwisu gobrain.pl. Jakie dane zbieramy, jak je przetwarzamy i jakie masz prawa jako uzytkownik." },
  { path: "/regulamin", title: "Regulamin — ITS GoBrain", description: "Regulamin serwisu gobrain.pl i oprogramowania ITS GoBrain. Warunki korzystania z licencji, zamawiania i zwrotow." },
  { path: "/regulamin-aplikacji", title: "Regulamin korzystania z aplikacji — ITS GoBrain", description: "Zasady korzystania z oprogramowania ITS GoBrain. Wymagania techniczne, zasady logowania, ochrona danych i prawa uzytkownika." },
];

const ALL_ROUTES = [
  ...STATIC_ROUTES,
  ...BLOG_SLUGS.map(({ slug, title, excerpt }) => ({
    path: `/blog/${slug}`,
    title: `${title} — Blog GoBrain | gobrain.pl`,
    description: excerpt,
  })),
  ...PROGRAM_SLUGS.map(({ slug, title, subtitle }) => ({
    path: `/programy-edukacyjne/${slug}`,
    title: `${title} — Program edukacyjny GoBrain | gobrain.pl`,
    description: subtitle,
  })),
];

// ─── HTML manipulation helpers ────────────────────────────────────────────────

function buildHeadBlock(title, description, routePath, noindex = false) {
  const url = `${BASE}${routePath}`;
  const robotsTag = noindex ? `\n    <meta name="robots" content="noindex, nofollow" />` : "";
  return `<title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />${robotsTag}
    <link rel="canonical" href="${url}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${OG_IMAGE}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${OG_IMAGE}" />`;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Strip route-specific meta tags that Helmet will replace.
 * Deliberately keeps: charset, viewport, og:image:alt, favicon, preconnect,
 * fonts, and the global Organization+WebSite JSON-LD from the template.
 */
function stripRouteMeta(html) {
  return html
    .replace(/<title>[^<]*<\/title>/g, "")
    .replace(/<meta name="description"[^>]*>/g, "")
    .replace(/<meta name="robots"[^>]*>/g, "")
    .replace(/<link rel="canonical"[^>]*>/g, "")
    .replace(/<meta property="og:type"[^>]*>/g, "")
    .replace(/<meta property="og:locale"[^>]*>/g, "")
    .replace(/<meta property="og:site_name"[^>]*>/g, "")
    .replace(/<meta property="og:title"[^>]*>/g, "")
    .replace(/<meta property="og:description"[^>]*>/g, "")
    .replace(/<meta property="og:url"[^>]*>/g, "")
    .replace(/<meta property="og:image(?::[^"]*)?"\s[^>]*>/g, "")
    .replace(/<meta name="twitter:card"[^>]*>/g, "")
    .replace(/<meta name="twitter:title"[^>]*>/g, "")
    .replace(/<meta name="twitter:description"[^>]*>/g, "")
    .replace(/<meta name="twitter:image"[^>]*>/g, "");
}

function writeRouteHtml(routePath, staticTitle, staticDescription, bodyHtml, helmetHead, templateHtml, noindex = false) {
  let html = stripRouteMeta(templateHtml);

  if (helmetHead) {
    // Authoritative: use Helmet SSR head (title, meta, canonical, robots, OG, Twitter, JSON-LD)
    html = html.replace("</head>", `  ${helmetHead}\n  </head>`);
  } else {
    // Fallback: static metadata when SSR head is unavailable
    const head = buildHeadBlock(staticTitle, staticDescription, routePath, noindex);
    html = html.replace("</head>", `  ${head}\n  </head>`);
  }

  if (bodyHtml) {
    html = html.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);
  }

  const segments = routePath === "/" ? [] : routePath.split("/").filter(Boolean);
  const dir = segments.length === 0 ? DIST_PUBLIC : path.join(DIST_PUBLIC, ...segments);
  fs.mkdirSync(dir, { recursive: true });
  const file = segments.length === 0
    ? path.join(DIST_PUBLIC, "index.html")
    : path.join(dir, "index.html");
  fs.writeFileSync(file, html, "utf8");
  return file;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const templatePath = path.join(DIST_PUBLIC, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error(`ERROR: ${templatePath} not found — run 'vite build' first.`);
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, "utf8");

  const ssrEntryPath = path.join(DIST_SERVER, "entry-server.js");
  let renderFn = null;

  if (fs.existsSync(ssrEntryPath)) {
    try {
      const mod = await import(ssrEntryPath);
      renderFn = mod.render;
      console.log("SSR bundle loaded — full body prerendering enabled.");
    } catch (err) {
      console.warn("WARNING: Failed to load SSR bundle:", err.message);
      console.warn("Falling back to head-only injection.");
    }
  } else {
    console.warn("WARNING: SSR bundle not found at", ssrEntryPath);
    console.warn("Falling back to head-only injection.");
  }

  console.log(`Prerendering ${ALL_ROUTES.length} routes...`);
  let ok = 0;
  let fallback = 0;

  for (const { path: routePath, title, description, noindex } of ALL_ROUTES) {
    let bodyHtml = null;
    let helmetHead = "";

    if (renderFn) {
      try {
        // Update location stub so useLocation() returns the correct pathname
        global.window.location = { ...global.window.location, pathname: routePath, href: BASE + routePath };
        global.location = global.window.location;
        const result = renderFn(routePath);
        bodyHtml = result.html ?? result;
        helmetHead = result.head ?? result.scripts ?? "";
      } catch (err) {
        console.warn(`  WARN: SSR render failed for ${routePath}:`, err.message.split("\n")[0]);
        fallback++;
        bodyHtml = null;
      }
    }

    const file = writeRouteHtml(routePath, title, description, bodyHtml, helmetHead, template, noindex);
    const mode = bodyHtml ? "full" : "head";
    if (!bodyHtml) fallback++;
    else ok++;
    console.log(`  [${mode}] ${file}`);
  }

  console.log(`\nPrerender done: ${ok} full SSR, ${fallback} head-only.`);
}

main().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
