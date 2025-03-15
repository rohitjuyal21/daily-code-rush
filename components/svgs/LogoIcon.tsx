"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LogoIcon() {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  return (
    <Image
      src={isDark ? "/assets/logo.png" : "/assets/logo-dark.png"}
      alt="logo"
      width={30}
      height={30}
    />
  );
}
