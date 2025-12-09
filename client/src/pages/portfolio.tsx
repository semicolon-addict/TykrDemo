
import Layout from "@/components/layout";
import { PORTFOLIO, STOCKS } from "@/lib/mockData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Badge } from "@/components/ui/badge";

export default function Portfolio() {
  const portfolioData = PORTFOLIO.map(item => {
    const stock = STOCKS.find(s => s.ticker === item.ticker);
    const currentValue = (stock?.price || 0) * item.shares;
    const costBasis = item.avgCost * item.shares;
    const gain = currentValue - costBasis;
    const gainPercent = (gain / costBasis) * 100;
    
    return {
      ...item,
      currentValue,
      gain,
      gainPercent,
      stock
    };
  });

  const totalValue = portfolioData.reduce((sum, item) => sum + item.currentValue, 0);
  const totalGain = portfolioData.reduce((sum, item) => sum + item.gain, 0);
  const totalGainPercent = ((totalValue - (totalValue - totalGain)) / (totalValue - totalGain)) * 100;

  const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))'];

  return (
    <Layout>
       <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-display font-bold">My Portfolio</h1>
          <p className="text-muted-foreground">Track your performance and asset allocation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Holdings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {portfolioData.map((item) => (
                  <div key={item.ticker} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                     <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold text-sm">
                         {item.ticker}
                       </div>
                       <div>
                         <div className="font-bold">{item.stock?.name}</div>
                         <div className="text-sm text-muted-foreground">{item.shares} shares @ ${item.avgCost.toFixed(2)}</div>
                       </div>
                     </div>
                     <div className="text-right">
                       <div className="font-bold font-mono">${item.currentValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
                       <div className={`text-sm font-medium ${item.gain >= 0 ? 'text-success' : 'text-destructive'}`}>
                         {item.gain >= 0 ? '+' : ''}{item.gain.toFixed(2)} ({item.gainPercent.toFixed(2)}%)
                       </div>
                     </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
             <Card className="bg-primary text-primary-foreground">
               <CardHeader className="pb-2">
                 <CardDescription className="text-primary-foreground/70">Total Portfolio Value</CardDescription>
                 <CardTitle className="text-4xl font-display">${totalValue.toLocaleString()}</CardTitle>
               </CardHeader>
               <CardContent>
                 <div className="flex items-center gap-2 bg-primary-foreground/10 p-2 rounded w-fit">
                   <span className="text-sm font-medium">Total Return</span>
                   <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-none">
                      {totalGain >= 0 ? '+' : ''}{totalGainPercent.toFixed(2)}%
                   </Badge>
                 </div>
               </CardContent>
             </Card>

             <Card>
               <CardHeader>
                 <CardTitle>Allocation</CardTitle>
               </CardHeader>
               <CardContent>
                 <div className="h-[200px] w-full">
                   <ResponsiveContainer width="100%" height="100%">
                     <PieChart>
                       <Pie
                         data={portfolioData}
                         cx="50%"
                         cy="50%"
                         innerRadius={60}
                         outerRadius={80}
                         paddingAngle={5}
                         dataKey="currentValue"
                       >
                         {portfolioData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                         ))}
                       </Pie>
                       <Tooltip />
                     </PieChart>
                   </ResponsiveContainer>
                 </div>
                 <div className="mt-4 space-y-2">
                   {portfolioData.map((item, index) => (
                     <div key={item.ticker} className="flex justify-between text-sm">
                       <div className="flex items-center gap-2">
                         <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                         <span>{item.ticker}</span>
                       </div>
                       <span className="text-muted-foreground">{((item.currentValue / totalValue) * 100).toFixed(1)}%</span>
                     </div>
                   ))}
                 </div>
               </CardContent>
             </Card>
          </div>
        </div>
       </div>
    </Layout>
  );
}
