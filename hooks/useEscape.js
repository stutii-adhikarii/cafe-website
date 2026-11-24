import { useEffect } from "react";

// runs a function when the Escape key is pressed
export default function useEscape(active, onEscape) {
  useEffect(() => {
    if (!active) return;

    function handleKey(e) {
      if (e.key === "Escape") onEscape();
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [active, onEscape]);
}