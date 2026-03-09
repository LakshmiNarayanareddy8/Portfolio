export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary">Nani</h1>

        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          <li><a href="#home" className="hover:text-primary">Home</a></li>
          <li><a href="#about" className="hover:text-primary">About</a></li>
          <li><a href="#skills" className="hover:text-primary">Skills</a></li>
          <li><a href="#experience" className="hover:text-primary">Experience</a></li>
          <li><a href="#projects" className="hover:text-primary">Projects</a></li>
          <li><a href="#certificates" className="hover:text-primary">Certificates</a></li>
          <li><a href="#contact" className="hover:text-primary">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}