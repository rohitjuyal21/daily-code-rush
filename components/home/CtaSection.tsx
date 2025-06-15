import { Button } from "../ui";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
export default function CtaSection() {
  return (
    <section className="relative [background-image:linear-gradient(to_right,#EEEEF0_1px,transparent_1px),linear-gradient(to_bottom,#EEEEF0_1px,transparent_1px)] [background-size:40px_40px] dark:[background-image:linear-gradient(to_right,#1c1c1c_1px,transparent_1px),linear-gradient(to_bottom,#1c1c1c_1px,transparent_1px)]">
      <div className="from-background/90 absolute top-0 h-28 w-full bg-gradient-to-b to-transparent"></div>
      <div className="from-background/90 absolute bottom-0 h-28 w-full bg-gradient-to-t to-transparent"></div>
      <div className="from-background/90 absolute left-0 h-full w-20 bg-gradient-to-r to-transparent"></div>
      <div className="from-background/90 absolute right-0 h-full w-20 bg-gradient-to-l to-transparent"></div>

      <div className="relative mx-auto flex h-full max-w-5xl flex-col items-center px-4 py-28 md:px-6">
        <h2 className="mb-4 text-center text-4xl font-bold">
          Ready to Start Your Coding Journey?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl text-center text-xl text-balance">
          Join thousands of developers who are already improving their skills
          with our platform.
        </p>
        <Button
          size="lg"
          className="group overflow-hidden bg-gradient-to-b from-blue-500 to-blue-600 text-white transition-all duration-300 ease-in-out hover:from-blue-500/90 hover:to-blue-600/90 hover:shadow-lg hover:shadow-blue-500/20 active:translate-y-0"
          asChild
        >
          <Link href="/">
            Start Coding
            <ArrowRightIcon className="h-6 w-6 transition-all duration-300 ease-in-out group-active:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
