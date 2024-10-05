"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Logo {
  id: number;
  src: string;
  alt: string;
}

const logos: Logo[] = [
  { id: 1, src: "/code-logo.png", alt: "CODE" },
  { id: 2, src: "/ivy-logo.png", alt: "Ivy" },
  { id: 3, src: "/lanch-logo.png", alt: "Lanch" },
  { id: 4, src: "/cardino-logo.png", alt: "Cardino" },
  { id: 5, src: "/enpal-logo.png", alt: "Enpal" },
  { id: 56, src: "/octopus-logo.png", alt: "Octopus" },
];

export default function Companies() {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-grow">
      <div className="relative h-24 rounded-lg overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={logos[currentLogoIndex].id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="block sm:hidden">
              <Image
                src={logos[currentLogoIndex].src}
                alt={logos[currentLogoIndex].alt}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <Image
                src={logos[currentLogoIndex].src}
                alt={logos[currentLogoIndex].alt}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
