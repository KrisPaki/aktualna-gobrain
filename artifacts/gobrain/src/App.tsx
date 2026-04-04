import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import ItsPage from "@/pages/ItsPage";
import StrefaTerapeutyPage from "@/pages/StrefaTerapeutyPage";
import SzkoleniaPage from "@/pages/SzkoleniaPage";
import BlogPage from "@/pages/BlogPage";
import FaqPage from "@/pages/FaqPage";
import PomocPage from "@/pages/PomocPage";

const queryClient = new QueryClient();

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/its" element={<ItsPage />} />
      <Route path="/strefa-terapeuty" element={<StrefaTerapeutyPage />} />
      <Route path="/szkolenia-i-webinary" element={<SzkoleniaPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/pomoc" element={<PomocPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
          <Toaster />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
