"use client";
import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Once visible, we can stop observing
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.05, // Lower threshold
        rootMargin: "0px 0px -50px 0px" 
      }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    // Force check for elements already in viewport
    const checkViewport = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("visible");
        }
      });
    };

    // Run once after a short delay to catch everything
    const timer = setTimeout(checkViewport, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);
}
