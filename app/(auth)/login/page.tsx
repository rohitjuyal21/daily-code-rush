"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui";
import Image from "next/image";
import React from "react";
import ThemeToggle from "@/components/common/ThemeToggle";
import Logo from "@/components/Logo";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex w-full items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <Logo />
        <ThemeToggle />
      </div>
      <div className="flex w-full max-w-60 flex-1 flex-col items-center justify-center gap-4">
        <Button
          size="lg"
          className="group w-full bg-gradient-to-b from-blue-500 to-blue-600 text-white hover:from-blue-500/90 hover:to-blue-600/90"
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        >
          <Image
            src="/assets/google.svg"
            alt="Google"
            width={20}
            height={20}
            className="rounded-full"
          />
          <span>Sign in with Google</span>
        </Button>
        <Button
          size="lg"
          variant="secondary"
          className="group w-full bg-gradient-to-b from-neutral-800 to-neutral-900 text-white hover:from-neutral-800/90 hover:to-neutral-900/90"
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
        >
          <Image src="/assets/github.svg" alt="Google" width={20} height={20} />
          <span>Sign in with Github</span>
        </Button>
      </div>
    </main>
  );
}
