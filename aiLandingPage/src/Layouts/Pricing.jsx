import React from "react";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Free",
      price: "₹0",
      features: ["Basic writing tools", "Limited prompts", "Community support"],
      cta: "Get Started",
      highlight: false,
    },
    {
      title: "Pro",
      price: "₹499/mo",
      features: [
        "Unlimited writing & planning",
        "Custom AI templates",
        "Priority support",
      ],
      cta: "Start Free Trial",
      highlight: true,
    },
    {
      title: "Team",
      price: "₹1499/mo",
      features: ["All Pro features", "Team collaboration", "Admin controls"],
      cta: "Contact Sales",
      highlight: false,
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6" id="pricing">
  <div className="max-w-6xl mx-auto text-center">
    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
      Simple &{" "}
      <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Transparent
      </span>{" "}
      Pricing
    </h2>
    <p className="text-gray-400 max-w-2xl mx-auto mb-14">
      Whether you're an individual or a team, Mindly AI has a plan that fits
      your workflow.
    </p>

    {/* Pricing Cards */}
    <div className="grid gap-8 md:grid-cols-3">
      {pricingPlans.map((plan, index) => (
        <div
          key={index}
          className={`p-8 rounded-2xl border shadow-lg transition-all backdrop-blur-md 
            bg-white/5 hover:shadow-purple-500/20 hover:-translate-y-2
            ${
              plan.highlight
                ? "border-purple-500 scale-105 shadow-purple-500/30"
                : "border-gray-800"
            }`}
        >
          {/* Title */}
          <h3 className="text-2xl font-semibold mb-3">{plan.title}</h3>

          {/* Price */}
          <p className="text-4xl font-bold text-purple-400 mb-6">
            {plan.price}
          </p>

          {/* Features */}
          <ul className="space-y-3 mb-8 text-left">
            {plan.features.map((feature, i) => (
              <li
                className="flex gap-3 items-center text-gray-300"
                key={i}
              >
                <span className="bg-purple-500/20 text-purple-400 p-1 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            className={`w-full py-3 px-4 rounded-lg font-semibold transition
              ${
                plan.highlight
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-gray-800 hover:bg-gray-700 text-gray-200"
              }`}
          >
            {plan.cta}
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Pricing;
