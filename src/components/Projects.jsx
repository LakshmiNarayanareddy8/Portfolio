import { useState } from "react";
import p1 from "../assets/project1.png";
import p2 from "../assets/project2.png";

const projects = [
  {
    title: "Portfolio",
    desc: "Info, Projects, Contact and My profile.",
    img: p2,
    live: "https://your-portfolio-link.com",
    github: "https://github.com/LakshmiNarayanareddy8/Portfolio",
  },
  {
    title: "Expense Tracker",
    desc: "Track income and expenses with charts and auth.",
    img: p1,
    live: "https://budget-buddy-roan-ten.vercel.app/",
    github: "https://github.com/LakshmiNarayanareddy8/Budget-buddy",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + projects.length) % projects.length);
  const next = () =>
    setIndex((index + 1) % projects.length);

  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-14" data-aos="fade-up">
        My Work
      </h2>

      {/* Card */}
      <div
        data-aos="fade-up"
        className="relative mx-auto max-w-4xl
                   bg-card glow-on-scroll border border-white/10
                   rounded-3xl overflow-hidden"
      >
        {/* Image (height reduced) */}
        <div className="w-full bg-black/40">
          <img
            src={projects[index].img}
            alt={projects[index].title}
            className="w-full h-[345px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-10">
          <h3 className="text-3xl font-semibold mb-3">
            {projects[index].title}
          </h3>

          <p className="text-gray-400 mb-8 text-lg">
            {projects[index].desc}
          </p>

          {/* Buttons */}
          <div className="flex gap-6">
            <a
              href={projects[index].live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 bg-primary text-black rounded-xl font-medium
                         hover:opacity-90 transition"
            >
              Live Demo
            </a>

            <a
              href={projects[index].github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 border border-white/20 rounded-xl
                         hover:bg-white/10 transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2
                     bg-black/60 hover:bg-black
                     border border-white/20 rounded-full w-12 h-12 text-lg"
        >
          ◀
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2
                     bg-black/60 hover:bg-black
                     border border-white/20 rounded-full w-12 h-12 text-lg"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
