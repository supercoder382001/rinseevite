
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import NotFound from "./pages/NotFound";
import LaundryServicePage from "./pages/services/LaundryServicePage";
import DryCleaningServicePage from "./pages/services/DryCleaningServicePage";
import IroningServicePage from "./pages/services/IroningServicePage";
import SpecialtyServicePage from "./pages/services/SpecialtyServicePage";
import WashAndFoldPage from "./pages/services/WashAndFoldPage";
import WashAndIronPage from "./pages/services/WashAndIronPage";
import ContactUsPage from "./pages/ContactUsPage";
import PackagesPage from "./pages/PackagesPage";

const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/laundry" element={<LaundryServicePage />} />
          <Route path="/services/wash-and-fold" element={<WashAndFoldPage />} />
          <Route path="/services/wash-and-iron" element={<WashAndIronPage />} />
          <Route path="/services/dry-cleaning" element={<DryCleaningServicePage />} />
          <Route path="/services/ironing" element={<IroningServicePage />} />
          <Route path="/services/specialty" element={<SpecialtyServicePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
