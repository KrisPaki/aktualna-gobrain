import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Video,
  Calendar,
  Clock,
  Users,
  CheckCircle2,
  Send,
  X,
  CheckCircle,
  Headphones,
  BookOpen,
  Star,
  ArrowRight,
  Mail,
  Phone,
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

function RegistrationModal({ webinar, onClose }: { webinar: string; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", zawod: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Zgłoszenie na webinar: ${webinar}`);
    const body = encodeURIComponent(
      `Imię i nazwisko: ${form.name}\nEmail: ${form.email}\nTelefon: ${form.phone}\nZawód / specjalizacja: ${form.zawod}\n\nWebinar: ${webinar}`
    );
    window.location.href = `mailto:gobrainterapeuta@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-background rounded-2xl shadow-2xl w-full max-w-md p-8 z-10"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Zgłoszenie wysłane!</h3>
            <p className="text-muted-foreground text-sm mb-6">Potwierdzenie z linkiem do webinaru wyślemy na Twój e-mail przed wydarzeniem.</p>
            <Button onClick={onClose} className="bg-primary text-white hover:bg-primary/90">Zamknij</Button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                <Video className="w-4 h-4" />
                Bezpłatny webinar
              </div>
              <h3 className="text-xl font-bold text-foreground">{webinar}</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Imię i nazwisko *</label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                  placeholder="Jan Kowalski"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Adres e-mail *</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                  placeholder="jan@example.pl"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Telefon</label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                  placeholder="600 000 000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Zawód / specjalizacja *</label>
                <select
                  name="zawod"
                  required
                  value={form.zawod}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  <option value="">Wybierz...</option>
                  <option>Logopeda</option>
                  <option>Terapeuta pedagogiczny</option>
                  <option>Psycholog</option>
                  <option>Pedagog specjalny</option>
                  <option>Nauczyciel</option>
                  <option>Rodzic</option>
                  <option>Inne</option>
                </select>
              </div>
              <Button type="submit" className="w-full h-12 bg-primary text-white hover:bg-primary/90 font-semibold">
                <Send className="w-4 h-4 mr-2" />
                Zgłoś się na webinar
              </Button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
}

const webinary = [
  {
    id: 1,
    status: "nadchodzący",
    date: "Termin do ustalenia",
    time: "18:00 – 19:30",
    title: "Trening słuchowy ITS GoBrain — jak działa i komu pomaga?",
    desc: "Wprowadzenie do metody ITS GoBrain. Dowiesz się, jak działa trening słuchowy, czym różni się od innych metod i jakie dzieci mogą skorzystać z programu.",
    topics: [
      "Mechanizm przetwarzania słuchowego u dzieci",
      "Jak ITS GoBrain stymuluje ośrodkowy układ słuchowy",
      "Wskazania do treningu: opóźniony rozwój mowy, dysleksja, ADHD",
      "Wyniki badań i obserwacje Providerów",
    ],
    tags: ["logopedzi", "terapeuci", "rodzice"],
    color: "blue",
  },
  {
    id: 2,
    status: "nadchodzący",
    date: "Termin do ustalenia",
    time: "18:00 – 19:30",
    title: "ITS GoBrain w praktyce logopedycznej — case studies",
    desc: "Webinar dedykowany logopedycznym praktykom. Analizujemy realne przypadki dzieci, u których trening słuchowy wspomógł efektywność terapii logopedycznej.",
    topics: [
      "Integracja ITS GoBrain z terapią logopedyczną",
      "PreTest i PostTest — jak mierzyć postępy",
      "Praca zdalna z podopiecznym — platforma Providera",
      "Odpowiedzi na pytania uczestników",
    ],
    tags: ["logopedzi", "terapeuci"],
    color: "orange",
  },
  {
    id: 3,
    status: "nadchodzący",
    date: "Termin do ustalenia",
    time: "18:00 – 19:30",
    title: "GoBrain dla dzieci ze spektrum autyzmu i wadą słuchu",
    desc: "Specjalistyczny webinar poświęcony pracy z dziećmi z ASD oraz niedosłuchem. Jak dostosować trening słuchowy do indywidualnych potrzeb dziecka?",
    topics: [
      "Specyfika przetwarzania słuchowego u dzieci z ASD",
      "Adaptacja treningu dla dzieci z wadą słuchu",
      "Współpraca z rodzicami i specjalistami",
      "Przykłady z ośrodków rehabilitacyjnych",
    ],
    tags: ["terapeuci", "pedagodzy", "logopedzi"],
    color: "purple",
  },
  {
    id: 4,
    status: "nadchodzący",
    date: "Termin do ustalenia",
    time: "18:00 – 19:00",
    title: "GoBrain dla rodziców — pierwsze kroki w domu",
    desc: "Webinar skierowany do rodziców, którzy chcą samodzielnie prowadzić trening słuchowy w domu. Praktyczne wskazówki krok po kroku.",
    topics: [
      "Jak uruchomić program i skonfigurować sesje",
      "Jak wygląda typowa sesja treningowa",
      "Jak monitorować postępy dziecka",
      "Kiedy warto skonsultować się z Providerem",
    ],
    tags: ["rodzice"],
    color: "green",
  },
];

const tagColors: Record<string, string> = {
  logopedzi: "bg-blue-100 text-blue-700",
  terapeuci: "bg-orange-100 text-orange-700",
  pedagodzy: "bg-purple-100 text-purple-700",
  rodzice: "bg-green-100 text-green-700",
  nauczyciele: "bg-teal-100 text-teal-700",
};

const cardBorder: Record<string, string> = {
  blue: "border-t-4 border-t-blue-500",
  orange: "border-t-4 border-t-orange-500",
  purple: "border-t-4 border-t-purple-500",
  green: "border-t-4 border-t-green-500",
};

const badgeBg: Record<string, string> = {
  blue: "bg-blue-500",
  orange: "bg-orange-500",
  purple: "bg-purple-500",
  green: "bg-green-500",
};

export default function DarmoveWebinaryPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {activeModal && (
        <RegistrationModal webinar={activeModal} onClose={() => setActiveModal(null)} />
      )}

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Video className="w-4 h-4" />
              Bezpłatne webinary GoBrain
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Darmowe webinary<br />
              <span className="text-primary">o treningu słuchowym</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Bezpłatne spotkania online dla logopedów, terapeutów, pedagogów i rodziców. Dowiedz się, jak metoda ITS GoBrain wspiera rozwój mowy i przetwarzanie słuchowe u dzieci.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-13 px-8 text-base font-semibold bg-primary text-white hover:bg-primary/90"
                onClick={() => setActiveModal("Darmowy webinar GoBrain — termin do ustalenia")}
              >
                <Send className="w-4 h-4 mr-2" />
                Zapisz się na webinar
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold" asChild>
                <a href="tel:+48608650435">
                  <Phone className="w-4 h-4 mr-2" />
                  608 650 435
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-8 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "100%", label: "Bezpłatne" },
              { value: "90 min", label: "Czas trwania" },
              { value: "Online", label: "Forma spotkania" },
              { value: "Q&A", label: "Sesja pytań" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-bold text-primary">{value}</div>
                <div className="text-sm text-muted-foreground mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nagrane webinary */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-10"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-foreground mb-3">
              Nagrane webinary
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg">
              Obejrzyj nasze poprzednie spotkania w dowolnym czasie.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                id: "yJFP_x9ue4s",
                title: "Jak wspierać rozwój małego dziecka?",
                speaker: "Karolina Krahel — logopeda, pedagog specjalny",
              },
              {
                id: "wTFjWacsHJw",
                title: "Efektywność terapii logopedycznej przy wykorzystaniu wibratorów logopedycznych",
                speaker: "Wioletta Obidzinska — logopeda, pedagog specjalny",
              },
            ].map((video) => (
              <motion.div key={video.id} variants={fadeInUp} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-5">
                  <p className="font-semibold text-foreground mb-1">{video.title}</p>
                  <p className="text-sm text-muted-foreground">{video.speaker}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Webinars list */}
      <section className="py-16 md:py-24 bg-card/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-foreground mb-3">
              Nadchodzące webinary
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg">
              Zapisz się — prześlemy Ci termin i link do spotkania.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-6"
          >
            {webinary.map((w) => (
              <motion.div
                key={w.id}
                variants={fadeInUp}
                className={`bg-card rounded-2xl border border-border ${cardBorder[w.color]} p-6 md:p-8`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white ${badgeBg[w.color]}`}>
                        <Video className="w-3 h-3" />
                        Webinar bezpłatny
                      </span>
                      {w.tags.map(tag => (
                        <span key={tag} className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${tagColors[tag] ?? "bg-gray-100 text-gray-700"}`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">{w.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{w.desc}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-5">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-primary" />
                        {w.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-primary" />
                        {w.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-primary" />
                        Platforma online
                      </span>
                    </div>

                    <ul className="space-y-1.5">
                      {w.topics.map(topic => (
                        <li key={topic} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:w-48 shrink-0">
                    <Button
                      className="w-full bg-primary text-white hover:bg-primary/90 font-semibold"
                      onClick={() => setActiveModal(w.title)}
                    >
                      Zapisz się
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-2">Bezpłatne — wyślemy termin</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why attend */}
      <section className="py-16 md:py-20 bg-card/40 border-y border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-3">Co zyskujesz, uczestnicząc w webinarze?</h2>
              <p className="text-muted-foreground">Każde spotkanie to praktyczna wiedza z pierwszej ręki — od twórców metody.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Headphones className="w-6 h-6" />, title: "Wiedza o treningu słuchowym", desc: "Zrozumiesz mechanizm działania ITS GoBrain i naukowo potwierdzone podstawy metody." },
                { icon: <BookOpen className="w-6 h-6" />, title: "Praktyczne case studies", desc: "Poznasz realne przykłady pracy z dziećmi z opóźnieniem mowy, dysleksją, ASD." },
                { icon: <Users className="w-6 h-6" />, title: "Sesja Q&A z ekspertem", desc: "Zadaj pytania bezpośrednio twórcy metody — Anecie Pakieła, certyfikowanemu Providerowi." },
                { icon: <Star className="w-6 h-6" />, title: "Certyfikat uczestnictwa", desc: "Każdy uczestnik otrzymuje potwierdzenie udziału w webinarze — do portfolio zawodowego." },
                { icon: <Video className="w-6 h-6" />, title: "Nagranie po webinarze", desc: "Zarejestrowanym uczestnikom wysyłamy nagranie spotkania — wracaj do materiału kiedy chcesz." },
                { icon: <CheckCircle2 className="w-6 h-6" />, title: "Zniżka na szkolenie Providera", desc: "Uczestnicy webinarów otrzymują specjalną ofertę na pełne szkolenie i certyfikat Providera GoBrain." },
              ].map(({ icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeInUp}
                  className="bg-background rounded-2xl border border-border p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              <Video className="w-4 h-4" />
              Bezpłatny udział
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
              Chcesz wiedzieć więcej o GoBrain?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/80 text-lg mb-8">
              Zapisz się na webinar lub skontaktuj się bezpośrednio — opowiemy o metodzie i dobierzemy najlepsze rozwiązanie.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-13 px-8 text-base font-semibold bg-white text-primary hover:bg-white/90"
                onClick={() => setActiveModal("Darmowy webinar GoBrain — termin do ustalenia")}
              >
                <Send className="w-4 h-4 mr-2" />
                Zapisz się bezpłatnie
              </Button>
              <Button size="lg" variant="outline" className="h-13 px-8 text-base font-semibold border-white text-white hover:bg-white hover:text-primary" asChild>
                <a href="mailto:gobrainterapeuta@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  gobrainterapeuta@gmail.com
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
