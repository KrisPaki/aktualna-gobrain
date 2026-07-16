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
  { slug: "prasa-why-story-2021", title: "Przeczytajcie o nas w prasie #2", excerpt: "Nasza metoda oraz historia rozwoju GoBrain opisana w czasopismie Why Story nr 1/2021." },
  { slug: "prasa-artykul-naukowy", title: "Przeczytajcie o nas w prasie #1", excerpt: "Metoda ITS GoBrain opisana w artykule naukowym o centralnych zaburzeniach przetwarzania sluchowego." },
  { slug: "czym-sa-zaburzenia-capd", title: "Czym sa zaburzenia CAPD?", excerpt: "Poznaj centralne zaburzenia przetwarzania sluchowego (CAPD) — objawy, przyczyny i mozliwosci terapii." },
  { slug: "capd-dobrze-slyszy-zle-przetwarza", title: "Dobrze slyszy, ale zle przetwarza — CAPD w praktyce", excerpt: "Dziecko dobrze slyszy, ale nie rozumie polecen? Poznaj CAPD i jak pomaga trening sluchowy GoBrain." },
  { slug: "szkola-podstawowa-z-gobrain", title: "GoBrain w szkole podstawowej", excerpt: "Jak ITS GoBrain wspiera uczniow szkoly podstawowej w koncentracji, czytaniu i pisaniu." },
  { slug: "pomysly-na-zabawy-z-dzieckiem", title: "Pomysly na zabawy z dzieckiem wspierajace sluch", excerpt: "Praktyczne zabawy rozwijajace uwage sluchowa i koncentracje u dzieci w domu." },
  { slug: "dysleksja-i-gobrain", title: "Dysleksja a trening sluchowy GoBrain", excerpt: "Czy ITS GoBrain moze pomoc dzieciom z dysleksja? Sprawdz, jak trening sluchowy wspiera nauke czytania." },
  { slug: "przedszkole-z-gobrain", title: "GoBrain w przedszkolu", excerpt: "Jak ITS GoBrain wspiera rozwoj mowy i koncentracji u dzieci w wieku przedszkolnym." },
  { slug: "czym-jest-adhd", title: "Czym jest ADHD i jak moze pomoc trening sluchowy?", excerpt: "ADHD a przetwarzanie sluchowe — zwiazki, objawy i rola treningu GoBrain w terapii." },
];

const PROGRAM_SLUGS = [
  { slug: "zabawy-logopedyczne-01", title: "Zabawy logopedyczne 01", subtitle: "Gry logopedyczne wspierajace mowe, pamiec wzrokowa i sluchowa." },
  { slug: "gloski-ciszace-01", title: "Gloski ciszace — zestaw I", subtitle: "Cwiczenia glosek si, zi, ci, dzi dla dzieci od 3 lat." },
  { slug: "gloski-ciszace-02", title: "Gloski ciszace — zestaw II", subtitle: "Dalsze cwiczenia glosek ciszacych dla dzieci." },
  { slug: "gloski-kr-gr", title: "Gloski kr, gr", subtitle: "Cwiczenia wymowy glosek kr i gr — program logopedyczny GoBrain." },
  { slug: "gloski-pr-br", title: "Gloski pr, br", subtitle: "Cwiczenia wymowy glosek pr i br — program logopedyczny GoBrain." },
  { slug: "gloski-tr-dr", title: "Gloski tr, dr", subtitle: "Cwiczenia wymowy glosek tr i dr — program logopedyczny GoBrain." },
  { slug: "gloski-miekkie", title: "Gloski miekkie", subtitle: "Cwiczenia glosek miekkch — program logopedyczny GoBrain dla dzieci." },
  { slug: "szereg-szumiacy-sz", title: "Szereg szumiacy — sz", subtitle: "Cwiczenia gloski sz — program logopedyczny GoBrain." },
  { slug: "szereg-szumiacy-cz", title: "Szereg szumiacy — cz", subtitle: "Cwiczenia gloski cz — program logopedyczny GoBrain." },
  { slug: "szereg-szumiacy-rz", title: "Szereg szumiacy — rz", subtitle: "Cwiczenia gloski rz — program logopedyczny GoBrain." },
  { slug: "literki-a-o-e-u-i-y", title: "Literki a, o, e, u, i, y", subtitle: "Nauka samoglosek — program edukacyjny GoBrain dla dzieci." },
  { slug: "literki-t-d", title: "Literki t, d", subtitle: "Nauka liter t i d — program edukacyjny GoBrain." },
  { slug: "literki-p-b", title: "Literki p, b", subtitle: "Nauka liter p i b — program edukacyjny GoBrain." },
  { slug: "literki-m-n", title: "Literki m, n", subtitle: "Nauka liter m i n — program edukacyjny GoBrain." },
  { slug: "literki-k-g-h", title: "Literki k, g, h", subtitle: "Nauka liter k, g i h — program edukacyjny GoBrain." },
  { slug: "literki-l-r-j", title: "Literki l, r, j", subtitle: "Nauka liter l, r i j — program edukacyjny GoBrain." },
  { slug: "literki-w-f", title: "Literki w, f", subtitle: "Nauka liter w i f — program edukacyjny GoBrain." },
  { slug: "literki-c-s-z", title: "Literki c, s, z", subtitle: "Nauka liter c, s i z — program edukacyjny GoBrain." },
  { slug: "kreatywny-brzdac-01", title: "Kreatywny Brzdac 01", subtitle: "Zabawy rozwijajace kreatywnosc i wyobraznie — program GoBrain." },
  { slug: "kreatywny-brzdac-02", title: "Kreatywny Brzdac 02", subtitle: "Kontynuacja zabaw kreatywnych dla dzieci — program GoBrain." },
  { slug: "pamiec-i-koncentracja-01", title: "Pamiec i koncentracja 01", subtitle: "Cwiczenia pamieci i koncentracji dla dzieci — program GoBrain." },
  { slug: "mala-matematyka-01", title: "Mala matematyka 01", subtitle: "Zabawy matematyczne dla najmniejszych — program edukacyjny GoBrain." },
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
  { path: "/ulotka", title: "Ulotka ITS GoBrain — informacje dla rodzicow i terapeutow", description: "Pobierz ulotke ITS GoBrain. Krotkie informacje o metodzie treningu sluchowego dla rodzicow i specjalistow." },
  { path: "/polityka-prywatnosci", title: "Polityka prywatnosci — ITS GoBrain", description: "Polityka prywatnosci serwisu gobrain.pl. Jakie dane zbieramy, jak je przetwarzamy i jakie masz prawa jako uzytkownik." },
  { path: "/regulamin", title: "Regulamin — ITS GoBrain", description: "Regulamin serwisu gobrain.pl i oprogramowania ITS GoBrain. Warunki korzystania z licencji, zamawiania i zwrotow." },
  { path: "/regulamin-aplikacji", title: "Regulamin korzystania z aplikacji — ITS GoBrain", description: "Zasady korzystania z oprogramowania ITS GoBrain. Wymagania techniczne, zasady logowania, ochrona danych i prawa uzytkownika." },
];

const ALL_ROUTES = [
  ...STATIC_ROUTES,
  ...BLOG_SLUGS.map(({ slug, title, excerpt }) => ({
    path: `/blog/${slug}`,
    title: `${title} — Blog GoBrain`,
    description: excerpt,
  })),
  ...PROGRAM_SLUGS.map(({ slug, title, subtitle }) => ({
    path: `/programy-edukacyjne/${slug}`,
    title: `${title} — Program edukacyjny GoBrain`,
    description: subtitle,
  })),
];

// ─── HTML manipulation helpers ────────────────────────────────────────────────

function buildHeadBlock(title, description, routePath) {
  const url = `${BASE}${routePath}`;
  return `<title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
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

function stripExistingMeta(html) {
  return html
    .replace(/<title>[^<]*<\/title>/g, "")
    .replace(/<meta name="description"[^>]*>/g, "")
    .replace(/<link rel="canonical"[^>]*>/g, "")
    .replace(/<meta property="og:title"[^>]*>/g, "")
    .replace(/<meta property="og:description"[^>]*>/g, "")
    .replace(/<meta property="og:url"[^>]*>/g, "")
    .replace(/<meta name="twitter:title"[^>]*>/g, "")
    .replace(/<meta name="twitter:description"[^>]*>/g, "")
    .replace(/<meta name="twitter:image"[^>]*>/g, "");
}

function writeRouteHtml(routePath, title, description, bodyHtml, helmetScripts, templateHtml) {
  const head = buildHeadBlock(title, description, routePath);
  let html = stripExistingMeta(templateHtml);
  html = html.replace("</head>", `  ${head}\n  </head>`);
  if (helmetScripts) {
    html = html.replace("</head>", `  ${helmetScripts}\n  </head>`);
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

  for (const { path: routePath, title, description } of ALL_ROUTES) {
    let bodyHtml = null;
    let helmetScripts = "";

    if (renderFn) {
      try {
        // Update location stub so useLocation() returns the correct pathname
        global.window.location = { ...global.window.location, pathname: routePath, href: BASE + routePath };
        global.location = global.window.location;
        const result = renderFn(routePath);
        bodyHtml = result.html ?? result;
        helmetScripts = result.scripts ?? "";
      } catch (err) {
        console.warn(`  WARN: SSR render failed for ${routePath}:`, err.message.split("\n")[0]);
        fallback++;
        bodyHtml = null;
      }
    }

    const file = writeRouteHtml(routePath, title, description, bodyHtml, helmetScripts, template);
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
