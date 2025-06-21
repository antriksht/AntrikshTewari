import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { techStack } from "@/data/techStack";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech-stack" className="py-20 bg-card relative overflow-hidden" ref={ref}>
      {/* Floating orbs background */}
      <div className="absolute inset-0">
        <div className="floating-orb w-32 h-32 top-16 right-1/4" style={{ animationDelay: '2s' }}></div>
        <div className="floating-orb w-24 h-24 bottom-1/4 right-10" style={{ animationDelay: '4s' }}></div>
        <div className="floating-orb w-28 h-28 top-1/2 left-8" style={{ animationDelay: '6s' }}></div>
      </div>
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(7)].map((_, i) => {
          const randomTop = Math.random() * 80 + 10;
          const randomLeft = Math.random() * 80 + 10;
          const randomSize = Math.random() * 3 + 1;
          const randomDuration = Math.random() * 3 + 3;
          const randomDelay = Math.random() * 3;
          
          return (
            <div
              key={i}
              className="section-particle"
              style={{
                top: `${randomTop}%`,
                left: `${randomLeft}%`,
                width: `${randomSize}px`,
                height: `${randomSize}px`,
                animationDuration: `${randomDuration}s`,
                animationDelay: `${randomDelay}s`,
              }}
            />
          );
        })}
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Tech <span className="text-primary">Stack</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Comprehensive toolkit spanning analytics, marketing automation, programming, and AI/ML technologies.
          </motion.p>
        </div>
        
        {/* Tech Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg mr-4 ${category.color}`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + categoryIndex * 0.1 + toolIndex * 0.05 }}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="tech-icon bg-muted hover:bg-muted/80 p-3 rounded-lg text-center cursor-pointer transition-all">
                          <div className="w-6 h-6 mx-auto mb-2 text-muted-foreground flex items-center justify-center">
                            <tool.icon className="w-5 h-5" />
                          </div>
                          <div className="text-sm font-medium">{tool.name}</div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{tool.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
