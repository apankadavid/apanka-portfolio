"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const images = ["/data-image.webp", "/web-image.webp", "/agric-image.webp"];

const INTERVAL_MS = 7000;

export default function FooterBackground() {
  const [active, setActive] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const timer = setInterval(() => {
      if (document.hidden) return;
      setActive((i) => (i + 1) % images.length);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      {images.map((src, i) => (
        <motion.div
          key={src}
          initial={false}
          animate={{ opacity: i === active ? 1 : 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image src={src} alt="" fill sizes="100vw" className="object-cover" />
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-[#013E37]/85" />
    </div>
  );
}