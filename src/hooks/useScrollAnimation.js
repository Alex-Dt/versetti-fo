import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Visibility threshold (0-1), default 0.1
 * @param {string} options.rootMargin - Root margin for intersection, default "0px"
 * @param {boolean} options.triggerOnce - Only trigger animation once, default true
 * @returns {[React.RefObject, boolean]} - Ref to attach to element and visibility state
 */
export const useScrollAnimation = (options = {}) => {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
};

/**
 * Animation style helpers - use these with MUI sx prop
 */

export const fadeInUp = (isVisible, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? "translateY(0)" : "translateY(30px)",
  transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
});

export const fadeIn = (isVisible, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transition: `opacity 0.6s ease-out ${delay}s`,
});

export const scaleIn = (isVisible, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? "scale(1)" : "scale(0.95)",
  transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
});

export const slideInLeft = (isVisible, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? "translateX(0)" : "translateX(-30px)",
  transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
});

export const slideInRight = (isVisible, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  transform: isVisible ? "translateX(0)" : "translateX(30px)",
  transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
});
