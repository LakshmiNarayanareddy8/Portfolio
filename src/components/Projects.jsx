import { useState } from "react";
import p1 from "../assets/project1.png";
import p2 from "../assets/project2.png";
import p3 from "../assets/project3.avif";
const projects = [
  {
    title: "Portfolio",
    desc: "Personal portfolio website showcasing projects and skills.",
    img: p2,
    live: "https://your-portfolio-link.com",
    github: "https://github.com/LakshmiNarayanareddy8/Portfolio",
  },
  {
    title: "Expense Tracker",
    desc: "Track income and expenses with charts and authentication.",
    img: p1,
    live: "https://budget-buddy-roan-ten.vercel.app/",
    github: "https://github.com/LakshmiNarayanareddy8/Budget-buddy",
  },
  {
    title: "Fake News Detection System",
    desc: "MERN stack application using BERT and CLIP models to detect fake news articles.",
    img: p3,
    live: "https://your-fake-news-project-link.com",
    github: "https://github.com/yourgithub/fake-news-detection",
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
      <h2 className="text-4xl font-bold text-center mb-14">My Work</h2>

      <div className="relative mx-auto max-w-4xl bg-card border border-white/10 rounded-3xl overflow-hidden">

        <img
          src={projects[index].img}
          alt={projects[index].title}
          className="w-full h-[350px] object-cover"
        />

        <div className="p-10">
          <h3 className="text-3xl font-semibold mb-3">
            {projects[index].title}
          </h3>

          <p className="text-gray-400 mb-8 text-lg">
            {projects[index].desc}
          </p>

          <div className="flex gap-6">
            <a
              href={projects[index].live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 bg-primary text-black rounded-xl"
            >
              Live Demo
            </a>

            <a
              href={projects[index].github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 border border-white/20 rounded-xl"
            >
              GitHub
            </a>
          </div>
        </div>

        <button
          onClick={prev}
          className="absolute left-4 top-1/2 bg-black/60 w-12 h-12 rounded-full"
        >
          ◀
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 bg-black/60 w-12 h-12 rounded-full"
        >
          ▶
        </button>

      </div>
    </section>
  );
}