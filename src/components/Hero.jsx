import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col">
      {/* Hero Content */}
      <main className="flex flex-1 items-center justify-center px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center max-w-7xl w-full">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">
            <p className="text-sm tracking-widest text-gray-400 mb-3">
              AI & ML ENGINEER
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Hello, I’m{" "}
              <span className="text-primary">A.L.N.Reddy</span>
            </h1>

            <p className="text-gray-400 max-w-lg mb-8">
              I love developing ML models and integrating them with modern web
              experiences, building scalable solutions using cutting-edge
              technology.
            </p>

            <div className="flex gap-4 mb-8">
              {/* Hire Me */}
              <a href="#contact">
                <button className="bg-primary text-black px-6 py-3 rounded-lg font-medium">
                  Hire Me
                </button>
              </a>

              {/* Download Resume (Google Drive) */}
              <a
                href="https://drive.google.com/uc?export=download&id=1316z_DlKjD_2haokk5nwQIpiUBA21mnH"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  className="border border-white/20 px-6 py-3 rounded-lg
                             hover:border-primary hover:text-primary transition"
                >
                  Download Resume
                </button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 text-gray-400">
              <a
                href="https://www.linkedin.com/in/annareddy-lakshmi-narayana-reddy-b7760a325"
                target="_blank"
                rel="noreferrer"
              >
                in
              </a>
              <a
                href="https://github.com/LakshmiNarayanareddy8"
                target="_blank"
                rel="noreferrer"
              >
                G
              </a>
              <a href="mailto:annareddylakshminarayanareddy@gmail.com">
                @
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE – FLOAT + HOVER ZOOM */}
          <div
            className="relative flex justify-center"
            data-aos="fade-left"
          >
            {/* Soft Glow */}
            <div className="absolute w-80 h-80 rounded-full bg-indigo-500/25 blur-3xl" />

            <img
              src={heroImg}
              alt="Hero Astronaut"
              className="relative w-72 animate-float
                         transition-transform duration-300 ease-out
                         hover:scale-105"
            />
          </div>

        </div>
      </main>
    </section>
  );
}
