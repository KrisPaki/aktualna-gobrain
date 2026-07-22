import { motion } from "framer-motion";

const PROBLEMS = [
  { 
    emoji: "👂", 
    text: "Słyszy, ale nie słucha",
    desc: "Ułatwia filtrowanie hałasu tła i skupienie na głosie nauczyciela.",
    bgClass: "bg-blue-50 text-blue-600 border-blue-100",
  },
  { 
    emoji: "🗣️", 
    text: "Nie rozumie poleceń", 
    desc: "Przyspiesza przetwarzanie informacji i eliminuje ciągłe powtórzenia.",
    bgClass: "bg-purple-50 text-purple-600 border-purple-100",
  },
  { 
    emoji: "📖", 
    text: "Problemy z czytaniem i pisaniem", 
    desc: "Wspiera rozróżnianie podobnych głosek – kluczowe przy dysleksji.",
    bgClass: "bg-indigo-50 text-indigo-600 border-indigo-100",
  },
  { 
    emoji: "🎯", 
    text: "Trudności z koncentracją", 
    desc: "Wydłuża czas skupienia uwagi i redukuje podatność na bodźce.",
    bgClass: "bg-red-50 text-red-600 border-red-100",
  },
  { 
    emoji: "🔊", 
    text: "Wrażliwe na dźwięki (CAPD)", 
    desc: "Pomaga w terapii centralnych zaburzeń przetwarzania słuchowego.",
    bgClass: "bg-amber-50 text-amber-600 border-amber-100",
  },
  { 
    emoji: "⚡", 
    text: "ADHD – wspiera terapię", 
    desc: "Wycisza przebodźcowany układ nerwowy przez regulację dźwięku.",
    bgClass: "bg-orange-50 text-orange-600 border-orange-100",
  },
  { 
    emoji: "🧩", 
    text: "Spektrum autyzmu (ASD)", 
    desc: "Pomaga w integracji sensorycznej bodźców słuchowych dziecka.",
    bgClass: "bg-teal-50 text-teal-600 border-teal-100",
  },
  { 
    emoji: "💬", 
    text: "Pacjenci logopedyczni", 
    desc: "Przyspiesza korekcję wad wymowy, opóźnień mowy i afazji.",
    bgClass: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  { 
    emoji: "🏫", 
    text: "Dziecko zbyt głośne/wycofane", 
    desc: "Wspiera samoregulację głośności głosu i buduje pewność siebie.",
    bgClass: "bg-sky-50 text-sky-600 border-sky-100",
  },
  { 
    emoji: "🏥", 
    text: "Po usunięciu migdałka/drenach", 
    desc: "Rehabilituje słuch fizyczny i uczy mózg na nowo słuchania.",
    bgClass: "bg-rose-50 text-rose-600 border-rose-100",
  },
  { 
    emoji: "✍️", 
    text: "Problemy z wymową", 
    desc: "Poprawia autokontrolę słuchową własnej wymowy i głosek.",
    bgClass: "bg-cyan-50 text-cyan-600 border-cyan-100",
  },
  { 
    emoji: "🧠", 
    text: "Słaba pamięć słuchowa", 
    desc: "Ćwiczy pamięć roboczą i ułatwia zapamiętywanie instrukcji.",
    bgClass: "bg-violet-50 text-violet-600 border-violet-100",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function ProblemCycler() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
    >
      {PROBLEMS.map((p, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          className="bg-card border border-border/80 rounded-2xl p-3.5 flex items-start gap-3 hover:shadow-md hover:border-primary/45 hover:bg-primary/[0.01] transition-all duration-300 group cursor-default"
        >
          <div className={`flex items-center justify-center w-9 h-9 rounded-xl ${p.bgClass} border shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300`}>
            <span className="text-lg leading-none">{p.emoji}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-200">
              {p.text}
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed mt-1 font-medium">
              {p.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
