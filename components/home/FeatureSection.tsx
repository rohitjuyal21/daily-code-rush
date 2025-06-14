import {
  TargetIcon,
  BookOpenIcon,
  TrophyIcon,
} from "@phosphor-icons/react/dist/ssr";

const Features = [
  {
    icon: TargetIcon,
    title: "Daily Challenges",
    description:
      "Fresh coding problems every day to keep your skills sharp and maintain consistent practice habits.",
  },
  {
    icon: TrophyIcon,
    title: "Leaderboard",
    description:
      "Compete with developers worldwide and track your progress on our global leaderboard system.",
  },
  {
    icon: BookOpenIcon,
    title: "Beginner Friendly",
    description:
      "Carefully curated problems with detailed explanations perfect for developers just starting their journey.",
  },
];

export default function FeatureSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">How it works</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to level up your coding skills
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Features.map((feature) => (
            <div
              key={feature.title}
              className="group relative z-10 overflow-hidden rounded-xl p-px transition-all duration-300"
            >
              <div className="group-hover:animate-card-spin absolute inset-0 -z-10 scale-[8] bg-conic-90 from-blue-500 from-0% to-transparent to-20% opacity-0 group-hover:opacity-100" />
              <div className="group-hover:animate-card-spin absolute inset-0 -z-10 scale-[8] -bg-conic-90 from-blue-500 from-0% to-transparent to-20% opacity-0 group-hover:opacity-100" />

              <div className="bg-background flex min-h-[200px] flex-col justify-between rounded-xl border p-6 hover:bg-gray-50 dark:hover:bg-neutral-900">
                <h4 className="mb-2 text-2xl font-bold">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
                <div className="absolute top-4 right-4 opacity-50 transition-all duration-300 group-hover:-rotate-12">
                  <feature.icon className="text-primary h-14 w-14 transition-all duration-300 group-hover:text-blue-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
