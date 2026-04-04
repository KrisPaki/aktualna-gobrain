import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import PlaceholderPage from "@/pages/PlaceholderPage";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/its">
        <PlaceholderPage title="ITS GoBrain - Zabawy z dźwiękami" />
      </Route>
      <Route path="/its-school">
        <PlaceholderPage title="ITS GoBrain School" />
      </Route>
      <Route path="/strefa-terapeuty">
        <PlaceholderPage title="Strefa Terapeuty" />
      </Route>
      <Route path="/szkolenia-i-webinary">
        <PlaceholderPage title="Szkolenia i Webinary" />
      </Route>
      <Route path="/blog">
        <PlaceholderPage title="Blog GoBrain" />
      </Route>
      <Route path="/faq">
        <PlaceholderPage title="Często zadawane pytania (FAQ)" />
      </Route>
      <Route path="/pomoc">
        <PlaceholderPage title="Centrum Pomocy" />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
