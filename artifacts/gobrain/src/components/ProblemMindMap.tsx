import { useState, useRef, useEffect } from "react";

const PROBLEMS = [
  { emoji: "👂", title: "Słyszy, ale nie słucha",     sub: "Słuch selektywny" },
  { emoji: "🗣️", title: "Nie rozumie poleceń",        sub: "Wymaga powtarzania" },
  { emoji: "📖", title: "Czytanie i pisanie",          sub: "Trudności szkolne" },
  { emoji: "🎯", title: "Koncentracja",                sub: "Uwaga i skupienie" },
  { emoji: "🔊", title: "CAPD",                        sub: "Nadwrażliwość" },
  { emoji: "⚡", title: "ADHD",                        sub: "Wspiera terapię" },
  { emoji: "🧩", title: "Spektrum autyzmu",            sub: "Integracja sensoryczna" },
  { emoji: "💬", title: "Logopedia",                   sub: "Alalia, DLD, afazja" },
  { emoji: "🏫", title: "Regulacja głosu",             sub: "Głośne lub wycofane" },
  { emoji: "🏥", title: "Po zabiegu",                  sub: "Migdałek lub dreny" },
  { emoji: "✍️", title: "Wymowa",                      sub: "Głoskowanie" },
  { emoji: "🧠", title: "Pamięć słuchowa",             sub: "Rozumienie ze słuchu" },
];

// Wymiary projektu (stały "płótno")
const DW = 900;
const DH = 500;
const CX = 450;
const CY = 250;
const R  = 190;

function getPos(i: number) {
  const angle = (i / PROBLEMS.length) * 2 * Math.PI - Math.PI / 2;
  return {
    x: CX + R * Math.cos(angle),
    y: CY + R * Math.sin(angle),
  };
}

export default function ProblemMindMap() {
  const [hovered, setHovered] = useState<number | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      setScale(w / DW);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    // Zewnętrzny wrapper — mierzy szerokość i ustawia wysokość
    <div
      ref={wrapRef}
      style={{
        width: "100%",
        height: DH * scale,
        position: "relative",
        overflow: "visible",
      }}
    >
      {/* Wewnętrzne "płótno" 900×500px skalowane do kontenera */}
      <div
        style={{
          width: DW,
          height: DH,
          position: "absolute",
          top: 0,
          left: 0,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
        }}
      >
        {/* SVG — linie i glow */}
        <svg
          width={DW}
          height={DH}
          style={{ position: "absolute", inset: 0, overflow: "visible" }}
        >
          <defs>
            <filter id="mmGlow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <radialGradient id="mmBlueGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#0066cc" stopOpacity="0.15" />
              <stop offset="70%"  stopColor="#0066cc" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#0066cc" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="mmOrangeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#f97316" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ambient glow */}
          <ellipse cx={CX} cy={CY} rx={230} ry={200} fill="url(#mmBlueGlow)" />
          <ellipse cx={CX} cy={CY} rx={100} ry={90}  fill="url(#mmOrangeGlow)" />

          {/* Linie od centrum */}
          {PROBLEMS.map((_, i) => {
            const { x, y } = getPos(i);
            const isHov = hovered === i;
            return (
              <line
                key={i}
                x1={CX} y1={CY} x2={x} y2={y}
                stroke={isHov ? "#f97316" : "#0066cc"}
                strokeWidth={isHov ? 1.8 : 1.2}
                strokeOpacity={isHov ? 0.85 : 0.45}
                filter="url(#mmGlow)"
                style={{ transition: "all 0.25s" }}
              />
            );
          })}

          {/* Małe punkty na liniach */}
          {PROBLEMS.map((_, i) => {
            const { x, y } = getPos(i);
            return (
              <circle
                key={i}
                cx={CX + (x - CX) * 0.52}
                cy={CY + (y - CY) * 0.52}
                r={2.5}
                fill="#0066cc"
                fillOpacity="0.4"
              />
            );
          })}

          {/* Centrum — pierścienie */}
          <circle cx={CX} cy={CY} r={66} fill="white"    stroke="#0066cc" strokeWidth="1.5" strokeOpacity="0.5" />
          <circle cx={CX} cy={CY} r={58} fill="#eff6ff"  stroke="#0066cc" strokeWidth="0.8" strokeOpacity="0.25" />
          <circle cx={CX} cy={CY} r={62} fill="none"     stroke="#f97316" strokeWidth="0.8" strokeOpacity="0.45" strokeDasharray="4 7" />
        </svg>

        {/* Centrum — tekst */}
        <div
          style={{
            position: "absolute",
            left: CX,
            top: CY,
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            zIndex: 20,
            pointerEvents: "none",
          }}
        >
          <p style={{
            color: "#f97316",
            fontSize: 8,
            fontWeight: 800,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 3,
          }}>
            DLA KOGO
          </p>
          <p style={{
            color: "#0066cc",
            fontSize: 18,
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}>
            GoBrain
          </p>
        </div>

        {/* Karty */}
        {PROBLEMS.map((p, i) => {
          const { x, y } = getPos(i);
          const isHov = hovered === i;
          const num = String(i + 1).padStart(2, "0");

          return (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "absolute",
                left: x,
                top: y,
                transform: "translate(-50%, -50%)",
                zIndex: 10,
                cursor: "default",
              }}
            >
              <div
                style={{
                  background: isHov ? "#fff7ed" : "white",
                  border: `1.5px solid ${isHov ? "#f97316" : "rgba(0,102,204,0.25)"}`,
                  borderRadius: 12,
                  padding: "7px 11px",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  whiteSpace: "nowrap",
                  boxShadow: isHov
                    ? "0 4px 20px rgba(249,115,22,0.18), 0 1px 4px rgba(0,0,0,0.06)"
                    : "0 2px 12px rgba(0,102,204,0.1), 0 1px 3px rgba(0,0,0,0.05)",
                  transition: "all 0.22s ease",
                  minWidth: 120,
                }}
              >
                {/* Numer badge */}
                <span
                  style={{
                    background: isHov ? "#f97316" : "#0066cc",
                    color: "#fff",
                    borderRadius: 6,
                    width: 21,
                    height: 21,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 8.5,
                    fontWeight: 800,
                    flexShrink: 0,
                    transition: "background 0.22s",
                    letterSpacing: "0.03em",
                  }}
                >
                  {num}
                </span>
                {/* Tekst */}
                <div>
                  <p style={{
                    color: "#111827",
                    fontSize: 11.5,
                    fontWeight: 700,
                    lineHeight: 1.25,
                    margin: 0,
                  }}>
                    {p.title}
                  </p>
                  <p style={{
                    color: "#6b7280",
                    fontSize: 9.5,
                    fontWeight: 500,
                    lineHeight: 1.2,
                    margin: 0,
                    marginTop: 1,
                  }}>
                    {p.sub}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
