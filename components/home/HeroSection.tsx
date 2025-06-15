import Link from "next/link";
import { Button } from "../ui";

export default function HeroSection() {
  return (
    <section className="relative z-10 flex items-center justify-center overflow-hidden [background-image:linear-gradient(to_right,#EEEEF0_1px,transparent_1px),linear-gradient(to_bottom,#EEEEF0_1px,transparent_1px)] [background-size:80px_80px] px-6 pt-44 pb-20 text-center md:pt-48 md:pb-24 dark:[background-image:linear-gradient(to_right,#1c1c1c_1px,transparent_1px),linear-gradient(to_bottom,#1c1c1c_1px,transparent_1px)]">
      <div className="absolute top-40 -left-20 z-0 h-20 w-[700px] rotate-45 bg-blue-500/20 blur-3xl dark:bg-blue-500/30" />
      <div className="absolute top-40 -right-20 z-0 h-20 w-[700px] -rotate-45 bg-blue-500/20 blur-3xl dark:bg-blue-500/30" />
      <div className="absolute -bottom-[300px] left-0 -z-10 h-full w-full rounded-full bg-[radial-gradient(circle_at_center,_#ffffff_50%,_#ffffff80_70%,_transparent_100%)] blur-3xl dark:bg-[radial-gradient(circle_at_center,_#0a0a0a_50%,_#0a0a0a80_70%,_transparent_100%)]" />
      <div className="max-w-4xl text-center">
        <h1 className="from-muted to-foreground mb-2 bg-linear-to-tl from-0% to-40% bg-clip-text pb-2 text-4xl font-bold tracking-tight text-balance text-transparent md:mb-6 md:text-6xl">
          Code Real Problems Grow Every Day
        </h1>
        <p className="text-muted-foreground mx-auto mb-6 max-w-2xl text-base text-balance md:text-lg">
          Sharpen your skills with hands-on challenges, build consistency with
          daily tasks, and rise through the leaderboard as you level up your
          coding journey
        </p>
        <div className="flex flex-col gap-4 md:flex-row md:justify-center md:gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-b from-blue-500 to-blue-600 text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:from-blue-500/90 hover:to-blue-600/90 hover:shadow-lg hover:shadow-blue-500/20 active:translate-y-0"
            asChild
          >
            <Link href="/challenges">Explore Challenges</Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="hover:bg-muted/10 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20 active:translate-y-0"
          >
            <Link href="/">Try Today&apos;s Challenge</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
