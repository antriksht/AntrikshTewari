import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Hyperspeed from "./Hyperspeed";

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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Hyperspeed background */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-auto">
        <div className="w-full h-full translate-x-1/4">
          <Hyperspeed
            effectOptions={{
              onSpeedUp: () => {},
              onSlowDown: () => {},
              distortion: 'LongRaceDistortion',
              length: 400,
              roadWidth: 9,
              islandWidth: 2,
              lanesPerRoad: 3,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 50,
              lightPairsPerRoadWay: 50,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.05, 400 * 0.15],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.2, 0.2],
              carFloorSeparation: [0.05, 1],
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0x131318,
                brokenLines: 0x131318,
                leftCars: [0xdc5b20, 0xdca320, 0xdc2020],
                rightCars: [0x334bf7, 0xe5e6ed, 0xbfc6f3],
                sticks: 0xc5e8eb
              }
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-20 pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left pointer-events-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-primary">Driving</span> Growth
              <br />
              <span className="text-destructive">At Full Speed</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8">
              Growth Architect | CRO Strategist | Analytics Leader
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              Accelerating enterprise growth through data-driven marketing strategies,
              advanced analytics, and AI-powered automation across 20+ leading
              brands.
            </p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-sm text-muted-foreground/60 mb-12 italic"
            >
              💡 Click and hold on the highway to speed up — feel the acceleration
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4">
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

          {/* Right side - Animation showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            {/* Empty div - animation is in background */}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-auto"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
