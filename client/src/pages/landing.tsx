
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { 
  LineChart, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Search, 
  Bell, 
  PieChart, 
  PlayCircle,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { AuthModal } from "@/components/auth-modal";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function LandingPage() {
  const [, setLocation] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const Navbar = () => (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
             <LineChart className="w-5 h-5 text-primary-foreground" />
           </div>
           <span className="font-display font-bold text-xl tracking-tight">StockLens</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
           <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium hover:text-primary transition-colors">How it works</button>
           <button onClick={() => scrollToSection('features')} className="text-sm font-medium hover:text-primary transition-colors">Features</button>
           <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium hover:text-primary transition-colors">Pricing</button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <AuthModal trigger={<Button variant="ghost">Log in</Button>} />
          <AuthModal trigger={<Button>Get Started</Button>} />
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
           <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
             <SheetTrigger asChild>
               <Button variant="ghost" size="icon">
                 <Menu className="w-5 h-5" />
               </Button>
             </SheetTrigger>
             <SheetContent side="right">
                <div className="flex flex-col gap-6 mt-8">
                   <button onClick={() => { scrollToSection('how-it-works'); setIsMobileMenuOpen(false); }} className="text-lg font-medium text-left">How it works</button>
                   <button onClick={() => { scrollToSection('features'); setIsMobileMenuOpen(false); }} className="text-lg font-medium text-left">Features</button>
                   <button onClick={() => { scrollToSection('pricing'); setIsMobileMenuOpen(false); }} className="text-lg font-medium text-left">Pricing</button>
                   <hr className="border-border" />
                   <div className="flex flex-col gap-3">
                     <AuthModal trigger={<Button variant="outline" className="w-full">Log in</Button>} />
                     <AuthModal trigger={<Button className="w-full">Get Started</Button>} />
                   </div>
                </div>
             </SheetContent>
           </Sheet>
        </div>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            New: AI-Powered Portfolio Analysis
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700">
            Make Smarter Stock Decisions—<span className="text-primary">In Minutes.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            A simple tool that analyzes stocks, scores opportunities, and helps you invest with confidence. No complex spreadsheets required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
             <AuthModal trigger={<Button size="lg" className="h-12 px-8 text-lg rounded-full">Get Started Free <ArrowRight className="ml-2 w-5 h-5" /></Button>} />
             <Button size="lg" variant="outline" className="h-12 px-8 text-lg rounded-full gap-2 group">
               <PlayCircle className="w-5 h-5 group-hover:text-primary transition-colors" /> Watch Demo
             </Button>
          </div>

          {/* Hero Visual */}
          <div className="relative max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
             <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-20"></div>
             <div className="relative rounded-xl border border-border bg-card/50 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="border-b border-border p-4 flex items-center gap-2 bg-card/80">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/50" />
                    <div className="w-3 h-3 rounded-full bg-warning/50" />
                    <div className="w-3 h-3 rounded-full bg-success/50" />
                  </div>
                  <div className="mx-auto text-xs font-medium text-muted-foreground bg-background/50 px-3 py-1 rounded-full">stocklens.app</div>
                </div>
                <div className="p-2 md:p-8 grid md:grid-cols-3 gap-6 text-left">
                   {/* Mock UI Elements */}
                   <div className="col-span-2 space-y-6">
                      <div className="flex items-center justify-between">
                         <div>
                           <h3 className="text-2xl font-bold">AAPL</h3>
                           <p className="text-muted-foreground">Apple Inc.</p>
                         </div>
                         <div className="text-right">
                           <div className="text-2xl font-bold">$175.43</div>
                           <div className="text-success text-sm font-medium">+1.24%</div>
                         </div>
                      </div>
                      <div className="h-48 w-full bg-primary/5 rounded-lg relative overflow-hidden flex items-end">
                         <div className="w-full h-full absolute inset-0 bg-linear-to-t from-primary/20 to-transparent" />
                         <svg className="w-full h-32 text-primary fill-primary/20 stroke-primary" viewBox="0 0 100 40" preserveAspectRatio="none">
                           <path d="M0 35 Q 20 10 40 25 T 100 5 V 40 H 0 Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                         </svg>
                      </div>
                   </div>
                   <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-background border border-border shadow-sm">
                         <div className="text-sm text-muted-foreground mb-2">Total Score</div>
                         <div className="flex items-center gap-3 mb-2">
                            <div className="text-4xl font-bold text-success">88</div>
                            <span className="text-xs bg-success/10 text-success px-2 py-0.5 rounded-full font-bold">Excellent</span>
                         </div>
                         <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                            <div className="bg-success h-full w-[88%]" />
                         </div>
                      </div>
                      <div className="space-y-2">
                         <div className="flex justify-between text-sm"><span className="text-muted-foreground">Quality</span> <span className="font-bold">92/100</span></div>
                         <div className="flex justify-between text-sm"><span className="text-muted-foreground">Value</span> <span className="font-bold">75/100</span></div>
                         <div className="flex justify-between text-sm"><span className="text-muted-foreground">Safety</span> <span className="font-bold">95/100</span></div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Social Proof */}
      <section className="py-12 border-y border-border/50 bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
           <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">Trusted by 25,000+ investors worldwide</p>
           <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Logo Placeholders */}
              <div className="text-xl font-bold font-display flex items-center gap-2"><div className="w-6 h-6 bg-foreground rounded-sm" /> FinanceDaily</div>
              <div className="text-xl font-bold font-display flex items-center gap-2"><div className="w-6 h-6 bg-foreground rounded-full" /> MarketEdge</div>
              <div className="text-xl font-bold font-display flex items-center gap-2"><div className="w-6 h-6 bg-foreground rotate-45" /> BizReview</div>
              <div className="text-xl font-bold font-display flex items-center gap-2"><div className="w-6 h-6 bg-foreground rounded-tr-xl" /> AlphaInsights</div>
           </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <section id="how-it-works" className="py-24 container mx-auto px-4">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Investing Simplified</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Stop guessing. Follow a proven system to find high-quality stocks in minutes.</p>
         </div>
         <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border -z-10" />
            
            <div className="bg-background p-6 rounded-2xl border border-border relative">
               <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-primary/20">1</div>
               <h3 className="text-xl font-bold mb-3">Analyze Instantly</h3>
               <p className="text-muted-foreground">Get instant fundamental metrics, valuations, risk signals, and a simple 0-100 score for thousands of stocks.</p>
            </div>
            <div className="bg-background p-6 rounded-2xl border border-border relative">
               <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-primary/20">2</div>
               <h3 className="text-xl font-bold mb-3">Compare & Filter</h3>
               <p className="text-muted-foreground">Sort stocks by score, sector, market cap, valuation, or growth to find the hidden gems.</p>
            </div>
            <div className="bg-background p-6 rounded-2xl border border-border relative">
               <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-primary/20">3</div>
               <h3 className="text-xl font-bold mb-3">Invest Confidently</h3>
               <p className="text-muted-foreground">Add to watchlist, track performance, and get alerts when conditions change. Know when to buy and sell.</p>
            </div>
         </div>
      </section>

      {/* 4. Features */}
      <section id="features" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                 <h2 className="text-3xl md:text-4xl font-display font-bold">Everything you need to beat the market</h2>
                 <p className="text-lg text-muted-foreground">We've distilled complex financial data into a powerful, easy-to-use platform.</p>
                 
                 <div className="grid gap-6">
                    <FeatureBox icon={ShieldCheck} title="Stock Scoring Engine" description="Translates financial data into an easy 0–100 score." />
                    <FeatureBox icon={Search} title="Smart Screener" description="Find undervalued, high-quality, or fast-growing stocks." />
                    <FeatureBox icon={PieChart} title="Portfolio Tracking" description="Track gains, allocations, and performance in real time." />
                    <FeatureBox icon={Bell} title="Alerts & Watchlists" description="Instant notifications when stock signals change." />
                 </div>
              </div>
              <div className="relative">
                 {/* Decorative background */}
                 <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-purple-500/20 rounded-3xl blur-3xl" />
                 
                 {/* Demo Card */}
                 <div className="relative bg-card border border-border rounded-2xl shadow-2xl p-6 md:p-8 space-y-6">
                    <div className="flex items-center justify-between border-b border-border pb-6">
                       <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">N</div>
                          <div>
                             <h4 className="font-bold text-lg">NVDA</h4>
                             <p className="text-sm text-muted-foreground">NVIDIA Corp.</p>
                          </div>
                       </div>
                       <div className="text-right">
                          <div className="font-mono font-bold">$824.50</div>
                          <div className="text-success text-sm">+1.89%</div>
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-4 bg-secondary/50 rounded-xl">
                          <div className="text-sm text-muted-foreground mb-1">Score</div>
                          <div className="text-2xl font-bold text-success">92/100</div>
                       </div>
                       <div className="p-4 bg-secondary/50 rounded-xl">
                          <div className="text-sm text-muted-foreground mb-1">Valuation</div>
                          <div className="text-lg font-bold text-primary">Fair Value</div>
                       </div>
                       <div className="p-4 bg-secondary/50 rounded-xl">
                          <div className="text-sm text-muted-foreground mb-1">Risk Level</div>
                          <div className="text-lg font-bold text-success">Low</div>
                       </div>
                       <div className="p-4 bg-secondary/50 rounded-xl">
                          <div className="text-sm text-muted-foreground mb-1">Trend</div>
                          <div className="text-lg font-bold flex items-center gap-1">
                             <TrendingUp className="w-4 h-4 text-success" /> Bullish
                          </div>
                       </div>
                    </div>
                    
                    <Button className="w-full h-12 text-lg">Analyze Stock</Button>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="py-24 container mx-auto px-4">
         <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">Why Investors Switch to StockLens</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
               <ul className="space-y-4">
                  <CheckItem>Simple scores instead of spreadsheets</CheckItem>
                  <CheckItem>Beginner-friendly but powerful</CheckItem>
               </ul>
               <ul className="space-y-4">
                  <CheckItem>Global stock coverage</CheckItem>
                  <CheckItem>Transparent rating methodology</CheckItem>
               </ul>
               <ul className="space-y-4">
                  <CheckItem>Fast, real-time data updates</CheckItem>
                  <CheckItem>Community-driven insights</CheckItem>
               </ul>
            </div>
         </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-24 container mx-auto px-4 text-center">
         <h2 className="text-3xl font-display font-bold mb-12">Loved by Investors</h2>
         <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="I finally understand which stocks are actually worth researching. The scoring system saves hours."
              author="David R."
              role="Software Engineer"
            />
            <TestimonialCard 
              quote="The only tool that gives me confidence to press the buy button. The safety scores are spot on."
              author="Sarah K."
              role="Small Business Owner"
            />
            <TestimonialCard 
              quote="Better than my expensive Bloomberg terminal for quick analysis. Clean, fast, and accurate."
              author="Michael T."
              role="Fund Manager"
            />
         </div>
      </section>

      {/* 8. Pricing Preview */}
      <section id="pricing" className="py-24 bg-secondary/30">
         <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl font-display font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-muted-foreground mb-12">Start for free, upgrade when you're ready to scale.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
               <Card className="p-8 border-border hover:border-primary/50 transition-colors">
                  <h3 className="text-2xl font-bold mb-2">Free</h3>
                  <p className="text-muted-foreground mb-6">For getting started</p>
                  <div className="text-4xl font-bold mb-6">$0<span className="text-lg text-muted-foreground font-normal">/mo</span></div>
                  <ul className="text-left space-y-3 mb-8">
                     <CheckItem color="text-foreground">Basic Watchlist</CheckItem>
                     <CheckItem color="text-foreground">Daily Screener (Limited)</CheckItem>
                     <CheckItem color="text-foreground">Top 10 Stocks</CheckItem>
                  </ul>
                  <AuthModal trigger={<Button variant="outline" className="w-full">Get Started</Button>} />
               </Card>
               <Card className="p-8 border-primary bg-primary/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                  <h3 className="text-2xl font-bold mb-2">Pro</h3>
                  <p className="text-muted-foreground mb-6">For serious investors</p>
                  <div className="text-4xl font-bold mb-6">$29<span className="text-lg text-muted-foreground font-normal">/mo</span></div>
                  <ul className="text-left space-y-3 mb-8">
                     <CheckItem color="text-foreground">Unlimited Watchlists</CheckItem>
                     <CheckItem color="text-foreground">Advanced Screener</CheckItem>
                     <CheckItem color="text-foreground">Full Scoring Engine</CheckItem>
                     <CheckItem color="text-foreground">Real-time Alerts</CheckItem>
                  </ul>
                  <AuthModal trigger={<Button className="w-full">Start 14-Day Free Trial</Button>} />
               </Card>
            </div>
         </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-24 container mx-auto px-4 text-center">
         <h2 className="text-4xl font-display font-bold mb-6">Ready to make smarter investing decisions?</h2>
         <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Join thousands of investors using StockLens today.</p>
         <AuthModal trigger={<Button size="lg" className="h-14 px-10 text-xl rounded-full shadow-xl shadow-primary/20">Start Free — No credit card needed</Button>} />
      </section>

      {/* 10. Footer */}
      <footer className="py-12 border-t border-border bg-card">
         <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
               <div>
                  <div className="flex items-center gap-2 mb-4">
                     <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                       <LineChart className="w-4 h-4 text-primary-foreground" />
                     </div>
                     <span className="font-bold text-lg">StockLens</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Making professional stock analysis accessible to everyone.</p>
               </div>
               <div>
                  <h4 className="font-bold mb-4">Platform</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                     <li><a href="#" className="hover:text-primary">Screener</a></li>
                     <li><a href="#" className="hover:text-primary">Portfolio</a></li>
                     <li><a href="#" className="hover:text-primary">Pricing</a></li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold mb-4">Company</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                     <li><a href="#" className="hover:text-primary">About</a></li>
                     <li><a href="#" className="hover:text-primary">Blog</a></li>
                     <li><a href="#" className="hover:text-primary">Careers</a></li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold mb-4">Legal</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                     <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                     <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
                  </ul>
               </div>
            </div>
            <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
               © 2024 StockLens Inc. All rights reserved.
            </div>
         </div>
      </footer>
    </div>
  );
}

function FeatureBox({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="flex gap-4 p-4 rounded-xl hover:bg-background hover:shadow-md transition-all border border-transparent hover:border-border">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h3 className="font-bold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function CheckItem({ children, color = "text-primary-foreground/90" }: { children: React.ReactNode, color?: string }) {
  return (
    <li className={`flex items-center gap-3 ${color}`}>
      <CheckCircle2 className="w-5 h-5 shrink-0" />
      <span>{children}</span>
    </li>
  );
}

function TestimonialCard({ quote, author, role }: { quote: string, author: string, role: string }) {
  return (
     <Card className="bg-card border-border">
        <CardContent className="pt-6">
           <div className="mb-4 text-primary">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.0547 15.372 14.5559 16.819 14.5559C18.266 14.5559 19.452 15.742 19.452 17.5898C19.452 18.728 19.006 19.443 18.423 20.035C18.916 20.655 20.25 21 21.01 21C22.251 21 23 20.248 23 18.736C23 15.393 19.799 12 16.892 12H16.29C14.735 12 13.5 13.235 13.5 14.76V21H14.017ZM8.017 21L8.017 18C8.017 16.0547 9.372 14.5559 10.819 14.5559C12.266 14.5559 13.452 15.742 13.452 17.5898C13.452 18.728 13.006 19.443 12.423 20.035C12.916 20.655 14.25 21 15.01 21C16.251 21 17 20.248 17 18.736C17 15.393 13.799 12 10.892 12H10.29C8.735 12 7.5 13.235 7.5 14.76V21H8.017Z" /></svg>
           </div>
           <p className="text-lg font-medium mb-6">"{quote}"</p>
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center font-bold text-muted-foreground">{author[0]}</div>
              <div className="text-left">
                 <div className="font-bold">{author}</div>
                 <div className="text-xs text-muted-foreground">{role}</div>
              </div>
           </div>
        </CardContent>
     </Card>
  );
}
