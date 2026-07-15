/**
 * Static HTML prerender script for gobrain artifact.
 * Runs after `vite build` — reads dist/public/index.html and
 * writes route-specific copies with correct <head> metadata injected.
 * Social bots and AI crawlers receive unique metadata in the initial response.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "dist/public");
const BASE = "https://gobrain.pl";
const OG_IMAGE = `${BASE}/og-image.jpg`;

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
  {
    path: "/",
    title: "ITS GoBrain — Trening sluchowy dla dzieci | gobrain.pl",
    description: "GoBrain to innowacyjny trening sluchowy dla dzieci od 5 lat. Poprawia koncentracje, pamiec sluchowa i mowe. Efekty widoczne po 4-8 tygodniach. Wyprobuj!",
  },
  {
    path: "/its",
    title: "Metoda ITS GoBrain — jak dziala trening sluchowy",
    description: "Poznaj metode ITS GoBrain — innowacyjny trening sluchowy oparty na badaniach naukowych. Dowiedz sie, jak poprawia koncentracje, pamiec i mowe dzieci.",
  },
  {
    path: "/its-school",
    title: "ITS GoBrain dla szkol — trening sluchowy w edukacji",
    description: "Wdraz ITS GoBrain w swojej szkole. Program treningu sluchowego wspierajacy uczniow z trudnosciami w koncentracji, czytaniu i pisaniu.",
  },
  {
    path: "/strefa-terapeuty",
    title: "Strefa Terapeuty — ITS GoBrain dla specjalistow",
    description: "ITS GoBrain w gabinecie terapeutycznym. Narzedzie dla logopedow, pedagogow i terapeutow SI. Panel zarzadzania, raporty postepu, wsparcie merytoryczne.",
  },
  {
    path: "/szkolenia-i-webinary",
    title: "Szkolenia i webinary — ITS GoBrain",
    description: "Szkolenia i webinary dla terapeutow i pedagogow z zakresu treningu sluchowego ITS GoBrain. Zapisz sie na najblizsze wydarzenie.",
  },
  {
    path: "/blog",
    title: "Blog — artykuly o treningu sluchowym i rozwoju dzieci",
    description: "Artykuly eksperckie o treningu sluchowym, koncentracji i rozwoju dzieci. Wiedza oparta na badaniach naukowych od tworcow ITS GoBrain.",
  },
  {
    path: "/faq",
    title: "FAQ — najczestsze pytania o ITS GoBrain",
    description: "Odpowiedzi na najczestsze pytania dotyczace treningu sluchowego ITS GoBrain. Jak dziala, dla kogo jest, ile trwa i jakie daje efekty.",
  },
  {
    path: "/pomoc",
    title: "Pomoc i wsparcie techniczne — ITS GoBrain",
    description: "Centrum pomocy ITS GoBrain. Instrukcje instalacji, FAQ i wsparcie techniczne dla uzytkownikow oprogramowania GoBrain.",
  },
  {
    path: "/sklep",
    title: "Sklep — kup licencje ITS GoBrain",
    description: "Kup licencje ITS GoBrain dla domu, gabinetu terapeutycznego lub szkoly. Trening sluchowy dla dzieci od 5 lat. Bezpieczna platnosc online.",
  },
  {
    path: "/programy-edukacyjne",
    title: "Programy edukacyjne GoBrain — gry logopedyczne i edukacyjne",
    description: "Odkryj programy edukacyjne GoBrain: zabawy logopedyczne, nauka liter, cwiczenia koncentracji i kreatywnosci dla dzieci od 3 lat.",
  },
  {
    path: "/karta-mowy",
    title: "Karta Mowy — narzedzie diagnostyczne GoBrain",
    description: "Karta Mowy GoBrain — sprawdz poziom rozwoju mowy swojego dziecka za pomoca bezplatnego narzedzia diagnostycznego.",
  },
  {
    path: "/darmowe-webinary",
    title: "Darmowe webinary — ITS GoBrain",
    description: "Bezplatne webinary o treningu sluchowym, CAPD i terapii mowy. Dolacz do ekspertow GoBrain i dowiedz sie, jak pomoc swojemu dziecku.",
  },
  {
    path: "/ulotka",
    title: "Ulotka ITS GoBrain — informacje dla rodzicow i terapeutow",
    description: "Pobierz ulotke ITS GoBrain. Krotkie informacje o metodzie treningu sluchowego dla rodzicow i specjalistow.",
  },
];

function buildHeadBlock(title, description, canonical) {
  const url = `${BASE}${canonical}`;
  return `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${OG_IMAGE}" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${OG_IMAGE}" />`.trim();
}

function stripExistingMeta(html) {
  return html
    .replace(/<title>[^<]*<\/title>/g, "")
    .replace(/<meta name="description"[^>]*>/g, "")
    .replace(/<link rel="canonical"[^>]*>/g, "")
    .replace(/<meta property="og:title"[^>]*>/g, "")
    .replace(/<meta property="og:description"[^>]*>/g, "")
    .replace(/<meta property="og:url"[^>]*>/g, "")
    .replace(/<meta property="og:image"[^>]*/g, (m) => (m.includes("width") || m.includes("height") || m.includes("alt") || m.includes("type") ? m : ""))
    .replace(/<meta name="twitter:title"[^>]*>/g, "")
    .replace(/<meta name="twitter:description"[^>]*>/g, "")
    .replace(/<meta name="twitter:image"[^>]*>/g, "");
}

function writeRouteHtml(routePath, title, description, templateHtml) {
  const head = buildHeadBlock(title, description, routePath);
  const stripped = stripExistingMeta(templateHtml);
  const html = stripped.replace("</head>", `  ${head}\n  </head>`);

  const dir = routePath === "/" ? DIST : path.join(DIST, ...routePath.split("/").filter(Boolean));
  fs.mkdirSync(dir, { recursive: true });
  const file = routePath === "/" ? path.join(DIST, "index.html") : path.join(dir, "index.html");
  fs.writeFileSync(file, html, "utf8");
  console.log(`  wrote ${file}`);
}

function main() {
  const templatePath = path.join(DIST, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error(`ERROR: ${templatePath} not found — run 'vite build' first.`);
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, "utf8");

  console.log("Prerendering routes...");

  for (const { path: p, title, description } of STATIC_ROUTES) {
    writeRouteHtml(p, title, description, template);
  }

  for (const { slug, title, excerpt } of BLOG_SLUGS) {
    const fullTitle = `${title} — Blog GoBrain`;
    writeRouteHtml(`/blog/${slug}`, fullTitle, excerpt, template);
  }

  for (const { slug, title, subtitle } of PROGRAM_SLUGS) {
    const fullTitle = `${title} — Program edukacyjny GoBrain`;
    writeRouteHtml(`/programy-edukacyjne/${slug}`, fullTitle, subtitle, template);
  }

  console.log("Prerender done.");
}

main();
