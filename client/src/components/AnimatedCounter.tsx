import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  decimal?: boolean;
  duration?: number;
}

export default function AnimatedCounter({ 
  target, 
  suffix = "", 
  decimal = false, 
  duration = 2000 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const endTime = startTime + duration;
    
    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = easeOut * target;
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };
    
    updateCount();
  }, [isInView, target, duration]);

  const displayValue = decimal && target < 20 
    ? count.toFixed(2) 
    : Math.floor(count);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}
