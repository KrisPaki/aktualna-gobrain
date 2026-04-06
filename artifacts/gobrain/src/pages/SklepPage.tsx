import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, ShoppingCart, Shield, CreditCard, Truck, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import productItsImg from "@/assets/product-its-gobrain.png";
import productSchoolImg from "@/assets/product-its-school.png";
import productTerapeutaImg from "@/assets/product-terapeuta.png";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const products = [
  {
    id: "its-etap1",
    badge: "Bestseller",
    badgeColor: "bg-primary text-primary-foreground",
    title: "ITS GoBrain",
    subtitle: "'Zabawy z dźwiękami' — Etap 1",
    price: "329",
    priceNote: "PLN (brutto)",
    img: productItsImg,
    imgAlt: "Pudełko produktu ITS GoBrain Etap 1",
    target: "Dla dzieci od pi\u0105tego roku \u017cycia \u2014 do stosowania w domu",
    features: [
      "4 poziomy trudności",
      "20 zadań treningowych",
      "Gry bonusowe",
      "Platforma online + aplikacja Android i PC",
      "Dostęp przez przeglądarkę internetową",
      "System automatycznego dostosowania",
    ],
    cta: "Kup teraz",
    ctaHref: "https://automater.com/rest/order-viewer/buy/1073862",
    highlight: true,
  },
  {
    id: "its-etap2",
    badge: "Etap 2",
    badgeColor: "bg-accent/80 text-white",
    title: "ITS GoBrain",
    subtitle: "'Zabawy z dźwiękami' — Etap 2",
    price: "299",
    priceNote: "PLN (brutto)",
    img: productItsImg,
    imgAlt: "Pudełko produktu ITS GoBrain Etap 2",
    target: "Kontynuacja po Etapie 1 — zaawansowany trening",
    features: [
      "Zaawansowane ćwiczenia słuchowe",
      "Wyższe poziomy trudności",
      "Gry i zadania motywacyjne",
      "Platforma online + aplikacja Android i PC",
      "Wsparcie terapeutyczne w zestawie",
      "Zalecany po ukończeniu Etapu 1",
    ],
    cta: "Kup teraz",
    ctaHref: "https://automater.com/rest/order-viewer/buy/1073862",
    highlight: false,
  },
  {
    id: "its-school",
    badge: "Licencja wielostanowiskowa",
    badgeColor: "bg-orange-500 text-white",
    title: "ITS GoBrain School",
    subtitle: "Pre-end school",
    price: "799",
    priceNote: "PLN / rok (brutto)",
    img: productSchoolImg,
    imgAlt: "Program ITS GoBrain School dla terapeut\u00f3w i instytucji",
    target: "Dla terapeut\u00f3w, gabinet\u00f3w, szk\u00f3\u0142, przedszkoli, poradni, instytucji",
    features: [
      "Nieograniczona liczba użytkowników",
      "Terapeuta kontroluje czas i zakres sesji",
      "Dostęp do wszystkich zadań i poziomów",
      "Brak dobowych ograniczeń czasowych",
      "Licencja 365 dni lub bezterminowa",
      "Faktura VAT w cenie",
    ],
    cta: "Zamów licencję",
    ctaHref: "mailto:gobrainterapeuta@gmail.com?subject=Zamówienie ITS GoBrain School",
    highlight: false,
  },
  {
    id: "terapeuta",
    badge: "Dla specjalistów",
    badgeColor: "bg-foreground text-background",
    title: "Platforma Terapeuta",
    subtitle: "Narzędzie diagnostyczne i terapeutyczne",
    price: null,
    priceNote: "Cena na zapytanie",
    img: productTerapeutaImg,
    imgAlt: "Platforma Terapeuta GoBrain",
    target: "Dla terapeut\u00f3w: logoped\u00f3w, pedagog\u00f3w, psycholog\u00f3w, itp.",
    features: [
      "PreTest i PostTest (diagnoza słuchu)",
      "Monitoring postępów podopiecznych",
      "Ankiety i kwestionariusze",
      "Tytuł Providera GoBrain",
      "Dostęp do szkoleń certyfikacyjnych",
      "Wsparcie techniczne i merytoryczne",
    ],
    cta: "Zapytaj o cenę",
    ctaHref: "mailto:gobrainterapeuta@gmail.com?subject=Platforma Terapeuta - zapytanie o cenę",
    highlight: false,
  },
];

const reviews = [
  {
    name: "Katarzyna W.",
    role: "Mama 7-latka",
    rating: 5,
    text: "Program działa — po 3 miesiącach syn zaczął skupiać się na lekcjach. Polecam każdemu rodzicowi, który walczy z problemami z koncentracją.",
  },
  {
    name: "Logopeda Joanna M.",
    role: "Logopeda, Warszawa",
    rating: 5,
    text: "Platforma Terapeuta ułatwiła mi pracę z dziećmi z CAPD. Bardzo czytelne raporty i łatwy dostęp do wyników.",
  },
  {
    name: "Magdalena K.",
    role: "Mama 9-latki",
    rating: 5,
    text: "Córka uwielbia grać w te zadania! A co ważniejsze — nauczycielka w szkole sama zwróciła uwagę, że dziecko poprawiło koncentrację.",
  },
];

export default function SklepPage() {
  return (
    <div className="bg-background font-sans pt-16">

      {/* Hero */}
      <section className="py-16 md:py-24 bg-card/30 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <ShoppingCart className="w-4 h-4" />
              Sklep GoBrain
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
              Wybierz program<br className="hidden md:block" /> dopasowany do potrzeb
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              {'Interaktywny trening słuchowy dla dzieci od piątego roku życia. Bezpieczna płatność, natychmiastowy dostęp, faktura VAT.'}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              {[
                { icon: Shield, label: "Bezpieczna płatność" },
                { icon: Truck, label: "Natychmiastowy dostęp" },
                { icon: CreditCard, label: "Faktura VAT" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-primary" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
          >
            {products.map((p) => (
              <motion.div
                key={p.id}
                variants={fadeInUp}
                className={`relative flex flex-col rounded-2xl border ${p.highlight ? "border-primary shadow-xl shadow-primary/10" : "border-border"} bg-card overflow-hidden`}
              >
                {/* Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                </div>

                {/* Image */}
                <div className="relative overflow-hidden bg-muted h-48">
                  <img
                    src={p.img}
                    alt={p.imgAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h2 className="text-lg font-bold text-foreground">{p.title}</h2>
                  <p className="text-sm text-primary font-medium mb-2">{p.subtitle}</p>
                  <p className="text-xs text-muted-foreground mb-4">{p.target}</p>

                  {/* Price */}
                  <div className="mb-5">
                    {p.price ? (
                      <>
                        <span className="text-3xl font-extrabold text-foreground">{p.price}</span>
                        <span className="text-sm text-muted-foreground ml-1">{p.priceNote}</span>
                      </>
                    ) : (
                      <span className="text-lg font-semibold text-muted-foreground">{p.priceNote}</span>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    asChild
                    className={`w-full font-semibold ${p.highlight ? "shadow-lg shadow-primary/20" : ""}`}
                    variant={p.highlight ? "default" : "outline"}
                  >
                    <a href={p.ctaHref} target={p.ctaHref.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {p.cta}
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-card/40 border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
              Co mówią nasi klienci
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((r, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-background rounded-2xl border border-border p-6">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">„{r.text}"</p>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to buy */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-foreground mb-10">
              Jak kupić i zacząć?
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              {[
                { n: "1", title: "Wybierz produkt", desc: "Kliknij 'Kup teraz' przy wybranym programie. Zostaniesz przekierowany na bezpieczną platformę płatności." },
                { n: "2", title: "Opłać i odbierz kod", desc: "Po opłaceniu zamówienia otrzymasz mailem unikalny kod aktywacyjny — natychmiast po zaksięgowaniu płatności." },
                { n: "3", title: "Zainstaluj i trenuj", desc: "Pobierz aplikację na Android lub PC, albo korzystaj przez przeglądarkę. Wpisz kod i zacznij trening!" },
              ].map((step) => (
                <motion.div key={step.n} variants={fadeInUp} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold">{step.n}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-12 pt-8 border-t border-border text-sm text-muted-foreground">
              Masz pytania?{" "}
              <Link to="/faq" className="text-primary hover:underline font-medium">
                Sprawdź FAQ
              </Link>{" "}
              lub{" "}
              <Link to="/pomoc" className="text-primary hover:underline font-medium">
                skontaktuj się z nami
              </Link>
              .
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary/5 border-t border-primary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Gotowy na zmianę?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Dołącz do tysięcy rodzin, które już poprawiły koncentrację i wyniki edukacyjne swoich dzieci.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="font-semibold shadow-lg shadow-primary/20 h-14 px-8 text-base" asChild>
                <a href="https://automater.com/rest/order-viewer/buy/1073862" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Kup kod aktywacyjny
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-background" asChild>
                <Link to="/its">
                  Dowiedz się więcej <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
