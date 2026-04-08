import React, { useEffect, useState } from "react";
import { HiArrowDownTray } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi";
import { useTheme } from "../theme/themeContext";

const fullText = "Hi I'm Hari Ganesh";

const roles = ["Frontend Engineer", "React Developer", "Next.js Specialist"];

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [showSubtitle, setShowSubtitle] = useState(false);

  const { theme } = useTheme();

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  // Typing effect
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(typing);
    }, 60);
    return () => clearInterval(typing);
  }, []);

  // Subtitle animation
  useEffect(() => {
    const timer = setTimeout(() => setShowSubtitle(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll with offset
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById("contact");
    if (!section) return;

    const offset = 80;
    const top = section.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen  scroll-mb-20 flex flex-col items-center w-full px-6 py-20 text-center">
      {/* Image */}
      <div className="relative group">
        <span className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-60 group-hover:opacity-80 transition duration-300" />
        <img
          src={`${import.meta.env.BASE_URL}hari_image-new.jpeg`}
          width={200}
          height={200}
          alt="Hari Ganesh"
          className="
            relative z-10 rounded-full 
            border border-border
            shadow-sm
            transition-all duration-300
            group-hover:scale-[1.04]
            group-hover:-translate-y-1
          "
        />
      </div>

      {/* Name */}
      <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight">
        {typedText}
        {/* <span className="animate-pulse">|</span> */}
      </h1>

      {/* Roles */}
      <div className="mt-3 flex flex-wrap justify-center gap-2 text-sm sm:text-base text-primary font-medium">
        {roles.map((role, index) => (
          <span key={index} className="px-2">
            {role}
            {index < roles.length - 1 && <span className="ml-2">•</span>}
          </span>
        ))}
      </div>

      {/* Subtitle */}
      <p
        className={`mt-4 max-w-xl text-sm sm:text-base text-foreground/70 leading-relaxed transition-all duration-500 ${
          showSubtitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        Building scalable and high-performance web applications for enterprises
        using React and Next.js.
      </p>

      {/* CTA */}
      <div className="mt-6 flex items-center gap-4">
        {/* Contact */}
        <a
          href="#contact"
          onClick={handleScrollToContact}
          className="
            group inline-flex items-center gap-2
            px-5 py-2.5 rounded-full 
            bg-foreground text-background
            hover:bg-background hover:text-foreground 
            hover:border hover:border-foreground
            text-sm font-medium
            transition-all duration-300 ease-out
            hover:scale-[1.04]
            hover:shadow-sm
          "
        >
          Contact me
          <HiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
        </a>

        {/* Resume */}
        <a
          href={`${import.meta.env.BASE_URL}hariResume.pdf`}
          download
          className="
            group inline-flex items-center gap-2
            px-5 py-2.5 rounded-full 
            border border-border
            text-sm font-medium
            transition-all duration-300 ease-out
            hover:scale-[1.04]
          "
          style={{
            color: isDark ? "#FFFFFF" : "#000000",
            backgroundColor: "transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = isDark
              ? "#FFFFFF"
              : "#000000";
            e.currentTarget.style.color = isDark ? "#000000" : "#FFFFFF";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = isDark ? "#FFFFFF" : "#000000";
          }}
        >
          Download Resume
          <HiArrowDownTray className="transition-transform duration-200 group-hover:translate-y-[1px]" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
