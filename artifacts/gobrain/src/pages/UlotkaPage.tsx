import logoImg from "@/assets/gobrain-logo-new.png";
import childHeadphones from "@/assets/hero-child-headphones.webp";
import childTablet from "@/assets/child-tablet-fun.webp";
import anetaImg from "@/assets/aneta-pakiela-real.webp";
import productIts from "@/assets/product-its-gobrain.png";
import productSchool from "@/assets/product-its-school.png";
import productTerapeuta from "@/assets/product-terapeuta.png";

export default function UlotkaPage() {
  return (
    <div className="min-h-screen bg-gray-200 py-8 px-4">
      {/* Screen controls */}
      <div className="max-w-2xl mx-auto mb-6 flex items-center justify-between print:hidden">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Ulotka A5 — GoBrain</h1>
          <p className="text-sm text-gray-500 mt-0.5">Dwustronna · Kliknij Drukuj → format A5 → bez marginesów</p>
        </div>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
        >
          🖨️ Drukuj / Zapisz PDF
        </button>
      </div>

      <div className="flex flex-col items-center gap-10 print:gap-0">

        {/* ═══════════════════════════════════════
            STRONA 1 — PRZÓD
        ═══════════════════════════════════════ */}
        <div className="flyer-page bg-white shadow-2xl print:shadow-none overflow-hidden flex flex-col" style={{ width: "148mm", height: "210mm" }}>

          {/* TOP: blue header + child photo */}
          <div className="bg-[#0066cc] flex-shrink-0" style={{ height: "88mm" }}>
            <div className="relative h-full overflow-hidden">
              {/* Child photo — right aligned */}
              <img
                src={childHeadphones}
                alt="Dziecko w słuchawkach"
                className="absolute right-0 bottom-0 object-cover object-top"
                style={{ height: "88mm", width: "55mm", objectPosition: "center top" }}
              />
              {/* Dark overlay on right for readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0066cc] via-[#0066cc]/80 to-transparent" />

              {/* Text content */}
              <div className="relative z-10 px-5 pt-5" style={{ maxWidth: "92mm" }}>
                {/* Logo row */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-white/20 p-1 rounded-lg">
                    <img src={logoImg} alt="GoBrain" className="w-7 h-7 rounded-md object-contain" />
                  </div>
                  <div className="leading-none">
                    <div className="font-black text-white text-[17px] tracking-tight">GoBrain</div>
                    <div className="text-[7px] font-bold text-blue-200 uppercase tracking-widest">Interaktywny Trening Słuchowy</div>
                  </div>
                </div>

                <h1 className="text-white font-black leading-tight mb-2" style={{ fontSize: "20px" }}>
                  Zabawy<br />z dźwiękami
                </h1>
                <p className="text-blue-100 font-bold" style={{ fontSize: "11px" }}>ITS GoBrain</p>
                <p className="text-blue-200 leading-snug mt-1" style={{ fontSize: "9px" }}>
                  Program terapeutyczny wspierający<br />
                  rozwój słuchowy, mowę i koncentrację<br />
                  u dzieci od 5. roku życia.
                </p>

                {/* Stats mini bar */}
                <div className="flex gap-3 mt-4">
                  {[{ v: "5000+", l: "dzieci" }, { v: "100", l: "ćwiczeń" }, { v: "98%", l: "skuteczność" }].map(({ v, l }) => (
                    <div key={l} className="text-center">
                      <div className="text-white font-black" style={{ fontSize: "13px" }}>{v}</div>
                      <div className="text-blue-200 font-medium" style={{ fontSize: "7px" }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Wave */}
          <div className="bg-[#0066cc] flex-shrink-0" style={{ marginBottom: "-1px" }}>
            <svg viewBox="0 0 148 12" className="w-full" preserveAspectRatio="none" style={{ height: "12px", display: "block" }}>
              <path d="M0,0 Q37,12 74,6 Q111,0 148,12 L148,0 Z" fill="white" />
            </svg>
          </div>

          {/* BODY — fills remaining space */}
          <div className="flex-1 flex flex-col px-5 py-3 overflow-hidden">

            {/* Problem section */}
            <div className="mb-2.5">
              <p className="font-bold text-gray-400 uppercase tracking-wider mb-1.5" style={{ fontSize: "8px" }}>Czy Twoje dziecko…</p>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                {[
                  "Słyszy, ale nie słucha",
                  "Wymaga powtarzania poleceń",
                  "Ma problemy z czytaniem",
                  "Ma trudności z koncentracją",
                  "Brak efektów terapii logopedycznej",
                  "Jest nadwrażliwe na dźwięki",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-1" style={{ fontSize: "8.5px" }}>
                    <span className="text-orange-500 font-bold shrink-0" style={{ marginTop: "1px" }}>›</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 mb-2.5" />

            {/* Solution */}
            <div className="mb-2.5">
              <p className="font-bold text-[#0066cc] uppercase tracking-wider mb-1.5" style={{ fontSize: "8px" }}>ITS GoBrain pomaga w:</p>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                {[
                  { icon: "🎧", text: "Treningu słuchowym lewej półkuli" },
                  { icon: "🧠", text: "Poprawie pamięci słuchowej" },
                  { icon: "📖", text: "Nauce czytania i pisania" },
                  { icon: "🎮", text: "Ćwiczeniach jak gra" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-start gap-1.5" style={{ fontSize: "8.5px" }}>
                    <span className="shrink-0" style={{ fontSize: "9px" }}>{icon}</span>
                    <span className="text-gray-700">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 mb-2.5" />

            {/* Bottom row: child photo + CTA */}
            <div className="flex gap-3 flex-1 items-end">
              <img
                src={childTablet}
                alt="Dziecko z tabletem"
                className="rounded-xl object-cover flex-shrink-0"
                style={{ width: "42mm", height: "32mm", objectFit: "cover" }}
              />
              <div className="flex-1 flex flex-col gap-2">
                <div className="bg-[#0066cc] rounded-xl px-3 py-2.5 text-center">
                  <p className="text-white font-black" style={{ fontSize: "14px" }}>gobrain.pl</p>
                  <p className="text-blue-100" style={{ fontSize: "7.5px", marginTop: "1px" }}>Kup kod aktywacyjny online</p>
                </div>
                <div className="bg-orange-500 rounded-xl px-3 py-2 text-center">
                  <p className="text-white font-bold" style={{ fontSize: "8px" }}>📞 608 650 435</p>
                  <p className="text-orange-100" style={{ fontSize: "7px" }}>gobrainterapeuta@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            STRONA 2 — TYŁ
        ═══════════════════════════════════════ */}
        <div className="flyer-page bg-white shadow-2xl print:shadow-none overflow-hidden flex flex-col" style={{ width: "148mm", height: "210mm" }}>

          {/* Dark header */}
          <div className="bg-gray-900 flex-shrink-0 px-5 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={logoImg} alt="GoBrain" className="w-5 h-5 rounded object-contain" />
              <span className="text-white font-black" style={{ fontSize: "13px" }}>GoBrain</span>
            </div>
            <span className="text-gray-400 uppercase tracking-widest" style={{ fontSize: "7px" }}>Interaktywny Trening Słuchowy</span>
          </div>

          <div className="flex-1 flex flex-col px-5 py-3 overflow-hidden">

            {/* Products */}
            <p className="font-bold text-gray-400 uppercase tracking-wider mb-2" style={{ fontSize: "8px" }}>Dostępne programy</p>
            <div className="flex gap-2 mb-3">
              {[
                { img: productIts, name: "ITS GoBrain Indywidualny", tag: "Dla domu", color: "border-blue-200 bg-blue-50", tagColor: "bg-blue-100 text-blue-700", desc: "Do 25 sesji, praca w domu, etapy 1 i 2." },
                { img: productSchool, name: "ITS Pre & School", tag: "Dla placówek", color: "border-orange-200 bg-orange-50", tagColor: "bg-orange-100 text-orange-700", desc: "Bez limitu użytkowników, panel terapeuty." },
                { img: productTerapeuta, name: "Platforma Terapeuta", tag: "Specjaliści", color: "border-purple-200 bg-purple-50", tagColor: "bg-purple-100 text-purple-700", desc: "PreTest, PostTest, monitoring postępów." },
              ].map(({ img, name, tag, color, tagColor, desc }) => (
                <div key={name} className={`flex-1 rounded-xl border ${color} p-2 flex flex-col`}>
                  <img src={img} alt={name} className="w-full rounded-lg mb-1.5 object-contain" style={{ height: "22mm" }} />
                  <span className={`self-start px-1.5 py-0.5 rounded text-[6.5px] font-bold ${tagColor} mb-1`}>{tag}</span>
                  <p className="font-bold text-gray-800 leading-tight mb-0.5" style={{ fontSize: "8px" }}>{name}</p>
                  <p className="text-gray-500 leading-snug" style={{ fontSize: "7px" }}>{desc}</p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 mb-3" />

            {/* Bottom: creator + indications */}
            <div className="flex gap-3 flex-1">

              {/* Creator */}
              <div className="flex-shrink-0 flex flex-col items-center" style={{ width: "36mm" }}>
                <img
                  src={anetaImg}
                  alt="Aneta Pakieła"
                  className="rounded-xl object-cover object-top mb-1.5"
                  style={{ width: "34mm", height: "40mm" }}
                />
                <p className="text-center font-black text-gray-800 leading-tight" style={{ fontSize: "8px" }}>mgr Aneta Pakieła</p>
                <p className="text-center text-gray-500 leading-tight mt-0.5" style={{ fontSize: "6.5px" }}>Neurologopeda · Surdologopeda<br />Twórczyni metody GoBrain</p>
              </div>

              {/* Right column: indications + contact */}
              <div className="flex-1 flex flex-col">
                <p className="font-bold text-[#0066cc] uppercase tracking-wider mb-1.5" style={{ fontSize: "8px" }}>Program wspiera dzieci z:</p>
                <div className="space-y-0.5 mb-3">
                  {[
                    "Zaburzeniami przetwarzania słuchowego (CAPD)",
                    "Dysleksją i trudnościami w nauce",
                    "Opóźnionym rozwojem mowy",
                    "Wadą słuchu i po usunięciu migdałka",
                    "Spektrum autyzmu (ASD)",
                    "ADHD i trudnościami z koncentracją",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-1" style={{ fontSize: "8px" }}>
                      <span className="text-[#0066cc] shrink-0" style={{ marginTop: "1px" }}>✓</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Contact box */}
                <div className="bg-gray-900 rounded-xl px-3 py-2 mt-auto">
                  <p className="text-white font-black mb-1" style={{ fontSize: "8.5px" }}>Kontakt</p>
                  <div className="space-y-0.5">
                    {[
                      { icon: "🌐", t: "gobrain.pl" },
                      { icon: "✉️", t: "gobrainterapeuta@gmail.com" },
                      { icon: "📞", t: "608 650 435" },
                      { icon: "📘", t: "facebook.com/gobrainpl" },
                    ].map(({ icon, t }) => (
                      <div key={t} className="flex items-center gap-1.5" style={{ fontSize: "7.5px" }}>
                        <span>{icon}</span>
                        <span className="text-gray-300">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          @page { size: A5 portrait; margin: 0; }
          body { background: white !important; }
          .print\\:hidden { display: none !important; }
          .print\\:shadow-none { box-shadow: none !important; }
          .flyer-page {
            page-break-after: always;
            break-after: page;
          }
          .flyer-page:last-child {
            page-break-after: avoid;
            break-after: avoid;
          }
        }
      `}</style>
    </div>
  );
}
