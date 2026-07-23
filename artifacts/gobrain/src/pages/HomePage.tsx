import { motion, type Variants, animate, useInView } from "framer-motion";
import { SEO } from "@/components/SEO";
import ProblemCyclerComponent from "@/components/ProblemCycler";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import anetaPakielaImg from "@/assets/aneta-pakiela-new.webp";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import heroChildImg from "@/assets/hero-child-new.webp";
import childTabletImg from "@/assets/child-tablet-fun.webp";
import therapistChildImg from "@/assets/therapist-child.webp";
import childrenClassroomImg from "@/assets/children-classroom.webp";
import parentChildImg from "@/assets/parent-child-home.webp";
import productItsImg from "@/assets/product-its-gobrain.webp";
import productSchoolImg from "@/assets/product-its-school-ai.webp";
import productTerapeutaImg from "@/assets/product-terapeuta.webp";
import szkoleniaHeaderImg from "@/assets/aneta-pakiela.jpg";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { 
  CheckCircle2, 
  Brain, 
  School, 
  Stethoscope, 
  GraduationCap, 
  Activity, 
  Ear,
  Quote,
  ChevronRight,
  Music,
  Star,
  Zap,
  Heart,
  Target,
  BookOpen,
  Headphones,
  Smile,
  Trophy,
  Users,
  Shield,
  BarChart2,
  TrendingUp,
  Mic,
  Award,
  Volume2,
  Gamepad2,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AUTOMATER_PRODUCTS } from "@/config/automater";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return controls.stop;
  }, [target]);

  return <span ref={ref}>{value}{suffix}</span>;
}

function VideoEmbed() {
  const [active, setActive] = useState(false);
  if (active) {
    return (
      <iframe
        src="/gobrain-video/?embed=1&autoplay=1"
        className="w-full h-full"
        title="Film marketingowy GoBrain"
        allow="autoplay"
        style={{ display: "block" }}
      />
    );
  }
  return (
    <button
      onClick={() => setActive(true)}
      aria-label="Odtwórz film o GoBrain"
      className="w-full h-full relative flex items-center justify-center bg-gradient-to-br from-primary/90 to-primary cursor-pointer group focus:outline-none"
      style={{ border: "none", padding: 0 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08)_0%,_transparent_70%)]" />
      <div className="relative z-10 flex flex-col items-center gap-4 select-none">
        <div className="w-20 h-20 rounded-full bg-white/15 flex items-center justify-center shadow-lg group-hover:bg-white/25 group-hover:scale-110 transition-all duration-300">
          <Play className="w-9 h-9 text-white fill-white ml-1" />
        </div>
        <span className="text-white/80 text-sm font-medium tracking-wide">Odtwórz film (43 s)</span>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-white/30" />
        ))}
      </div>
    </button>
  );
}

function ProgressBar({ label, before, after, color, bgColor, delay = 0 }: {
  label: string; before: number; after: number; color: string; bgColor: string; delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="font-semibold text-foreground">{label}</span>
        <span className={`font-black ${color}`}>+{after - before} pkt</span>
      </div>
      <div className="relative h-6 bg-muted rounded-full overflow-hidden">
        <div className="absolute h-full bg-muted-foreground/20 rounded-full" style={{ width: `${before}%` }} />
        <motion.div
          className={`absolute h-full rounded-full ${bgColor}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${after}%` } : { width: 0 }}
          transition={{ duration: 1.3, ease: "easeOut", delay }}
        />
        <div className="absolute inset-0 flex items-center px-3">
          <motion.span
            className="text-xs font-black text-white drop-shadow ml-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: delay + 0.9 }}
          >
            {after}%
          </motion.span>
        </div>
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Przed: {before}%</span>
        <span className={color}>Po 8 tygodniach: {after}%</span>
      </div>
    </div>
  );
}

function RingChart({ percent, color, label, sublabel }: {
  percent: number; color: string; label: string; sublabel: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const r = 38;
  const circ = 2 * Math.PI * r;
  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={r} fill="none" stroke="currentColor" strokeWidth="10" className="text-muted" />
          <motion.circle
            cx="50" cy="50" r={r}
            fill="none" stroke={color} strokeWidth="10" strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            animate={inView ? { strokeDashoffset: circ - (circ * percent) / 100 } : { strokeDashoffset: circ }}
            transition={{ duration: 1.6, ease: "easeOut", delay: 0.3 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-xl font-black text-foreground"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ delay: 1, type: "spring" }}
          >
            {percent}%
          </motion.span>
        </div>
      </div>
      <p className="font-bold text-foreground text-sm text-center leading-tight">{label}</p>
      <p className="text-xs text-muted-foreground text-center">{sublabel}</p>
    </div>
  );
}

export default function HomePage() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <SEO
        title="ITS GoBrain – Trening słuchowy dla dzieci"
        description="GoBrain to innowacyjny trening słuchowy dla dzieci od 5 lat. Poprawia koncentrację, pamięć słuchową i mowę. Efekty widoczne po 4–8 tygodniach. Wypróbuj!"
        canonical="/"
      />
      <div className="pt-16">
        {/* SECTION 1 - Hero */}
        <section className="relative py-24 md:py-36 overflow-hidden bg-primary text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={heroChildImg}
              alt="Dziecko korzystające z interaktywnego treningu słuchowego ITS GoBrain w słuchawkach"
              className="w-full h-full object-cover opacity-60"
              style={{ objectPosition: "80% center", filter: "brightness(1.05)" }}
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/10 lg:from-primary/90 lg:via-primary/60 lg:to-primary/5" />
          </div>

          {/* Floating animated icons */}
          {[
            { icon: Music, x: "8%", y: "15%", color: "text-blue-200/40", delay: 0, size: "w-8 h-8" },
            { icon: Star, x: "85%", y: "20%", color: "text-yellow-200/40", delay: 0.5, size: "w-6 h-6" },
            { icon: Headphones, x: "90%", y: "70%", color: "text-purple-200/40", delay: 1, size: "w-7 h-7" },
            { icon: Heart, x: "5%", y: "75%", color: "text-pink-200/40", delay: 0.8, size: "w-6 h-6" },
            { icon: Zap, x: "15%", y: "45%", color: "text-orange-200/40", delay: 1.2, size: "w-5 h-5" },
            { icon: Smile, x: "78%", y: "45%", color: "text-green-200/40", delay: 0.3, size: "w-7 h-7" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`absolute ${item.color} pointer-events-none hidden lg:block`}
              style={{ left: item.x, top: item.y }}
              animate={{ y: [0, -12, 0], rotate: [0, 8, -8, 0] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
            >
              <item.icon className={item.size} />
            </motion.div>
          ))}

          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-2xl">
              {/* Text */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full mb-6 font-black text-base uppercase tracking-widest border border-white/20 shadow-md" style={{ background: "linear-gradient(90deg, #0066cc, #7c3aed, #ea580c)", color: "#fff", letterSpacing: "0.12em" }}>
                  <Brain className="w-5 h-5 shrink-0" />
                  <span>ITS GoBrain</span>
                </motion.div>
                
                <motion.h1 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4 uppercase">
                  Poprawa koncentracji i pamięci słuchowej
                </motion.h1>

                <motion.p variants={fadeInUp} className="text-lg md:text-xl font-semibold text-orange-300 mb-6">
                  Interaktywny Trening GoBrain dla dzieci (od 5 roku życia)
                </motion.p>

                <motion.p variants={fadeInUp} className="text-base md:text-lg text-white/90 mb-4 leading-relaxed max-w-xl">
                  Zauważasz, że Twoje dziecko "słyszy, ale nie słucha"? Ma problemy z czytaniem, pisaniem lub rozumieniem poleceń?
                </motion.p>

                <motion.p variants={fadeInUp} className="text-base md:text-lg text-white/80 mb-10 leading-relaxed max-w-xl">
                  GoBrain to innowacyjne narzędzie stworzone, by wspierać terapię uwagi i koncentracji słuchowej najmłodszych poprzez angażującą zabawę.
                </motion.p>
                
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button size="lg" className="text-base h-14 px-8 bg-white text-primary hover:bg-white/90 shadow-xl shadow-black/10" asChild data-testid="hero-buy-btn">
                    <Link to="/sklep">Przejdź do sklepu</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-base h-14 px-8 border-white/30 text-white hover:bg-white/10 bg-transparent" asChild data-testid="hero-learn-btn">
                    <Link to="/its">Dowiedz się więcej</Link>
                  </Button>
                </motion.div>

                {/* Mini stat pills */}
                <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                  {[
                    { icon: "🧠", label: "5000+ dzieci" },
                    { icon: "⭐", label: "4.9/5.0 ocena" },
                    { icon: "🎵", label: "100 ćwiczeń" },
                  ].map((s, i) => (
                    <div key={i} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 shadow-sm text-sm font-medium text-white backdrop-blur-sm">
                      <span>{s.icon}</span>{s.label}
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="py-12 bg-primary">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground"
            >
              {[
                { target: 5000, suffix: "+", label: "Dzieci skorzystało" },
                { target: 98, suffix: "%", label: "Zadowolonych rodziców" },
                { target: 100, suffix: "", label: "Zadań treningowych" },
                { target: 4, suffix: "", label: "Poziomy trudności" },
              ].map((stat, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center gap-1">
                  <span className="text-4xl md:text-5xl font-black">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </span>
                  <span className="text-primary-foreground/80 text-sm font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION - For whom? */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

              {/* Text side — LEFT */}
              <div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="mb-10"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    <Users className="w-4 h-4" />
                    <span>Dla kogo?</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Dla kogo jest program ITS GoBrain?</h2>
                  <p className="text-xl text-muted-foreground">{'Program dla dzieci od piątego roku życia'}</p>
                </motion.div>

                <ProblemCyclerComponent />
              </div>

              {/* Photo side — RIGHT */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative h-full min-h-[350px]"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl h-full">
                  <img src={therapistChildImg} srcSet="/img/therapist-child-640w.webp 640w, /img/therapist-child-1280w.webp 1280w" sizes="(max-width: 1024px) 100vw, 50vw" alt="Terapeutka logopedka pracuje z dzieckiem z interaktywnym treningiem słuchowym GoBrain" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 bg-background rounded-2xl border border-border shadow-xl p-4 flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Skuteczność</p>
                    <p className="font-bold text-foreground">Potwierdzona klinicznie</p>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* SECTION 8 - Pricing (Merged with Products) */}
        <section className="py-24 bg-[#f7f9fc] border-t border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Header banner with girl image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[32px] bg-background border border-border/80 shadow-xl mb-16 grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[320px]"
            >
              {/* Left side: Image of the girl */}
              <div className="lg:col-span-5 relative min-h-[240px] lg:min-h-auto">
                <img 
                  src={childTabletImg} 
                  srcSet="/img/child-tablet-fun-640w.webp 640w, /img/child-tablet-fun-1280w.webp 1280w" 
                  sizes="(max-width: 1024px) 100vw, 35vw" 
                  alt="Dziecko ćwiczy interaktywny trening słuchowy ITS GoBrain na tablecie" 
                  className="absolute inset-0 w-full h-full object-cover" 
                  loading="lazy" 
                  decoding="async" 
                />
              </div>
              
              {/* Right side: Text details */}
              <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 w-fit">
                  <Brain className="w-3.5 h-3.5" />
                  <span>Rozwiązania i cennik</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground mb-4 tracking-tight">
                  Wybierz odpowiednie rozwiązanie GoBrain
                </h2>
                <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed max-w-xl">
                  Programy treningowe, narzędzia diagnostyczne oraz szkolenia dopasowane do Twoich potrzeb — dla domu, szkoły i gabinetu terapeutycznego.
                </p>
              </div>
            </motion.div>

            {/* Pricing cards */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 items-stretch"
            >
              {/* Card 1: ITS GoBrain (Most Popular) */}
              <motion.div variants={fadeInUp} className="bg-background rounded-3xl border-2 border-primary shadow-xl relative xl:col-span-1 flex flex-col overflow-hidden">
                <div className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full whitespace-nowrap shadow-md">
                  Najpopularniejszy
                </div>
                <div className="aspect-[16/10] w-full overflow-hidden relative">
                  <img src={productItsImg} alt="ITS GoBrain" className="w-full h-full object-cover object-center" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-base font-bold text-foreground mb-1">ITS GoBrain</h3>
                  <p className="text-muted-foreground mb-4 text-xs leading-relaxed min-h-[48px]">Indywidualny trening dla dziecka, do domu — dla dzieci od piątego roku życia</p>
                  <div className="flex gap-2 mb-4 flex-wrap">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">390 PLN</span>
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {["Pełny trening słuchowy (2 etapy)", "Zabawy z dźwiękami", "PC (Windows) i Android"].map((feat, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-[11px] font-medium text-foreground/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full h-10 text-xs font-semibold mt-auto" asChild data-testid="pricing-main-btn">
                    <a href={AUTOMATER_PRODUCTS.itsEtap1} target="_blank" rel="noopener noreferrer">
                      Kup kod aktywacyjny
                    </a>
                  </Button>
                </div>
              </motion.div>

              {/* Card 2: Karta Mowy */}
              <motion.div variants={fadeInUp} className="bg-background rounded-3xl border-2 border-green-400 shadow-lg relative flex flex-col overflow-hidden">
                <div className="absolute top-3 left-3 z-10 bg-green-500 text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full whitespace-nowrap shadow-md">
                  Nowość
                </div>
                <div className="aspect-[16/10] w-full overflow-hidden relative">
                  <img src={therapistChildImg} alt="Karta Mowy" className="w-full h-full object-cover object-[center_15%]" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-base font-bold text-foreground mb-1">Karta Mowy</h3>
                  <p className="text-muted-foreground mb-4 text-xs leading-relaxed min-h-[48px]">Cyfrowe narzędzie diagnostyczne dla logopedów i terapeutów</p>
                  <div className="flex gap-2 mb-4 flex-wrap">
                    <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full font-medium">389 PLN</span>
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {["Karta badania mowy", "Gry logopedyczne online", "Materiały PDF do druku"].map((feat, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-[11px] font-medium text-foreground/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full h-10 text-xs font-semibold bg-green-600 hover:bg-green-700 text-white mt-auto" asChild data-testid="pricing-karta-btn">
                    <Link to="/karta-mowy">Dowiedz się więcej</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Card 3: School */}
              <motion.div variants={fadeInUp} className="bg-background rounded-3xl border-2 border-orange-400 shadow-lg relative flex flex-col overflow-hidden">
                <div className="absolute top-3 left-3 z-10 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full whitespace-nowrap shadow-md">
                  Grupowe
                </div>
                <div className="aspect-[16/10] w-full overflow-hidden relative">
                  <img src={productSchoolImg} alt="ITS GoBrain Pre & School" className="w-full h-full object-cover object-center" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-base font-bold text-foreground mb-1">ITS GoBrain Pre & School</h3>
                  <p className="text-muted-foreground mb-4 text-xs leading-relaxed min-h-[48px]">Dla terapeutów, szkół, przedszkoli, poradni i instytucji</p>
                  <div className="flex gap-2 mb-4">
                    <span className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded-full font-medium">799 PLN / rok</span>
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {["Wieloużytkownikowy dostęp", "Panel terapeuty", "Monitoring postępu"].map((feat, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-[11px] font-medium text-foreground/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full h-10 text-xs border-orange-400 text-orange-600 hover:bg-orange-50 mt-auto" asChild data-testid="pricing-school-btn">
                    <Link to="/its-school">Zamów licencję</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Card 4: Platforma Terapeuty */}
              <motion.div variants={fadeInUp} className="bg-background rounded-3xl border-2 border-purple-400 shadow-lg relative flex flex-col overflow-hidden">
                <div className="absolute top-3 left-3 z-10 bg-purple-600 text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full whitespace-nowrap shadow-md">
                  Narzędzia
                </div>
                <div className="aspect-[16/10] w-full overflow-hidden relative">
                  <img src={productTerapeutaImg} alt="Platforma Terapeuty" className="w-full h-full object-cover object-[center_10%]" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-base font-bold text-foreground mb-1">Platforma Terapeuty</h3>
                  <p className="text-muted-foreground mb-4 text-xs leading-relaxed min-h-[48px]">Dla terapeutów: logopedów, pedagogów, psychologów, itp.</p>
                  <div className="flex gap-2 mb-4">
                    <span className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full font-medium">799 zł</span>
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {["Platforma diagnostyczna", "Test 8 obszarów", "Kwestionariusze i ankiety"].map((feat, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-[11px] font-medium text-foreground/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full h-10 text-xs border-purple-400 text-purple-700 hover:bg-purple-50 mt-auto" asChild data-testid="pricing-therapist-btn">
                    <Link to="/strefa-terapeuty">Dowiedz się więcej</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Card 5: Szkolenia */}
              <motion.div variants={fadeInUp} className="bg-background rounded-3xl border-2 border-teal-400 shadow-lg relative flex flex-col overflow-hidden">
                <div className="absolute top-3 left-3 z-10 bg-teal-600 text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full whitespace-nowrap shadow-md">
                  Kursy
                </div>
                <div className="aspect-[16/10] w-full overflow-hidden relative">
                  <img src={szkoleniaHeaderImg} alt="Szkolenia" className="w-full h-full object-cover object-[center_10%]" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-base font-bold text-foreground mb-1">Szkolenia</h3>
                  <p className="text-muted-foreground mb-4 text-xs leading-relaxed min-h-[48px]">Kursy i webinary dla terapeutów, logopedów i pedagogów</p>
                  <div className="flex gap-2 mb-4">
                    <span className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded-full font-medium">Online</span>
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {["Kursy dla specjalistów", "Webinary i nagrania", "Certyfikat GoBrain"].map((feat, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-[11px] font-medium text-foreground/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full h-10 text-xs border-teal-400 text-teal-700 hover:bg-teal-50 mt-auto" asChild data-testid="pricing-training-btn">
                    <Link to="/szkolenia-i-webinary">Zobacz szkolenia</Link>
                  </Button>
                </div>
              </motion.div>

            </motion.div>

            {/* Link to other educational programs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 flex justify-center"
            >
              <Link
                to="/programy-edukacyjne"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors border border-primary/20 hover:border-primary/40 px-6 py-3 rounded-full bg-primary/5 hover:bg-primary/10"
                data-testid="link-programy-edukacyjne"
              >
                <BookOpen className="w-4 h-4" />
                Zobacz też: Programy edukacyjne — gry logopedyczne i ćwiczenia dla dzieci
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CO NAS WYRÓZNIA */}
        <section className="py-24 bg-gray-50/40 border-b border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-12 text-center lg:text-left"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-extrabold text-foreground tracking-tight mb-4">
                Co wyróżnia metodę ITS GoBrain?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl">
                Poznaj cechy i rozwiązania, które sprawiają, że trening słuchowy jest tak angażujący i skuteczny.
              </motion.p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="relative z-10 grid grid-cols-6 gap-4"
            >
              {/* Card 1: 100% (Col-span 2) */}
              <motion.div variants={fadeInUp} className="col-span-full lg:col-span-2 flex">
                <Card className="relative w-full flex overflow-hidden rounded-3xl bg-background border border-border/80 hover:shadow-lg transition-all duration-300">
                  <CardContent className="relative m-auto size-fit pt-8 pb-8 flex flex-col items-center">
                    <div className="relative flex h-24 w-56 items-center">
                      <svg className="text-primary/10 absolute inset-0 size-full" viewBox="0 0 254 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="mx-auto block w-fit text-5xl font-black text-primary">100%</span>
                    </div>
                    <div className="text-center mt-6">
                      <h3 className="text-lg font-bold text-foreground transition">Bez frustracji</h3>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                        Program sam rozpoznaje, kiedy dziecku jest za trudno lub za łatwo, i dostosowuje zadania na bieżąco. Dziecko nie musi wołać rodzica — radzi sobie samo.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Card 2: Dial (Col-span 2) */}
              <motion.div variants={fadeInUp} className="col-span-full sm:col-span-3 lg:col-span-2">
                <Card className="relative overflow-hidden bg-background border border-border/80 hover:shadow-lg transition-all duration-300 rounded-3xl h-full flex flex-col justify-between">
                  <CardContent className="pt-8 pb-8 flex-1 flex flex-col justify-between">
                    <div className="relative mx-auto flex aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                      <svg className="m-auto size-20" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 10 50 A 40 40 0 0 1 90 50" stroke="currentColor" strokeWidth="8" className="text-zinc-200 dark:text-zinc-800" strokeLinecap="round" />
                        <path d="M 10 50 A 40 40 0 0 1 70 18" stroke="url(#dialGradient)" strokeWidth="8" strokeLinecap="round" />
                        <line x1="50" y1="50" x2="65" y2="25" stroke="currentColor" strokeWidth="4" className="text-primary-600 dark:text-primary-500" strokeLinecap="round" />
                        <circle cx="50" cy="50" r="6" stroke="currentColor" strokeWidth="3" className="text-primary-600 dark:text-primary-500 fill-background" />
                        <defs>
                          <linearGradient id="dialGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="currentColor" className="text-primary-600/40" />
                            <stop offset="100%" stopColor="currentColor" className="text-primary-600 dark:text-primary-500" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="text-center mt-6">
                      <h3 className="text-lg font-bold text-foreground transition">Adaptacja w czasie rzeczywistym</h3>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                        System automatycznie i na bieżąco dopasowuje poziom trudności zadań do możliwości dziecka – bez potrzeby ręcznej korekty.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Card 3: Wave/Line chart (Col-span 2) */}
              <motion.div variants={fadeInUp} className="col-span-full sm:col-span-3 lg:col-span-2">
                <Card className="relative overflow-hidden bg-background border border-border/80 hover:shadow-lg transition-all duration-300 rounded-3xl h-full flex flex-col justify-between">
                  <CardContent className="pt-8 pb-8 flex-1 flex flex-col justify-between">
                    <div className="pt-6 lg:px-6">
                      <svg className="text-muted-foreground w-full h-auto" viewBox="0 0 386 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="386" height="123" rx="10" />
                        <g>
                          <circle className="text-primary/20" cx="29" cy="29" r="15" fill="currentColor" />
                          <circle className="text-primary/50" cx="29" cy="29" r="10" fill="currentColor" />
                          <circle className="text-primary" cx="29" cy="29" r="5" fill="currentColor" />
                          <text x="52" y="34" fill="currentColor" className="text-foreground text-sm font-semibold" style={{ fontFamily: 'inherit' }}>Motywacja</text>
                          <text x="370" y="34" textAnchor="end" fill="currentColor" className="text-primary text-sm font-semibold" style={{ fontFamily: 'inherit' }}>92% skupienia</text>
                        </g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3 123C3 123 14.3298 94.153 35.1282 88.0957C55.9266 82.0384 65.9333 80.5508 65.9333 80.5508C65.9333 80.5508 80.699 80.5508 92.1777 80.5508C103.656 80.5508 100.887 63.5348 109.06 63.5348C117.233 63.5348 117.217 91.9728 124.78 91.9728C132.343 91.9728 142.264 78.03 153.831 80.5508C165.398 83.0716 186.825 91.9728 193.761 91.9728C200.697 91.9728 206.296 63.5348 214.07 63.5348C221.844 63.5348 238.653 93.7771 244.234 91.9728C249.814 90.1684 258.8 60 266.19 60C272.075 60 284.1 88.057 286.678 88.0957C294.762 88.2171 300.192 72.9284 305.423 72.9284C312.323 72.9284 323.377 65.2437 335.553 63.5348C347.729 61.8259 348.218 82.07 363.639 80.5508C367.875 80.1335 372.949 82.2017 376.437 87.1008C379.446 91.3274 381.054 97.4325 382.521 104.647C383.479 109.364 382.521 123 382.521 123"
                          fill="url(#paint0_linear_0_106_new)"
                        />
                        <path
                          className="text-primary"
                          d="M3 121.077C3 121.077 15.3041 93.6691 36.0195 87.756C56.7349 81.8429 66.6632 80.9723 66.6632 80.9723C66.6632 80.9723 80.0327 80.9723 91.4656 80.9723C102.898 80.9723 100.415 64.2824 108.556 64.2824C116.696 64.2824 117.693 92.1332 125.226 92.1332C132.759 92.1332 142.07 78.5115 153.591 80.9723C165.113 83.433 186.092 92.1332 193 92.1332C199.908 92.1332 205.274 64.2824 213.017 64.2824C220.76 64.2824 237.832 93.8946 243.39 92.1332C248.948 90.3718 257.923 60.5 265.284 60.5C271.145 60.5 283.204 87.7182 285.772 87.756C293.823 87.8746 299.2 73.0802 304.411 73.0802C311.283 73.0802 321.425 65.9506 333.552 64.2824C345.68 62.6141 346.91 82.4553 362.27 80.9723C377.629 79.4892 383 106.605 383 106.605"
                          stroke="currentColor"
                          strokeWidth="3"
                        />
                        <defs>
                          <linearGradient id="paint0_linear_0_106_new" x1="3" y1="60" x2="3" y2="123" gradientUnits="userSpaceOnUse">
                            <stop className="text-primary/10" stopColor="currentColor" />
                            <stop className="text-transparent" offset="1" stopColor="currentColor" stopOpacity="0.103775" />
                          </linearGradient>
                          <clipPath id="clip0_0_106">
                            <rect width="358" height="30" fill="white" transform="translate(14 14)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="text-center mt-8">
                      <h3 className="text-lg font-bold text-foreground transition">Skuteczny tam, gdzie inne zawodzą</h3>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                        Działa nawet przy braku motywacji dziecka — nie wymaga, żeby rodzic stale nadzorował i zaznaczał odpowiedzi za dziecko.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Card 4: Shield with lines (Col-span 3) */}
              <motion.div variants={fadeInUp} className="col-span-full lg:col-span-3">
                <Card className="relative overflow-hidden bg-background border border-border/80 hover:shadow-lg transition-all duration-300 rounded-3xl h-full flex flex-col justify-between">
                  <CardContent className="grid h-full pt-8 pb-8 sm:grid-cols-2 items-center">
                    <div className="relative z-10 flex flex-col justify-between h-full space-y-12 lg:space-y-6">
                      <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                        <Shield className="m-auto size-5 text-primary" strokeWidth={1.5} />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-foreground transition">Unikalne podejście</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Zaczynamy od prostszego łączenia patrzenia ze słuchaniem. Wizualne podpowiedzi z czasem stopniowo zanikają, stymulując sam słuch.
                        </p>
                      </div>
                    </div>
                    <div className="relative -mb-8 -mr-8 mt-6 h-fit border-l border-t p-6 py-6 sm:ml-6 rounded-tl-3xl bg-gray-50/50">
                      <div className="absolute left-3 top-2 flex gap-1">
                        <span className="block size-2 rounded-full border border-border bg-gray-200"></span>
                        <span className="block size-2 rounded-full border border-border bg-gray-200"></span>
                        <span className="block size-2 rounded-full border border-border bg-gray-200"></span>
                      </div>
                      <svg className="w-full sm:w-[150%]" viewBox="0 0 366 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.148438 231V179.394L1.92188 180.322L2.94482 177.73L4.05663 183.933L6.77197 178.991L7.42505 184.284L9.42944 187.985L11.1128 191.306V155.455L13.6438 153.03V145.122L14.2197 142.829V150.454V154.842L15.5923 160.829L17.0793 172.215H19.2031V158.182L20.7441 153.03L22.426 148.111V142.407L24.7471 146.86V128.414L26.7725 129.918V120.916L28.1492 118.521L28.4653 127.438L29.1801 123.822L31.0426 120.525V130.26L32.3559 134.71L34.406 145.122V137.548L35.8982 130.26L37.1871 126.049L38.6578 134.71L40.659 138.977V130.26V126.049L43.7557 130.26V123.822L45.972 112.407L47.3391 103.407V92.4726L49.2133 98.4651V106.053L52.5797 89.7556L54.4559 82.7747L56.1181 87.9656L58.9383 89.7556V98.4651L60.7617 103.407L62.0545 123.822L63.8789 118.066L65.631 122.082L68.5479 114.229L70.299 109.729L71.8899 118.066L73.5785 123.822V130.26L74.9446 134.861L76.9243 127.87L78.352 134.71V138.977L80.0787 142.407V152.613L83.0415 142.407V130.26L86.791 123.822L89.0121 116.645V122.082L90.6059 127.87L92.3541 131.77L93.7104 123.822L95.4635 118.066L96.7553 122.082V137.548L99.7094 140.988V131.77L101.711 120.525L103.036 116.645V133.348L104.893 136.218L106.951 140.988L108.933 134.71L110.797 130.26L112.856 140.988V148.111L115.711 152.613L117.941 145.122L119.999 140.988V148.111L123.4 152.613L125.401 158.182L130.547 150.454V156.566L131.578 155.455L134.143 158.182L135.594 168.136L138.329 158.182L140.612 160.829L144.681 169.5L147.011 155.455L148.478 151.787L151.02 152.613L154.886 145.122L158 143.412L159.406 140.637L159.496 133.348L162.295 127.87V122.082L163.855 116.645V109.729L164.83 104.407L166.894 109.729L176.249 98.4651L178.254 106.169L180.77 98.4651V81.045L182.906 69.1641L184.8 56.8669L186.477 62.8428L187.848 79.7483L188.849 106.169L191.351 79.7483L193.485 75.645V98.4651L196.622 94.4523L198.623 87.4228V79.7483L200.717 75.645L202.276 81.045V89.3966L203.638 113.023L205.334 99.8037L207.164 94.4523L208.982 98.4651V102.176L211.267 107.64L212.788 81.045L214.437 66.0083L216.19 62.8428L217.941 56.8669V73.676V79.7483L220.28 75.645L222.516 66.0083V73.676H226.174V84.8662L228.566 98.4651L230.316 75.645L233.61 94.4523V104.25L236.882 102.176L239.543 113.023L241.057 98.4651L243.604 94.4523L244.975 106.169L245.975 87.4228L247.272 89.3966L250.732 84.8662L251.733 96.7549L254.644 94.4523L257.452 99.8037L259.853 91.3111L261.193 84.8662L264.162 75.645L265.808 87.4228L267.247 58.4895L269.757 66.0083L276.625 13.5146L273.33 58.4895L276.25 67.6563L282.377 20.1968L281.37 58.4895V66.0083L283.579 75.645L286.033 56.8669L287.436 73.676L290.628 77.6636L292.414 84.8662L294.214 61.3904L296.215 18.9623L300.826 0.947876L297.531 56.8669L299.973 62.8428L305.548 22.0598L299.755 114.956L301.907 105.378L304.192 112.688V94.9932L308.009 80.0829L310.003 94.9932L311.004 102.127L312.386 105.378L315.007 112.688L316.853 98.004L318.895 105.378L321.257 94.9932L324.349 100.81L325.032 80.0829L327.604 61.5733L329.308 82.3223L333.525 52.7986L334.097 52.145L334.735 55.6812L337.369 59.8108V73.676L340.743 87.9656L343.843 96.3728L348.594 82.7747L349.607 81.045L351 89.7556L352.611 96.3728L355.149 94.9932L356.688 102.176L359.396 108.784L360.684 111.757L365 95.7607V231H148.478H0.148438Z"
                          fill="url(#paint0_linear_0_705_new)"
                        />
                        <path
                          className="text-primary"
                          d="M1 179.796L4.05663 172.195V183.933L7.20122 174.398L8.45592 183.933L10.0546 186.948V155.455L12.6353 152.613V145.122L15.3021 134.71V149.804V155.455L16.6916 160.829L18.1222 172.195V158.182L19.8001 152.613L21.4105 148.111V137.548L23.6863 142.407V126.049L25.7658 127.87V120.525L27.2755 118.066L29.1801 112.407V123.822L31.0426 120.525V130.26L32.3559 134.71L34.406 145.122V137.548L35.8982 130.26L37.1871 126.049L38.6578 134.71L40.659 138.977V130.26V126.049L43.7557 130.26V123.822L45.972 112.407L47.3391 103.407V92.4726L49.2133 98.4651V106.053L52.5797 89.7556L54.4559 82.7747L56.1181 87.9656L58.9383 89.7556V98.4651L60.7617 103.407L62.0545 123.822L63.8789 118.066L65.631 122.082L68.5479 114.229L70.299 109.729L71.8899 118.066L73.5785 123.822V130.26L74.9446 134.861L76.9243 127.87L78.352 134.71V138.977L80.0787 142.407V152.613L83.0415 142.407V130.26L86.791 123.822L89.0121 116.645V122.082L90.6059 127.87L92.3541 131.77L93.7104 123.822L95.4635 118.066L96.7553 122.082V137.548L99.7094 140.988V131.77L101.711 120.525L103.036 116.645V133.348L104.893 136.218L106.951 140.988L108.933 134.71L110.797 130.26L112.856 140.988V148.111L115.711 152.613L117.941 145.122L119.999 140.988L121.501 148.111L123.4 152.613L125.401 158.182L127.992 152.613L131.578 146.76V155.455L134.143 158.182L135.818 164.629L138.329 158.182L140.612 160.829L144.117 166.757L146.118 155.455L147.823 149.804L151.02 152.613L154.886 145.122L158.496 140.988V133.348L161.295 127.87V122.082L162.855 116.645V109.729L164.83 104.407L166.894 109.729L176.249 98.4651L178.254 106.169L180.77 98.4651V81.045L182.906 69.1641L184.8 56.8669L186.477 62.8428L187.848 79.7483L188.849 106.169L191.351 79.7483L193.485 75.645V98.4651L196.622 94.4523L198.623 87.4228V79.7483L200.717 75.645L202.276 81.045V89.3966L203.638 113.023L205.334 99.8037L207.164 94.4523L208.982 98.4651V102.176L211.267 107.64L212.788 81.045L214.437 66.0083L216.19 62.8428L217.941 56.8669V73.676V79.7483L220.28 75.645L222.516 66.0083V73.676H226.174V84.8662L228.566 98.4651L230.316 75.645L233.61 94.4523V104.25L236.882 102.176L239.543 113.023L241.057 98.4651L243.604 94.4523L244.975 106.169L245.975 87.4228L247.272 89.3966L250.732 84.8662L251.733 96.7549L254.644 94.4523L257.452 99.8037L259.853 91.3111L261.193 84.8662L264.162 75.645L265.808 87.4228L267.247 58.4895L269.757 66.0083L276.625 13.5146L273.33 58.4895L276.25 67.6563L282.377 20.1968L281.37 58.4895V66.0083L283.579 75.645L286.033 56.8669L287.436 73.676L290.628 77.6636L292.414 84.8662L294.214 61.3904L296.215 18.9623L300.826 0.947876L297.531 56.8669L299.973 62.8428L305.548 22.0598L299.755 114.956L301.907 105.378L304.192 112.688V94.9932L308.009 80.0829L310.003 94.9932L311.004 102.127L312.386 105.378L315.007 112.688L316.853 98.004L318.895 105.378L321.257 94.9932L324.349 100.81L325.032 80.0829L327.604 61.5733L329.357 74.9864L332.611 52.6565L334.352 48.5552L335.785 55.2637L338.377 59.5888V73.426L341.699 87.5181L343.843 93.4347L347.714 82.1171L350.229 78.6821L351.974 89.7556L353.323 94.9932L355.821 93.4347L357.799 102.127L360.684 108.794L363.219 98.004L365 89.7556"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <defs>
                          <linearGradient id="paint0_linear_0_705_new" x1="0.85108" y1="0.947876" x2="0.85108" y2="230.114" gradientUnits="userSpaceOnUse">
                            <stop className="text-primary/10" stopColor="currentColor" />
                            <stop className="text-transparent" offset="1" stopColor="currentColor" stopOpacity="0.01" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Card 5: Avatars / Users (Col-span 3) */}
              <motion.div variants={fadeInUp} className="col-span-full lg:col-span-3">
                <Card className="relative overflow-hidden bg-background border border-border/80 hover:shadow-lg transition-all duration-300 rounded-3xl h-full flex flex-col justify-between">
                  <CardContent className="grid h-full pt-8 pb-8 sm:grid-cols-2 items-center">
                    <div className="relative z-10 flex flex-col justify-between h-full space-y-12 lg:space-y-6">
                      <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                        <Gamepad2 className="m-auto size-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-foreground transition">Trening jak gra</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          Grafika i angażująca forma zabawy same przyciągają uwagę. Dziecko chętnie ćwiczy samodzielnie bez namawiania.
                        </p>
                      </div>
                    </div>
                    <div className="relative mt-6 sm:-my-8 sm:-mr-8 h-full flex flex-col justify-center bg-gray-50/50 p-6 py-6 sm:ml-6 border-l">
                      <div className="relative flex h-full flex-col justify-center space-y-3 py-6">
                        <div className="relative flex items-center gap-3 bg-background border border-border/60 rounded-2xl p-2.5 shadow-sm transform hover:scale-[1.02] transition-transform duration-300">
                          <div className="size-8 rounded-xl bg-green-100 dark:bg-green-950/40 flex items-center justify-center text-green-600 font-bold text-xs">
                            ✓
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-foreground">Gra: Zwierzęta (Słuch)</div>
                            <div className="text-[9px] text-muted-foreground">Ukończono • +120 XP</div>
                          </div>
                        </div>

                        <div className="relative flex items-center gap-3 bg-background border border-border/60 rounded-2xl p-2.5 shadow-sm transform hover:scale-[1.02] transition-transform duration-300">
                          <div className="size-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xs animate-pulse">
                            🎮
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-foreground">Gra: Gdzie jest obrazek? (Memo)</div>
                            <div className="text-[9px] text-primary font-semibold">Aktualna gra • W toku</div>
                          </div>
                        </div>

                        <div className="relative flex items-center gap-3 bg-background border border-border/60 rounded-2xl p-2.5 shadow-sm opacity-60">
                          <div className="size-8 rounded-xl bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-gray-400 font-bold text-xs">
                            🔒
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-muted-foreground">Gra: Ile razy?</div>
                            <div className="text-[9px] text-muted-foreground">Zablokowane</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

            </motion.div>
          </div>
        </section>




        {/* SECTION - Screenshots Gallery */}
        <section className="py-20 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Gamepad2 className="w-4 h-4" />
                <span>Wygląd sesji treningowej</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Jak wygląda interaktywny trening słuchowy?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Atrakcyjne gry, które dziecko chce wykonywać — trening słuchowy w formie zabawy.</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  src: "/screenshots/game-screenshot-1.webp",
                  alt: "GoBrain interaktywny trening słuchowy — ćwiczenie z ptakami na półkach",
                  badge: "Adaptacja w czasie rzeczywistym",
                  badgeColor: "bg-primary text-white",
                  caption: "Program automatycznie dopasowuje poziom trudności do możliwości dziecka",
                },
                {
                  src: "/screenshots/game-screenshot-2.webp",
                  alt: "GoBrain interaktywny trening słuchowy — zadanie z domkami i chłopcem",
                  badge: "Trening przez zabawę",
                  badgeColor: "bg-accent text-white",
                  caption: "Atrakcyjna grafika i nagrody motywują dziecko do systematycznego ćwiczenia",
                },
                {
                  src: "/screenshots/game-screenshot-3.png",
                  alt: "GoBrain interaktywny trening słuchowy — ćwiczenie z krową i owcą",
                  badge: "Pamięć i koncentracja",
                  badgeColor: "bg-green-600 text-white",
                  caption: "Ćwiczenia rozwijają uwagę słuchową, pamięć i przetwarzanie bodźców",
                },
                {
                  src: "/screenshots/game-screenshot-4.webp",
                  alt: "GoBrain interaktywny trening słuchowy — zadanie z kulami na półkach w cyrku",
                  badge: "Dyskryminacja dźwięków",
                  badgeColor: "bg-blue-600 text-white",
                  caption: "Zadania z lokalizacją dźwięku uczą precyzyjnego rozróżniania bodźców słuchowych",
                },
                {
                  src: "/screenshots/game-screenshot-5.webp",
                  alt: "GoBrain interaktywny trening słuchowy — ćwiczenie z ptaszkiem przy zamkach",
                  badge: "Uwaga kierunkowa",
                  badgeColor: "bg-orange-500 text-white",
                  caption: "Dziecko uczy się skupiać uwagę słuchową w wybranym kierunku — kluczowa umiejętność szkolna",
                },
                {
                  src: "/screenshots/game-screenshot-6.png",
                  alt: "GoBrain interaktywny trening słuchowy — wyniki Hall of Fame po treningu",
                  badge: "Śledzenie postępów",
                  badgeColor: "bg-purple-600 text-white",
                  caption: "Hall of Fame i statystyki motywują dziecko i pokazują realne postępy treningowe",
                },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="group relative flex flex-col">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-border group-hover:shadow-xl transition-shadow">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`text-xs font-bold px-3 py-1.5 rounded-full shadow ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground text-center leading-relaxed px-2">
                    {item.caption}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 5 - Effects */}
        <section className="py-24 bg-card border-y border-border overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                <Trophy className="w-4 h-4" />
                <span>Efekty terapii</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Co zyskuje Twoje dziecko?</h2>
              <p className="text-xl text-muted-foreground">Potwierdzone naukowo rezultaty regularnych treningów</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Effects cards */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {[
                  { icon: Ear, emoji: "👂", text: "Poprawa przetwarzania słuchowego", color: "bg-blue-50 border-blue-200", iconColor: "text-blue-600", iconBg: "bg-blue-100" },
                  { icon: GraduationCap, emoji: "📚", text: "Lepsze wyniki w nauce i szkole", color: "bg-green-50 border-green-200", iconColor: "text-green-600", iconBg: "bg-green-100" },
                  { icon: Activity, emoji: "🗣️", text: "Lepsza wymowa i komunikacja", color: "bg-purple-50 border-purple-200", iconColor: "text-purple-600", iconBg: "bg-purple-100" },
                  { icon: Brain, emoji: "🧠", text: "Więcej uwagi, koncentracji i pamięci", color: "bg-orange-50 border-orange-200", iconColor: "text-orange-600", iconBg: "bg-orange-100" },
                  { icon: Headphones, emoji: "🎧", text: "Normalizacja wrażliwości na dźwięki", color: "bg-pink-50 border-pink-200", iconColor: "text-pink-600", iconBg: "bg-pink-100" },
                  { icon: Smile, emoji: "😊", text: "Wzrost pewności siebie dziecka", color: "bg-yellow-50 border-yellow-200", iconColor: "text-yellow-600", iconBg: "bg-yellow-100" },
                ].map((effect, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className={`rounded-2xl p-5 border ${effect.color} flex items-start gap-4 transition-all`}
                  >
                    <div className={`w-12 h-12 ${effect.iconBg} rounded-xl flex items-center justify-center shrink-0 text-2xl`}>
                      {effect.emoji}
                    </div>
                    <p className="font-semibold text-foreground text-sm leading-snug mt-1">{effect.text}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Classroom photo */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img src={childrenClassroomImg} srcSet="/img/children-classroom-640w.webp 640w, /img/children-classroom-1280w.webp 1280w" sizes="(max-width: 1024px) 100vw, 50vw" alt="Dzieci uczą się z interaktywnym treningiem słuchowym GoBrain w klasie" className="w-full object-cover" loading="lazy" decoding="async" />
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-5 -left-5 bg-background rounded-2xl border border-border shadow-xl p-4 flex items-center gap-3"
                >
                  <span className="text-3xl">🏆</span>
                  <div>
                    <p className="text-xs text-muted-foreground">Ocena szkół</p>
                    <p className="font-bold text-foreground">100% poleca!</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 5b - Charts & Data */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4" />
                <span>Wyniki w liczbach</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Mierzalne efekty treningu ITS GoBrain
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Dane zebrane od ponad 5000 dzieci. Średnie wyniki po 8 tygodniach regularnego treningu.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* ── Animated progress bars ── */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-7"
              >
                <motion.h3 variants={fadeInUp} className="text-xl font-bold text-foreground flex items-center gap-2 mb-2">
                  <BarChart2 className="w-5 h-5 text-primary" /> Poprawa wyników — przed i po terapii
                </motion.h3>
                <ProgressBar label="Pamięć słuchowa"         before={41} after={78} color="text-blue-600"   bgColor="bg-blue-500"   delay={0} />
                <ProgressBar label="Koncentracja uwagi"      before={36} after={75} color="text-green-600"  bgColor="bg-green-500"  delay={0.12} />
                <ProgressBar label="Rozumienie poleceń"      before={44} after={80} color="text-purple-600" bgColor="bg-purple-500" delay={0.24} />
                <ProgressBar label="Czytanie i pisanie"      before={38} after={72} color="text-orange-500" bgColor="bg-orange-400" delay={0.36} />
                <ProgressBar label="Pewność siebie dziecka"  before={33} after={70} color="text-pink-600"   bgColor="bg-pink-500"   delay={0.48} />

                <motion.div
                  variants={fadeInUp}
                  className="flex gap-6 pt-2 text-xs"
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded bg-muted-foreground/25" />
                    <span className="text-muted-foreground">Wynik przed treningiem</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded bg-primary" />
                    <span className="text-muted-foreground">Wynik po 8 tygodniach</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* ── Right: rings + timeline ── */}
              <div className="space-y-12">

                {/* Ring charts */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  <motion.h3 variants={fadeInUp} className="text-xl font-bold text-foreground mb-8 flex items-center gap-2">
                    <Target className="w-5 h-5 text-accent" /> Kluczowe wskaźniki skuteczności
                  </motion.h3>
                  <motion.div variants={staggerContainer} className="grid grid-cols-3 gap-4">
                    <motion.div variants={fadeInUp}>
                      <RingChart percent={98} color="#0066cc" label="Zadowolonych rodziców" sublabel="po zakończeniu treningu" />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <RingChart percent={87} color="#00aa55" label="Poprawy koncentracji" sublabel="widocznych u dzieci" />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <RingChart percent={94} color="#9333ea" label="Polecałoby dalej" sublabel="znajomym i terapeutom" />
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Timeline */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  <motion.h3 variants={fadeInUp} className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" /> Kiedy widać efekty?
                  </motion.h3>
                  <div className="relative pl-7">
                    <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-border" />
                    {[
                      {
                        week: "2–4 tyg.",
                        title: "Pierwsze zmiany",
                        desc: "Dziecko chętniej słucha, lepiej reaguje, poprawia się uwaga słuchowa.",
                        dot: "bg-blue-500",
                        badge: "bg-blue-500",
                      },
                      {
                        week: "4–8 tyg.",
                        title: "Wyraźny postęp",
                        desc: "Lepsze rozumienie poleceń, poprawa wymowy, mniejsza wrażliwość na dźwięki.",
                        dot: "bg-green-500",
                        badge: "bg-green-500",
                      },
                      {
                        week: "8–12 tyg.",
                        title: "Trwałe efekty",
                        desc: "Znaczna poprawa wyników szkolnych, lepsza koncentracja i pamięć długotrwała.",
                        dot: "bg-purple-500",
                        badge: "bg-purple-500",
                      },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        variants={fadeInUp}
                        whileHover={{ x: 4 }}
                        className="relative mb-5 last:mb-0"
                      >
                        <div className={`absolute -left-5 top-3 w-4 h-4 rounded-full ${item.dot} border-2 border-background shadow-md`} />
                        <div className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-all">
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-xs font-black px-2 py-0.5 rounded-full text-white ${item.badge}`}>{item.week}</span>
                            <span className="font-bold text-foreground text-sm">{item.title}</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 - Reviews Carousel */}
        <ReviewsCarousel />

        {/* SECTION 7 - Founder — expanded expert profile */}
        <section className="py-24 bg-background overflow-hidden">
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
                <span>Twórczyni metody</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Aneta Pakieła</h2>
              <p className="text-xl text-muted-foreground">Neurologopeda, surdologopeda, twórczyni metody GoBrain</p>
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
                      src={anetaPakielaImg}
                      alt="Aneta Pakieła – twórczyni metody GoBrain"
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
                  <h3 className="text-sm font-black text-muted-foreground tracking-widest uppercase mb-3">{'Tytuły zawodowe'}</h3>
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
                  <h3 className="text-sm font-black text-muted-foreground tracking-widest uppercase mb-3">{'Specjalizacje'}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      { label: 'Diagnosta CAPD', desc: 'Centralne zaburzenia przetwarzania słuchowego', color: 'bg-teal-50 border-teal-200 text-teal-700' },
                      { label: 'Integracja odruchów II st.', desc: 'Zaawansowany terapeuta', color: 'bg-orange-50 border-orange-200 text-orange-700' },
                      { label: 'Stymulacja słuchowa', desc: 'Certyfikowany specjalista terapii słuchu', color: 'bg-green-50 border-green-200 text-green-700' },
                      { label: 'Model INSITE', desc: 'Certyfikowany terapeuta modelu INSITE', color: 'bg-blue-50 border-blue-200 text-blue-700' },
                      { label: 'Wczesna interwencja', desc: 'Praca terapeutyczna z dziećmi', color: 'bg-pink-50 border-pink-200 text-pink-700' },
                      { label: 'Neurologopedia', desc: 'Diagnoza i terapia neurologopedyczna', color: 'bg-purple-50 border-purple-200 text-purple-700' },
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
                    <p>{'GoBrain to efekt ponad 20 lat praktyki klinicznej — metoda łącząca wiedzę neurologopedyczną z nowoczesnymi technologiami. To nie tylko trening słuchowy, lecz kompleksowe narzędzie wspierające pracę terapeuty i rozwój dziecka w domu, szkole i gabinecie.'}</p>
                    <p>{'Dedykowany dzieciom od piątego roku życia z deficytami uwagi słuchowej, trudnościami w czytaniu i pisaniu, problemami z wymową oraz zaburzeniami przetwarzania słuchowego (CAPD). Trening GoBrain stymuluje lewą półkulę, organizuje sekwencyjnie informacje i przyspiesza efekty terapeutyczne.'}</p>
                  </blockquote>
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-foreground">Aneta Pakieła</p>
                    <p className="text-sm text-muted-foreground">Neurologopeda, surdologopeda, twórczyni metody GoBrain</p>
                  </div>
                </motion.div>

                {/* Key achievements */}
                <motion.div variants={fadeInUp}>
                  <h3 className="text-sm font-black text-muted-foreground tracking-widest uppercase mb-3">Dokonania i działalność</h3>
                  <div className="space-y-3">
                    {[
                      { icon: Brain, text: "Opracowała unikalną metodę ITS GoBrain do terapii zaburzeń przetwarzania słuchowego u dzieci", color: "text-primary bg-primary/10" },
                      { icon: Users, text: "Przeszkoliła ponad 500 terapeutów w całej Polsce w zakresie diagnozy i terapii CAPD", color: "text-green-600 bg-green-100" },
                      { icon: GraduationCap, text: "Prowadzi szkolenia certyfikacyjne dla logopedów, pedagogów i psychologów", color: "text-purple-600 bg-purple-100" },
                      { icon: Activity, text: "Badania doktoranckie na Katedrze Otolaryngologii Warszawskiego Uniwersytetu Medycznego", color: "text-orange-600 bg-orange-100" },
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

        {/* SECTION 7b - Prof. Gałkowski video */}
        <section className="py-20 bg-background border-t border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-10 text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                <GraduationCap className="w-4 h-4" />
                Rekomendacja naukowa
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              {/* Left — video */}
              <motion.div variants={fadeInUp} className="rounded-3xl overflow-hidden shadow-2xl border border-border bg-black">
                <video
                  controls
                  preload="metadata"
                  className="w-full aspect-video"
                >
                  <source src="https://gobraintech.pl/current/www/ProfGalkowski01.mp4#t=3" type="video/mp4" />
                  {'Twoja przeglądarka nie obsługuje odtwarzania wideo.'}
                </video>
              </motion.div>

              {/* Right — quote */}
              <motion.div variants={fadeInUp} className="flex flex-col justify-center">
                <svg className="w-12 h-12 text-primary/20 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8C5.6 8 2 11.6 2 16s3.6 8 8 8c1.8 0 3.4-.6 4.7-1.6C13.6 24.9 12 28 8 28v4c8 0 12-5.4 12-12V8H10zm20 0h-12v12c0 6.6-4 12-12 12v-4c4 0 5.6-3.1 6.7-5.6C11.4 23.4 10 21.8 10 20c0-4.4 3.6-8 8-8h2V8h10z" />
                </svg>
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed font-medium italic mb-6">
                  {'"Chciałbym powiedzieć jako przewodniczący Polskiego Komitetu Audiofonologii, że program Zabawy z dźwiękami to jest pomysł wspaniały dostosowany do potrzeb rozwojowych dzieci mających dość często duże kłopoty z przetwarzaniem bodźców słuchowych. Program GoBrain z czystym sumieniem mogę polecić i zachęcić do stosowania zarówno w domu jak i ośrodkach logopedycznych — program ten ćwiczy uwagę i pamięć słuchową. GoBrain przyczynia się do postępów szkolnych dzieci, zwłaszcza jeśli chodzi o czytanie i pisanie."'}
                </blockquote>
                <div className="border-l-4 border-primary pl-4">
                  <p className="font-bold text-foreground text-lg">Prof. dr hab. Tadeusz Gałkowski (1936-2020)</p>
                  <p className="text-sm text-muted-foreground mt-1">Psycholog, naukowiec, patron merytoryczny GoBrain</p>
                  <p className="text-sm text-muted-foreground">Wieloletni przewodniczący Polskiego Komitetu Audiofonologii</p>
                  <p className="text-sm text-muted-foreground">Założyciel i prezes Zarządu Głównego Krajowego Towarzystwa Autyzmu</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* VIDEO SECTION */}
        <section className="py-20 bg-background border-t border-border">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-10"
            >
              <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Film</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                Zobacz jak działa GoBrain
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                43 sekundy, które wyjaśniają wszystko.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="mx-auto max-w-4xl rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-border aspect-video"
            >
              <VideoEmbed />
            </motion.div>
          </div>
        </section>


        {/* SECTION 10 - Therapist Map */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">Rozwijamy potencjał dzieci w całej Polsce</h2>
              <p className="text-lg text-muted-foreground">Nasza sieć Providerów GoBrain obejmuje specjalistów w całej Polsce.</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="rounded-2xl overflow-hidden border border-border shadow-lg mb-8"
              style={{ height: 400 }}
            >
              <iframe
                title="Mapa terapeutów GoBrain"
                src="https://www.google.com/maps/d/embed?mid=1vzg81TvhC_-i_qYRo5o-VZ05K6dSfcy-"
                width="100%"
                height="400"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
            <div className="text-center">
              <Button variant="outline" size="lg" asChild data-testid="locations-btn">
                <Link to="/strefa-terapeuty#mapa-terapeutow">Sprawdź listę terapeutów</Link>
              </Button>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
}
