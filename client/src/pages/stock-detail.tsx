
import { useParams } from "wouter";
import Layout from "@/components/layout";
import { STOCKS, SCORES } from "@/lib/mockData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Info, AlertCircle, CheckCircle2, DollarSign, Shield, Activity, TrendingUp, ShieldCheck } from "lucide-react";

export default function StockDetail() {
  const { ticker } = useParams();
  const stock = STOCKS.find(s => s.ticker === ticker);
  const score = SCORES[ticker || ""] || SCORES["AAPL"]; // Fallback

  if (!stock) return <Layout><div className="p-10 text-center">Stock not found</div></Layout>;

  // Mock chart data
  const chartData = [
    { date: 'Jan', price: stock.price * 0.9 },
    { date: 'Feb', price: stock.price * 0.95 },
    { date: 'Mar', price: stock.price * 0.92 },
    { date: 'Apr', price: stock.price * 1.05 },
    { date: 'May', price: stock.price * 0.98 },
    { date: 'Jun', price: stock.price },
  ];

  const getScoreColor = (val: number) => {
    if (val >= 80) return "text-success bg-success/10 border-success/20";
    if (val >= 50) return "text-warning-foreground bg-warning/10 border-warning/20";
    return "text-destructive bg-destructive/10 border-destructive/20";
  };

  return (
    <Layout>
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-display font-bold text-foreground">{stock.ticker}</h1>
            <Badge variant="outline" className="text-muted-foreground font-normal text-sm px-3 py-1">
              {stock.sector}
            </Badge>
          </div>
          <p className="text-lg text-muted-foreground mt-1">{stock.name}</p>
        </div>
        <div className="text-left md:text-right">
          <div className="text-3xl font-bold font-mono tracking-tight">${stock.price.toFixed(2)}</div>
          <div className={`flex items-center justify-end gap-1 font-medium ${stock.change >= 0 ? 'text-success' : 'text-destructive'}`}>
            {stock.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <Activity className="w-4 h-4" />}
            {stock.change >= 0 ? '+' : ''}{stock.change} ({stock.changePercent}%)
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Area */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Price Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="date" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                      dy={10}
                    />
                    <YAxis 
                      domain={['auto', 'auto']} 
                      axisLine={false} 
                      tickLine={false}
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                      tickFormatter={(val) => `$${val}`}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'hsl(var(--popover))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                      itemStyle={{ color: 'hsl(var(--foreground))' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="price" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorPrice)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="summary">
            <TabsList>
              <TabsTrigger value="summary">Summary</TabsTrigger>
              <TabsTrigger value="financials">Financials</TabsTrigger>
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
            </TabsList>
            <TabsContent value="summary" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>About {stock.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">
                    {stock.description}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div>
                      <div className="text-sm text-muted-foreground">Market Cap</div>
                      <div className="font-semibold">${(stock.marketCap / 1000).toFixed(1)}B</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">P/E Ratio</div>
                      <div className="font-semibold">24.5</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Dividend Yield</div>
                      <div className="font-semibold">0.54%</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Beta</div>
                      <div className="font-semibold">1.12</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar Analysis */}
        <div className="space-y-6">
          {/* Overall Score Card */}
          <Card className="border-primary/20 bg-secondary/10 overflow-hidden relative">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <ShieldCheck size={120} />
             </div>
             <CardHeader>
               <CardTitle>Stock Score</CardTitle>
               <CardDescription>AI-driven fundamental analysis</CardDescription>
             </CardHeader>
             <CardContent>
               <div className="flex items-center gap-4 mb-6">
                 <div className={`text-5xl font-bold font-display tracking-tighter ${
                    score.total >= 80 ? "text-success" : score.total >= 50 ? "text-warning-foreground" : "text-destructive"
                 }`}>
                   {score.total}
                 </div>
                 <div className="flex flex-col">
                   <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Verdict</span>
                   <Badge className={`mt-1 text-sm ${
                      score.summary === "On Sale" ? "bg-success hover:bg-success/90" : 
                      score.summary === "Watch" ? "bg-warning hover:bg-warning/90 text-warning-foreground" : "bg-destructive"
                   }`}>
                     {score.summary}
                   </Badge>
                 </div>
               </div>

               <div className="space-y-4">
                 <ScoreRow label="Quality" value={score.quality} icon={ShieldCheck} />
                 <ScoreRow label="Value" value={score.value} icon={DollarSign} />
                 <ScoreRow label="Growth" value={score.growth} icon={TrendingUp} />
                 <ScoreRow label="Safety" value={score.safety} icon={Shield} />
               </div>
             </CardContent>
          </Card>

          {/* Action Card */}
          <Card>
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-primary hover:bg-primary/90">Add to Portfolio</Button>
              <Button variant="outline" className="w-full">Add to Watchlist</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}

function ScoreRow({ label, value, icon: Icon }: { label: string, value: number, icon: any }) {
  const getColor = (v: number) => {
    if (v >= 80) return "bg-success";
    if (v >= 50) return "bg-warning";
    return "bg-destructive";
  };

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="flex items-center gap-2 text-muted-foreground">
          <Icon className="w-4 h-4" /> {label}
        </span>
        <span className="font-bold">{value}/100</span>
      </div>
      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full ${getColor(value)} transition-all duration-1000`} 
          style={{ width: `${value}%` }} 
        />
      </div>
    </div>
  );
}
