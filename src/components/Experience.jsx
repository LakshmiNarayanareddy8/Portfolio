const experience = [
  {
    role: "Mern Stack Developer Intern",
    company: "BRVS Tech llt",
    year: "2025",
    description: "Worked with React and cloud space to build scalable systems.",
  },
  {
    role: "Student Developer",
    company: "GMRIT",
    year: "2023",
    description:
      "Worked on academic and personal projects focusing on web and AI basics.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
      <h2
        className="text-3xl font-bold text-center mb-24"
        data-aos="fade-up"
      >
        Experience
      </h2>
      <br></br>

      {/* Timeline container */}
      <div className="relative">
        {/* Horizontal line */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/20" />

        {/* Timeline items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {experience.map((e, i) => {
            const isTop = i % 2 === 0;

            return (
              <div
                key={i}
                className="relative flex justify-center"
                data-aos="fade-up"
              >
                {/* Dot on the line */}
                <span className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary z-10" />

                {/* Card */}
                <div
                  className={`bg-card glow-on-scroll border border-white/10 rounded-xl p-6 w-72 text-center
                  ${isTop ? "-translate-y-28" : "translate-y-28"}`}
                >
                  <h3 className="text-primary font-semibold">{e.role}</h3>
                  <p className="text-gray-400">{e.company}</p>
                  <p className="text-sm text-gray-500 mb-3">{e.year}</p>
                  <p className="text-sm text-gray-300">{e.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
