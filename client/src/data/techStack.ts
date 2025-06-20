import { BarChart3, Megaphone, Settings, Code, Zap, Building, TrendingUp, Search, Database, PieChart, Target, Hash, Smartphone, Cloud, Repeat, FileCode, BarChart, Server, Globe, Brain, LineChart, MessageSquare, Users, TestTube, MousePointer } from "lucide-react";

export interface TechCategory {
  name: string;
  icon: any;
  color: string;
  tools: {
    name: string;
    icon: any;
    description: string;
  }[];
}

export const techStack: TechCategory[] = [
  {
    name: "Analytics",
    icon: BarChart3,
    color: "bg-primary/10 text-primary",
    tools: [
      { name: "GA4", icon: TrendingUp, description: "Google Analytics 4" },
      { name: "BigQuery", icon: Database, description: "Data Warehousing" },
      { name: "Looker", icon: PieChart, description: "Data Visualization" },
      { name: "Power BI", icon: BarChart, description: "Business Intelligence" }
    ]
  },
  {
    name: "Marketing",
    icon: Megaphone,
    color: "bg-destructive/10 text-destructive",
    tools: [
      { name: "Google Ads", icon: Target, description: "Search & Display Advertising" },
      { name: "Meta Ads", icon: Hash, description: "Facebook & Instagram Ads" },
      { name: "LinkedIn", icon: Users, description: "B2B Advertising" },
      { name: "Amazon", icon: Globe, description: "Amazon Advertising" }
    ]
  },
  {
    name: "Automation",
    icon: Settings,
    color: "bg-purple-500/10 text-purple-400",
    tools: [
      { name: "GTM", icon: Target, description: "Google Tag Manager" },
      { name: "App Script", icon: Smartphone, description: "Google Apps Script" },
      { name: "Lambda", icon: Cloud, description: "AWS Lambda Functions" },
      { name: "Segment", icon: Repeat, description: "Customer Data Platform" }
    ]
  },
  {
    name: "Programming",
    icon: Code,
    color: "bg-green-500/10 text-green-400",
    tools: [
      { name: "Python", icon: FileCode, description: "Data Analysis & ML" },
      { name: "R", icon: BarChart, description: "Statistical Computing" },
      { name: "SQL", icon: Server, description: "Database Queries" },
      { name: "JavaScript", icon: Code, description: "Web Development" }
    ]
  },
  {
    name: "AI/ML",
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-400",
    tools: [
      { name: "LLMs", icon: Brain, description: "Large Language Models" },
      { name: "Deep Learning", icon: Zap, description: "Neural Networks" },
      { name: "Forecasting", icon: LineChart, description: "Time Series Analysis" },
      { name: "Sentiment", icon: MessageSquare, description: "Sentiment Analysis" }
    ]
  },
  {
    name: "CRM & Tools",
    icon: Building,
    color: "bg-indigo-500/10 text-indigo-400",
    tools: [
      { name: "Salesforce", icon: Building, description: "Enterprise CRM" },
      { name: "HubSpot", icon: Target, description: "Inbound Marketing" },
      { name: "VWO", icon: TestTube, description: "A/B Testing Platform" },
      { name: "Hotjar", icon: MousePointer, description: "User Behavior Analytics" }
    ]
  }
];
