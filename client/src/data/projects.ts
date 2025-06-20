import { TrendingUp, BarChart3, Brain, Zap, Target, Bot } from "lucide-react";

export interface Project {
  id: string;
  slug: string;
  title: string;
  company: string;
  description: string;
  result: string;
  tags: string[];
  technologies: string[];
  color: 'blue' | 'red';
  icon: any;
  challenge: string;
  solution: string;
  implementation: string[];
  results: { metric: string; description: string }[];
  duration: string;
  teamSize: string;
  impact: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "mamaearth-roi-analysis",
    title: "Keyword-Level ROI Analysis",
    company: "Mamaearth",
    description: "Implemented granular keyword-level ROI tracking and automated bid optimization, resulting in 23% improvement in budget efficiency across Google Ads campaigns.",
    result: "+23% ROI",
    tags: ["ppc", "automation"],
    technologies: ["Google Ads", "BigQuery", "Automation", "Python", "Data Studio"],
    color: "blue",
    icon: TrendingUp,
    challenge: "Mamaearth was struggling with inefficient budget allocation across thousands of keywords, leading to poor ROAS and wasted ad spend on underperforming terms.",
    solution: "Developed a comprehensive keyword-level ROI tracking system that automated bid adjustments based on performance data and customer lifetime value.",
    implementation: [
      "Built custom BigQuery data pipeline to aggregate conversion data",
      "Implemented real-time keyword performance scoring algorithm",
      "Created automated bid management system with ML-based optimization",
      "Developed executive dashboard for campaign performance monitoring"
    ],
    results: [
      { metric: "+23%", description: "Improvement in budget efficiency" },
      { metric: "+35%", description: "Increase in conversion rate" },
      { metric: "-18%", description: "Reduction in cost per acquisition" },
      { metric: "500+", description: "Keywords optimized daily" }
    ],
    duration: "6 months",
    teamSize: "3 specialists",
    impact: "High - Campaign efficiency transformation"
  },
  {
    id: "2",
    slug: "kapiva-brand-analytics",
    title: "Brand Analytics & Influencer Measurement",
    company: "Kapiva",
    description: "Built comprehensive brand analytics dashboard with influencer performance tracking and sentiment analysis, contributing to 140% brand growth.",
    result: "+140% Growth",
    tags: ["dashboards", "ml"],
    technologies: ["Looker Studio", "ML Models", "Sentiment Analysis", "Python", "Social APIs"],
    color: "red",
    icon: BarChart3,
    challenge: "Kapiva lacked visibility into brand performance across channels and couldn't measure the true impact of their influencer marketing investments.",
    solution: "Created an integrated brand analytics platform that combined social listening, influencer tracking, and sentiment analysis to provide actionable insights.",
    implementation: [
      "Integrated multiple social media APIs for comprehensive data collection",
      "Developed custom sentiment analysis models for brand mention classification",
      "Built influencer performance scoring system with engagement quality metrics",
      "Created automated reporting system for stakeholder updates"
    ],
    results: [
      { metric: "+140%", description: "Overall brand growth" },
      { metric: "+85%", description: "Influencer campaign effectiveness" },
      { metric: "+62%", description: "Social media engagement" },
      { metric: "25+", description: "Influencers tracked simultaneously" }
    ],
    duration: "8 months",
    teamSize: "4 specialists",
    impact: "High - Brand transformation and market positioning"
  },
  {
    id: "3",
    slug: "pfizer-demand-forecasting",
    title: "Demand Forecasting & Field Force Optimization",
    company: "Pfizer",
    description: "Developed advanced ML models for demand forecasting and field force performance optimization, enabling 9.45% YOY bottom-line growth.",
    result: "+9.45% Bottom Line",
    tags: ["ml", "dashboards"],
    technologies: ["Time Series", "Deep Learning", "Python", "Tableau", "Statistical Models"],
    color: "blue",
    icon: Brain,
    challenge: "Pfizer needed accurate demand forecasting to optimize inventory and field force allocation across multiple therapeutic areas and geographic regions.",
    solution: "Implemented sophisticated ML models combining historical sales data, market trends, and external factors to predict demand and optimize resource allocation.",
    implementation: [
      "Developed ensemble time series forecasting models",
      "Created field force optimization algorithm based on territory potential",
      "Built predictive analytics for inventory management",
      "Implemented automated alert system for demand anomalies"
    ],
    results: [
      { metric: "+9.45%", description: "YOY bottom-line growth" },
      { metric: "+15%", description: "Forecast accuracy improvement" },
      { metric: "+28%", description: "Field force productivity increase" },
      { metric: "500+", description: "Products forecasted" }
    ],
    duration: "12 months",
    teamSize: "6 specialists",
    impact: "High - Enterprise-wide operational efficiency"
  },
  {
    id: "4",
    slug: "americana-automation",
    title: "Automated Brand & Geo-Level Reporting",
    company: "Americana Group",
    description: "Automated brand and geo-level performance reporting with real-time dashboards, reducing decision-making latency by 18%.",
    result: "-18% Latency",
    tags: ["automation", "dashboards"],
    technologies: ["Power BI", "Google App Script", "ETL Pipelines", "APIs", "Automation"],
    color: "red",
    icon: Zap,
    challenge: "Americana Group's decision-making was hampered by manual reporting processes that took days to compile, resulting in delayed responses to market changes.",
    solution: "Developed automated reporting infrastructure that provided real-time insights across brands and geographical regions with self-updating dashboards.",
    implementation: [
      "Built automated ETL pipelines for multi-source data integration",
      "Created real-time dashboards with drill-down capabilities",
      "Implemented automated alert system for performance anomalies",
      "Developed self-service analytics platform for regional managers"
    ],
    results: [
      { metric: "-18%", description: "Reduction in decision latency" },
      { metric: "+45%", description: "Reporting efficiency improvement" },
      { metric: "24/7", description: "Real-time data availability" },
      { metric: "15+", description: "Brands tracked simultaneously" }
    ],
    duration: "5 months",
    teamSize: "3 specialists",
    impact: "Medium - Operational efficiency enhancement"
  },
  {
    id: "5",
    slug: "kama-ayurveda-cro",
    title: "eCommerce Conversion Optimization",
    company: "Kama Ayurveda",
    description: "Delivered record eCommerce conversions through systematic CRO testing and SEO optimization, achieving 16% market share gain.",
    result: "+16% Market Share",
    tags: ["cro", "seo"],
    technologies: ["A/B Testing", "VWO", "Hotjar", "Google Analytics", "SEO Tools"],
    color: "blue",
    icon: Target,
    challenge: "Kama Ayurveda's eCommerce platform had low conversion rates and poor user experience, limiting their ability to compete in the premium skincare market.",
    solution: "Implemented comprehensive CRO program combining user behavior analysis, systematic A/B testing, and technical SEO optimization.",
    implementation: [
      "Conducted comprehensive UX audit and user journey mapping",
      "Implemented systematic A/B testing program for key conversion points",
      "Optimized site architecture and technical SEO",
      "Created personalized product recommendation system"
    ],
    results: [
      { metric: "+16%", description: "Market share gain" },
      { metric: "+42%", description: "Conversion rate improvement" },
      { metric: "+38%", description: "Average order value increase" },
      { metric: "150+", description: "A/B tests conducted" }
    ],
    duration: "10 months",
    teamSize: "4 specialists",
    impact: "High - Market position strengthening"
  },
  {
    id: "6",
    slug: "ai-campaign-automation",
    title: "LLM-Powered Campaign Automation",
    company: "Multi-Client Initiative",
    description: "Developed AI-powered automation system using LLMs for dynamic ad copy generation, customer segmentation, and bid optimization across Google Ads.",
    result: "AI-Powered",
    tags: ["automation", "ml", "ppc"],
    technologies: ["LLMs", "Google Ads API", "Python", "Machine Learning", "OpenAI"],
    color: "red",
    icon: Bot,
    challenge: "Managing multiple client campaigns required significant manual effort for ad copy creation, audience segmentation, and bid optimization, limiting scalability.",
    solution: "Built AI-powered automation platform that uses LLMs for intelligent campaign management, reducing manual work while improving performance.",
    implementation: [
      "Integrated LLM APIs for dynamic ad copy generation",
      "Developed intelligent audience segmentation using ML clustering",
      "Created automated bid optimization system with reinforcement learning",
      "Built campaign performance monitoring with anomaly detection"
    ],
    results: [
      { metric: "+65%", description: "Campaign management efficiency" },
      { metric: "+28%", description: "Average CTR improvement" },
      { metric: "+31%", description: "Conversion rate increase" },
      { metric: "10+", description: "Clients benefited" }
    ],
    duration: "9 months",
    teamSize: "5 specialists",
    impact: "High - Scalable automation breakthrough"
  }
];
