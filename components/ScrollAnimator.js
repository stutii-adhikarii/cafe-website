"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// makes every section on every page fade up when it scrolls into view
export default function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    const sections = document.querySelectorAll("main > section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      // sections already on screen stay as they are
      if (section.getBoundingClientRect().top < window.innerHeight * 0.9) return;
      section.classList.add("reveal");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}