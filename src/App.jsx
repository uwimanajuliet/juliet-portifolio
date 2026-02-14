import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import PortPhoto from "./assets/port.jpg";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize scroll animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="scroll-smooth">

      {/* ===== Navbar (Paste your new code here) ===== */}
      <nav className="fixed top-0 w-full bg-black bg-opacity-90 text-white shadow z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold">UWIMANA Juliet</h1>
          <ul className="hidden md:flex gap-6">
            <li><a href="#hero" className="hover:text-indigo-500 transition">Home</a></li>
            <li><a href="#about" className="hover:text-indigo-500 transition">About</a></li>
            <li><a href="#projects" className="hover:text-indigo-500 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-indigo-500 transition">Contact</a></li>
          </ul>
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <ul className="md:hidden flex flex-col gap-4 bg-gray-900 px-6 pb-4">
            <li><a href="#hero" onClick={() => setIsOpen(false)} className="hover:text-indigo-500 transition">Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)} className="hover:text-indigo-500 transition">About</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-indigo-500 transition">Projects</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-indigo-500 transition">Contact</a></li>
          </ul>
        )}
      </nav>

      {/* ===== Hero Section ===== */}
      <section
        id="hero"
        className="flex flex-col justify-center items-center text-center h-screen px-6 pt-20 bg-black text-white"
        data-aos="fade-up"
      >
        <img
    src={PortPhoto}
    alt="UWIMANA Juliet"
    className="w-40 h-40 md:w-40 md:h-52 rounded-full mb-5 md:mb-0 md:mr-6 border-6 border-indigo-500"
  />
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            UWIMANA Juliet
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
          Software Developer
        </h2>
        <p className="max-w-2xl text-gray-500 mb-8">
          I build modern, responsive and scalable web applications using
          React, Node.js and MySQL. Passionate about solving real-world
          problems through clean and efficient code.
        </p>
        <div className="flex gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg transition duration-300">
            View Projects
          </button>
          <button className="border border-gray-600 hover:border-indigo-500 px-6 py-3 rounded-lg transition duration-300">
            Contact Me
          </button>
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section id="about" className="bg-gray-900 py-20 px-6 text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
        <p className="max-w-3xl mx-auto text-gray-400 mb-8">
          I'm UWIMANA Juliet, a passionate Software Developer who loves creating
          web applications that solve real-world problems. I specialize in building
          responsive, modern, and scalable applications using React, Node.js, and MySQL.
        </p>
        <h3 className="text-2xl font-semibold mb-4 text-white">Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-indigo-600 px-4 py-2 rounded-full text-white">React</span>
          <span className="bg-indigo-600 px-4 py-2 rounded-full text-white">Node.js</span>
          <span className="bg-indigo-600 px-4 py-2 rounded-full text-white">Express</span>
          <span className="bg-indigo-600 px-4 py-2 rounded-full text-white">MySQL</span>
          <span className="bg-indigo-600 px-4 py-2 rounded-full text-white">JavaScript</span>
          <span className="bg-indigo-600 px-4 py-2 rounded-full text-white">Tailwind CSS</span>
          <span className="bg-indigo-600 px-4 py-2 rounded-full text-white">Git & GitHub</span>
        </div>
      </section>

      {/* ===== Projects Section ===== */}
<section id="projects" className="bg-black py-20 px-6 text-center" data-aos="fade-up">
  <h2 className="text-4xl font-bold mb-12 text-white">Projects</h2>

  <div className="flex flex-wrap justify-center gap-8">

    {/* Project Card 1 */}
    <div className="bg-gray-800 rounded-xl p-6 w-80 hover:scale-105 transform transition duration-300">
      <h3 className="text-2xl font-semibold text-white mb-3">
        Car Repair Payment Management System
      </h3>
      <p className="text-gray-400 mb-4">
        A full-stack web app for managing car repair services, payments, and service records.
      </p>
      <div className="flex justify-between">
        <a
          href="https://github.com/uwimanajuliet/car-repair-system"
          target="_blank"
          className="text-indigo-500 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://gmail.com/julietuwimana30@gmail.com"
          className="bg-indigo-600 px-3 py-1 rounded-lg text-white hover:bg-indigo-700 transition"
        >
          Email
        </a>
      </div>
    </div>

    {/* Project Card 2 */}
    <div className="bg-gray-800 rounded-xl p-6 w-80 hover:scale-105 transform transition duration-300">
      <h3 className="text-2xl font-semibold text-white mb-3">
        Personal Portfolio
      </h3>
      <p className="text-gray-400 mb-4">
        My own responsive portfolio built with React, Tailwind CSS, and Vite.
      </p>
      <div className="flex justify-between">
        <a
          href="https://github.com/uwimanajuliet/portfolio"
          target="_blank"
          className="text-indigo-500 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://juliet-portfolio.netlify.app/"
          className="bg-indigo-600 px-3 py-1 rounded-lg text-white hover:bg-indigo-700 transition"
        >
         netlify
        </a>
      </div>
    </div>

    {/* You can add more project cards here */}

  </div>
</section>


      {/* ===== Contact Section ===== */}
      <section id="contact" className="bg-gray-900 py-20 px-6 text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6 text-white">Contact Me</h2>
        <p className="text-gray-400 mb-8">Get in touch via email or GitHub!</p>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:your-email@example.com"
            className="bg-indigo-600 px-6 py-3 rounded-lg text-white hover:bg-indigo-700 transition"
          >
            Email Me
          </a>
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            className="border border-gray-600 px-6 py-3 rounded-lg text-white hover:border-indigo-500 transition"
          >
            GitHub
          </a>
        </div>
      </section>
{/* ===== Footer ===== */}
<footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center">
  <p className="mb-4">
    © {new Date().getFullYear()} UWIMANA Juliet. All rights reserved.
  </p>

  <div className="flex justify-center gap-6 mb-4">
    <a href="https://github.com/uwimanajuliet" target="_blank" className="hover:text-white transition">
      GitHub
    </a>
    <a href="https://linkedin.com/in/uwimanajuliet" target="_blank" className="hover:text-white transition">
      LinkedIn
    </a>
    <a href="mailto:julietuwimana30@gmail.com" className="hover:text-white transition">
      Email
    </a>
  </div>

  <p className="text-gray-500 text-sm">
    Built with React & Tailwind CSS
  </p>
</footer>

    </div>
  );
}
