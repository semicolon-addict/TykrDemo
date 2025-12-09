
export interface Stock {
  ticker: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  sector: string;
  industry: string;
  marketCap: number; // in millions
  description: string;
}

export interface Score {
  ticker: string;
  total: number;
  summary: "On Sale" | "Watch" | "Overpriced";
  quality: number; // 0-100
  value: number;   // 0-100
  growth: number;  // 0-100
  safety: number;  // 0-100
}

export interface PortfolioItem {
  ticker: string;
  shares: number;
  avgCost: number;
}

export const STOCKS: Stock[] = [
  {
    ticker: "AAPL",
    name: "Apple Inc.",
    price: 175.43,
    change: 2.15,
    changePercent: 1.24,
    sector: "Technology",
    industry: "Consumer Electronics",
    marketCap: 2700000,
    description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide."
  },
  {
    ticker: "MSFT",
    name: "Microsoft Corp.",
    price: 335.12,
    change: -1.05,
    changePercent: -0.31,
    sector: "Technology",
    industry: "Software - Infrastructure",
    marketCap: 2500000,
    description: "Microsoft Corporation develops, licenses, and supports software, services, devices, and solutions worldwide."
  },
  {
    ticker: "GOOGL",
    name: "Alphabet Inc.",
    price: 138.21,
    change: 0.85,
    changePercent: 0.62,
    sector: "Communication Services",
    industry: "Internet Content & Information",
    marketCap: 1700000,
    description: "Alphabet Inc. offers various products and platforms in the United States, Europe, the Middle East, Africa, the Asia-Pacific, Canada, and Latin America."
  },
  {
    ticker: "NVDA",
    name: "NVIDIA Corp.",
    price: 824.50,
    change: 15.30,
    changePercent: 1.89,
    sector: "Technology",
    industry: "Semiconductors",
    marketCap: 2000000,
    description: "NVIDIA Corporation provides graphics, and compute and networking solutions in the United States, Taiwan, China, and internationally."
  },
  {
    ticker: "TSLA",
    name: "Tesla Inc.",
    price: 178.90,
    change: -4.20,
    changePercent: -2.29,
    sector: "Consumer Cyclical",
    industry: "Auto Manufacturers",
    marketCap: 560000,
    description: "Tesla, Inc. designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems in the United States, China, and internationally."
  },
  {
    ticker: "JPM",
    name: "JPMorgan Chase & Co.",
    price: 195.40,
    change: 1.20,
    changePercent: 0.62,
    sector: "Financial Services",
    industry: "Banks - Diversified",
    marketCap: 560000,
    description: "JPMorgan Chase & Co. operates as a financial services company worldwide."
  },
  {
    ticker: "V",
    name: "Visa Inc.",
    price: 280.15,
    change: 0.45,
    changePercent: 0.16,
    sector: "Financial Services",
    industry: "Credit Services",
    marketCap: 580000,
    description: "Visa Inc. operates as a payments technology company worldwide."
  },
  {
    ticker: "PG",
    name: "Procter & Gamble Co.",
    price: 162.30,
    change: -0.15,
    changePercent: -0.09,
    sector: "Consumer Defensive",
    industry: "Household & Personal Products",
    marketCap: 380000,
    description: "The Procter & Gamble Company provides branded consumer packaged goods worldwide."
  }
];

export const SCORES: Record<string, Score> = {
  "AAPL": { ticker: "AAPL", total: 85, summary: "On Sale", quality: 92, value: 75, growth: 80, safety: 95 },
  "MSFT": { ticker: "MSFT", total: 88, summary: "On Sale", quality: 95, value: 70, growth: 88, safety: 98 },
  "GOOGL": { ticker: "GOOGL", total: 82, summary: "On Sale", quality: 90, value: 85, growth: 75, safety: 92 },
  "NVDA": { ticker: "NVDA", total: 72, summary: "Overpriced", quality: 94, value: 30, growth: 99, safety: 85 },
  "TSLA": { ticker: "TSLA", total: 65, summary: "Watch", quality: 70, value: 50, growth: 85, safety: 60 },
  "JPM": { ticker: "JPM", total: 78, summary: "Watch", quality: 85, value: 65, growth: 60, safety: 80 },
  "V": { ticker: "V", total: 89, summary: "On Sale", quality: 96, value: 72, growth: 85, safety: 90 },
  "PG": { ticker: "PG", total: 75, summary: "Watch", quality: 88, value: 60, growth: 55, safety: 90 },
};

export const PORTFOLIO: PortfolioItem[] = [
  { ticker: "AAPL", shares: 10, avgCost: 150.00 },
  { ticker: "MSFT", shares: 5, avgCost: 280.00 },
  { ticker: "GOOGL", shares: 20, avgCost: 120.00 },
];

export const ARTICLES = [
  {
    id: 1,
    title: "Understanding ROIC: The Holy Grail of Investing",
    summary: "Why Return on Invested Capital is the single most important metric for long-term compounders.",
    category: "Fundamental Analysis",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "When to Sell: The Art of Exit Strategy",
    summary: "Don't let emotions drive your selling decisions. Learn the framework for knowing when to fold.",
    category: "Psychology",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Moats 101: Identifying Durable Competitive Advantages",
    summary: "From network effects to switching costs—how to spot a business that can fend off competition.",
    category: "Strategy",
    readTime: "6 min read"
  }
];

export const MARKET_INDICES = [
  { name: "S&P 500", value: 5123.40, change: 1.25 },
  { name: "Nasdaq", value: 16012.80, change: 1.65 },
  { name: "Dow Jones", value: 38780.10, change: 0.45 },
];
