// src/components/Contact.jsx
import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-white dark:bg-gray-900"
    >
      {/* Floating accent */}
      <div
        className="absolute -z-10 rounded-full filter blur-3xl opacity-60 animate-float"
        style={{
          width: "400px",
          height: "400px",
          top: "10%",
          left: "50%",
          background:
            "radial-gradient(circle, rgba(248,176,200,0.5) 0%, rgba(248,176,200,0.2) 60%)",
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left message */}
        <div className="flex flex-col justify-center animate-slideIn">
          <h2 className="text-4xl font-heading mb-4 text-gray-800 dark:text-gray-100">
            Let’s Work Together
          </h2>
          <p className="font-body text-gray-600 dark:text-gray-300 mb-6">
            Got a question, idea, or just want to say hi? Drop me a message!
          </p>
          <div className="flex space-x-4 mb-6">
            <a
              href="https://github.com/Vallery-O"
              className="text-pink-500 hover:text-pink-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-7 h-7" />
            </a>
            <a
              href="https://linkedin.com/in/vallery-otieno"
              className="text-pink-500 hover:text-pink-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a
              href="https://www.instagram.com/_vall.ry/"
              className="text-pink-500 hover:text-pink-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-7 h-7" />
            </a>
          </div>
        </div>

        {/* Right form */}
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 rounded-3xl p-8 shadow-lg animate-slideIn"
        >
          
          <input
            type="hidden"
            name="access_key"
            value="cb9b6caa-85f7-49e1-81b2-e5f1b5f2d4ba" 
          />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full mb-4 p-3 rounded-lg bg-white/60 dark:bg-gray-700/40 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-pink-400 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full mb-4 p-3 rounded-lg bg-white/60 dark:bg-gray-700/40 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-pink-400 outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full mb-4 p-3 rounded-lg bg-white/60 dark:bg-gray-700/40 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-pink-400 outline-none"
            required
          ></textarea>

          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition"
          >
            Send Message
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </form>
      </div>

      <p className="text-center mt-12 text-gray-500 dark:text-gray-400">
        © 2025 Vallery Otieno. All rights reserved.
      </p>
    </section>
  );
};

export default Contact;
