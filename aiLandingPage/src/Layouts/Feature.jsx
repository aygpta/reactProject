import { Sparkles, PenTool, BrainCog, Settings2 } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    title: "AI-Powered Writing",
    desc: "Generate clear, concise, and creative content with one click.",
  },
  {
    icon: <PenTool className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    title: "Smart Planning",
    desc: "Break down ideas and organize thoughts instantly with AI logic.",
  },
  {
    icon: <BrainCog className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    title: "Think Faster",
    desc: "Unlock productivity with real-time suggestions and insights.",
  },
  {
    icon: (
      <Settings2 className="w-8 h-8 text-purple-600 dark:text-purple-400" />
    ),
    title: "Custom Workflows",
    desc: "Tailor the AI to your writing or business needs with ease.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-gray-50 dark:bg-gradient-to-b dark:from-black dark:via-gray-900 dark:to-black transition">
  <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
    {/* Small Tag */}
    <div className="text-white mb-6 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full w-fit flex justify-center items-center gap-2 shadow-md">
      <div className="h-2 w-2 bg-purple-500 animate-pulse rounded-full"></div>
      <p className="text-sm tracking-wide">Features</p>
    </div>

    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
      Built to <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Supercharge</span> Your Workflow
    </h2>

    {/* Subtext */}
    <p className="text-gray-600 dark:text-gray-300 mb-14 max-w-2xl mx-auto text-lg">
      NeuraAI combines intelligence, creativity, and productivity — giving you the edge to focus on what matters most.
    </p>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 hover:border hover:border-purple-500"
        >
          {/* Icon */}
          <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md">
            {feature.icon}
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Features;
