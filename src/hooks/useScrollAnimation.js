import { useEffect, useRef, useState } from "react";

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options.threshold, options.rootMargin]);

  return { ref, isVisible };
};

export const fadeInUp = (isVisible, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? "translateY(0)" : "translateY(30px)",
  transition: `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
});

export const fadeIn = (isVisible, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transition: `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
});

export const scaleIn = (isVisible, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? "scale(1)" : "scale(0.95)",
  transition: `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
});

export const slideInLeft = (isVisible, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? "translateX(0)" : "translateX(-30px)",
  transition: `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
});

export const slideInRight = (isVisible, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? "translateX(0)" : "translateX(30px)",
  transition: `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
});
