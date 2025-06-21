import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      metric: "23",
      suffix: "%",
      title: "ROI Improvement",
      client: "Mamaearth",
      color: "bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20 text-blue-400"
    },
    {
      metric: "140",
      suffix: "%",
      title: "Brand Growth",
      client: "Kapiva",
      color: "bg-gradient-to-br from-red-500/10 to-red-600/5 border-red-500/20 text-red-400"
    },
    {
      metric: "9.45",
      suffix: "%",
      title: "Bottom Line Growth",
      client: "Pfizer",
      color: "bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20 text-green-400"
    },
    {
      metric: "18",
      suffix: "%",
      title: "Reduced Latency",
      client: "Americana Group",
      color: "bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20 text-purple-400"
    }
  ];

  const detailedAchievements = [
    {
      title: "Strategic Analytics Implementation",
      description: "Deployed comprehensive analytics frameworks across 20+ enterprise accounts, enabling data-driven decision making and performance optimization.",
      color: "bg-blue-500"
    },
    {
      title: "AI-Powered Automation",
      description: "Pioneered LLM-driven marketing automation solutions, reducing manual campaign management time by 60% while improving performance.",
      color: "bg-red-500"
    },
    {
      title: "Cross-Functional Leadership",
      description: "Led multidisciplinary teams combining marketing, data science, and engineering to deliver integrated growth solutions.",
      color: "bg-green-500"
    },
    {
      title: "Enterprise Scale Solutions",
      description: "Architected scalable marketing technology stacks capable of processing millions of data points for real-time optimization.",
      color: "bg-purple-500"
    },
    {
      title: "Industry Thought Leadership",
      description: "Authored industry research reports and drove vertical P&L growth through innovative analytics methodologies and market insights.",
      color: "bg-yellow-500"
    },
    {
      title: "Revenue Attribution Mastery",
      description: "Developed sophisticated multi-touch attribution models that accurately tracked customer journeys across complex B2B sales cycles.",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-background relative overflow-hidden" ref={ref}>
      {/* Floating orbs background */}
      <div className="absolute inset-0">
        <div className="floating-orb w-40 h-40 top-20 left-12" style={{ animationDelay: '1.5s' }}></div>
        <div className="floating-orb w-24 h-24 top-2/3 right-16" style={{ animationDelay: '3.5s' }}></div>
        <div className="floating-orb w-32 h-32 bottom-10 right-1/3" style={{ animationDelay: '5.5s' }}></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Impact & <span className="text-destructive">Achievements</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Measurable results that transformed business performance across diverse industries and market segments.
          </motion.p>
        </div>
        
        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`${achievement.color} rounded-xl p-6 text-center border`}
            >
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter 
                  target={parseFloat(achievement.metric)} 
                  suffix={achievement.suffix}
                  decimal={achievement.metric.includes('.')}
                />
              </div>
              <div className="text-foreground mb-2">{achievement.title}</div>
              <div className="text-sm text-muted-foreground">{achievement.client}</div>
            </motion.div>
          ))}
        </div>
        
        {/* Detailed Achievements */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {detailedAchievements.slice(0, 3).map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className={`${achievement.color} rounded-full p-2 mt-1`}>
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{achievement.title}</h4>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="space-y-6">
              {detailedAchievements.slice(3).map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className={`${achievement.color} rounded-full p-2 mt-1`}>
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{achievement.title}</h4>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
