import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import SR9 from "./pages/products/SR9";
import P50 from "./pages/products/P50";
import AW550 from "./pages/products/AW550";
import BlackStarPro from "./pages/products/BlackStarPro";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/sr-9" element={<SR9 />} />
          <Route path="/products/p-50" element={<P50 />} />
          <Route path="/products/aw-550" element={<AW550 />} />
          <Route path="/products/black-star-pro" element={<BlackStarPro />} />
          <Route path="/products/*" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-2xl font-bold mb-4">Produktseiten</h1><p className="text-muted-foreground">Weitere Produktseiten werden in Kürze verfügbar sein.</p></div></div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
