import heroImg from "../assets/hero.png";
import resume from "../assets/resume.pdf";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col">
      <main className="flex flex-1 items-center justify-center px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center max-w-7xl w-full">

          <div data-aos="fade-right">
            <p className="text-sm tracking-widest text-gray-400 mb-3">
              AI & ML ENGINEER
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Hello, I’m <span className="text-primary">A.L.N.Reddy</span>
            </h1>

            <p className="text-gray-400 max-w-lg mb-8">
              I build AI-powered applications and scalable web solutions,
              focusing on machine learning and modern web technologies.
            </p>

            <div className="flex gap-4 mb-8">
              <a href="#contact">
                <button className="bg-primary text-black px-6 py-3 rounded-lg font-medium">
                  Hire Me
                </button>
              </a>

              <a href={resume} download>
                <button className="border border-white/20 px-6 py-3 rounded-lg hover:border-primary hover:text-primary transition">
                  Download Resume
                </button>
              </a>
            </div>

            <div className="flex gap-6 text-gray-400">
              <a
                href="https://www.linkedin.com/in/annareddy-lakshmi-narayana-reddy-b7760a325"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/LakshmiNarayanareddy8"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a href="mailto:annareddylakshminarayanareddy@gmail.com">
                Email
              </a>
            </div>
          </div>

          <div className="relative flex justify-center" data-aos="fade-left">
            <div className="absolute w-80 h-80 rounded-full bg-indigo-500/25 blur-3xl" />

            <img
              src={heroImg}
              alt="Hero"
              className="relative w-72 animate-float hover:scale-105 transition"
            />
          </div>

        </div>
      </main>
    </section>
  );
}