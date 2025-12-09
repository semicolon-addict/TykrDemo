
import Layout from "@/components/layout";
import { ARTICLES } from "@/lib/mockData";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

export default function Education() {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto py-10">
           <h1 className="text-4xl font-display font-bold mb-4">Master the Market</h1>
           <p className="text-lg text-muted-foreground">
             Learn the fundamental principles of investing with our curated guides and tutorials.
             Start your 14-day confidence path today.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((article) => (
            <Card key={article.id} className="flex flex-col hover:shadow-lg transition-all duration-300 border-border/60">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{article.category}</Badge>
                  <div className="flex items-center text-xs text-muted-foreground gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </div>
                </div>
                <CardTitle className="leading-tight">{article.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {article.summary}
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" className="w-full justify-between group text-primary hover:text-primary hover:bg-primary/5">
                  Read Article
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-3xl font-display font-bold">14-Day Confidence Path</h2>
            <p className="text-muted-foreground">
              A step-by-step interactive course designed to take you from novice to confident investor. 
              Learn how to read balance sheets, calculate intrinsic value, and build a safe portfolio.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              Start Learning Now
            </Button>
          </div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
             <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
             <BookOpen className="w-24 h-24 text-primary relative z-10" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
