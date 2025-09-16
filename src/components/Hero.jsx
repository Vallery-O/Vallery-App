import React, { useEffect, useState } from "react";

const Hero = () => {
  const texts = ["Hi, I'm Vallery Otieno", "I'm a creative freelancer & Software Engineer"];
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= texts.length) setIndex(0);

    const currentText = texts[index];
    const typingSpeed = deleting ? 60 : 120;
    const pauseTime = 1000;

    if (!deleting && subIndex === currentText.length) {
      const pause = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(pause);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % texts.length);
      return;
    }

    const t = setTimeout(() => {
      setSubIndex((s) => {
        const next = deleting ? s - 1 : s + 1;
        setDisplayText(currentText.slice(0, next));
        return next;
      });
    }, typingSpeed);

    return () => clearTimeout(t);
  }, [subIndex, deleting, index, texts]);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 transition-colors bg-[#FFF5F8] dark:bg-[#2C1F28]"
    id="hero"
    >
      {/* Soft blurred pink circle accent */}
      <div
        className="absolute pointer-events-none -z-10 rounded-full filter blur-3xl opacity-80 animate-float"
  style={{
    width: "520px",
    height: "520px",
    top: "15%",
    left: "6%",
    background:
      "radial-gradient(circle at 30% 30%, rgba(248,176,200,0.95) 0%, rgba(248,176,200,0.35) 55%, rgba(248,176,200,0.0) 80%)",
    }}
    />
      <div
        className="absolute pointer-events-none -z-20 rounded-full filter blur-3xl opacity-70 dark:block hidden"
        style={{
          width: "640px",
          height: "640px",
          top: "10%",
          left: "10%",
          background:
            "radial-gradient(circle at 40% 35%, rgba(201,128,160,0.9) 0%, rgba(201,128,160,0.25) 55%, rgba(201,128,160,0.0) 85%)",
        }}
      />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: typing heading, static description, CTAs */}
        <div className="space-y-4 text-center md:text-left z-10">
          <h2 className="text-4xl md:text-5xl font-heading mb-3 text-[#5C3B4E] dark:text-[#F0E6EB]">
            {displayText}
            <span className="inline-block ml-1 animate-pulse">|</span>
          </h2>

          <p className="font-body text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-md">
            I am a creative freelancer in digital spaces and software engineer, 
            I enjoy designing and developing modern, responsive full-stack applications that blend inventive concepts with polished code to deliver visually striking, 
            highly engaging digital experiences.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start z-10">
            <a
              href="/Vallery-Otieno-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-[#F8B0C8] hover:bg-[#f59bb0] dark:bg-[#C980A0] dark:hover:bg-[#b9688d] text-white shadow-md transition"
            >
              Resume
            </a>

            <a
              href="#contact"
              className="px-6 py-2 rounded-full border-2 border-[#F8B0C8] dark:border-[#C980A0] text-[#5C3B4E] dark:text-[#F0E6EB] hover:bg-[#FFF5F8] dark:hover:bg-[#35262f] transition"
            >
              Let’s Connect
            </a>
          </div>
        </div>

        {/* Right: avatar bigger */}
        <div className="flex justify-center md:justify-end z-10">
          <img
            src="./avatar.png"
            alt="avatar"
            className="w-72 md:w-[28rem] object-cover shadow-lg animate-slideIn"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
