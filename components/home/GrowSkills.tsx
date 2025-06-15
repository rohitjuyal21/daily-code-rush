import { OrbitingCircles } from "../ui/magicui/orbiting-circles";
import Image from "next/image";

export default function GrowSkills() {
  return (
    <section className="relative overflow-hidden px-6 py-20">
      <div className="absolute top-1/2 right-0 h-[700px] w-[400px] translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute top-1/2 left-0 h-[700px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-center text-4xl font-bold text-balance md:text-left">
            Level Up with Real-World Skills
          </h2>
          <p className="text-muted-foreground text-center text-lg text-balance md:text-right">
            Dive into hands-on coding experiences that go beyond theory. Build
            real projects, explore new tools, and strengthen your
            problem-solving skills—all while preparing yourself for real-world
            challenges in tech.
          </p>
        </div>

        <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden">
          <OrbitingCircles>
            <Image src="/assets/react.svg" alt="react" width={50} height={50} />
            <Image
              src="/assets/tailwind.svg"
              alt="react"
              width={50}
              height={50}
            />
            <Image
              src="/assets/typescript.svg"
              alt="react"
              width={50}
              height={50}
            />
          </OrbitingCircles>
          <OrbitingCircles radius={100} reverse>
            <Image src="/assets/html.svg" alt="react" width={50} height={50} />
            <Image src="/assets/css.svg" alt="react" width={50} height={50} />
            <Image
              src="/assets/javascript.svg"
              alt="react"
              width={50}
              height={50}
            />
          </OrbitingCircles>
        </div>
      </div>
    </section>
  );
}
