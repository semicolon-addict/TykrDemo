
import { Link, useLocation } from "wouter";
import { LayoutDashboard, LineChart, PieChart, GraduationCap, Search, Bell, Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard, href: "/" },
    { label: "Screener", icon: Search, href: "/screener" },
    { label: "Portfolio", icon: PieChart, href: "/portfolio" },
    { label: "Education", icon: GraduationCap, href: "/education" },
  ];

  const NavContent = () => (
    <div className="flex flex-col h-full bg-sidebar text-sidebar-foreground">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
             <LineChart className="w-5 h-5 text-primary-foreground" />
           </div>
           <span className="font-display font-bold text-xl tracking-tight">StockLens</span>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.href} href={item.href} className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive 
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm" 
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}>
                <item.icon className="w-5 h-5" />
                {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-sidebar-border">
        <div className="bg-sidebar-accent/50 rounded-lg p-4">
           <p className="text-xs text-sidebar-foreground/60 font-medium mb-2">My Plan</p>
           <div className="flex items-center justify-between mb-2">
             <span className="text-sm font-semibold">Premium</span>
             <span className="text-xs bg-success/20 text-success px-2 py-0.5 rounded-full">Active</span>
           </div>
           <div className="w-full bg-sidebar-border h-1.5 rounded-full overflow-hidden">
             <div className="bg-primary h-full w-[70%]" />
           </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-background text-foreground font-sans">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 border-r border-border fixed inset-y-0 z-50">
        <NavContent />
      </aside>

      {/* Mobile Sidebar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 border-b border-border bg-background/80 backdrop-blur-md z-40 px-4 flex items-center justify-between">
         <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <LineChart className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg">StockLens</span>
         </div>
         <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
           <SheetTrigger asChild>
             <Button variant="ghost" size="icon">
               <Menu className="w-5 h-5" />
             </Button>
           </SheetTrigger>
           <SheetContent side="left" className="p-0 border-r border-sidebar-border w-64">
             <NavContent />
           </SheetContent>
         </Sheet>
      </div>

      {/* Main Content */}
      <main className="flex-1 lg:pl-64 pt-16 lg:pt-0">
        <header className="h-16 border-b border-border bg-background/50 backdrop-blur-sm sticky top-0 z-30 px-6 flex items-center justify-between">
           <div className="w-full max-w-md hidden md:block">
             <div className="relative">
               <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
               <Input 
                 placeholder="Search tickers (e.g. AAPL)..." 
                 className="pl-9 bg-secondary/50 border-transparent focus:bg-background focus:border-ring transition-all"
               />
             </div>
           </div>
           <div className="flex items-center gap-4">
             <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-foreground">
               <Bell className="w-5 h-5" />
               <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full border-2 border-background" />
             </Button>
             <div className="h-8 w-[1px] bg-border mx-1" />
             <div className="flex items-center gap-3">
               <div className="text-right hidden sm:block">
                 <p className="text-sm font-medium leading-none">Alex Trader</p>
                 <p className="text-xs text-muted-foreground mt-1">Pro Investor</p>
               </div>
               <Avatar className="h-9 w-9 border border-border">
                 <AvatarImage src="https://github.com/shadcn.png" />
                 <AvatarFallback>AT</AvatarFallback>
               </Avatar>
             </div>
           </div>
        </header>
        <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {children}
        </div>
      </main>
    </div>
  );
}
