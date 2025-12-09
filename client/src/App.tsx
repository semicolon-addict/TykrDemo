
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/dashboard";
import StockDetail from "@/pages/stock-detail";
import Screener from "@/pages/screener";
import Portfolio from "@/pages/portfolio";
import Education from "@/pages/education";
import LandingPage from "@/pages/landing";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/stock/:ticker" component={StockDetail} />
      <Route path="/screener" component={Screener} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/education" component={Education} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
