import { cn } from "@/lib/utils";

import Image from "next/image";

export default function LogoIcon({ className }: { className?: string }) {
  return (
    <>
      <Image
        src={"/assets/logo.png"}
        alt="logo"
        width={30}
        height={30}
        className={cn("hidden dark:block", className)}
      />
      <Image
        src={"/assets/logo-dark.png"}
        alt="logo"
        width={30}
        height={30}
        className={cn("block dark:hidden", className)}
      />
    </>
  );
}
