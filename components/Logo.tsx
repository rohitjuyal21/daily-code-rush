import React from "react";
import LogoIcon from "./svgs/LogoIcon";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1">
      <LogoIcon className="size-6" />
      <span className="font-bold">
        Daily<span className="text-blue-500">Code</span>Rush
      </span>
    </Link>
  );
}
