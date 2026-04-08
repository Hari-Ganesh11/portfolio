// //import React from 'react'

// const Contact = () => {
//   return (
//     <section id="contact">
//     <div>Contact section will come here</div>
//     </section>
//   )
// }

// export default Contact
//import React from "react";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { useTheme } from "../theme/themeContext";

const contactLinks = [
  {
    icon: SiGithub,
    link: "https://github.com/Hari-Ganesh11",
    label: "GitHub",
    color: "#181717",
    darkColor: "#FFFFFF",
  },
  {
    icon: SiLinkedin,
    link: "https://www.linkedin.com/in/hariganeshramesh",
    label: "LinkedIn",
    color: "#0A66C2",
  },
  {
    icon: SiGmail,
    link: "mailto:hariganeshrd@gmail.com",
    label: "Email",
    color: "#EA4335",
  },
];

const Contact = () => {
  const { theme } = useTheme();

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <section id="contact" className="min-h-screen scroll-mt-20 py-16 bg-background text-foreground flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col items-center gap-6">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p>I'm always open for collabration and interested in working in a challenging environment where my skills can be used to the fullest. <br/> An individual who's always will to learn new things, Use the below socials to chatch up with me</p>

        <div className="flex items-center gap-5">
          {contactLinks.map((item, index) => {
            const Icon = item.icon;

            const iconColor =
              isDark && item.darkColor ? item.darkColor : item.color;

            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="group relative w-12 h-12 flex items-center justify-center rounded-full 
                           border border-border
                           transition-all duration-300 ease-out
                           hover:scale-105"
                style={{
                  backgroundColor: isDark ? "#374151" : "#f3f4f6", 
                }}
              >
                {/* Glow Ring */}
                <span
                  className="absolute inset-0 rounded-full opacity-0  group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: `0 0 0 2px ${iconColor}33, 0 0 12px ${iconColor}55`,
                  }}
                />

                {/* Icon */}
                <Icon
                  size={18}
                  style={{ color: iconColor }}
                  className="relative z-10 opacity-80 group-hover:opacity-100 transition-all duration-300"
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
