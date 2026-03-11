import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import InternetPage from "./pages/InternetPage";
import TvStreamingPage from "./pages/TvStreamingPage";
import BundlesPage from "./pages/BundlesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import {
  DisclaimerPage, PrivacyPolicyPage, TermsPage,
  RefundPolicyPage, AdvertisingDisclosurePage, CookiesPolicyPage,
} from "./pages/LegalPages";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/internet" element={<InternetPage />} />
              <Route path="/tv-streaming" element={<TvStreamingPage />} />
              <Route path="/bundles" element={<BundlesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/disclaimer" element={<DisclaimerPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/refund-policy" element={<RefundPolicyPage />} />
              <Route path="/advertising-disclosure" element={<AdvertisingDisclosurePage />} />
              <Route path="/cookies-policy" element={<CookiesPolicyPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
