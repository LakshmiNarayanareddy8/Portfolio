import {
  SiPython,
  SiC,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiReact,
  SiPhp,
  SiFlask,
  SiMysql,
  SiGithub,
} from "react-icons/si";

const skills = [
    { icon: <SiPython />, name: "Python" },
  { icon: <SiHtml5 />, name: "HTML" },
  { icon: <SiCss3 />, name: "CSS" },
  { icon: <SiBootstrap />, name: "Bootstrap" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiReact />, name: "React JS" },
  { icon: <SiPhp />, name: "PHP" },
  { icon: <SiFlask />, name: "Flask" },
  { icon: <SiMysql />, name: "My SQL" },
  { icon: <SiJavascript />, name: "Java" },
  { icon: <SiC />, name: "C" },
  { icon: "📊", name: "Data Structures" },
  { icon: "🤖", name: "AI & ML" },
  { icon: "🧠", name: "Neural Networks" },
  { icon: <SiGithub />, name: "GitHub" },
  
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <h2
        className="text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        My Skills
      </h2>

      {/* Skill Bar */}
      <div
        data-aos="fade-up"
        className="bg-card glow-on-scroll border border-white/10
                   rounded-2xl px-8 py-6 flex flex-wrap justify-center gap-8"
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2
                       text-gray-300 hover:text-primary transition"
          >
            <div className="text-3xl">{skill.icon}</div>
            <span className="text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
