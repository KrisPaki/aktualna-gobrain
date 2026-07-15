import { renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import ItsPage from "@/pages/ItsPage";
import StrefaTerapeutyPage from "@/pages/StrefaTerapeutyPage";
import SzkoleniaPage from "@/pages/SzkoleniaPage";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import FaqPage from "@/pages/FaqPage";
import PomocPage from "@/pages/PomocPage";
import SklepPage from "@/pages/SklepPage";
import ProgramyEdukacyjnePage from "@/pages/ProgramyEdukacyjnePage";
import ProgramPage from "@/pages/ProgramPage";
import ItsSchoolPage from "@/pages/ItsSchoolPage";
import KartaMowyPage from "@/pages/KartaMowyPage";
import DarmoveWebinaryPage from "@/pages/DarmoveWebinaryPage";
import UlotkaPage from "@/pages/UlotkaPage";
import NotFound from "@/pages/not-found";

export function render(url: string): string {
  const helmetContext = {};
  const queryClient = new QueryClient();

  const html = renderToStaticMarkup(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <StaticRouter location={url}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/its" element={<ItsPage />} />
                <Route path="/its-school" element={<ItsSchoolPage />} />
                <Route path="/strefa-terapeuty" element={<StrefaTerapeutyPage />} />
                <Route path="/szkolenia-i-webinary" element={<SzkoleniaPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/pomoc" element={<PomocPage />} />
                <Route path="/sklep" element={<SklepPage />} />
                <Route path="/programy-edukacyjne" element={<ProgramyEdukacyjnePage />} />
                <Route path="/programy-edukacyjne/:slug" element={<ProgramPage />} />
                <Route path="/karta-mowy" element={<KartaMowyPage />} />
                <Route path="/darmowe-webinary" element={<DarmoveWebinaryPage />} />
                <Route path="/ulotka" element={<UlotkaPage />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </StaticRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );

  return html;
}
