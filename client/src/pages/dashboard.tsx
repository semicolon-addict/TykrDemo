
import Layout from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MARKET_INDICES, STOCKS, SCORES } from "@/lib/mockData";
import { ArrowUpRight, ArrowDownRight, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Dashboard() {
  const topPicks = STOCKS.filter(s => SCORES[s.ticker].summary === "On Sale").slice(0, 3);

  return (
    <Layout>
      <div className="space-y-2">
        <h1 className="text-3xl font-display font-bold text-foreground">Market Overview</h1>
        <p className="text-muted-foreground">Welcome back, Alex. Here's what's happening today.</p>
      </div>

      {/* Market Indices */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {MARKET_INDICES.map((idx) => (
          <Card key={idx.name} className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <p className="text-sm font-medium text-muted-foreground">{idx.name}</p>
                {idx.change >= 0 ? (
                  <ArrowUpRight className="w-4 h-4 text-success" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-destructive" />
                )}
              </div>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold font-display tracking-tight">{idx.value.toLocaleString()}</span>
                <span className={`text-sm font-medium mb-1 ${idx.change >= 0 ? 'text-success' : 'text-destructive'}`}>
                  {idx.change >= 0 ? '+' : ''}{idx.change}%
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Top Picks Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
           <h2 className="text-xl font-bold font-display">Top Rated "On Sale"</h2>
           <Link href="/screener" className="text-sm font-medium text-primary hover:underline">
             View All Matches
           </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topPicks.map((stock) => {
            const score = SCORES[stock.ticker];
            return (
              <Link key={stock.ticker} href={`/stock/${stock.ticker}`} className="group block">
                  <Card className="h-full border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group-hover:border-primary/50">
                    <div className="absolute top-0 left-0 w-1 h-full bg-success" />
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-lg">{stock.ticker}</CardTitle>
                            <span className="px-2 py-0.5 rounded-full bg-success/10 text-success text-xs font-bold border border-success/20">
                              {score.total}/100
                            </span>
                          </div>
                          <CardDescription className="mt-1">{stock.name}</CardDescription>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">${stock.price.toFixed(2)}</p>
                          <p className={`text-xs font-medium ${stock.change >= 0 ? 'text-success' : 'text-destructive'}`}>
                             {stock.change >= 0 ? '+' : ''}{stock.changePercent}%
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                       <div className="grid grid-cols-3 gap-2 text-center text-xs">
                          <div className="bg-secondary/50 p-2 rounded">
                            <span className="block text-muted-foreground mb-1">Quality</span>
                            <span className="font-bold text-foreground">{score.quality}</span>
                          </div>
                          <div className="bg-secondary/50 p-2 rounded">
                            <span className="block text-muted-foreground mb-1">Value</span>
                            <span className="font-bold text-foreground">{score.value}</span>
                          </div>
                          <div className="bg-secondary/50 p-2 rounded">
                            <span className="block text-muted-foreground mb-1">Safety</span>
                            <span className="font-bold text-foreground">{score.safety}</span>
                          </div>
                       </div>
                    </CardContent>
                  </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Feature Highlight */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-linear-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardHeader>
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-2">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <CardTitle>Portfolio Health Check</CardTitle>
            <CardDescription>Your portfolio safety score has increased by 5% this week.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full bg-background hover:bg-background/80">View Analysis</Button>
          </CardContent>
        </Card>
        
        <Card className="bg-linear-to-br from-warning/5 to-warning/10 border-warning/20">
          <CardHeader>
            <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center mb-2">
              <Zap className="w-5 h-5 text-warning-foreground" />
            </div>
            <CardTitle>New Educational Content</CardTitle>
            <CardDescription>Master the art of "Moat Investing" in our latest 5-min guide.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full bg-background hover:bg-background/80">Start Reading</Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
