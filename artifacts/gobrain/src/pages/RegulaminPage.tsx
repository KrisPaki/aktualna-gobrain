import { motion, type Variants } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.section variants={fadeInUp} className="mb-10">
    <h2 className="text-xl font-bold text-foreground mb-3">{title}</h2>
    <div className="text-sm text-muted-foreground leading-relaxed space-y-3">{children}</div>
  </motion.section>
);

export default function RegulaminPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <SEO
        title="Regulamin zakupu i użytkowania aplikacji — ITS GoBrain"
        description="Regulamin serwisu gobrain.pl i oprogramowania ITS GoBrain. Warunki licencji, płatności, dostawy i reklamacji."
        canonical="/regulamin"
      />
      <div className="pt-16">
        <section className="py-12 md:py-16 bg-card/40 border-b border-border">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
                Regulamin zakupu i użytkowania aplikacji
              </h1>
              <p className="text-muted-foreground text-base max-w-xl mx-auto">
                Ostatnia aktualizacja: lipiec 2026
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <motion.div
            className="container mx-auto px-4 max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
          >
            <Section title="I. Postanowienia ogólne">
              <p>
                1. Serwis z programami edukacyjnymi dla dzieci <strong>GoBrain.pl</strong> (zwany dalej „Serwisem” lub „Sklepem”) działa pod adresem <a href="https://gobrain.pl/" className="text-primary hover:underline">www.gobrain.pl</a> i prowadzony jest przez <strong>Logomedic</strong>, ul. Sienna 75, Warszawa, NIP 7621130122, REGON 146658781, zwany dalej „Operatorem” lub „Sprzedawcą”.
              </p>
              <p>
                2. Regulamin określa zasady: korzystania z Serwisu, zakupu i dostępu do treści cyfrowych, szkoleń i usług online, świadczenia usług drogą elektroniczną oraz przetwarzania danych osobowych Użytkowników i dzieci.
              </p>
              <p>
                3. Korzystanie z Serwisu oznacza akceptację Regulaminu oraz Polityki Prywatności i Cookies.
              </p>
              <p>
                4. Serwis kierowany jest zarówno do Użytkowników pełnoletnich (B2C i B2B), jak i do dzieci w wieku 4–12 lat, korzystających <strong>wyłącznie pod nadzorem rodzica lub opiekuna</strong>.
              </p>
            </Section>

            <Section title="II. Definicje">
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li><strong>Użytkownik/Klient</strong> — osoba fizyczna pełnoletnia, osoba prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, korzystająca z Serwisu lub dokonująca zakupu.</li>
                <li><strong>Dziecko</strong> — osoba w wieku 4–12 lat korzystająca z treści cyfrowych za zgodą i pod nadzorem rodzica/opiekuna.</li>
                <li><strong>Konto Klienta</strong> — spersonalizowany panel dostępny po rejestracji.</li>
                <li><strong>Treści cyfrowe</strong> — gry, zabawy, aplikacje, programy edukacyjne i materiały dostępne online lub do pobrania.</li>
                <li><strong>Produkty</strong> — treści cyfrowe, szkolenia online, pakiety edukacyjne, dostęp do Platformy Terapeuty.</li>
                <li><strong>Provider</strong> — osoba lub instytucja przeszkolona przez GoBrain, posiadająca certyfikat i indywidualny kod dostępu.</li>
              </ul>
            </Section>

            <Section title="III. Charakter programu i zastrzeżenie medyczne">
              <p>
                1. Programy GoBrain wspierają rozwój funkcji poznawczych dzieci (pamięć, uwaga, koncentracja, przetwarzanie słuchowe).
              </p>
              <p>
                2. Programy <strong>nie są wyrobem medycznym</strong>, nie stanowią diagnozy ani terapii i <strong>nie zastępują konsultacji z lekarzem, psychologiem ani logopedą</strong>.
              </p>
              <p>
                3. Efekty stosowania programu są <strong>indywidualne</strong> i zależą od wieku, stanu zdrowia, regularności treningu oraz nadzoru osoby dorosłej.
              </p>
              <p>
                4. Operator nie odpowiada za skutki stosowania programu w celach terapeutycznych ani za decyzje edukacyjne lub zdrowotne Użytkowników.
              </p>
            </Section>

            <Section title="IV. Wymagania techniczne">
              <p>
                1. Do korzystania z Serwisu wymagany jest dostęp do Internetu oraz aktualna przeglądarka internetowa.
              </p>
              <p>
                2. Niektóre treści mogą wymagać instalacji oprogramowania (np. Java, JavaScript).
              </p>
              <p>
                3. Koszty dostępu do Internetu ponosi Użytkownik.
              </p>
              <p>
                4. Operator nie odpowiada za problemy techniczne wynikające z niewłaściwego sprzętu lub konfiguracji Użytkownika.
              </p>
            </Section>

            <Section title="V. Zakupy i realizacja zamówień">
              <p>
                1. Zamówienia składane są wyłącznie przez stronę <a href="https://gobrain.pl/" className="text-primary hover:underline">www.gobrain.pl</a>.
              </p>
              <p>
                2. Zawarcie umowy następuje w momencie potwierdzenia zamówienia i zaksięgowania płatności.
              </p>
              <p>
                3. W przypadku treści cyfrowych dostęp udostępniany jest natychmiast po zaksięgowaniu płatności.
              </p>
              <p>
                4. W przypadku szkoleń online i Platformy Terapeuty dostęp przyznawany jest zgodnie z opisem produktu.
              </p>
              <p>
                5. Klient otrzymuje dokument sprzedaży (paragon lub faktura VAT) drogą elektroniczną.
              </p>
              <p>
                6. Operator może anulować zamówienie w przypadku nieopłacenia go w ciągu 30 dni.
              </p>
            </Section>

            <Section title="VI. Ceny i płatności">
              <p>
                1. Ceny wyrażone w PLN, zawierają VAT i obowiązują w momencie składania zamówienia.
              </p>
              <p>
                2. Operator zastrzega prawo do zmiany cen, oferty i warunków sprzedaży.
              </p>
              <p>
                3. Formy płatności: przelew bankowy, płatność online (Przelewy24, karta).
              </p>
              <p>
                4. Dostęp do treści cyfrowych uruchamiany jest dopiero po opłaceniu zamówienia i za zgodą Użytkownika przed upływem 14 dni od zawarcia umowy.
              </p>
            </Section>

            <Section title="VII. Prawo odstąpienia od umowy">
              <p>
                1. Zgodnie z art. 38 pkt 13 ustawy o prawach konsumenta konsument <strong>traci prawo odstąpienia</strong> od umowy w przypadku treści cyfrowych dostarczanych natychmiast po zakupie, jeśli rozpoczęcie świadczenia nastąpiło za wyraźną zgodą konsumenta oraz został poinformowany o utracie prawa odstąpienia.
              </p>
              <p>
                2. Użytkownik potwierdza zgodę przed finalizacją zakupu (checkbox lub trwałe potwierdzenie online).
              </p>
            </Section>

            <Section title="VIII. Reklamacje">
              <p>
                1. Reklamacje dotyczą: niezgodności produktu z opisem lub wad i błędów uniemożliwiających korzystanie z treści cyfrowej.
              </p>
              <p>
                2. Składa się je pisemnie lub mailowo na adres: <a href="mailto:kontakt@gobrain.pl" className="text-primary hover:underline">kontakt@gobrain.pl</a>, z podaniem: imienia i nazwiska, numeru zamówienia, opisu wady i daty jej wykrycia.
              </p>
              <p>
                3. Reklamacje rozpatrywane są w ciągu 14 dni roboczych.
              </p>
              <p>
                4. Operator może: naprawić treść, udzielić wsparcia technicznego lub zaproponować inne rozwiązanie.
              </p>
            </Section>

            <Section title="IX. Odpowiedzialność">
              <p>
                1. Operator nie ponosi odpowiedzialności za: brak efektów treningu lub decyzje terapeutyczne, działania dziecka bez nadzoru, utratę danych, błędy sprzętu lub ingerencję osób trzecich.
              </p>
              <p>
                2. Użytkownik zobowiązuje się korzystać z usług zgodnie z Regulaminem i prawem.
              </p>
            </Section>

            <Section title="X. Prawa własności intelektualnej">
              <p>
                1. Wszystkie prawa do Serwisu i treści cyfrowych przysługują Operatorowi lub Poddostawcom.
              </p>
              <p>
                2. Użytkownik otrzymuje niewyłączną licencję na korzystanie z treści.
              </p>
              <p>
                3. Zabronione: kopiowanie, udostępnianie, odsprzedaż lub wynajem.
              </p>
            </Section>

            <Section title="XI. Ochrona danych osobowych">
              <p>
                1. Administratorem danych osobowych jest Logomedic, ul. Sienna 75, Warszawa.
              </p>
              <p>
                2. Dane dzieci przetwarzane są wyłącznie za zgodą rodzica/opiekuna.
              </p>
              <p>
                3. Dane przetwarzane są w celu realizacji umowy i obsługi konta.
              </p>
              <p>
                4. Użytkownik ma prawo: dostępu, korekty, usunięcia danych, ograniczenia przetwarzania, cofnięcia zgody, wniesienia skargi do Prezesa UODO.
              </p>
              <p>
                5. Szczegóły przetwarzania danych i cookies opisane są w Polityce Prywatności i Polityce Cookies.
              </p>
            </Section>

            <Section title="XII. Providerzy GoBrain">
              <p>
                1. Osoby lub instytucje przeszkolone przez GoBrain otrzymują certyfikat i indywidualny kod Provider.
              </p>
              <p>
                2. Providerzy mogą korzystać z rabatu na treści cyfrowe zgodnie z regulaminem programu szkoleniowego.
              </p>
              <p>
                3. Operator nie ponosi odpowiedzialności za działania Providerów wobec podopiecznych.
              </p>
            </Section>

            <Section title="XIII. Zmiany regulaminu">
              <p>
                1. Operator zastrzega sobie prawo do zmiany Regulaminu.
              </p>
              <p>
                2. Zmiany obowiązują od daty publikacji na stronie Sklepu.
              </p>
              <p>
                3. Zamówienia złożone przed zmianą realizowane są na warunkach obowiązujących w dniu zamówienia.
              </p>
            </Section>

            <Section title="XIV. Postanowienia końcowe">
              <p>
                1. W sprawach nieuregulowanych regulaminem stosuje się przepisy prawa polskiego i prawa UE.
              </p>
              <p>
                2. Spory rozstrzygane będą przez sąd właściwy dla siedziby Operatora lub zgodnie z przepisami właściwymi dla Użytkownika.
              </p>
              <p>
                3. Regulamin wchodzi w życie z dniem publikacji i zastępuje wcześniejsze wersje.
              </p>
            </Section>

            <div className="mt-12 pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Pytania dotyczące regulaminu lub zamówień?
              </p>
              <Link
                to="/pomoc"
                className="text-sm text-primary hover:underline font-medium"
              >
                Centrum pomocy
              </Link>
              <span className="text-muted-foreground mx-3 text-sm">lub</span>
              <Link
                to="/polityka-prywatnosci"
                className="text-sm text-primary hover:underline font-medium"
              >
                Polityka prywatności
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
