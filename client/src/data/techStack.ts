import { BarChart3, Megaphone, Settings, Code, Zap, Building } from "lucide-react";

export interface TechCategory {
  name: string;
  icon: any;
  color: string;
  tools: {
    name: string;
    icon: string;
    description: string;
  }[];
}

export const techStack: TechCategory[] = [
  {
    name: "Analytics",
    icon: BarChart3,
    color: "bg-blue-500/10 text-blue-500",
    tools: [
      { name: "GA4", icon: "📊", description: "Google Analytics 4" },
      { name: "BigQuery", icon: "🔍", description: "Data Warehousing" },
      { name: "Looker", icon: "📈", description: "Data Visualization" },
      { name: "Power BI", icon: "💼", description: "Business Intelligence" }
    ]
  },
  {
    name: "Marketing",
    icon: Megaphone,
    color: "bg-red-500/10 text-red-500",
    tools: [
      { name: "Google Ads", icon: "🎯", description: "Search & Display Advertising" },
      { name: "Meta Ads", icon: "📘", description: "Facebook & Instagram Ads" },
      { name: "LinkedIn", icon: "💼", description: "B2B Advertising" },
      { name: "Amazon", icon: "🛒", description: "Amazon Advertising" }
    ]
  },
  {
    name: "Automation",
    icon: Settings,
    color: "bg-purple-500/10 text-purple-500",
    tools: [
      { name: "GTM", icon: "🏷️", description: "Google Tag Manager" },
      { name: "App Script", icon: "📱", description: "Google Apps Script" },
      { name: "Lambda", icon: "☁️", description: "AWS Lambda Functions" },
      { name: "Segment", icon: "🔄", description: "Customer Data Platform" }
    ]
  },
  {
    name: "Programming",
    icon: Code,
    color: "bg-green-500/10 text-green-500",
    tools: [
      { name: "Python", icon: "🐍", description: "Data Analysis & ML" },
      { name: "R", icon: "📊", description: "Statistical Computing" },
      { name: "SQL", icon: "🗄️", description: "Database Queries" },
      { name: "JavaScript", icon: "📜", description: "Web Development" }
    ]
  },
  {
    name: "AI/ML",
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-500",
    tools: [
      { name: "LLMs", icon: "🤖", description: "Large Language Models" },
      { name: "Deep Learning", icon: "🧠", description: "Neural Networks" },
      { name: "Forecasting", icon: "📈", description: "Time Series Analysis" },
      { name: "Sentiment", icon: "💭", description: "Sentiment Analysis" }
    ]
  },
  {
    name: "CRM & Tools",
    icon: Building,
    color: "bg-indigo-500/10 text-indigo-500",
    tools: [
      { name: "Salesforce", icon: "🏢", description: "Enterprise CRM" },
      { name: "HubSpot", icon: "🎯", description: "Inbound Marketing" },
      { name: "VWO", icon: "🔬", description: "A/B Testing Platform" },
      { name: "Hotjar", icon: "🖱️", description: "User Behavior Analytics" }
    ]
  }
];
