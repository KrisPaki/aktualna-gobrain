import { motion, type Variants } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  School,
  Users,
  ShieldCheck,
  BarChart3,
  Clock,
  ChevronRight,
  Mail,
  Phone,
  GraduationCap,
  Stethoscope,
  Building2,
  Heart,
  Sparkles,
  Brain,
  Volume2,
  BookOpen,
  Ear,
  TrendingUp,
  Activity,
  FileText,
  FileDown,
  SlidersHorizontal,
  Puzzle,
  BadgeCheck,
  Zap,
  Laptop,
  Printer,
  Target,
  Check,
  Gift,
  Calculator,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import childrenClassroomImg from "@/assets/children-classroom.webp";
import itsSchoolBoyTabletImg from "@/assets/its-school-boy-tablet.webp";
import therapistDashboardImg from "@/assets/therapist-dashboard.webp";
import childTabletGame1Img from "@/assets/child-tablet-game1.jpg";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ItsSchoolPage() {
  return (
    <div className="min-h-screen bg-background font-sans pt-16">
      <SEO
        title="ITS GoBrain dla szkół – trening słuchowy w edukacji"
        description="Wdraż ITS GoBrain w swojej szkole. Program treningu słuchowego wspierający uczniów z trudnościami w koncentracji, czytaniu i pisaniu."
        canonical="/its-school"
      />
      <Helmet>
        <link
          rel="preload"
          as="image"
          href="/img/children-classroom-1280w.webp"
          imageSrcSet="/img/children-classroom-640w.webp 640w, /img/children-classroom-1280w.webp 1280w"
          imageSizes="(max-width: 1024px) 100vw, 50vw"
        />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "ITS GoBrain Pre & School",
          "url": "https://gobrain.pl/its-school",
          "description": "Program treningu sluchowego dla szkol i przedszkoli — bez limitu uzytkownikow. Wspiera uczniow z trudnosciami w koncentracji, czytaniu i pisaniu.",
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Windows, macOS, ChromeOS, Android, iOS",
          "inLanguage": "pl",
          "availableOnDevice": "Desktop, Mobile, Tablet",
          "offers": {
            "@type": "Offer",
            "name": "Licencja szkolna ITS GoBrain Pre & School",
            "url": "https://gobrain.pl/its-school",
            "price": "1499",
            "priceCurrency": "PLN",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "1499",
              "priceCurrency": "PLN",
              "unitText": "rok"
            },
            "availability": "https://schema.org/InStock",
            "seller": { "@id": "https://gobrain.pl/#organization" }
          },
          "publisher": { "@id": "https://gobrain.pl/#organization" },
          "brand": { "@id": "https://gobrain.pl/#organization" },
          "audience": {
            "@type": "Audience",
            "audienceType": "Szkoly podstawowe, przedszkola, poradnie psychologiczno-pedagogiczne"
          }
        })}</script>
      </Helmet>

      {/* ─── FULL-WIDTH HERO: DUŻE ZDJĘCIE W TLE (JAK NA INNYCH STRONACH) ─── */}
      <section className="relative min-h-[620px] lg:min-h-[720px] flex items-center overflow-hidden bg-slate-950 text-white">
        {/* DUŻE ZDJĘCIE W TLE */}
        <div className="absolute inset-0 z-0">
          <img
            src={childrenClassroomImg}
            srcSet="/img/children-classroom-640w.webp 640w, /img/children-classroom-1280w.webp 1280w"
            sizes="100vw"
            alt="Dzieci w klasie szkolnej korzystają z programu ITS GoBrain Pre & School — trening słuchowy w placówce"
            className="w-full h-full object-cover object-center lg:object-[center_35%] scale-105"
            fetchPriority="high"
            decoding="async"
          />
          {/* Wielowarstwowy gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-teal-950/45 lg:from-slate-950/95 lg:via-slate-950/75 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Tekst Hero */}
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={staggerContainer}
              className="lg:col-span-7"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
                <School className="w-4 h-4 text-teal-300" />
                Dla gabinetów, szkół, przedszkoli i poradni • Bez limitu dzieci
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-4">
                ITS GoBrain{" "}
                <span className="whitespace-nowrap bg-gradient-to-r from-teal-400 via-emerald-300 to-teal-200 bg-clip-text text-transparent">
                  Pre & School
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg sm:text-xl font-semibold text-teal-200 mb-4 leading-snug">
                Program, który wychodzi poza stary schemat terapii.
              </motion.p>

              <motion.p variants={fadeInUp} className="text-base text-slate-300 mb-8 leading-relaxed max-w-xl">
                Połączenie neuroaktywnej stymulacji słuchowej, bogatego pakietu programów edukacyjno-logopedycznych oraz gotowych pomocy i scenariuszy do druku (PDF). Zbudowany, by angażować dziecko i przynosić natychmiastowe rezultaty.
              </motion.p>

              {/* Cena i CTA */}
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 mb-8">
                <Button size="lg" className="h-14 px-8 text-base font-bold bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white shadow-xl shadow-teal-900/40 border-0" asChild>
                  <a href="https://automater.pl/rest/order-viewer/buy/979412" target="_blank" rel="noopener noreferrer">
                    Zamów licencję — 1499 zł
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base font-medium border-white/25 text-white hover:bg-white/10 bg-black/20 backdrop-blur-sm" asChild>
                  <Link to="/strefa-terapeuty">
                    Strefa terapeuty
                  </Link>
                </Button>
              </motion.div>

              {/* Pigułka korzyści */}
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-2.5 text-sm text-slate-200">
                <span className="font-extrabold text-teal-300 text-base">1499 PLN / rok</span>
                <span className="text-slate-400">•</span>
                <span>Nielimitowana liczba uczniów</span>
                <span className="text-slate-400">•</span>
                <span className="text-emerald-300 font-semibold">Faktura VAT</span>
              </motion.div>
            </motion.div>

            {/* Prawa kolumna Hero: Szklane kafelki z kluczowymi atutami */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-3.5"
            >
              {[
                {
                  icon: Brain,
                  title: "Neuroaktywny trening adaptacyjny",
                  desc: "Dopasowuje się do poziomu dziecka — idealny tam, gdzie inne metody są za trudne.",
                  color: "text-teal-300 bg-teal-500/20 border-teal-400/30",
                },
                {
                  icon: Puzzle,
                  title: "Programy edukacyjne & logopedyczne",
                  desc: "Słuch fonemowy, nauka liter, płynne czytanie, ćwiczenia pamięci i koncentracji.",
                  color: "text-blue-300 bg-blue-500/20 border-blue-400/30",
                },
                {
                  icon: FileDown,
                  title: "Pomoce PDF & scenariusze zajęć",
                  desc: "Gotowe materiały do druku budujące owocną relację dziecko-terapeuta.",
                  color: "text-emerald-300 bg-emerald-500/20 border-emerald-400/30",
                },
                {
                  icon: Users,
                  title: "Gabinet, grupa i cała klasa",
                  desc: "Praca 1:1 na tablecie lub zespołowa na tablicy interaktywnej — bez limitu dzieci.",
                  color: "text-purple-300 bg-purple-500/20 border-purple-400/30",
                },
              ].map((card, i) => (
                <div 
                  key={i} 
                  className="bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 flex items-start gap-4 hover:border-teal-400/40 transition-colors shadow-xl"
                >
                  <div className={`w-10 h-10 rounded-xl ${card.color} flex items-center justify-center shrink-0 border mt-0.5`}>
                    <card.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base leading-snug mb-1">{card.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── SUPER ZALETA: ROZWINIĘCIE PROGRAMÓW EDUKACYJNYCH I LOGOPEDYCZNYCH ─── */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background via-teal-50/20 to-background border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200 shadow-sm">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span>Największy atut platformy dla terapeutów i nauczycieli</span>
            </div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
              Zintegrowane Programy <span className="text-teal-600">Edukacyjne & Logopedyczne</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Oprócz treningu słuchowego otrzymujesz gotowe, interaktywne moduły do natychmiastowego wykorzystania na zajęciach logopedycznych, pedagogicznych i rewalidacyjnych. Koniec ze żmudnym szukaniem materiałów.
            </motion.p>
          </motion.div>

          {/* Pełny pakiet 6 modułów w nowoczesnej siatce 3x2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {/* Moduł 1: Zabawy z Głoskami & Słuch Fonemowy */}
            <motion.div variants={fadeInUp} className="rounded-3xl bg-card border-2 border-teal-100 p-7 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center shadow-sm">
                    <Volume2 className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                    Słuch & Artykulacja
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-foreground mb-2.5">1. Zabawy z Głoskami & Słuch Fonemowy</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-5">
                  Precyzyjny trening słuchu fonematycznego, uczący mózg dziecka błyskawicznego rozróżniania najdrobniejszych niuansów brzmieniowych mowy.
                </p>
                <div className="space-y-2.5 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/60 mb-5 text-xs">
                  <p className="font-bold text-slate-800 uppercase tracking-wider text-[10px]">Zakres ćwiczeń na zajęciach:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Różnicowanie głosek opozycyjnych dźwięczne/bezdźwięczne (b-p, d-t, g-k, w-f)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Odróżnianie szeregów dentalizowanych (szumiące, syczące, ciszące: sz-s, cz-c, ż-z)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>Analiza i synteza głoskowa w nagłosie, śródgłosie i wygłosie</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-3.5 border-t border-border flex items-center gap-2 text-xs font-bold text-teal-700">
                <Target className="w-4 h-4 shrink-0" />
                <span>Korzyść: Autokontrola artykulacji, skracająca terapię o miesiące.</span>
              </div>
            </motion.div>

            {/* Moduł 2: Zabawy z Literkami */}
            <motion.div variants={fadeInUp} className="rounded-3xl bg-card border-2 border-blue-100 p-7 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shadow-sm">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                    Gotowość Szkolna • Pisanie
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-foreground mb-2.5">2. Zabawy z Literkami</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-5">
                  Multisensoryczny moduł wprowadzający dzieci w świat alfabetu, pisania i wzorców literowych poprzez obraz, dźwięk i zadania logiczne.
                </p>
                <div className="space-y-2.5 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/60 mb-5 text-xs">
                  <p className="font-bold text-slate-800 uppercase tracking-wider text-[10px]">Zakres ćwiczeń na zajęciach:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Trójstronne kojarzenie: kształt litery ↔ brzmienie fonetyczne ↔ ilustracja desygnatu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Eliminacja mylenia liter o podobnym kształcie przestrzennym (b-d, p-g, m-w, n-u)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Gry dopasowywania liter w wyrazach i przygotowanie motoryczne do pisania</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-3.5 border-t border-border flex items-center gap-2 text-xs font-bold text-blue-700">
                <Target className="w-4 h-4 shrink-0" />
                <span>Korzyść: Nauka liter naturalnie przez zabawę, bez zniechęcenia i wkuwania.</span>
              </div>
            </motion.div>

            {/* Moduł 3: Wsparcie Nauki Czytania */}
            <motion.div variants={fadeInUp} className="rounded-3xl bg-card border-2 border-emerald-100 p-7 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-sm">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    Płynność i Zrozumienie
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-foreground mb-2.5">3. Wsparcie Nauki Czytania</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-5">
                  Innowacyjne wsparcie procesu czytania oparte na synchronizacji wzrokowo-słuchowej. Skutecznie likwiduje problem „zgadywania” słów.
                </p>
                <div className="space-y-2.5 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/60 mb-5 text-xs">
                  <p className="font-bold text-slate-800 uppercase tracking-wider text-[10px]">Zakres ćwiczeń na zajęciach:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Czytanie sylabowe i synteza wyrazowa w 4 poziomach trudności</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Czytanie ze zrozumieniem — dopasowywanie zdań do sytuacji</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Skuteczna profilaktyka dysleksji i likwidacja nawyku „zgadywania” słów</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-3.5 border-t border-border flex items-center gap-2 text-xs font-bold text-emerald-700">
                <Target className="w-4 h-4 shrink-0" />
                <span>Korzyść: Płynne czytanie z radością i natychmiastowy skok ocen.</span>
              </div>
            </motion.div>

            {/* Moduł 4: Zabawy na Pamięć & Koncentrację */}
            <motion.div variants={fadeInUp} className="rounded-3xl bg-card border-2 border-purple-100 p-7 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center shadow-sm">
                    <Brain className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase px-3 py-1 rounded-full bg-purple-50 text-purple-800 border border-purple-200">
                    Funkcje Poznawcze
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-foreground mb-2.5">4. Zabawy na Pamięć & Koncentrację</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-5">
                  Intensywny trening pamięci operacyjnej i selektywności uwagi. Uczy skupienia na głosie prowadzącego mimo rozproszeń.
                </p>
                <div className="space-y-2.5 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/60 mb-5 text-xs">
                  <p className="font-bold text-slate-800 uppercase tracking-wider text-[10px]">Zakres ćwiczeń na zajęciach:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Pamięć sekwencyjna słuchowa i wzrokowa — ciągi słów, liczb i poleceń</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Uważne słuchanie w szumie akustycznym (trening w warunkach szkolnych)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Wydłużanie czasu aktywnego skupienia (kluczowe przy ADHD, CAPD i SPE)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-3.5 border-t border-border flex items-center gap-2 text-xs font-bold text-purple-700">
                <Target className="w-4 h-4 shrink-0" />
                <span>Korzyść: Dziecko słyszy, rozumie i wykonuje zadanie za 1. razem.</span>
              </div>
            </motion.div>

            {/* Moduł 5: Kreatywne BRZDĄC */}
            <motion.div variants={fadeInUp} className="rounded-3xl bg-card border-2 border-amber-100 p-7 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shadow-sm">
                    <Puzzle className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                    Najmłodsi & Przedszkole
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-foreground mb-2.5">5. Kreatywne BRZDĄC — Dla Najmłodszych</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-5">
                  Specjalnie zaprojektowane gry edukacyjne dla przedszkolaków i dzieci o specjalnych potrzebach edukacyjnych (SPE).
                </p>
                <div className="space-y-2.5 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/60 mb-5 text-xs">
                  <p className="font-bold text-slate-800 uppercase tracking-wider text-[10px]">Zakres ćwiczeń na zajęciach:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>Przyjazne gry edukacyjne dla przedszkolaków (od 4 r.ż.) i dzieci SPE</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>Percepcja słuchowo-wzrokowa, orientacja w przestrzeni i koordynacja oko-ręka na tabletach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>Bezstresowa formuła z natychmiastowym feedbackiem dźwiękowym, budująca entuzjazm</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-3.5 border-t border-border flex items-center gap-2 text-xs font-bold text-amber-700">
                <Target className="w-4 h-4 shrink-0" />
                <span>Korzyść: Idealne tam, gdzie tradycyjne ćwiczenia są za trudne — 100% motywacji.</span>
              </div>
            </motion.div>

            {/* Moduł 6: Zabawy z Małą Matematyką & Logika */}
            <motion.div variants={fadeInUp} className="rounded-3xl bg-card border-2 border-rose-100 p-7 shadow-sm hover:shadow-xl hover:border-rose-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center shadow-sm">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase px-3 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200">
                    Myślenie Logiczne & Liczby
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-foreground mb-2.5">6. Zabawy z Małą Matematyką & Logika</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-5">
                  Rozwój myślenia przyczynowo-skutkowego, intuicji matematycznej, orientacji przestrzennej oraz pojęć liczbowych.
                </p>
                <div className="space-y-2.5 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/60 mb-5 text-xs">
                  <p className="font-bold text-slate-800 uppercase tracking-wider text-[10px]">Zakres ćwiczeń na zajęciach:</p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                      <span>Przeliczanie obiektów i porównywanie liczebności zbiorów (mniej, więcej, tyle samo)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                      <span>Rozpoznawanie sekwencji, wzorców rytmicznych i relacji przestrzennych (lewa/prawa, góra/dół)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                      <span>Budowanie intuicji matematycznej i myślenia przyczynowo-skutkowego bez lęku przed liczbami</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-3.5 border-t border-border flex items-center gap-2 text-xs font-bold text-rose-700">
                <Target className="w-4 h-4 shrink-0" />
                <span>Korzyść: Budowa fundamentów logicznego myślenia bez oporu i stresu.</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Baner: Wychodzi poza stary schemat terapii */}
          <motion.div
            variants={fadeInUp}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-teal-900 via-slate-900 to-emerald-950 text-white shadow-2xl border border-teal-500/30 flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-400/30">
                <Printer className="w-4 h-4" />
                <span>Materiały do druku (PDF) & Gotowe scenariusze</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Program, który wychodzi poza stary schemat terapii
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Stary schemat to dziecko zamknięte sam na sam przed ekranem monitora. <strong className="text-white">ITS GoBrain Pre & School</strong> łączy nowoczesną technologię z bezpośrednią interakcją z terapeutą. Otrzymujesz bazę gotowych kart pracy do wydruku oraz metodyczne scenariusze zajęć, które budują autentyczną, owocną relację dziecko-terapeuta.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-teal-200">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Gotowe karty pracy do druku (PDF)</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Scenariusze zajęć 1:1 i grupowych</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Oszczędność godzin przygotowań</span>
              </div>
            </div>
            <Button size="lg" className="shrink-0 bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold h-14 px-8 text-base shadow-lg shadow-teal-500/30" asChild>
              <a href="https://automater.pl/rest/order-viewer/buy/979412" target="_blank" rel="noopener noreferrer">
                Zainwestuj w licencję (1499 zł)
                <ChevronRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>

        </div>
      </section>

      {/* ─── EFEKTY W JĘZYKU KORZYŚCI: EFEKT WOW (LUKSUSOWY BENTO GRID) ─── */}
      <section className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden">
        {/* Delikatne tła świetlne */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-400/30 backdrop-blur-md">
              <Zap className="w-4 h-4 text-teal-300" />
              <span>Realne rezultaty w codziennej praktyce</span>
            </div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Co zyskuje Twój gabinet, placówka i dziecko?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Rezultaty, które zauważysz od pierwszych tygodni stosowania. Napisane językiem konkretnych korzyści.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Duża karta 1 */}
            <motion.div variants={fadeInUp} className="md:col-span-2 rounded-3xl bg-slate-900/90 border border-teal-500/30 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-teal-400/60 transition-all">
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl group-hover:bg-teal-500/20 transition-all" />
              <div>
                <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 mb-4 inline-block">
                  Efektywność i oszczędność czasu
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-snug">
                  Skrócenie czasu tradycyjnej terapii nawet o połowę
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                  Przetwarzanie słuchowe to fundament mowy i nauki. Gdy mózg dziecka zaczyna bezbłędnie filtrować dźwięki, tradycyjne ćwiczenia logopedyczne i pedagogiczne przynoszą spektakularne efekty znacznie szybciej. Zamiast rocznego impasu — widoczne postępy z miesiąca na miesiąc.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-teal-200">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                  <span>Szybsze wywoływanie głosek</span>
                </div>
                <div className="flex items-center gap-2 text-teal-200">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                  <span>Mniej frustracji u rodzica</span>
                </div>
              </div>
            </motion.div>

            {/* Karta 2 */}
            <motion.div variants={fadeInUp} className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8 flex flex-col justify-between shadow-2xl hover:border-teal-500/40 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-300 flex items-center justify-center mb-6 border border-amber-500/30">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                  100% zaangażowania: Koniec z oporem dziecka
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Dzieci nie chcą nudnych ćwiczeń przy biurku. W ITS GoBrain ćwiczą z uśmiechem, zdobywając punkty w grach. Sami dopytują, kiedy kolejne zajęcia!
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 text-xs font-semibold text-amber-300">
                Zero płaczu i oporów na sesjach terapeutycznych.
              </div>
            </motion.div>

            {/* Karta 3 */}
            <motion.div variants={fadeInUp} className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8 flex flex-col justify-between shadow-2xl hover:border-teal-500/40 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-300 flex items-center justify-center mb-6 border border-blue-500/30">
                  <Ear className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                  Uważne słuchanie w hałasie szkolnym
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Uczeń przestaje „wyłączać się” w głośnej klasie. Zaczyna natychmiast wyłapywać polecenia nauczyciela i nie gubi wątku podczas lekcji.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 text-xs font-semibold text-blue-300">
                Koniec powtarzania poleceń po 5 razy.
              </div>
            </motion.div>

            {/* Duża karta 4 */}
            <motion.div variants={fadeInUp} className="md:col-span-2 rounded-3xl bg-gradient-to-br from-slate-900 to-teal-950/80 border border-teal-500/30 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-teal-400/60 transition-all">
              <div>
                <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 mb-4 inline-block">
                  Ratunek dla trudnych przypadków (SPE)
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-snug">
                  Działa tam, gdzie inne treningi okazały się za trudne
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                  Wiele programów stymulacji słuchowej frustruje dzieci z opóźnionym rozwojem mowy (ORM), alalią, spektrum autyzmu czy CAPD ze względu na zbyt wygórowany próg wejścia. ITS GoBrain adaptacyjnie dopasowuje trudność, dając dziecku poczucie natychmiastowego sukcesu i odbudowując wiarę we własne możliwości.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800 text-xs text-slate-200">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-400" /> CAPD / APD</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-400" /> Autyzm / Zespół Aspergera</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-400" /> Ryzyko dysleksji & ADHD</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── CO ZAWIERA LICENCJA PRE & SCHOOL (3 KONTENERY W TYM BONUS TERAPEUTA 799 ZŁ) ─── */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold uppercase tracking-wider mb-3">
              <Gift className="w-4 h-4 text-teal-600" />
              <span>Wartość bonusu (799 zł) równa cenie całej licencji!</span>
            </div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              Co dokładnie zawiera licencja <span className="whitespace-nowrap text-teal-600">Pre & School</span>?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-base text-muted-foreground max-w-2xl mx-auto">
              Wszystko, czego potrzebuje nowoczesny gabinet, przedszkole lub szkoła — włącznie z pełną licencją terapeutyczną w pakiecie.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Kontener 1: Narzędzia interaktywne */}
            <div className="bg-card rounded-3xl p-7 border border-border shadow-sm flex flex-col justify-between hover:border-teal-300 transition-all">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center">
                    <Laptop className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Platforma Cyfrowa</h3>
                    <p className="text-xs text-muted-foreground">Dostęp w chmurze 24/7</p>
                  </div>
                </div>
                <ul className="space-y-3.5 text-xs sm:text-sm text-foreground/90">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Trening stymulacji słuchowej</strong> z adaptacyjnym poziomem trudności</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Dostęp do programów edukacyjnych:</strong> słuch fonemowy, litery, czytanie, pamięć i uwaga</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Panel diagnostyczny:</strong> monitoring wyników i historia sesji podopiecznych</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Raporty do druku:</strong> automatyczne podsumowania dla rodzica i dyrekcji</span>
                  </li>
                </ul>
              </div>
              <div className="mt-7 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span>Komputery, tablety, tablice</span>
                <span className="font-bold text-teal-700">Dostęp 24/7</span>
              </div>
            </div>

            {/* Kontener 2: Pomoce do druku i warunki licencyjne */}
            <div className="bg-card rounded-3xl p-7 border border-border shadow-sm flex flex-col justify-between hover:border-emerald-300 transition-all">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Printer className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Materiały do Druku</h3>
                    <p className="text-xs text-muted-foreground">Gwarancja ekonomiczna dla placówki</p>
                  </div>
                </div>
                <ul className="space-y-3.5 text-xs sm:text-sm text-foreground/90">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Baza pomocy terapeutycznych (PDF):</strong> karty pracy do pobrania i druku</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Gotowe scenariusze zajęć:</strong> konspekty metodyczne dla logopedów i nauczycieli</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Bez limitu dzieci:</strong> nielimitowana liczba uczniów na 1 rocznej licencji</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Brak limitów dobowych:</strong> trenuj z dowolną liczbą dzieci w grafiku</span>
                  </li>
                </ul>
              </div>
              <div className="mt-7 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span>Faktura VAT automatycznie</span>
                <span className="font-bold text-emerald-700">Licencja placówkowa</span>
              </div>
            </div>

            {/* Kontener 3: BONUS — Produkt Terapeuta (Wartość 799 zł) */}
            <div className="bg-gradient-to-b from-teal-50/80 via-card to-emerald-50/60 rounded-3xl p-7 border-2 border-teal-500 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-teal-600 transition-all">
              {/* Odznaka bonusu */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-teal-600 to-emerald-600 text-white text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-bl-2xl shadow-sm flex items-center gap-1.5">
                <Gift className="w-3.5 h-3.5" />
                <span>Bonus w pakiecie</span>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6 mt-1">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-600 to-emerald-600 text-white flex items-center justify-center shadow-md shadow-teal-600/30">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Produkt Terapeuta</h3>
                    <p className="text-xs font-bold text-teal-700">Wartość regularna: 799 zł</p>
                  </div>
                </div>
                <ul className="space-y-3.5 text-xs sm:text-sm text-foreground/90">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Pełna licencja terapeutyczna:</strong> profesjonalne narzędzie do gabinetu w cenie pakietu</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Diagnoza PreTest & PostTest:</strong> obiektywny pomiar percepcji słuchowej przed i po cyklu</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Nadzór nad treningami w domu:</strong> możliwość zlecania i podglądu ćwiczeń domowych</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Komplet narzędzi Providera:</strong> indywidualne ścieżki i dokumentacja kliniczna</span>
                  </li>
                </ul>
              </div>
              <div className="mt-7 pt-4 border-t border-teal-200 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Wartość: <span className="line-through font-semibold text-slate-400">799 zł</span></span>
                <span className="font-black text-emerald-800 bg-emerald-100 border border-emerald-300 px-2.5 py-1 rounded-lg">W pakiecie: GRATIS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DLA KOGO: PRECYZYJNE GRUPY DOCELOWE (PREMIUM KAFELKI) ─── */}
      <section className="py-20 md:py-28 bg-card/50 border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              <Users className="w-4 h-4 text-teal-600" />
              <span>Dedykowane środowisko dla specjalistów</span>
            </div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
              Dla kogo stworzyliśmy <span className="whitespace-nowrap text-teal-600">Pre & School</span>?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Elastyczna licencja placówkowa zaprojektowana do pracy indywidualnej 1:1, w małych grupach terapeutycznych oraz z całymi klasami.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Stethoscope,
                color: "bg-teal-100 text-teal-700 border-teal-200",
                tag: "Gabinety & Poradnie",
                title: "Gabinety Logopedyczne i Terapeutyczne",
                desc: "Dla logopedów, neurologopedów i terapeutów pedagogicznych. Praca z dziesiątkami pacjentów bez dodatkowych opłat, urozmaicenie ćwiczeń tradycyjnych.",
                bullets: ["Praca 1:1 na tablecie/laptopie", "Generowanie raportów dla rodziców", "Pomoce PDF do stolika"],
              },
              {
                icon: School,
                color: "bg-blue-100 text-blue-700 border-blue-200",
                tag: "Edukacja wczesnoszkolna",
                title: "Szkoły Podstawowe & Świetlice",
                desc: "Zajęcia korekcyjno-kompensacyjne, rewalidacja, wsparcie uczniów ze SPE oraz dynamiczne zajęcia grupowe na tablicach interaktywnych.",
                bullets: ["Praca z całą klasą na tablicy", "Zajęcia wyrównawcze ze SPE", "Lepsza uwaga na lekcjach"],
              },
              {
                icon: GraduationCap,
                color: "bg-purple-100 text-purple-700 border-purple-200",
                tag: "Specjaliści w oświacie",
                title: "Szkolni Logopedzi i Pedagodzy",
                desc: "Kompletne narzędzie metodyczne do diagnozy i codziennej terapii. Dostęp do gotowych scenariuszy zajęć i testów przesiewowych (Pre/PostTest).",
                bullets: ["Gotowe konspekty zajęć", "Oszczędność czasu na przygotowaniach", "Diagnoza przesiewowa"],
              },
              {
                icon: Sparkles,
                color: "bg-amber-100 text-amber-800 border-amber-200",
                tag: "Wczesny start (od 5 lat)",
                title: "Przedszkola & Oddziały Przedszkolne",
                desc: "Wczesna profilaktyka wad wymowy, nauka liter, stymulacja uwagi i percepcji słuchowej w formie angażujących gier i animacji.",
                bullets: ["Nauka liter i alfabetu", "Zapobieganie wadom wymowy", "Forma kolorowej gry"],
              },
              {
                icon: Building2,
                color: "bg-emerald-100 text-emerald-700 border-emerald-200",
                tag: "Terapia specjalistyczna",
                title: "Ośrodki Wczesnej Interwencji & SPE",
                desc: "Dla placówek pracujących z dziećmi z autyzmem, alalią, ORM, niedosłuchem, CAPD i ADHD. Adaptacyjny poziom trudności radzi sobie w najtrudniejszych przypadkach.",
                bullets: ["Niski próg wejścia (bez frustracji)", "Adaptacja do możliwości dziecka", "Stałe monitorowanie postępów"],
              },
              {
                icon: BadgeCheck,
                color: "bg-rose-100 text-rose-700 border-rose-200",
                tag: "Licencja nielimitowana",
                title: "Poradnie Psychologiczno-Pedagogiczne",
                desc: "Wieloaspektowa diagnoza i trening słuchowy dla rejonu. Jedna opłata roczna pokrywa wszystkich specjalistów i pacjentów w placówce.",
                bullets: ["1 licencja = wszyscy specjaliści", "Brak limitów stanowiskowych", "Faktura VAT na placówkę"],
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-card border border-border rounded-3xl p-7 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${item.color} border flex items-center justify-center`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2.5 leading-snug">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{item.desc}</p>
                </div>
                <div className="pt-4 border-t border-border/80 space-y-2">
                  {item.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs font-medium text-foreground/80">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── PROFESJONALNE NARZĘDZIE DLA TERAPEUTÓW (NOWOCZESNY SPLIT FEATURE) ─── */}
      <section className="py-20 md:py-28 bg-background border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Lewa kolumna: Zdjęcie z pływającymi odznakami */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-teal-100">
                <img
                  src={itsSchoolBoyTabletImg}
                  alt="Chłopiec ćwiczący interaktywny trening słuchowy GoBrain na tablecie"
                  className="w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Pływająca odznaka 1 */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-4 sm:right-4 bg-slate-950 text-white rounded-2xl p-4 shadow-2xl border border-teal-500/30 max-w-xs"
              >
                <div className="flex items-center gap-3 mb-1">
                  <Brain className="w-5 h-5 text-teal-400 shrink-0" />
                  <span className="text-xs font-bold text-teal-300 uppercase tracking-wider">Adaptacyjna uwaga</span>
                </div>
                <p className="text-xs text-slate-300 leading-snug">
                  Dźwięk tła dynamicznie dostosowuje się do poprawności odpowiedzi dziecka.
                </p>
              </motion.div>
            </motion.div>

            {/* Prawa kolumna: 4 filary profesjonalnej terapii */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-7"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
                <Stethoscope className="w-4 h-4 text-teal-600" />
                Dla profesjonalistów i placówek
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
                Maksymalna kontrola nad procesem terapeutycznym
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                ITS GoBrain Pre & School uwalnia terapeutę od rutyny. Automatyzuje proces doboru trudności, archiwizuje dane i pozwala skupić się na owocnej relacji z dzieckiem.
              </motion.p>

              {/* Siatka 4 profesjonalnych atutów */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Target,
                    title: "Inteligentna uwaga kierunkowa",
                    desc: "Dźwięk zakłócający w tle zmienia głośność zależnie od poprawności — mózg uczy się filtrować szum.",
                  },
                  {
                    icon: BarChart3,
                    title: "PreTest & PostTest",
                    desc: "Twarde dane diagnostyczne przed i po cyklu treningowym — czarno na białym pokazujesz sukces rodzicom.",
                  },
                  {
                    icon: FileDown,
                    title: "Pomoce PDF & scenariusze",
                    desc: "Gotowe karty pracy i konspekty zajęć do druku. Idealna symbioza pracy na ekranie i przy stoliku.",
                  },
                  {
                    icon: SlidersHorizontal,
                    title: "Automatyczna adaptacja",
                    desc: "System sam dobiera poziom trudności w czasie rzeczywistym. Zero frustracji, stała motywacja.",
                  },
                ].map((feat, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeInUp} 
                    className="p-4 rounded-2xl bg-card border border-border/80 hover:border-teal-300 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-2.5">
                      <feat.icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-foreground text-sm mb-1">{feat.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{feat.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── SHOWCASE: TRENING W FORMIE ZABAWY (KINOWY BANER) ─── */}
      <section className="py-16 md:py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-2xl relative min-h-[420px] flex items-center bg-slate-950 text-white border border-slate-800"
          >
            {/* Zdjęcie w tle */}
            <div className="absolute inset-0 z-0">
              <img
                src={childTabletGame1Img}
                alt="Dziewczynka gra w ITS GoBrain Pre & School na tablecie — interaktywny trening słuchowy w placówce"
                className="w-full h-full object-cover object-[center_30%]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-teal-950/30 lg:from-slate-950/95 lg:via-slate-950/70 lg:to-transparent" />
            </div>

            {/* Treść banera */}
            <div className="relative z-10 p-8 sm:p-14 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero oporów, 100% motywacji</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
                Trening słuchowy już od przedszkola — w formie wciągającej zabawy
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Dzieci nie chcą żmudnych ćwiczeń przy biurku. W ITS GoBrain wykonują zadania słuchowe z uśmiechem, zdobywając punkty i przechodząc kolorowe misje. Program adaptuje tempo do możliwości malucha — bez stresu, płaczu i poczucia porażki.
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-teal-200">
                <span className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">Intuicyjna obsługa dotykowa</span>
                <span className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">Wsparcie wizualne mowy</span>
                <span className="px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">Rekomendowane od 5 r.ż.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PANEL TERAPEUTY & DANE KLINICZNE (NOWOCZESNY DASHBOARD SHOWCASE) ─── */}
      <section className="py-20 bg-card/40 border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-6 order-2 lg:order-1"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
                <BarChart3 className="w-4 h-4 text-teal-600" />
                Panel Diagnostyczny Terapeuty
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
                Pełny wgląd w postępy każdego dziecka
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-base leading-relaxed mb-6">
                Intuicyjny pulpit w chmurze pozwala błyskawicznie monitorować wyniki prowadzonych terapii. Masz dostęp do dokładnej historii sesji, czasu reakcji i procentowej skuteczności różnicowania bodźców słuchowych.
              </motion.p>

              {/* 4 konkretne metryki wartości */}
              <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-4">
                {[
                  { value: "100%", label: "Obiektywizmu diagnozy", desc: "Twarde dane z PreTestów i PostTestów" },
                  { value: "PDF", label: "Raporty do druku", desc: "Gotowe zestawienia postępów dla rodzica" },
                  { value: "∞", label: "Bez limitu dzieci", desc: "1 licencja dla wszystkich uczniów placówki" },
                  { value: "24/7", label: "Dostęp w chmurze", desc: "Komputer, tablet i tablica interaktywna" },
                ].map((stat, sIdx) => (
                  <motion.div 
                    key={sIdx} 
                    variants={fadeInUp} 
                    className="bg-card rounded-2xl border border-border p-4 hover:border-teal-300 transition-colors shadow-sm"
                  >
                    <p className="text-2xl sm:text-3xl font-black text-teal-600 mb-1">{stat.value}</p>
                    <p className="text-xs font-bold text-foreground mb-1">{stat.label}</p>
                    <p className="text-[11px] text-muted-foreground leading-tight">{stat.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Dashboard Screenshot */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 order-1 lg:order-2 relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-teal-100 bg-white">
                <img
                  src={therapistDashboardImg}
                  alt="Panel terapeuty ITS GoBrain Pre & School"
                  className="w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2.5 bg-slate-950 text-white rounded-2xl px-4 py-2.5 shadow-xl border border-teal-500/30 text-xs font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Pulpit dostępny na żywo</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── PORÓWNANIE: PRE & SCHOOL VS DOMOWA (ELEGANCKA KARTA PORÓWNAWCZA) ─── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold uppercase tracking-wider mb-4">
              <BadgeCheck className="w-4 h-4 text-teal-600" />
              <span>Dopasowane do skali Twojej działalności</span>
            </div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
              ITS <span className="whitespace-nowrap text-teal-600">Pre & School</span> vs. licencja domowa
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Zobacz, dlaczego wersja Pre & School to najbardziej opłacalna inwestycja dla gabinetu, szkoły i przedszkola.
            </motion.p>
          </motion.div>

          <div className="overflow-hidden rounded-3xl border-2 border-teal-200/80 shadow-xl bg-card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[540px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 sm:p-5 font-bold text-foreground bg-muted/30">Funkcja & Możliwości</th>
                    <th className="text-center p-4 sm:p-5 font-semibold text-muted-foreground bg-muted/20 w-1/3">GoBrain Domowy</th>
                    <th className="text-center p-4 sm:p-5 font-extrabold text-white bg-gradient-to-r from-teal-600 to-emerald-600 w-1/3 shadow-sm">
                      <div className="text-xs uppercase tracking-widest text-teal-200 font-bold mb-0.5">Wybór Placówek</div>
                      <div className="text-base sm:text-lg">Pre & School</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {[
                    ["Liczba podopiecznych / uczniów", "Tylko 1 dziecko", "Nieograniczona (bez limitu)"],
                    ["Dostęp do programów edukacyjnych (4 moduły)", "Ograniczony", "Pełny dostęp do wszystkich gier i modułów"],
                    ["Baza materiałów PDF i scenariuszy do druku", "Brak", "Kompletna biblioteka kart pracy"],
                    ["Diagnoza słuchowa (PreTest & PostTest)", "Brak", "Precyzyjne testy przesiewowe w pakiecie"],
                    ["Raporty postępów dla rodziców i dyrekcji", "Brak", "Automatyczne generowanie do PDF"],
                    ["Praca na tablicy interaktywnej z grupą / klasą", "Niedozwolona", "Pełna licencja na pracę grupową"],
                    ["Licencja komercyjna & Faktura VAT", "Tylko użytek prywatny", "Pełna licencja komercyjna + Faktura VAT"],
                    ["Wsparcie techniczne & merytoryczne", "Standardowe", "Priorytetowe wsparcie opiekuna"],
                  ].map(([feature, home, school], i) => (
                    <tr key={feature} className={i % 2 === 0 ? "bg-background" : "bg-muted/10"}>
                      <td className="p-4 sm:p-4.5 font-medium text-foreground">{feature}</td>
                      <td className="p-4 sm:p-4.5 text-center text-muted-foreground text-xs sm:text-sm">{home}</td>
                      <td className="p-4 sm:p-4.5 text-center font-bold text-teal-800 bg-teal-50/70 text-xs sm:text-sm">
                        <div className="inline-flex items-center gap-1.5 text-teal-900">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{school}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-5 sm:p-6 bg-gradient-to-r from-teal-50 via-white to-emerald-50 border-t border-teal-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-bold text-teal-950 text-sm">Wartość bonusów i programów przewyższa koszt licencji</p>
                <p className="text-xs text-teal-800">Stała opłata roczna — 1499 zł brutto bez żadnych ukrytych kosztów.</p>
              </div>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 h-12 shrink-0 shadow-md shadow-teal-600/20" asChild>
                <a href="https://automater.pl/rest/order-viewer/buy/979412" target="_blank" rel="noopener noreferrer">
                  Zainwestuj w licencję
                  <ChevronRight className="ml-1.5 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINALNE CTA: ELEGANCKI, PERSWAZYJNY BANER SPRZEDAŻOWY ─── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 text-white relative overflow-hidden border-t border-teal-500/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
              <Heart className="w-4 h-4 text-teal-400" />
              <span>Inwestycja w rozwój Twojego gabinetu i placówki</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-5 leading-tight">
              Zainwestuj w ITS <span className="whitespace-nowrap bg-gradient-to-r from-teal-400 via-emerald-300 to-teal-200 bg-clip-text text-transparent">Pre & School</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-slate-300 text-base sm:text-xl leading-relaxed mb-4 max-w-2xl mx-auto">
              Wzbogać ofertę swojej placówki o nowoczesną neurostymulację, gotowe programy logopedyczno-edukacyjne i bogatą bazę materiałów PDF.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-teal-200 font-semibold text-sm sm:text-base mb-8">
              Wartość bonusów, programów i bazy materiałów wielokrotnie przewyższa koszt licencji.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <Button size="lg" className="h-14 px-8 text-base font-extrabold bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white shadow-xl shadow-teal-900/50 border-0" asChild>
                <a href="https://automater.pl/rest/order-viewer/buy/979412" target="_blank" rel="noopener noreferrer">
                  Zainwestuj w licencję (1499 zł brutto)
                  <ChevronRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-7 text-base font-semibold border-white/30 text-white hover:bg-white/10 bg-black/20 backdrop-blur-sm" asChild>
                <a href="tel:+48608650435">
                  <Phone className="w-4 h-4 mr-2 text-teal-400" />
                  608 650 435
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-7 text-base font-semibold border-white/30 text-white hover:bg-white/10 bg-black/20 backdrop-blur-sm" asChild>
                <a href="tel:+48572557326">
                  <Phone className="w-4 h-4 mr-2 text-teal-400" />
                  572 557 326
                </a>
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400 pt-4 border-t border-slate-800/80">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-teal-400" /> Bezpieczna płatność online</span>
              <span className="flex items-center gap-1.5"><BadgeCheck className="w-4 h-4 text-teal-400" /> Automatyczna faktura VAT</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-teal-400" /> Aktywacja w kilka minut</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
