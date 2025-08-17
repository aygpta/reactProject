import React from "react";

const testimonials = [
  {
    quote:
      "Mindly AI transformed the way I write. It feels like having a co-writer in my pocket.",
    author: "Priya Sharma",
    role: "Content Strategist, TechSolutions",
  },
  {
    quote:
      "Our team plans faster, writes smarter, and delivers more in less time with Mindly AI.",
    author: "Rahul Verma",
    role: "Marketing Head, Creativex",
  },
  {
    quote:
      "As a founder, I need clarity. Mindly helps me think and structure ideas 10x faster.",
    author: "Neha Patel",
    role: "Founder, DesignHub",
  },
  {
    quote: "It’s like Notion meets ChatGPT — but more intuitive and focused.",
    author: "Amit Singh",
    role: "Product Manager, Buildify",
  },
  {
    quote:
      "Mindly is my personal AI assistant for note-taking and brainstorming every day.",
    author: "Deepika Joshi",
    role: "Operations Lead, FlowTech",
  },
  {
    quote:
      "From technical docs to blog drafts, Mindly nails the tone every time.",
    author: "Vikram Mehta",
    role: "Developer, CodeSprint",
  },
  {
    quote: "It organizes my thoughts before I even finish typing. Incredible!",
    author: "Ananya Reddy",
    role: "UX Designer, PixelSoft",
  },
  {
    quote:
      "In one week, Mindly boosted our productivity 2x. Game-changing tool.",
    author: "Karan Malhotra",
    role: "CEO, StartUpX",
  },
];

export default function TestimonialGrid() {
  return (
    <section
  id="testimonial"
  className="bg-black text-white py-20 px-6 flex flex-col items-center gap-2"
>
  {/* Tag */}
  <div className="text-center mb-5 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full w-fit flex justify-center items-center gap-2 shadow-md">
    <div className="h-2 w-2 bg-purple-600 rounded-full animate-pulse"></div>
    <p className="text-sm tracking-wide">Testimonials</p>
  </div>

  {/* Heading */}
  <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-14">
    Loved by Teams &{" "}
    <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
      Creators
    </span>{" "}
    Worldwide
  </h2>

  {/* Testimonials Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
    {testimonials.map((t, index) => (
      <div
        key={index}
        className="bg-white/5 backdrop-blur-md border border-gray-800 hover:border-purple-500 p-6 rounded-2xl shadow-md hover:shadow-purple-500/20 transition transform hover:-translate-y-2"
      >
        {/* Quote */}
        <p className="text-gray-300 italic mb-6 relative">
          <span className="text-purple-500 text-3xl leading-none absolute -left-3 -top-2">❝</span>
          {t.quote}
        </p>

        {/* Author */}
        <div className="text-sm text-gray-400">
          <p className="font-semibold text-white">{t.author}</p>
          <p>{t.role}</p>
        </div>
      </div>
    ))}
  </div>
</section>

  );
}
