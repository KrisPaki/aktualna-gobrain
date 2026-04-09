import logoImg from "@/assets/gobrain-logo-new.png";

export default function UlotkaPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {/* Screen controls */}
      <div className="max-w-2xl mx-auto mb-6 flex items-center justify-between print:hidden">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Ulotka A5 — GoBrain</h1>
          <p className="text-sm text-gray-500 mt-0.5">Dwustronna · Kliknij Drukuj, wybierz format A5, bez marginesów</p>
        </div>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
        >
          🖨️ Drukuj / Zapisz PDF
        </button>
      </div>

      {/* Pages wrapper */}
      <div className="flex flex-col items-center gap-8 print:gap-0">

        {/* STRONA 1 — PRZÓD */}
        <div className="flyer-page bg-white shadow-xl print:shadow-none" style={{ width: "148mm", minHeight: "210mm" }}>
          {/* Top blue bar */}
          <div className="bg-[#0066cc] px-6 pt-6 pb-8 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 p-1.5 rounded-xl">
                <img src={logoImg} alt="GoBrain" className="w-8 h-8 rounded-lg object-contain" />
              </div>
              <div className="leading-none">
                <div className="font-black text-2xl tracking-tight">GoBrain</div>
                <div className="text-[9px] font-bold text-blue-200 uppercase tracking-widest leading-tight mt-0.5">Interaktywny Trening Słuchowy</div>
              </div>
            </div>
            <h1 className="text-[22px] font-black leading-tight mb-2">
              Zabawy z dźwiękami<br />
              <span className="text-blue-200 text-[18px] font-bold">ITS GoBrain</span>
            </h1>
            <p className="text-blue-100 text-[11px] leading-snug">
              Program terapeutyczny wspierający rozwój słuchowy, mowę i koncentrację u dzieci od 5. roku życia.
            </p>
          </div>

          {/* Wave divider */}
          <div className="bg-[#0066cc] -mb-[1px]">
            <svg viewBox="0 0 148 16" className="w-full" preserveAspectRatio="none" style={{ height: "16px" }}>
              <path d="M0,0 Q37,16 74,8 Q111,0 148,16 L148,0 Z" fill="white" />
            </svg>
          </div>

          {/* Body */}
          <div className="px-6 py-4">

            {/* Problem */}
            <div className="mb-4">
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">Twoje dziecko...</p>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  "Słyszy, ale nie słucha",
                  "Wymaga powtarzania poleceń",
                  "Ma problemy z czytaniem",
                  "Trudności z koncentracją",
                  "Brak efektów terapii logopedycznej",
                  "Wrażliwe na dźwięki",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-1.5 text-[9.5px] text-gray-700">
                    <span className="text-orange-500 font-bold shrink-0 mt-0.5">›</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 my-3" />

            {/* Solution */}
            <div className="mb-4">
              <p className="text-[11px] font-bold text-[#0066cc] uppercase tracking-wider mb-2">ITS GoBrain pomaga w:</p>
              <div className="space-y-1.5">
                {[
                  { icon: "🎧", text: "Treningu słuchowym stymulującym lewą półkulę mózgu" },
                  { icon: "🧠", text: "Poprawie koncentracji i pamięci słuchowej" },
                  { icon: "📖", text: "Efektach w nauce czytania, pisania i wymowy" },
                  { icon: "🎮", text: "Sesje jak gra — dziecko ćwiczy z przyjemnością" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-start gap-2 text-[9.5px] text-gray-700">
                    <span className="shrink-0 text-[11px]">{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 my-3" />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { val: "5000+", label: "dzieci" },
                { val: "100", label: "ćwiczeń" },
                { val: "98%", label: "zadowolonych" },
              ].map(({ val, label }) => (
                <div key={label} className="text-center bg-blue-50 rounded-xl py-2">
                  <div className="text-[15px] font-black text-[#0066cc]">{val}</div>
                  <div className="text-[8px] text-gray-500 font-medium">{label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-orange-500 rounded-xl px-4 py-3 text-center">
              <p className="text-white font-black text-[13px]">gobrain.pl</p>
              <p className="text-orange-100 text-[9px] mt-0.5">Sprawdź program i kup kod aktywacyjny online</p>
            </div>
          </div>
        </div>

        {/* STRONA 2 — TYŁ */}
        <div className="flyer-page bg-white shadow-xl print:shadow-none" style={{ width: "148mm", minHeight: "210mm" }}>

          {/* Top strip */}
          <div className="bg-gray-900 px-6 py-3 flex items-center justify-between">
            <span className="text-white font-black text-[13px] tracking-tight">GoBrain</span>
            <span className="text-gray-400 text-[9px] uppercase tracking-widest">Interaktywny Trening Słuchowy</span>
          </div>

          <div className="px-6 py-5">

            {/* Products */}
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3">Dostępne programy</p>
            <div className="space-y-2.5 mb-5">

              <div className="border border-blue-200 bg-blue-50 rounded-xl p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-black text-[11px] text-[#0066cc]">ITS GoBrain Indywidualny</span>
                  <span className="text-[9px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">Dla domu</span>
                </div>
                <p className="text-[9px] text-gray-600 leading-snug">Program do pracy z dzieckiem w domu. Do 25 sesji treningowych, adaptacyjny poziom trudności.</p>
                <div className="flex gap-2 mt-1.5">
                  <span className="text-[8px] bg-white border border-blue-200 rounded px-1.5 py-0.5 text-blue-700">Etap 1</span>
                  <span className="text-[8px] bg-white border border-blue-200 rounded px-1.5 py-0.5 text-blue-700">Etap 2</span>
                </div>
              </div>

              <div className="border border-orange-200 bg-orange-50 rounded-xl p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-black text-[11px] text-orange-600">ITS Pre & School</span>
                  <span className="text-[9px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-bold">Dla placówek</span>
                </div>
                <p className="text-[9px] text-gray-600 leading-snug">Licencja dla przedszkoli, szkół i gabinetów. Bez limitu użytkowników, panel terapeuty, PreTest i PostTest.</p>
              </div>

              <div className="border border-purple-200 bg-purple-50 rounded-xl p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-black text-[11px] text-purple-700">Platforma Terapeuta</span>
                  <span className="text-[9px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-bold">Dla specjalistów</span>
                </div>
                <p className="text-[9px] text-gray-600 leading-snug">Narzędzie dla logopedów, pedagogów, psychologów i terapeutów SI. Monitoring postępów podopiecznych.</p>
              </div>
            </div>

            {/* Who it's for */}
            <div className="border-t border-gray-100 pt-4 mb-5">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Program wspiera dzieci z:</p>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                {[
                  "Zaburzeniami przetwarzania słuchowego (CAPD)",
                  "Dysleksją i trudnościami w nauce",
                  "Opóźnionym rozwojem mowy",
                  "Wadą słuchu i po drenach",
                  "Spektrum autyzmu (ASD)",
                  "ADHD i trudnościami z koncentracją",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-1 text-[8.5px] text-gray-700">
                    <span className="text-[#0066cc] shrink-0 mt-0.5">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Creator */}
            <div className="border-t border-gray-100 pt-4 mb-5">
              <p className="text-[9px] text-gray-500 leading-snug">
                <span className="font-bold text-gray-700">Twórczyni metody:</span> mgr Aneta Pakieła — neurologopeda, surdologopeda, Wieloletnia Przewodnicząca Zarządu Polskiego Towarzystwa Neurologopedów, Dyrektor Poradni Logomedic.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gray-900 rounded-xl px-4 py-3">
              <p className="text-white font-black text-[11px] mb-2">Kontakt i zamówienia</p>
              <div className="space-y-1">
                {[
                  { icon: "🌐", text: "gobrain.pl" },
                  { icon: "✉️", text: "gobrainterapeuta@gmail.com" },
                  { icon: "📞", text: "608 650 435" },
                  { icon: "📘", text: "facebook.com/gobrainpl" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-[9px] text-gray-300">
                    <span>{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          @page {
            size: A5 portrait;
            margin: 0;
          }
          body {
            background: white !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          .flyer-page {
            width: 148mm !important;
            min-height: 210mm !important;
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
