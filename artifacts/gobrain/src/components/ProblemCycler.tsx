import { useEffect, useRef, useState } from "react";

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

const ITEM_H   = 54;   // wysokość kafelka px
const ITEM_GAP = 8;    // odstęp px
const ITEM_STEP = ITEM_H + ITEM_GAP;
const VISIBLE   = 3;   // ile widać naraz
const SPEED     = 30;  // px/s

const CONTAINER_H = VISIBLE * ITEM_STEP - ITEM_GAP;
const CENTER_Y    = CONTAINER_H / 2 - ITEM_H / 2;

// 3 kopie dla płynnej pętli
const LOOPED      = [...PROBLEMS, ...PROBLEMS, ...PROBLEMS];
const LOOP_OFFSET = PROBLEMS.length * ITEM_STEP;
const START       = LOOP_OFFSET;

export default function ProblemCycler() {
  const offsetRef  = useRef(START);
  const lastTRef   = useRef<number | null>(null);
  const rafRef     = useRef<number>(0);
  const [offset, setOffset] = useState(START);

  useEffect(() => {
    const tick = (t: number) => {
      if (lastTRef.current !== null) {
        const dt = (t - lastTRef.current) / 1000;
        offsetRef.current += SPEED * dt;
        if (offsetRef.current >= START + LOOP_OFFSET) {
          offsetRef.current -= LOOP_OFFSET;
        }
        setOffset(offsetRef.current);
      }
      lastTRef.current = t;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="relative overflow-hidden" style={{ height: CONTAINER_H }}>

      {/* Górna linia oddzielająca */}
      <div className="absolute left-0 right-0 z-10 border-t border-primary/20 pointer-events-none"
        style={{ top: 0 }} />

      {/* Dolna linia oddzielająca */}
      <div className="absolute left-0 right-0 z-10 border-b border-primary/20 pointer-events-none"
        style={{ bottom: 0 }} />

      {/* Delikatne podświetlenie środkowego */}
      <div className="absolute left-0 right-0 z-10 pointer-events-none bg-primary/5 border-y border-primary/10"
        style={{ top: CENTER_Y, height: ITEM_H }} />

      {/* Kafelki */}
      {LOOPED.map((p, i) => {
        const y = i * ITEM_STEP - offset;

        if (y < -ITEM_STEP || y > CONTAINER_H + ITEM_STEP) return null;

        // Odległość od centrum (0 = środkowy, 1 = sąsiednie)
        const dist = Math.abs((y - CENTER_Y) / ITEM_STEP);
        const opacity = dist < 0.5 ? 1 : Math.max(0.45, 1 - dist * 0.6);

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: y,
              left: 0,
              right: 0,
              opacity,
              willChange: "transform, opacity",
              transition: "opacity 0.1s",
            }}
          >
            <div
              className="flex items-center gap-3.5 rounded-xl border border-border/70 bg-card px-3"
              style={{ height: ITEM_H }}
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0 shadow-sm">
                <span className="text-lg leading-none">{p.emoji}</span>
              </div>
              <span className="text-sm font-semibold text-foreground leading-snug">
                {p.text}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
