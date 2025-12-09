
import Layout from "@/components/layout";
import { STOCKS, SCORES } from "@/lib/mockData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { SlidersHorizontal, Search } from "lucide-react";
import { useState } from "react";

export default function Screener() {
  const [filter, setFilter] = useState("");

  const filteredStocks = STOCKS.filter(stock => 
    stock.name.toLowerCase().includes(filter.toLowerCase()) || 
    stock.ticker.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-display font-bold">Stock Screener</h1>
          <p className="text-muted-foreground">Find the best companies based on our 4M Analysis (MOS, Meaning, Moat, Management).</p>
        </div>

        {/* Filters Bar */}
        <div className="bg-card border border-border rounded-lg p-4 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
           <div className="flex items-center gap-4 w-full md:w-auto flex-1">
             <div className="relative w-full md:w-80">
               <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
               <Input 
                 placeholder="Search by name or ticker..." 
                 className="pl-9"
                 value={filter}
                 onChange={(e) => setFilter(e.target.value)}
               />
             </div>
             <div className="h-8 w-[1px] bg-border hidden md:block" />
             <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Sector" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sectors</SelectItem>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="finance">Financial</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="score">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Min Score" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="score">Any Score</SelectItem>
                    <SelectItem value="80">80+ (Excellent)</SelectItem>
                    <SelectItem value="50">50+ (Average)</SelectItem>
                  </SelectContent>
                </Select>
             </div>
           </div>
           <Button variant="outline" className="gap-2">
             <SlidersHorizontal className="w-4 h-4" />
             More Filters
           </Button>
        </div>

        {/* Results Table */}
        <div className="border border-border rounded-lg bg-card overflow-hidden shadow-sm">
          <Table>
            <TableHeader className="bg-secondary/30">
              <TableRow>
                <TableHead className="w-[100px]">Ticker</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Summary</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Safety</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStocks.map((stock) => {
                const score = SCORES[stock.ticker];
                return (
                  <TableRow key={stock.ticker} className="hover:bg-muted/30 transition-colors">
                    <TableCell className="font-bold font-mono">
                      <Link href={`/stock/${stock.ticker}`} className="hover:text-primary hover:underline">
                        {stock.ticker}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{stock.name}</span>
                        <span className="text-xs text-muted-foreground">{stock.sector}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={`font-bold ${score.total >= 80 ? "text-success" : score.total >= 50 ? "text-warning-foreground" : "text-destructive"}`}>
                        {score.total}
                      </span>
                    </TableCell>
                    <TableCell>
                       <Badge variant="outline" className={`
                         ${score.summary === "On Sale" ? "bg-success/10 text-success border-success/20" : ""}
                         ${score.summary === "Watch" ? "bg-warning/10 text-warning-foreground border-warning/20" : ""}
                         ${score.summary === "Overpriced" ? "bg-destructive/10 text-destructive border-destructive/20" : ""}
                       `}>
                         {score.summary}
                       </Badge>
                    </TableCell>
                    <TableCell>${stock.price.toFixed(2)}</TableCell>
                    <TableCell>
                      <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                           className="h-full bg-primary" 
                           style={{ width: `${score.safety}%` }} 
                        />
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Menu</span>
                        ...
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </Layout>
  );
}
