import React, { useState } from "react";
import { NavbarThemeToggle } from "./atoms/toggletheme";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMobileMenuOpen(!MobileMenuOpen);
  };
  return (
    <section id="Navbar" className="Navbar relative w-full py-4 h-16">
      <div className="flex  flex-wrap container mx-auto items-center justify-between px-4 md:px-4 lg:px-0">
        {/* this logo section */}
        <div>the logo comes here</div>
        {MobileMenuOpen && (
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/30 z-40"
          />
        )}
        {/* nav menu sections */}
        <div className="nav-container flex flex-row gap-10 items-center">
          {/* desktop section */}
          <div className="nav-links">
            <ul className="hidden lg:flex flex-row gap-10 items-center">
              <li>
                <a
                  href="#about"
                  className="inline-block cursor-pointer hover:underline hover:scale-120 transition-all duration-200 underline-offset-8"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="inline-block cursor-pointer hover:underline hover:scale-120 transition-all duration-200  underline-offset-8"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="inline-block cursor-pointer hover:underline hover:scale-105 transition-all duration-200  underline-offset-8"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="inline-block cursor-pointer hover:underline hover:scale-105 transition-all duration-200  underline-offset-8"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="inline-block cursor-pointer hover:underline hover:scale-105 transition-all duration-200  underline-offset-8"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex toggle-theme ml-auto hover:scale-105 cursor-pointer transition-all">
            <NavbarThemeToggle />
          </div>
          {/*desktop section ends and tab and mobile section starts */}
          <div className="mobile-menu lg:hidden">
            <button
              onClick={toggleMenu}
              className={`${
                MobileMenuOpen ? "hidden" : "block"
              } p-2 rounded-md hover:bg-gray-200 transition-all cursor-pointer`}
            >
              <Menu size={24} />
            </button>
          </div>
          <div
            className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white/30 dark:bg-black/30 backdrop-blur-md p-4 transform transition-transform duration-300 z-50 ${
              MobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#about"
                  className="block py-2 px-4 rounded hover:bg-gray-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block py-2 px-4 rounded hover:bg-gray-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 px-4 rounded hover:bg-gray-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="block py-2 px-4 rounded hover:bg-gray-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 px-4 rounded hover:bg-gray-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <NavbarThemeToggle />
            </div>
          </div>
          {/* end of smaller screen size menu */}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
