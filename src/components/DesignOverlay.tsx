"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function DesignOverlay() {
  const [mounted, setMounted] = useState(false);
  const params = useSearchParams();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  const src = params.get("overlay");
  if (!src) return null;
  
  const opacity = Number(params.get("opacity") || 0.4);
  
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        opacity,
      }}
    />
  );
}
