import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Ear,
  GraduationCap,
  Activity,
  Brain,
  Volume2,
  Download,
  Monitor,
  Smartphone,
  ChevronRight,
  Star,
  Zap,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import childTabletImg from "@/assets/child-tablet-fun.png";
import parentChildImg from "@/assets/parent-child-home.png";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ItsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">


      <div className="pt-16">

        {/* Hero */}
        <section className="py-20 md:py-28 bg-card/40 border-b border-border">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Ear className="w-4 h-4" />
                <span>Interaktywny Trening Słuchowy</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight mb-6">
                ITS GoBrain<br />
                <span className="text-primary">„Zabawy z dźwiękami"</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Interaktywny trening słuchowy GoBrain to klucz do sukcesu Twojego dziecka! Zindywidualizowany program online skupia się na poprawie koncentracji, pamięci i uwagi.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 px-8 text-base font-semibold" asChild>
                  <a href="https://automater.pl/rest/order-viewer/buy/918448" target="_blank" rel="noopener noreferrer">
                    Kup ITS GoBrain Etap 1
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base" asChild>
                  <a href="https://automater.pl/rest/order-viewer/buy/918222" target="_blank" rel="noopener noreferrer">
                    Kup ITS GoBrain Etap 2
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* For whom */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Dla kogo jest program ITS GoBrain?</h2>
              <p className="text-xl text-muted-foreground">{'Program dla dzieci od piątego roku życia'}</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {[
                "Dziecko słyszy, ale nie słucha",
                "Wymaga powtarzania poleceń",
                "Ma trudności z doprowadzeniem zadań do końca",
                "Ma problemy z nauką czytania i pisania",
                "Wykazuje nieadekwatną samoocenę",
                "Jest nadwrażliwe na dźwięki (zatyka uszy)",
                "Ma zaburzenia przetwarzania słuchowego (CAPD)",
                "Miało problemy ze słuchem (np. przerost migdałków)",
                "Wykazuje objawy dysleksji",
                "Ma trudności z koncentracją i uwagą słuchową",
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex items-start gap-4 p-4 rounded-xl hover:bg-background transition-colors">
                  <div className="mt-1 bg-accent/10 rounded-full p-1 shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Effects */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Efekty stosowania ITS GoBrain</h2>
              <p className="text-lg text-muted-foreground">Dzięki treningom dziecko lepiej rozumie, słucha, zapamiętuje i mniej się męczy.</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
            >
              {[
                { icon: Ear, text: "Poprawa przetwarzania słuchowego" },
                { icon: GraduationCap, text: "Poprawa wyników w nauce" },
                { icon: Activity, text: "Poprawa wymowy oraz komunikacji językowej" },
                { icon: Brain, text: "Poprawa uwagi, koncentracji i pamięci" },
                { icon: Volume2, text: "Normalizacja wrażliwości słuchowej" },
              ].map((effect, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-card rounded-2xl p-6 text-center border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center min-h-[180px]">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                    <effect.icon className="w-6 h-6" />
                  </div>
                  <p className="font-medium text-foreground text-sm">{effect.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-20 bg-card border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Zasady treningu</h2>
              <p className="text-lg text-muted-foreground">Trzy filary skuteczności programu ITS GoBrain</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Systematyczność",
                  desc: "Program należy stosować 2–3 razy w tygodniu. Systematyczne ćwiczenia budują trwałe zmiany w sposobie przetwarzania dźwięków przez mózg dziecka.",
                },
                {
                  title: "Intensywność",
                  desc: "Każda sesja treningowa jest intensywna i angażuje dziecko w aktywne słuchanie. System automatycznie dostosowuje poziom trudności do możliwości dziecka.",
                },
                {
                  title: "Indywidualność",
                  desc: "Program automatycznie dostosowuje się do możliwości dziecka i udziela informacji zwrotnych na bieżąco. Rolą rodzica jest wyłącznie asystowanie.",
                },
              ].map((principle, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-background rounded-2xl p-8 border border-border text-center">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent font-bold">{i + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{principle.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{principle.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Downloads */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Pobierz wersję demo</h2>
              <p className="text-lg text-muted-foreground">Sprawdź program przed zakupem — bezpłatne wersje demo dla PC i Android</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <motion.div variants={fadeInUp}>
                <a
                  href="http://gobraintech.pl/current/Sklep_PC/ITS_Starter.exe"
                  className="flex items-center gap-4 p-6 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Monitor className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">ITS Starter PC</p>
                    <p className="text-sm text-muted-foreground">Windows .exe demo</p>
                  </div>
                  <Download className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                </a>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <a
                  href="http://gobraintech.pl/current/Sklep_Android/ITS_Gobrain_Starter.apk"
                  className="flex items-center gap-4 p-6 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Smartphone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">ITS Starter Android</p>
                    <p className="text-sm text-muted-foreground">Android .apk demo</p>
                  </div>
                  <Download className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Two stages */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Brain className="w-4 h-4" />
                <span>Program treningowy</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trening mózgu czyni mistrza</h2>
              <p className="text-xl text-muted-foreground">Program składa się z dwóch etapów dostosowanych do postępów dziecka.</p>
            </motion.div>

            {/* Etap 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                  <img src={childTabletImg} alt="Dziecko ćwiczące z programem ITS GoBrain" className="w-full object-cover" />
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-5 -right-5 bg-background rounded-2xl border border-border shadow-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Sesji treningowych</p>
                    <p className="font-bold text-foreground text-sm">10–25 ćwiczeń</p>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -top-5 -left-5 bg-background rounded-2xl border border-border shadow-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Star className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Rekomendowana częstotliwość</p>
                    <p className="font-bold text-foreground text-sm">2–3 razy w tygodniu</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
                  <span>ETAP 1</span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">Podstawy treningu słuchowego</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Pierwszy etap ITS GoBrain „Zabawy z dźwiękami" to wprowadzenie do treningu słuchowego. Program składa się z 10–25 sesji interaktywnych ćwiczeń słuchowych ćwiczących mózg dziecka. Korzystaj 2–3 razy w tygodniu.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Interaktywne ćwiczenia słuchowe",
                    "Dostosowany poziom trudności",
                    "Trening pamięci i koncentracji",
                    "Dostępny na PC i Android",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="h-12 px-8 text-base font-semibold" asChild>
                  <a href="https://automater.pl/rest/order-viewer/buy/918448" target="_blank" rel="noopener noreferrer">
                    Kup Etap 1
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Etap 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:order-2 relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                  <img src={parentChildImg} alt="Rodzic i dziecko przy treningu GoBrain w domu" className="w-full object-cover" />
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-5 -left-5 bg-background rounded-2xl border border-border shadow-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Widoczna poprawa</p>
                    <p className="font-bold text-foreground text-sm">Koncentracja i pamięć</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:order-1"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-bold mb-6">
                  <span>ETAP 2 — Zaawansowany</span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">Intensywny trening słuchowy</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Gdy w Etapie 1 dziecko miało trudności lub nie ukończyło wszystkich zadań — czas na Etap 2. Z każdym treningiem pamięć i koncentracja będą się systematycznie poprawiać. Przerwa między etapami nie jest wymagana.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Wyższy poziom trudności ćwiczeń",
                    "Intensywniejszy trening mózgu",
                    "Ciągłość bez przerwy między etapami",
                    "Mierzalne efekty po każdej sesji",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold border-2" asChild>
                  <a href="https://automater.pl/rest/order-viewer/buy/918222" target="_blank" rel="noopener noreferrer">
                    Kup Etap 2
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white text-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Gotowy, by wspierać swoje dziecko?</h2>
              <p className="text-white/80 mb-10 text-lg">{'Zacznij trening słuchowy już dziś. Program dla dzieci od piątego roku życia.'}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 px-8 text-base bg-white text-primary hover:bg-white/90 font-semibold" asChild>
                  <a href="https://automater.pl/rest/order-viewer/buy/918448" target="_blank" rel="noopener noreferrer">
                    Kup kod aktywacyjny
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base text-white border-white/30 hover:bg-white/10" asChild>
                  <Link to="/faq">Pytania i odpowiedzi</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

      </div>


    </div>
  );
}
