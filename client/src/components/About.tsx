import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineData = [
    {
      title: "Head of Digital Marketing",
      company: "Intelegencia",
      period: "Apr 2025 – Present",
      description: "Leading full-funnel digital strategy, AI-powered automation, and revenue enablement across B2B/B2C verticals.",
      color: "blue",
      side: "left"
    },
    {
      title: "AVP – Analytics",
      company: "Unyscape",
      period: "Feb 2020 – Mar 2024",
      description: "Drove predictive analytics transformation, developed ML models, and enabled 8% YOY bottom-line impact for major clients.",
      color: "red",
      side: "right"
    },
    {
      title: "Co-Founder & CMO",
      company: "ZichBuy Pvt Ltd",
      period: "May 2015 – Feb 2020",
      description: "Built B2B e-commerce platform, scaled through SEO/PPC, automated workflows, and led full-stack analytics implementation.",
      color: "blue",
      side: "left"
    }
  ];

  const brands = ["Pfizer", "Mamaearth", "Kapiva", "Americana Group", "Kama Ayurveda"];

  return (
    <section id="about" className="py-20 bg-card relative overflow-hidden">
      {/* Floating orbs background */}
      <div className="absolute inset-0">
        <div className="floating-orb w-32 h-32 top-10 left-10" style={{ animationDelay: '0s' }}></div>
        <div className="floating-orb w-24 h-24 top-1/3 right-20" style={{ animationDelay: '2s' }}></div>
        <div className="floating-orb w-40 h-40 bottom-20 left-1/4" style={{ animationDelay: '4s' }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            10+ years of transforming marketing through analytics, automation, and strategic insight across diverse industries.
          </motion.p>
        </div>
        
        {/* Animated Counters */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-primary mb-2">
              <AnimatedCounter target={10} suffix="+" />
            </div>
            <div className="text-lg text-muted-foreground">Years Experience</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-destructive mb-2">
              <AnimatedCounter target={20} suffix="+" />
            </div>
            <div className="text-lg text-muted-foreground">Brands Served</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-primary mb-2">
              <AnimatedCounter target={140} suffix="%" />
            </div>
            <div className="text-lg text-muted-foreground">Max Growth</div>
          </motion.div>
        </div>
        
        {/* Career Timeline */}
        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Career <span className="text-destructive">Timeline</span>
          </motion.h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                  className="flex items-center justify-between"
                >
                  {item.side === 'left' ? (
                    <>
                      <div className="w-5/12 text-right pr-8">
                        <div className="glass-card p-6 rounded-lg relative">
                          <div className={`absolute top-6 -right-3 w-6 h-6 ${item.color === 'blue' ? 'bg-primary' : 'bg-destructive'} rounded-full border-4 border-background`}></div>
                          <h4 className={`font-bold text-lg ${item.color === 'blue' ? 'text-primary' : 'text-destructive'}`}>
                            {item.title}
                          </h4>
                          <p className="text-foreground mb-2">{item.company}</p>
                          <p className="text-sm text-muted-foreground">{item.period}</p>
                          <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                        </div>
                      </div>
                      <div className="w-2/12"></div>
                      <div className="w-5/12"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-5/12"></div>
                      <div className="w-2/12"></div>
                      <div className="w-5/12 pl-8">
                        <div className="glass-card p-6 rounded-lg relative">
                          <div className={`absolute top-6 -left-3 w-6 h-6 ${item.color === 'blue' ? 'bg-primary' : 'bg-destructive'} rounded-full border-4 border-background`}></div>
                          <h4 className={`font-bold text-lg ${item.color === 'blue' ? 'text-primary' : 'text-destructive'}`}>
                            {item.title}
                          </h4>
                          <p className="text-foreground mb-2">{item.company}</p>
                          <p className="text-sm text-muted-foreground">{item.period}</p>
                          <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Brand Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            Trusted by <span className="text-primary">Leading Brands</span>
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {brands.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 0.6, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
                className="text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
