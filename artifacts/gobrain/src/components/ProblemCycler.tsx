const PROBLEMS = [
  { emoji: "👂", text: "Słyszy, ale nie słucha" },
  { emoji: "🗣️", text: "Nie rozumie poleceń i wymaga powtarzania" },
  { emoji: "📖", text: "Problemy z czytaniem i pisaniem" },
  { emoji: "🎯", text: "Trudności z koncentracją i uwagą" },
  { emoji: "🔊", text: "Wrażliwe na dźwięki (CAPD)" },
  { emoji: "⚡", text: "ADHD – wspiera terapię" },
  { emoji: "🧩", text: "Zaburzenia ze spektrum autyzmu (ASD)" },
  { emoji: "💬", text: "Pacjenci logopedyczni (alalia, DLD, afazja)" },
  { emoji: "🏫", text: "Dziecko zbyt głośne lub wycofane" },
  { emoji: "🏥", text: "Po usunięciu trzeciego migdałka lub drenach" },
  { emoji: "✍️", text: "Problemy z głoskowaniem i wymową" },
  { emoji: "🧠", text: "Słaba pamięć słuchowa i rozumienie" },
];

export default function ProblemCycler() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {PROBLEMS.map((p, i) => (
        <div
          key={i}
          className="bg-card border border-border/80 rounded-2xl p-3 flex items-center gap-3.5 hover:border-primary/20 transition-all duration-300 group cursor-default"
        >
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0 shadow-sm">
            <span className="text-lg leading-none">{p.emoji}</span>
          </div>
          <span className="text-sm font-semibold text-foreground leading-snug">
            {p.text}
          </span>
        </div>
      ))}
    </div>
  );
}
