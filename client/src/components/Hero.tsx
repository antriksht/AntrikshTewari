import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated particles background */}
      <div className="absolute inset-0 z-10">
        {[...Array(11)].map((_, i) => {
          const randomTop = Math.random() * 80 + 10; // 10% to 90%
          const randomLeft = Math.random() * 80 + 10; // 10% to 90%
          const randomOpacity = Math.random() * 0.4 + 0.6; // 0.6 to 1.0
          const randomDuration = Math.random() * 3 + 2; // 2s to 5s
          const randomDelay = Math.random() * 2; // 0s to 2s
          const randomYMovement = Math.random() * 20 + 5; // 5px to 25px
          const randomXMovement = Math.random() * 10 + 2; // 2px to 12px

          const randomSize = Math.random() * 3 + 2; // 2px to 5px
          
          return (
            <motion.div
              key={i}
              className="section-particle"
              style={{
                top: `${randomTop}%`,
                left: `${randomLeft}%`,
                width: `${randomSize}px`,
                height: `${randomSize}px`,
                opacity: randomOpacity,
              }}
              animate={{
                y: [-randomYMovement, randomYMovement, -randomYMovement],
                x: [-randomXMovement, randomXMovement, -randomXMovement],
                scale: [1, 1.2, 0.8, 1],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-4 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary">Strategic</span> Marketing
            <br />
            <span className="text-destructive">Leadership</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Growth Architect | CRO Strategist | Analytics Leader
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Driving enterprise growth through data-driven marketing strategies,
            advanced analytics, and AI-powered automation across 20+ leading
            brands.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("projects")}
              className="glow-blue px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform"
            >
              View My Projects
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 text-lg font-semibold border-primary/50 text-primary hover:bg-primary/10 transition-colors"
            >
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
