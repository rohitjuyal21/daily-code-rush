import React from "react";
import LogoIcon from "./svgs/LogoIcon";
import Link from "next/link";

export default function Logo({ showText = true }: { showText?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-1">
      <LogoIcon className="size-6 shrink-0" />
      {showText && (
        <span className="font-bold">
          Daily<span className="text-blue-500">Code</span>Rush
        </span>
      )}
    </Link>
  );
}
