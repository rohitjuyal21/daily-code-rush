"use client";

import Image from "next/image";
import compiler from "@/public/assets/compiler.png";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export default function InteractiveImage() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPts = mouseX / width - 0.5;
    const yPts = mouseY / height - 0.5;

    x.set(xPts);
    y.set(yPts);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative z-10 p-6">
      <motion.div
        className="relative mx-auto max-w-3xl rounded-xl border border-black/10 bg-gray-50 p-6 shadow-lg transition-shadow duration-300 hover:shadow-[0_0_40px_6px_rgba(59,130,246,0.2)] dark:border-white/10 dark:bg-black"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseHover}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={compiler}
          alt="Interactive Image"
          className="rounded-xl shadow-lg"
          style={{ transform: "translateZ(75px)" }}
        />
      </motion.div>
    </div>
  );
}
