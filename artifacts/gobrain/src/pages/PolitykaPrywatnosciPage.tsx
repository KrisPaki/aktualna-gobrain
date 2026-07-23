import { motion, type Variants } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

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

export default function PolitykaPrywatnosciPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <SEO
        title="Polityka prywatności — ITS GoBrain"
        description="Polityka prywatności serwisu gobrain.pl. Dowiedz się, jakie dane osobowe zbieramy, jak je chronimy i jakie prawa Ci przysługują."
        canonical="/polityka-prywatnosci"
      />
      <div className="pt-16">
        <section className="py-12 md:py-16 bg-card/40 border-b border-border">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
                Polityka prywatności
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
            <Section title="A. Wprowadzenie">
              <p>
                Prywatność odwiedzających naszą stronę internetową jest dla nas bardzo ważna i dokładamy wszelkich starań, aby ją chronić. Niniejsza polityka wyjaśnia, co robimy z Twoimi danymi osobowymi.
              </p>
              <p>
                Zgoda na korzystanie z plików cookie zgodnie z warunkami niniejszej polityki podczas pierwszej visiity na naszej stronie pozwala nam na korzystanie z plików cookie przy każdej kolejnej wizycie na naszej stronie.
              </p>
            </Section>

            <Section title="B. Zbieranie danych osobowych">
              <p>
                Następujące rodzaje danych osobowych mogą być gromadzone, przechowywane i wykorzystywane:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>informacje o komputerze, w tym adres IP, lokalizacja geograficzna, typ i wersja przeglądarki oraz system operacyjny;</li>
                <li>informacje o Twoich wizytach i korzystaniu z tej witryny, w tym źródło odesłań, długość wizyty, wyświetlenia stron i ścieżki nawigacji w witrynie;</li>
                <li>informacje, takie jak adres e-mail, które podajesz podczas rejestracji w naszej witrynie internetowej;</li>
                <li>informacje wprowadzane podczas tworzenia profilu w naszej witrynie — na przykład imię i nazwisko, zdjęcia profilowe, płeć, data urodzin, status związku, zainteresowania i hobby, dane edukacyjne i dane dotyczące zatrudnienia;</li>
                <li>informacje, takie jak imię i nazwisko oraz adres e-mail, które podajesz w celu skonfigurowania subskrypcji naszych e-maili lub biuletynów;</li>
                <li>informacje wprowadzane podczas korzystania z usług na naszej stronie internetowej;</li>
                <li>informacje, które są generowane podczas korzystania z naszej strony internetowej, w tym kiedy, jak często i w jakich okolicznościach z niej korzystasz;</li>
                <li>informacje dotyczące wszystkiego, co kupujesz, usług, z których korzystasz lub transakcji dokonywanych za pośrednictwem naszej strony internetowej, w tym imię i nazwisko, adres, numer telefonu, adres e-mail i dane karty kredytowej;</li>
                <li>informacje publikowane na naszej stronie internetowej z zamiarem opublikowania ich w Internecie, w tym nazwa użytkownika, zdjęcia profilowe i treść umieszczanych postów;</li>
                <li>informacje zawarte we wszelkiej korespondencji przesyłanej do nas e-mailem lub za pośrednictwem naszej strony internetowej, w tym treści komunikacyjne i metadane;</li>
                <li>wszelkie inne dane osobowe, które nam przesyłasz.</li>
              </ul>
              <p className="mt-4">
                Zanim ujawnisz nam dane osobowe innej osoby, musisz uzyskać zgodę tej osoby na ujawnienie i przetwarzanie tych danych osobowych zgodnie z niniejszymi zasadami.
              </p>
            </Section>

            <Section title="C. Korzystanie z Twoich danych osobowych">
              <p>
                Dane osobowe przesłane do nas za pośrednictwem naszej strony internetowej będą wykorzystywane do celów określonych w niniejszej polityce lub na odpowiednich stronach witryny. Możemy wykorzystywać Twoje dane osobowe do celu:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>administrowania naszą stroną internetową i biznesem;</li>
                <li>personalizowania naszej strony internetowej dla Ciebie;</li>
                <li>umożliwienia korzystania z usług dostępnych na naszej stronie internetowej;</li>
                <li>wysyłania towarów zakupionych za pośrednictwem naszej strony internetowej;</li>
                <li>świadczenia usług zakupionych za pośrednictwem naszej strony internetowej;</li>
                <li>wysyłania do ciebie wyciągów, faktur i przypomnień o płatnościach oraz odbioru płatności od Ciebie;</li>
                <li>przesyłania niemarketingowej komunikacji handlowej;</li>
                <li>wysyłania powiadomień e-mail, o które prosiłeś;</li>
                <li>wysyłania naszego newslettera e-mail, jeśli o to poprosiłeś (możesz nas w każdej chwili poinformować, jeśli nie chcesz już otrzymywać newslettera);</li>
                <li>przesyłania informacji marketingowych dotyczących naszej działalności lub aktywności starannie wybranych stron trzecich, które naszym zdaniem mogą Cię zainteresować, pocztą lub, jeśli wyraziłeś na to zgodę, pocztą elektroniczną lub podobną technologią (możesz nas o tym poinformować w dowolnym momencie, jeśli nie chcesz już otrzymywać komunikatów marketingowych);</li>
                <li>dostarczania stronom trzecim informacji statystycznych o naszym użytkownikach (ale te osoby trzecie nie będą w stanie zidentyfikować żadnego konkretnego użytkownika na podstawie tych informacji);</li>
                <li>zajmowania się zapytaniami i skargami składanymi przez Ciebie lub dotyczącymi Ciebie w związku z naszą witryną;</li>
                <li>zapewnienia bezpieczeństwa naszej strony internetowej i zapobieganie oszustwom;</li>
                <li>weryfikacji zgodności z warunkami korzystania z naszej strony internetowej (w tym monitorowanie prywatnych wiadomości wysyłanych za pośrednictwem naszej prywatnej usługi przesyłania wiadomości); i</li>
                <li>innych zastosowań.</li>
              </ul>
              <p className="mt-4">
                Jeśli prześlesz dane osobowe do publikacji w naszej witrynie, opublikujemy je i wykorzystamy w inny sposób zgodnie z udzieloną nam licencją. Twoje ustawienia prywatności mogą być wykorzystane do ograniczenia publikacji Twoich informacji na naszej stronie internetowej i mogą być dostosowane za pomocą kontroli prywatności na stronie. Nie będziemy bez Twojej wyraźnej zgody przekazywać danych osobowych stronom trzecim w celach marketingu bezpośredniego.
              </p>
            </Section>

            <Section title="D. Ujawnianie danych osobowych">
              <p>
                Możemy ujawniać dane osobowe użytkownika wszelkim naszym pracownikom, członkom kadry kierowniczej, przedstawicielom, dostawcom lub podwykonawcom, o ile jest to niezbędne do celów określonych w niniejszych „Zasadach ochrony prywatności”.
              </p>
              <p>
                Możemy ujawniać dane osobowe wszelkim członkom naszej grupy spółek (tzn. spółkom zależnym, głównej spółce holdingowej i jej spółkom zależnym), o ile jest to niezbędne do celów określonych w niniejszych „Zasadach ochrony prywatności”.
              </p>
              <p>
                Możemy ujawniać Twoje dane osobowe:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>w zakresie, w jakim jest to wymagane przepisami prawa;</li>
                <li>w związku z trwającymi lub potencjalnymi postępowaniami prawnymi;</li>
                <li>w celu ustanowienia, wyegzekwowania lub obrony naszych praw (wliczając w to udostępnienie informacji innym podmiotom w celu przeciwdziałania oszustwom);</li>
                <li>nabywcy (lub potencjalnemu nabywcy) jakiejkolwiek działalności lub aktywów, które sprzedajemy (lub rozważamy); i</li>
                <li>wszelkim osobom, które wedle naszej zasadnej opinii mogą wystąpić do sądu lub innego właściwego organu o ujawnienie takich danych osobowych, jeśli wedle zasadnej rozsądnej opinii, istnieje duże prawdopodobieństwo, że taki sąd lub organ nakaże ujawnienie takich danych osobowych.</li>
              </ul>
              <p className="mt-4">
                Z wyjątkiem postanowień zawartych w ninzych „Zasadach ochrony prywatności” nie będziemy udostępniać osobom trzecim informacji dotyczących użytkownika.
              </p>
            </Section>

            <Section title="E. Międzynarodowe transfery danych">
              <p>
                1. Informacje, które gromadzimy mogą być przechowywane i przetwarzane w każdym z krajów, w którym prowadzimy działalność i mogą być przesyłane pomiędzy tymi krajami w celu umożliwienia wykorzystania informacji zgodnie z niniejszymi „Zasadach ochrony prywatności”.
              </p>
              <p>
                2. Informacje, które zbieramy, mogą być przekazywane do krajów, które nie mają przepisów o ochronie danych równoważnych z obowiązującymi w Europejskim Obszarze Gospodarczym.
              </p>
              <p>
                3. Dane osobowe, które publikujesz na naszej stronie internetowej lub przesyłasz do publikacji na naszej stronie internetowej, mogą być dostępne za pośrednictwem Internetu na całym świecie. Nie możemy zapobiec wykorzystywaniu lub niewłaściwemu wykorzystaniu takich informacji przez inne osoby.
              </p>
              <p>
                4. Wyraźnie zgadzasz się na przekazywanie danych osobowych opisanych w tej sekcji E.
              </p>
            </Section>

            <Section title="F. Zachowywanie danych osobowych">
              <p>
                1. W niniejszej Sekcji F określiliśmy nasze zasady i procedury dotyczące zatrzymywania danych, które mają na celu zapewnienie przestrzegania naszych zobowiązań prawnych w zakresie zachowywania i usuwania danych osobowych.
              </p>
              <p>
                2. Dane osobowe, które przetwarzamy w dowolnym celu lub celach, nie będą przechowywane dłużej niż jest to konieczne do tego celu lub tych celów. Dane osobowe są usuwane w terminie określonym przepisami prawa lub po wycofaniu zgody użytkownika.
              </p>
              <p>
                3. Niezależnie od innych postanowień niniejszej sekcji F zachowamy dokumenty (w tym dokumenty elektroniczne) zawierające dane osobowe:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>w zakresie, w jakim jest to wymagane przepisami prawa;</li>
                <li>jeśli uważamy, że dokumenty mogą mieć znaczenie dla wszelkich toczących się lub przyszłych postępowań sądowych; i</li>
                <li>w celu ustanowienia, wyegzekwowania lub obrony naszych praw (wliczając w to udostępnienie informacji innym podmiotom w celu przeciwdziałania oszustwom).</li>
              </ul>
            </Section>

            <Section title="G. Bezpieczeństwo danych osobowych">
              <p>
                1. Podejmiemy zasadne techniczne i organizacyjne środki ostrożności w celu przeciwdziałania utracie, nadużyciu lub zmianie danych osobowych użytkownika.
              </p>
              <p>
                2. Będziemy przechowywać wszystkie dane osobowe, które podasz na naszych bezpiecznych serwerach (chronionych hasłem i zaporą).
              </p>
              <p>
                3. Wszystkie elektroniczne transakcje finansowe zawierane za pośrednictwem naszej strony internetowej będą chronione technologią szyfrowania.
              </p>
              <p>
                4. Użytkownik przyjmuje do wiadomości, że transmisja informacji przez Internet jest potencjalnie niebezpieczna i bezpieczeństwo przesłanych w ten sposób danych nie jest gwarantowane.
              </p>
              <p>
                5. Jesteś odpowiedzialny za zachowanie poufności hasła używanego do uzyskania dostępu do naszej strony internetowej; nie poprosimy Cię o podanie hasła (z wyjątkiem sytuacji, gdy logujesz się na naszej stronie internetowej).
              </p>
            </Section>

            <Section title="H. Nowelizacje">
              <p>
                Niniejsze zasady mogą być okresowo aktualizowane poprzez zamieszczenie w naszej witrynie ich nowej wersji. Należy od czasu do czasu sprawdzać tę stronę, aby upewnić się, że rozumiesz wszelkie zmiany w tych zasadach. Możemy powiadomić Cię o zmianach w niniejszej polityce za pośrednictwem poczty elektronicznej lub prywatnego systemu przesyłania wiadomości na naszej stronie internetowej.
              </p>
            </Section>

            <Section title="I. Twoje prawa">
              <p>
                Użytkownik może zażądać udostępnienia jego danych osobowych, które są przechowywane. Udostępnienie takich danych wiąże się z:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>bezpłatnym udostępnieniem danych (chyba że żądanie jest ewidentnie nieuzasadnione lub nadmierne); i</li>
                <li>dostarczeniem odpowiedniego potwierdzenia tożsamości.</li>
              </ul>
              <p className="mt-4">
                Możemy na Twoje żądanie ukrywać dane osobowe, w zakresie dozwolonym przez prawo. Możesz w dowolnym momencie poinstruować nas, aby nie przetwarzać danych osobowych w celach marketingowych. W praktyce zazwyczaj albo z góry wyraźnie wyrażasz zgodę na wykorzystanie przez nas Twoich danych osobowych w celach marketingowych, albo zapewnimy Ci możliwość rezygnacji z udostępniania Twoich danych osobowych w celach marketingowych.
              </p>
            </Section>

            <Section title="J. Strony Internetowe osób trzecich">
              <p>
                Nasza strona internetowa zawiera hiperłącza do stron internetowych osób trzecich oraz szczegółowe informacje na ich temat. Nie mamy kontroli i nie ponosimy odpowiedzialności za politykę prywatności i praktyki osób trzecich.
              </p>
            </Section>

            <Section title="K. Aktualizacja informacji">
              <p>
                Prosimy o informację w przypadku konieczności skorygowania lub aktualizowania danych osobowych, w których posiadaniu jesteśmy.
              </p>
            </Section>

            <Section title="L. Ciasteczka">
              <p>
                Nasza strona internetowa korzysta z plików cookie. Plik cookie to plik zawierający identyfikator (ciąg liter i cyfr), który jest wysyłany przez serwer internetowy do przeglądarki internetowej i przechowywany przez przeglądarkę. Dane identyfikacyjne są ponownie przesyłane na serwer za każdym razem, gdy przeglądarka wyśle żądanie otwarcia strony znajdującej się na serwerze.
              </p>
              <p>
                Używamy zarówno sesyjnych, jak i trwałych ciasteczek na naszej stronie. Używamy ich za pośrednictwem narzędzi takich jak Google Analytics, aby rozpoznawać komputery odwiedzających witrynę, analizować korzystanie ze strony internetowej, administrować stroną internetową oraz poprawiać jej bezpieczeństwo i użyteczność.
              </p>
              <p>
                Większość przeglądarek pozwala odmówić przyjęcia plików cookie. Zablokowanie wszystkich plików cookie będzie miało negatywny wpływ na możliwość korzystania z wielu stron internetowych. Możesz usunąć pliki cookie już zapisane na komputerze za pomocą ustawień swojej przeglądarki.
              </p>
            </Section>

            <div className="mt-12 pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Masz pytania dotyczące prywatności?
              </p>
              <Link
                to="/pomoc"
                className="text-sm text-primary hover:underline font-medium"
              >
                Skontaktuj się z nami
              </Link>
              <span className="text-muted-foreground mx-3 text-sm">lub</span>
              <Link
                to="/regulamin"
                className="text-sm text-primary hover:underline font-medium"
              >
                Przeczytaj Regulamin
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
