import emailjs from "emailjs-com";
import { useRef } from "react";
import astronaut from "../assets/astronaut.png";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h8iaktr",
        "template_8o1yk6q",
        form.current,
        "F-p8Pd4IwbCqJaT-_"
      )
      .then(() => alert("Message Sent 🚀"))
      .catch(() => alert("Error ❌"));
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Astronaut */}
        <div className="flex justify-center" data-aos="fade-right">
          <img src={astronaut} alt="astronaut" className="w-75 animate-float" />
        </div>

        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          data-aos="fade-left"
          className="bg-card glow-on-scroll border border-white/10 p-8 rounded-xl"
        >
          <input
            name="user_name"
            placeholder="Your Name"
            className="w-full p-3 mb-4 bg-black rounded"
            required
          />
          <input
            name="user_email"
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 bg-black rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 mb-4 bg-black rounded"
            required
          />

          <button className="bg-primary text-black w-full py-3 rounded font-medium">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
