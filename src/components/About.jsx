import avatar from "../assets/avatar.png";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 max-w-6xl mx-auto"
    >
      {/* Top profile card */}
      <div
        data-aos="fade-up"
        className="bg-card glow-on-scroll border border-white/10
                   rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start"
      >
        {/* Avatar */}
        <img
          src={avatar}
          alt="Profile"
          className="w-24 h-24 rounded-xl object-cover border border-white/20"
        />

        {/* Info */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-primary">
            Annareddy Lakshmi Narayana Reddy
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            AI & ML Engineer
          </p>

          <p className="text-gray-400 leading-relaxed max-w-2xl">
           I develop end-to-end AI/ML systems, focusing on data preprocessing, model design, training, 
           evaluation, and deployment, with an emphasis on scalability, accuracy, and performance.
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-3 mt-6">
            
            <span className="px-4 py-1 text-sm rounded-full
                             bg-white/5 border border-white/10">
              Role: AI & ML
            </span>
            <span className="px-4 py-1 text-sm rounded-full
                             bg-white/5 border border-white/10">
              Focus: Model's Accuracy & UI 
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <a href="#projects">
              <button className="bg-primary text-black px-5 py-2 rounded-lg font-medium">
                View Projects
              </button>
            </a>

            <a href="#contact">
              <button className="border border-white/20 px-5 py-2 rounded-lg
                                 hover:border-primary transition">
                Get in Touch
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* About Me text section */}
      <div
        className="mt-16 max-w-3xl"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-semibold mb-4">
          About Me
        </h2>

        <p className="text-gray-400 leading-relaxed mb-4">
          I’m a Computer Science student, software developer
          who is passionate about building fast, reliable, and
          user-friendly AI based applications. I enjoy turning ideas into polished
          products that solve real problems.
        </p>

        <p className="text-gray-400 leading-relaxed">
          I love working across the working and experimenting the modern Gen AI tools,
          and continuously improving my skills in system design and software
          engineering best practices.
        </p>
      </div>
    </section>
  );
}
