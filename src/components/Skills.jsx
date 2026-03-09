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
  SiNodedotjs,
  SiExpress,
  SiMongodb
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

const skills = [
  { icon: <SiPython />, name: "Python" },
  { icon: <SiC />, name: "C" },
  { icon: <FaJava />, name: "Java" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiHtml5 />, name: "HTML" },
  { icon: <SiCss3 />, name: "CSS" },
  { icon: <SiBootstrap />, name: "Bootstrap" },
  { icon: <SiReact />, name: "React JS" },
  { icon: <SiNodedotjs />, name: "NodeJS" },
  { icon: <SiExpress />, name: "ExpressJS" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiPhp />, name: "PHP" },
  { icon: <SiFlask />, name: "Flask" },
  { icon: "📊", name: "Data Structures" },
  { icon: "🤖", name: "AI & ML" },
  { icon: "🧠", name: "Neural Networks" },
  { icon: "☁️", name: "Cloud Essentials" },
  { icon: <SiGithub />, name: "GitHub" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">

      <h2 className="text-3xl font-bold text-center mb-12">
        My Tech Stack
      </h2>

      <div className="flex flex-wrap justify-center gap-4">

        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2
                       bg-card border border-white/10
                       rounded-full text-gray-300
                       hover:border-primary hover:text-primary
                       transition"
          >
            <span className="text-lg">{skill.icon}</span>
            <span className="text-sm">{skill.name}</span>
          </div>
        ))}

      </div>

    </section>
  );
}