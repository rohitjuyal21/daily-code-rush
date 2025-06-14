import { Button } from "../ui";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

export default function CtaSection() {
  return (
    <section className="relative [background-image:linear-gradient(to_right,#EEEEF0_1px,transparent_1px),linear-gradient(to_bottom,#EEEEF0_1px,transparent_1px)] [background-size:40px_40px] dark:[background-image:linear-gradient(to_right,#1c1c1c_1px,transparent_1px),linear-gradient(to_bottom,#1c1c1c_1px,transparent_1px)]">
      <div className="from-background/90 absolute top-0 h-28 w-full bg-gradient-to-b to-transparent"></div>
      <div className="from-background/90 absolute bottom-0 h-28 w-full bg-gradient-to-t to-transparent"></div>
      <div className="from-background/90 absolute left-0 h-full w-20 bg-gradient-to-r to-transparent"></div>
      <div className="from-background/90 absolute right-0 h-full w-20 bg-gradient-to-l to-transparent"></div>

      <div className="relative z-20 mx-auto flex h-full max-w-5xl flex-col items-center px-6 py-28">
        <h2 className="mb-4 text-4xl font-bold">
          Ready to Start Your Coding Journey?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl text-center text-xl text-balance">
          Join thousands of developers who are already improving their skills
          with our platform.
        </p>
        <Button>
          Start Coding
          <ArrowRightIcon className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}
