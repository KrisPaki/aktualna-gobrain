import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import anetaPakielaImg from "@/assets/aneta-pakiela.jpg";
import anetaPakielaNewImg from "@/assets/aneta-pakiela-new.webp";
import therapistBenefitsImg from "@/assets/therapist-benefits.webp";
import {
  CheckCircle2,
  GraduationCap,
  Video,
  Award,
  Clock,
  BookOpen,
  Users,
  ExternalLink,
  X,
  Send,
  CheckCircle,
  TrendingUp,
  Quote,
  Brain,
  Activity,
  MapPin,
  Globe,
  Gift,
  Sparkles,
  Percent,
  Trophy,
  ShieldCheck,
  FileText,
  Printer,
  Repeat,
  ArrowRight,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

function RegistrationModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    zawod: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Zgłoszenie na szkolenie GoBrain — Provider");
    const body = encodeURIComponent(
      `Imię i nazwisko: ${form.name}\nEmail: ${form.email}\nTelefon: ${form.phone}\nZawód / specjalizacja: ${form.zawod}\n\nWiadomość:\n${form.message}`
    );
    window.location.href = `mailto:gobrainterapeuta@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Formularz zgłoszeniowy na szkolenie"
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-10 bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden max-h-[90vh] flex flex-col">
        <div className="bg-gradient-to-br from-primary to-blue-700 px-8 pt-8 pb-8 text-white relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
            aria-label="Zamknij"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/15 mb-4">
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl font-extrabold mb-1 leading-tight">
            Formularz zgłoszeniowy
          </h2>
          <p className="text-white/80 text-sm">
            Szkolenie certyfikacyjne Provider GoBrain — ITS GoBrain Interaktywny Trening Słuchowy
          </p>
        </div>

        <div className="overflow-y-auto flex-1">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center px-8 py-12">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Zgłoszenie wysłane!</h3>
              <p className="text-muted-foreground mb-6">
                Dziękujemy za zainteresowanie szkoleniem. Skontaktujemy się z Tobą w ciągu 1–2 dni roboczych.
              </p>
              <Button onClick={onClose}>Zamknij</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1" htmlFor="reg-name">
                  Imię i nazwisko <span className="text-red-500">*</span>
                </label>
                <input
                  id="reg-name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jan Kowalski"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1" htmlFor="reg-email">
                  Adres e-mail <span className="text-red-500">*</span>
                </label>
                <input
                  id="reg-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jan@przyklad.pl"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1" htmlFor="reg-phone">
                  Telefon (opcjonalnie)
                </label>
                <input
                  id="reg-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+48 123 456 789"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1" htmlFor="reg-zawod">
                  Zawód / specjalizacja <span className="text-red-500">*</span>
                </label>
                <select
                  id="reg-zawod"
                  name="zawod"
                  required
                  value={form.zawod}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                >
                  <option value="" disabled>Wybierz zawód</option>
                  <option value="Logopeda">Logopeda</option>
                  <option value="Pedagog">Pedagog</option>
                  <option value="Psycholog">Psycholog</option>
                  <option value="Neurologopeda">Neurologopeda</option>
                  <option value="Surdologopeda">Surdologopeda</option>
                  <option value="Terapeuta integracji sensorycznej">Terapeuta integracji sensorycznej</option>
                  <option value="Inny specjalista">Inny specjalista</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1" htmlFor="reg-message">
                  Dodatkowe pytania / uwagi
                </label>
                <textarea
                  id="reg-message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Np. Pytanie dotyczące terminu szkolenia..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
                />
              </div>

              <Button type="submit" className="w-full h-12 text-base font-semibold">
                <Send className="w-4 h-4 mr-2" />
                Wyślij zgłoszenie
              </Button>
              <p className="text-xs text-muted-foreground text-center pb-2">
                Skontaktujemy się z Tobą w ciągu 1–2 dni roboczych.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SzkoleniaPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <SEO
        title="Szkolenia i webinary – ITS GoBrain"
        description="Szkolenia i webinary dla terapeutów i pedagogów z zakresu treningu słuchowego ITS GoBrain. Zapisz się na najbliższe wydarzenie."
        canonical="/szkolenia-i-webinary"
      />

      {showModal && <RegistrationModal onClose={() => setShowModal(false)} />}

      <div className="pt-16">

        {/* Hero */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-primary text-white">
          <div className="absolute inset-0">
            <img
              src={anetaPakielaImg}
              alt="Aneta Pakiela surdologopeda, twórczyni metody GoBrain"
              className="w-full h-full object-cover opacity-55"
              style={{ objectPosition: "70% center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/55 to-primary/10" />
          </div>

          <div className="relative z-10 container mx-auto px-4 max-w-5xl">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-6 border border-white/20">
                <GraduationCap className="w-4 h-4" />
                <span>Certyfikowany kurs online</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-white">
                Zostań certyfikowanym<br />
                <span className="text-orange-300">Providerem GoBrain</span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/85 mb-6 max-w-2xl leading-relaxed">
                Kurs certyfikacyjny dla logopedów, pedagogów i psychologów — zdobądź uprawnienia do prowadzenia Interaktywnego Treningu Słuchowego ITS GoBrain.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-10 text-sm">
                <span className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white">
                  <Gift className="w-4 h-4 text-orange-300" /> Wartość bonusów przekracza koszt szkolenia
                </span>
                <span className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white">
                  <TrendingUp className="w-4 h-4 text-orange-300" /> Extra 600–700 zł na pacjencie
                </span>
                <span className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white">
                  <MapPin className="w-4 h-4 text-orange-300" /> Szkolenia stacjonarne w Twoim mieście
                </span>
                <span className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white">
                  <Globe className="w-4 h-4 text-orange-300" /> Szkolenie on-line
                </span>
                <span className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white">
                  <Video className="w-4 h-4 text-orange-300" /> 5 modułów video
                </span>
                <span className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white">
                  <Award className="w-4 h-4 text-orange-300" /> Certyfikat imienny
                </span>
                <span className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white">
                  <Users className="w-4 h-4 text-orange-300" /> Sieć Providerów
                </span>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-base font-semibold bg-white text-primary hover:bg-white/90" asChild>
                  <a href="https://automater.pl/rest/order-viewer/buy/787759" target="_blank" rel="noopener noreferrer">
                    Zainwestuj w kurs certyfikacyjny
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="h-14 px-8 text-base font-semibold bg-orange-500 hover:bg-orange-600 text-white border-0"
                  onClick={() => setShowModal(true)}
                  data-testid="btn-formularz"
                >
                  Formularz zgłoszeniowy
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section: Zalety szkolenia + Zdjęcie terapeutki + Bonusy */}
        <section className="py-20 bg-card border-y border-border overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">

            {/* Header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Korzyści dla Twojej praktyki</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
                Dlaczego warto zostać Providerem GoBrain?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Zdobądź prestiż, przyciągnij nowych pacjentów i odbierz gwarantowany pakiet bezpłatnych narzędzi diagnostycznych o wartości ponad 1 190 zł!
              </p>
            </motion.div>

            {/* 2-kolumnowy układ: z jednej strony terapeutka, z drugiej sekcja z tekstami */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch"
            >
              {/* Kolumna 1 (Lewa): Zdjęcie terapeutki (całkowicie czyste, bez nachodzącego tekstu) */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-border bg-slate-100 flex-1 min-h-[400px] lg:min-h-[600px]">
                  <img
                    src={therapistBenefitsImg}
                    alt="Certyfikowana terapeutka GoBrain w gabinecie"
                    className="w-full h-full object-cover object-[25%_center]"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Delikatna plakietka w lewym górnym rogu zdjęcia */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-primary text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md border border-white/60">
                      <Sparkles className="w-3.5 h-3.5 text-orange-500" /> Certyfikowany Provider
                    </span>
                  </div>
                  {/* Podpis na dole zdjęcia */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                    <p className="font-extrabold text-lg">Dołącz do Zespołu Providerów</p>
                    <p className="text-xs text-white/85 mt-0.5">Ponad 500 certyfikowanych specjalistów w całej Polsce</p>
                  </div>
                </div>
              </div>

              {/* Kolumna 2 (Prawa): Sekcja z tekstami, kafelkami korzyści i pakietem bonusów */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">

                {/* 4 Kafelki korzyści */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    {
                      icon: Trophy,
                      title: "Podnieś prestiż i konkurencyjność",
                      desc: "Wyróżnij swój gabinet unikalną, certyfikowaną metodą. Stań się wiodącym specjalistą treningu słuchowego w swoim regionie.",
                      color: "text-amber-600 bg-amber-100",
                    },
                    {
                      icon: Users,
                      title: "Przyciągnij i zatrzymaj pacjenta",
                      desc: "Rodzice widzą mierzalne postępy dziecka (PreTest i PostTest). Zyskujesz lojalnych klientów i regularne polecenia.",
                      color: "text-blue-600 bg-blue-100",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Poszerz swoją ofertę terapeutyczną",
                      desc: "Skuteczna terapia CAPD, ADHD, trudności w pisaniu, czytaniu i mowie. Nowoczesne narzędzie bez drogich maszyn gabinetowych.",
                      color: "text-purple-600 bg-purple-100",
                    },
                    {
                      icon: TrendingUp,
                      title: "Zarabiaj wielokrotnie na 1 pacjencie",
                      desc: "Płatna interaktywna diagnoza z raportem do druku + marża 100% na kodach ITS (kupujesz za 50%, sprzedajesz za 100%). Zamiast 1 wizyty — wielokrotny zysk!",
                      color: "text-emerald-600 bg-emerald-100",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                      <div className={`w-9 h-9 rounded-xl ${item.color} flex items-center justify-center shrink-0 mt-0.5 shadow-sm`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-foreground mb-1 leading-snug">{item.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* HIGHLIGHTED BONUSES BOX */}
                <div className="rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-50/70 via-teal-50/30 to-emerald-50/10 p-5 sm:p-6 shadow-md relative overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-emerald-200">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                        <Gift className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800">Pakiet powitalny na start</span>
                        <h4 className="text-base font-extrabold text-slate-900 leading-tight">Bonusy w cenie szkolenia (Wartość: 1 198 zł)</h4>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black bg-emerald-600 text-white shadow-sm">
                      100% ZA DARMO
                    </span>
                  </div>

                  <div className="space-y-3">
                    {/* Bonus 1 */}
                    <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-emerald-200 shadow-sm">
                      <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-black text-xs mt-0.5">
                        1
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <p className="text-sm font-bold text-slate-900">
                            Roczny dostęp do Platformy Diagnostycznej TERAPEUTA — <span className="text-emerald-700 font-extrabold">ZA DARMO NA ROK!</span>
                          </p>
                          <span className="text-[11px] font-semibold text-muted-foreground line-through">wartość: 799 zł</span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          <strong className="text-emerald-800 font-semibold">Prezent dla Ciebie:</strong> Nielimitowany, pełny dostęp na 12 miesięcy do cyfrowej baterii testów, kwestionariuszy diagnostycznych oraz automatycznego generowania gotowych raportów dla rodziców.
                        </p>
                      </div>
                    </div>

                    {/* Bonus 2 */}
                    <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-emerald-200 shadow-sm">
                      <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-black text-xs mt-0.5">
                        2
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <p className="text-sm font-bold text-slate-900">
                            Kod aktywacyjny ITS GoBrain — <span className="text-emerald-700 font-extrabold">ZA DARMO!</span>
                          </p>
                          <span className="text-[11px] font-semibold text-muted-foreground line-through">wartość: 399 zł</span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          Kompletny program treningu słuchowego dla Twojego pierwszego pacjenta w gabinecie. Wdrażasz metodę od zaraz bez ponoszenia żadnych dodatkowych kosztów.
                        </p>
                      </div>
                    </div>

                    {/* Bonus 3 */}
                    <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-emerald-200 shadow-sm">
                      <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 font-black text-xs mt-0.5">
                        %
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <p className="text-sm font-bold text-slate-900">
                            Stała zniżka 50% na kolejne kody ITS GoBrain
                          </p>
                          <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">Stały rabat -50%</span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          Kupujesz kody aktywacyjne za połowę ceny rynkowej, oferujesz je swoim podopiecznym i generujesz bezpośredni, regularny zysk dla swojego gabinetu.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Call to action bar */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                  <Button size="lg" className="w-full sm:w-auto h-12 px-7 text-sm font-bold bg-primary hover:bg-primary/90 text-white shadow-lg" asChild>
                    <a href="https://automater.pl/rest/order-viewer/buy/787759" target="_blank" rel="noopener noreferrer">
                      Kup kurs i odbierz bonusy za 1 198 zł
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-12 px-6 text-sm font-semibold border-border hover:bg-slate-50 text-foreground"
                    onClick={() => setShowModal(true)}
                  >
                    Formularz zgłoszeniowy
                  </Button>
                </div>

                {/* Additional perks pills */}
                <div className="flex flex-wrap gap-3 pt-2 border-t border-border text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Certyfikat imienny</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Wpis na ogólnopolską mapę</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Wsparcie Zespołu GoBrain</span>
                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* Model Biznesowy Providera — Wyjustowanie Zarobków */}
        <section className="py-24 bg-background border-t border-border overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">

            {/* Header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
                <Wallet className="w-4 h-4 text-emerald-600" />
                <span>Monetyzacja i rentowność gabinetu</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-5 leading-tight">
                Zamiast 1 wizyty — <span className="text-primary">zarabiasz wielokrotnie</span> na jednym pacjencie
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tradycyjna praca terapeuty ogranicza Twoje zarobki do stawki godzinowej za czas spędzony przy biurku. Model Providera GoBrain tworzy zintegrowany ekosystem, w którym zyskujesz na każdym etapie — od profesjonalnej diagnozy, po terapię domową.
              </p>
            </motion.div>

            {/* 3 Kroki Modelu Biznesowego — Wyjustowane i z mocno podkreślonymi zarobkami */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 items-stretch"
            >
              {/* Krok 1 */}
              <motion.div
                variants={fadeInUp}
                className="relative rounded-3xl p-7 bg-card border-2 border-border shadow-lg flex flex-col justify-between hover:shadow-xl transition-all"
              >
                <div className="flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 font-black flex items-center justify-center text-sm shadow-sm">
                      01
                    </span>
                    <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      Platforma TERAPEUTA
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
                    Interaktywna Diagnoza z raportem WOW
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Przeprowadzasz testy słuchowe, ankiety i wywiady w wersji interaktywnej. System generuje gotowy raport z wykresami — <strong className="text-foreground font-semibold">do natychmiastowego wydruku lub przesłania rodzicowi w PDF</strong>.
                  </p>

                  <div className="space-y-2.5 mt-auto pt-4 border-t border-border/60 text-xs text-foreground">
                    <div className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>Robi ogromne wrażenie na rodzicu i buduje autorytet</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Printer className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>Jasno wskazuje kierunki dalszych działań terapeutycznych</span>
                    </div>
                  </div>
                </div>

                {/* WYEKSPONOWANY ZAROBEK KROK 1 */}
                <div className="mt-6 pt-5 border-t-2 border-blue-200 bg-gradient-to-br from-blue-50/80 via-blue-50/40 to-transparent -mx-7 -mb-7 p-6 rounded-b-3xl">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-black uppercase tracking-wider text-blue-900">
                      Twój zarobek za badanie:
                    </span>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-blue-600 text-white">
                      100% dla Ciebie
                    </span>
                  </div>
                  <div className="text-3xl font-black text-blue-700 tracking-tight">
                    +150 – 250 zł
                  </div>
                  <p className="text-xs text-blue-950/80 mt-1 font-medium">
                    za profesjonalne badanie z gotowym wydrukiem raportu
                  </p>
                </div>
              </motion.div>

              {/* Krok 2 — GŁÓWNY ZYSK PASYWNY */}
              <motion.div
                variants={fadeInUp}
                className="relative rounded-3xl p-7 bg-card border-2 border-emerald-500 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-all ring-4 ring-emerald-500/10"
              >
                <div className="flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-10 h-10 rounded-2xl bg-emerald-600 text-white font-black flex items-center justify-center text-sm shadow-md">
                      02
                    </span>
                    <span className="text-xs font-black uppercase px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                      100% Marży • Pasywny Zysk
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
                    50% Rabatu na Kody = 100% Twojego Narzutu
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Proponujesz rodzicowi trening słuchowy w domu. Kupujesz kod z <strong className="text-emerald-700 font-bold">rabatem 50% (za ~195 zł)</strong>, a rodzic płaci standardowe <strong className="text-foreground font-bold">100% (390 zł)</strong>.
                  </p>

                  <div className="space-y-2.5 mt-auto pt-4 border-t border-border/60 text-xs text-foreground">
                    <div className="flex items-start gap-2">
                      <Repeat className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Druga połowa wartości kodu trafia prosto do Twojej kieszeni</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Wallet className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Zarabiasz pasywnie, podczas gdy dziecko ćwiczy w domu!</span>
                    </div>
                  </div>
                </div>

                {/* WYEKSPONOWANY ZAROBEK KROK 2 (NAJMOCNIEJSZY) */}
                <div className="mt-6 pt-5 border-t-2 border-emerald-400 bg-gradient-to-br from-emerald-500 to-emerald-600 -mx-7 -mb-7 p-6 rounded-b-3xl text-white shadow-lg">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-black uppercase tracking-wider text-emerald-100">
                      Czysta marża na kodzie:
                    </span>
                    <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md bg-white text-emerald-800 shadow-sm">
                      Zysk pasywny
                    </span>
                  </div>
                  <div className="text-3xl font-black text-white tracking-tight">
                    +200 zł / pacjent
                  </div>
                  <p className="text-xs text-emerald-100 mt-1 font-medium">
                    kupujesz za 50%, odstępujesz za 100% — bez pracy przy biurku!
                  </p>
                </div>
              </motion.div>

              {/* Krok 3 */}
              <motion.div
                variants={fadeInUp}
                className="relative rounded-3xl p-7 bg-card border-2 border-border shadow-lg flex flex-col justify-between hover:shadow-xl transition-all"
              >
                <div className="flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 font-black flex items-center justify-center text-sm shadow-sm">
                      03
                    </span>
                    <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      PostTest & Stały Pacjent
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
                    Długofalowa relacja zamiast jednej wizyty
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Dziecko trenuje w domu, a Ty masz stały wgląd w panelu. Prowadzisz sesje kontrolne, a na koniec wykonujesz płatny <strong className="text-foreground font-semibold">PostTest z raportem porównawczym</strong>.
                  </p>

                  <div className="space-y-2.5 mt-auto pt-4 border-t border-border/60 text-xs text-foreground">
                    <div className="flex items-start gap-2">
                      <Trophy className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Rodzic widzi czarno na białym spektakularne postępy</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Zadowolony rodzic kupuje 2. etap i poleca Cię znajomym</span>
                    </div>
                  </div>
                </div>

                {/* WYEKSPONOWANY ZAROBEK KROK 3 */}
                <div className="mt-6 pt-5 border-t-2 border-amber-200 bg-gradient-to-br from-amber-50/80 via-amber-50/40 to-transparent -mx-7 -mb-7 p-6 rounded-b-3xl">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-black uppercase tracking-wider text-amber-900">
                      Kolejny zysk z PostTestu:
                    </span>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-amber-600 text-white">
                      Badanie kontrolne
                    </span>
                  </div>
                  <div className="text-3xl font-black text-amber-800 tracking-tight">
                    +150 – 250 zł
                  </div>
                  <p className="text-xs text-amber-950/80 mt-1 font-medium">
                    badanie końcowe z raportem postępów + kontynuacja
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* WYJUSTOWANE PODSUMOWANIE FINANSOWE (RÓWNANIE ZYSKÓW Z 1 PACJENTA) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-teal-500/10 border-2 border-emerald-400 p-6 sm:p-8 shadow-lg"
            >
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-4 text-center sm:text-left">
                  <div className="bg-white px-4 py-3 rounded-2xl border border-blue-200 shadow-sm">
                    <p className="text-[10px] text-muted-foreground uppercase font-black">1. Diagnoza PreTest</p>
                    <p className="text-xl font-black text-blue-700">+200 zł</p>
                  </div>
                  <span className="text-2xl font-black text-emerald-600">+</span>
                  <div className="bg-white px-4 py-3 rounded-2xl border-2 border-emerald-500 shadow-sm ring-2 ring-emerald-500/20">
                    <p className="text-[10px] text-emerald-800 uppercase font-black">2. Marża na kodzie ITS</p>
                    <p className="text-xl font-black text-emerald-600">+200 zł</p>
                  </div>
                  <span className="text-2xl font-black text-emerald-600">+</span>
                  <div className="bg-white px-4 py-3 rounded-2xl border border-amber-200 shadow-sm">
                    <p className="text-[10px] text-muted-foreground uppercase font-black">3. Badanie PostTest</p>
                    <p className="text-xl font-black text-amber-700">+200 zł</p>
                  </div>
                </div>

                <div className="text-center lg:text-right border-t lg:border-t-0 lg:border-l-2 border-emerald-300 pt-5 lg:pt-0 lg:pl-8">
                  <span className="inline-block bg-emerald-600 text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full mb-1">
                    Łączny zysk z 1 pacjenta
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-emerald-700 tracking-tight">
                    ok. 600 – 700 zł
                  </div>
                  <p className="text-xs text-muted-foreground font-medium mt-0.5">
                    zamiast 120 zł za tradycyjną jednorazową konsultację!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Symulacja finansowa / Podsumowanie ROI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-primary/90 text-white p-8 lg:p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    Prosta matematyka zwrotu z inwestycji
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                    Jeden pacjent = nawet 500 – 800 zł przychodu dla Twojego gabinetu
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Zamiast pobrać 120–150 zł za pojedynczą konsultację, wdrażasz kompletny proces terapeutyczny. Przyjmując zaledwie <strong className="text-white font-semibold">2–3 nowych pacjentów</strong>, koszt szkolenia Providera zwraca Ci się całkowicie — a certyfikat, platforma i 50% zniżki na kody zostają z Tobą na zawsze. Co więcej, <strong className="text-emerald-300 font-bold">sama wartość otrzymanych bonusów przekracza koszt szkolenia!</strong>
                  </p>
                </div>

                <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                  <Button size="lg" className="h-14 px-8 text-base font-bold bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl border-0" asChild>
                    <a href="https://automater.pl/rest/order-viewer/buy/787759" target="_blank" rel="noopener noreferrer">
                      Zainwestuj w kurs Providera
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 text-base font-semibold border-white/25 text-white hover:bg-white/10"
                    onClick={() => setShowModal(true)}
                  >
                    Formularz zgłoszeniowy
                  </Button>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Akademia GoBrain */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            >
              <motion.div variants={fadeInUp}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                  <BookOpen className="w-4 h-4" />
                  <span>Akademia GoBrain</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Centrum wiedzy dla specjalistów</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Akademia GoBrain to wyjątkowe miejsce dostępu do specjalistycznej wiedzy pozwalającej poszerzyć Twoją wiedzę i umiejętności do wykorzystania w codziennej praktyce terapeutycznej. Zespół GoBrain ma na celu przekazanie specjalistycznej wiedzy w przystępny sposób przez najlepszych specjalistów.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Zapraszamy do naszego Zespołu — zostań <strong>PROVIDEREM GOBRAIN</strong>. To wyjątkowa okazja, aby poszerzyć umiejętności i możliwości. Skorzystaj ze sprawdzonej w praktyce wiedzy popartej praktycznymi wskazówkami.
                </p>
                <Button asChild>
                  <Link to="/darmowe-webinary">
                    Darmowe webinary
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-4">
                {[
                  { icon: Video, title: "Darmowe webinary", desc: "Regularne webinary prowadzone przez specjalistów GoBrain — dostępne dla wszystkich." },
                  { icon: BookOpen, title: "Scenariusze i pomoce", desc: "Bogata biblioteka gotowych scenariuszy terapeutycznych i materiałów dydaktycznych." },
                  { icon: Users, title: "Społeczność specjalistów", desc: "Dołącz do sieci Providerów GoBrain, dziel się doświadczeniami i poszerzaj sieć kontaktów." },
                  { icon: TrendingUp, title: "Program afiliacyjny", desc: "Zarabiaj więcej jako Provider GoBrain — polecaj program i otrzymuj prowizję za każdą sprzedaż. Dodatkowe źródło dochodu dla Twojego gabinetu." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl bg-card border border-border">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Course Program */}
        <section className="py-20 bg-background border-t border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Program szkolenia</h2>
              <p className="text-lg text-muted-foreground">Pięć modułów video, które rozwiną Twoje kompetencje, otworzą nowe możliwości terapeutyczne.</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {[
                {
                  module: "Moduł 1",
                  title: "Wprowadzenie do ITS GoBrain",
                  desc: "Historia metody, filozofia treningu słuchowego, prezentacja autorki — Anety Pakieły i jej doświadczeń klinicznych. Omówienie zasad systematyczności, intensywności i indywidualności programu.",
                },
                {
                  module: "Moduł 2",
                  title: "Podstawy teoretyczne treningu słuchowego",
                  desc: "Neurobiologia słyszenia i przetwarzania słuchowego. Jak mózg przetwarza dźwięki i dlaczego trening słuchowy działa? Omówienie teorii Tomatis, Johansen i różnic z ITS GoBrain.",
                },
                {
                  module: "Moduł 3",
                  title: "Centralne zaburzenia przetwarzania słuchowego (CAPD)",
                  desc: "Definicja CAPD, diagnozowanie, różnicowanie z ADHD i dysleksją. Jak stosować Platformę TERAPEUTA do diagnozy i monitorowania postępów.",
                },
                {
                  module: "Moduł 4",
                  title: "Typy kliniczne i wytyczne terapeutyczne",
                  desc: "Praktyczne zastosowanie ITS GoBrain w terapii logopedycznej, pedagogicznej i psychologicznej. Scenariusze pracy z dziećmi o różnych profilach trudności. Obsługa PreTestu i PostTestu — jak przeprowadzać badania diagnostyczne i interpretować wyniki.",
                },
                {
                  module: "Moduł 5",
                  title: "Model biznesowy GoBrain",
                  desc: "Jak zbudować dodatkowe źródło dochodu jako Provider GoBrain? Omawiamy możliwości sprzedaży kodów aktywacyjnych podopiecznym, odpłatne przeprowadzanie PreTestów i PostTestów słuchowych, rozszerzenie oferty gabinetu o profesjonalny trening słuchowy oraz budowanie długofalowych relacji z klientami w oparciu o system GoBrain.",
                },
              ].map((mod, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex gap-6 p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow"
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex flex-col items-center justify-center">
                      <span className="text-xs text-primary font-medium leading-none">{mod.module.split(" ")[0]}</span>
                      <span className="text-xl font-extrabold text-primary leading-none">{mod.module.split(" ")[1]}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{mod.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{mod.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Prowadząca szkolenie — Aneta Pakieła */}
        <section className="py-24 bg-card/60 border-t border-border overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">

            {/* Header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <GraduationCap className="w-4 h-4" />
                <span>Prowadząca szkolenia i twórczyni metody</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Aneta Pakieła</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Neurologopeda, surdologopeda, twórczyni metody GoBrain — osobiście przeprowadza szkolenia certyfikacyjne dla specjalistów
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

              {/* Photo column */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-2 flex flex-col items-center gap-6"
              >
                <div className="relative">
                  <div className="w-60 h-60 rounded-full overflow-hidden shadow-2xl border-4 border-primary/10">
                    <img
                      src={anetaPakielaNewImg}
                      alt="Aneta Pakieła – twórczyni metody GoBrain i prowadząca szkolenia"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "50% 15%", transform: "scale(1.25)", transformOrigin: "50% 15%" }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-2xl px-4 py-2 shadow-xl"
                  >
                    <p className="text-xs font-medium opacity-80">Doświadczenie</p>
                    <p className="font-black text-lg">20+ lat</p>
                  </motion.div>
                </div>

                {/* Banner: Prowadzi szkolenia */}
                <div className="w-full rounded-2xl p-4 bg-primary/10 border border-primary/20 text-center">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">Bezpośrednio od autorki</p>
                  <p className="text-sm font-semibold text-foreground">
                    Szkolenie prowadzone w 100% osobiście przez Anetę Pakiełę
                  </p>
                </div>

                {/* Associations */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="w-full space-y-3"
                >
                  {[
                    { label: "Polski Komitet Audiofonologii", role: "Członek Zarządu · Współpraca z prof. Tadeuszem Gałkowskim", color: "border-blue-200 bg-blue-50" },
                    { label: "Warszawski Uniwersytet Medyczny", role: "Studia doktoranckie, Katedra Otolaryngologii", color: "border-green-200 bg-green-50" },
                    { label: "Polskie Towarzystwo Neurologopedów", role: "Wieloletnia Przewodnicząca Zarządu", color: "border-purple-200 bg-purple-50" },
                    { label: "Fundacja Usłysz Marzenia", role: "Prezes Fundacji · Praca charytatywna na rzecz dzieci z wadą słuchu i zaburzeniami neurologicznymi", color: "border-pink-200 bg-pink-50" },
                    { label: "Poradnia Specjalistyczna Logomedic", role: "Dyrektor · Kierowanie zespołem specjalistów", color: "border-orange-200 bg-orange-50" },
                    { label: "GoBrain Polska", role: "Dyrektor Merytoryczny · Koordynacja i nadzór merytoryczny", color: "border-teal-200 bg-teal-50" },
                  ].map((assoc, i) => (
                    <motion.div key={i} variants={fadeInUp} className={`rounded-xl p-3 border ${assoc.color}`}>
                      <p className="font-bold text-foreground text-sm">{assoc.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{assoc.role}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Content column */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="lg:col-span-3 space-y-8"
              >

                {/* Titles */}
                <motion.div variants={fadeInUp}>
                  <h3 className="text-sm font-black text-muted-foreground tracking-widest uppercase mb-3">Tytuły zawodowe</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Neurologopeda",
                      "Surdologopeda",
                      "Pedagog specjalny",
                      "Twórczyni metody GoBrain",
                    ].map((t, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-bold text-sm border border-primary/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Certifications */}
                <motion.div variants={fadeInUp}>
                  <h3 className="text-sm font-black text-muted-foreground tracking-widest uppercase mb-3">Specjalizacje</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { label: "Diagnosta CAPD", desc: "Centralne zaburzenia przetwarzania słuchowego", color: "bg-teal-50 border-teal-200 text-teal-700" },
                      { label: "Integracja odruchów II st.", desc: "Zaawansowany terapeuta", color: "bg-orange-50 border-orange-200 text-orange-700" },
                      { label: "Stymulacja słuchowa", desc: "Certyfikowany specjalista terapii słuchu", color: "bg-green-50 border-green-200 text-green-700" },
                      { label: "Model INSITE", desc: "Certyfikowany terapeuta modelu INSITE", color: "bg-blue-50 border-blue-200 text-blue-700" },
                      { label: "Wczesna interwencja", desc: "Praca terapeutyczna z dziećmi", color: "bg-pink-50 border-pink-200 text-pink-700" },
                      { label: "Neurologopedia", desc: "Diagnoza i terapia neurologopedyczna", color: "bg-purple-50 border-purple-200 text-purple-700" },
                    ].map((cert, i) => (
                      <motion.div
                        key={i}
                        variants={fadeInUp}
                        whileHover={{ scale: 1.02 }}
                        className={`rounded-xl p-3 border ${cert.color} transition-all`}
                      >
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-sm">{cert.label}</p>
                            <p className="text-xs opacity-75 mt-0.5">{cert.desc}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* About / Quote */}
                <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-6">
                  <Quote className="w-8 h-8 text-primary/30 mb-3" />
                  <blockquote className="text-base text-foreground leading-relaxed font-medium mb-4 space-y-3">
                    <p>GoBrain to efekt ponad 20 lat praktyki klinicznej — metoda łącząca wiedzę neurologopedyczną z nowoczesnymi technologiami. To nie tylko trening słuchowy, lecz kompleksowe narzędzie wspierające pracę terapeuty i rozwój dziecka w domu, szkole i gabinecie.</p>
                    <p>Dedykowany dzieciom od piątego roku życia z deficytami uwagi słuchowej, trudnościami w czytaniu i pisaniu, problemami z wymową oraz zaburzeniami przetwarzania słuchowego (CAPD). Trening GoBrain stymuluje lewą półkulę, organizuje sekwencyjnie informacje i przyspiesza efekty terapeutyczne.</p>
                  </blockquote>
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-foreground">Aneta Pakieła</p>
                    <p className="text-sm text-muted-foreground">Neurologopeda, surdologopeda, twórczyni metody GoBrain i prowadząca szkolenia</p>
                  </div>
                </motion.div>

                {/* Key achievements */}
                <motion.div variants={fadeInUp}>
                  <h3 className="text-sm font-black text-muted-foreground tracking-widest uppercase mb-3">Dokonania i działalność szkoleniowa</h3>
                  <div className="space-y-3">
                    {[
                      { icon: Users, text: "Osobiście przeszkoliła ponad 500 terapeutów w całej Polsce w zakresie diagnozy i terapii CAPD", color: "text-green-600 bg-green-100" },
                      { icon: GraduationCap, text: "Prowadzi autorskie szkolenia certyfikacyjne dla logopedów, pedagogów i psychologów", color: "text-purple-600 bg-purple-100" },
                      { icon: Brain, text: "Opracowała unikalną metodę ITS GoBrain do terapii zaburzeń przetwarzania słuchowego u dzieci", color: "text-primary bg-primary/10" },
                      { icon: Activity, text: "Prowadzi badania doktoranckie na Katedrze Otolaryngologii Warszawskiego Uniwersytetu Medycznego", color: "text-orange-600 bg-orange-100" },
                    ].map((ach, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`w-9 h-9 rounded-lg ${ach.color} flex items-center justify-center shrink-0`}>
                          <ach.icon className="w-4 h-4" />
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed pt-1">{ach.text}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-blue-700 text-white text-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Chcesz zostać terapeutą GoBrain?</h2>
              <p className="text-white/80 mb-10 text-lg">Zapisz się na kurs certyfikacyjny i dołącz do rosnącej sieci Providerów GoBrain w całej Polsce.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 px-8 text-base bg-white text-primary hover:bg-white/90 font-semibold" asChild>
                  <a href="https://automater.pl/rest/order-viewer/buy/787759" target="_blank" rel="noopener noreferrer">
                    Zapisz się na szkolenie
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-base border-white text-white hover:bg-white/10"
                  onClick={() => setShowModal(true)}
                >
                  Formularz zgłoszeniowy
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

      </div>


    </div>
  );
}
