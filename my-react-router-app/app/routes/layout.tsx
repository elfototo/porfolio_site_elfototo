import { Link, Outlet, useLocation } from "react-router";
import "swiper/css/bundle";
import "../app.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

export default function Component() {
  const location = useLocation();
  const { t } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { to: "#home", label: t("navigation.home") },
    { to: "#about", label: t("navigation.about") },
    { to: "#skills", label: t("navigation.skills") },
    { to: "#services", label: t("navigation.services") },
    { to: "#projects", label: t("navigation.projects") },
    { to: "#contact", label: t("navigation.contact") },
  ];

  return (
    <div className="flex flex-col bg-white text-gray-600 relative w-full min-h-screen overflow-x-hidden font-inter-regular text-md">
      <div className="hidden md:block">
        <LanguageSwitcher />
      </div>
      {/* Навигация */}
      <header className="text-lg relative z-10">
        {/* Mobile */}
        <button
          className="md:hidden block text-3xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <ul className="hidden md:flex gap-6 container max-w-[1200px] mx-auto px-8 py-8 flex justify-center items-center">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`hover:text-yellow-500 font-inter-extraBold transition duration-500 ease-in-out ${
                  location.pathname === link.to ? "text-yellow-500" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {menuOpen && (
          <ul className="md:hidden flex flex-col gap-4 px-8 pb-8 pt-2 bg-white shadow-md absolute top-full left-0 w-full z-99">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)} // закрыть меню при клике
                  className={`block hover:text-yellow-500 font-inter-extraBold transition duration-300 ${
                    location.pathname === link.to ? "text-yellow-500" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <div className="block md:hidden">
              <LanguageSwitcher />
            </div>
          </ul>
        )}

        {/* <nav className="container max-w-[1200px] mx-auto px-8 py-8 flex justify-center items-center">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`hover:text-yellow-500 font-inter-extraBold transition duration-500 ease-in-out ${
                    location.pathname === link.to ? "text-yellow-500" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav> */}
      </header>

      {/* Контент */}
      <main className="flex-1 w-screen mx-auto">
        <Outlet />
      </main>

      {/* Футер */}
      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} My Name. All rights reserved.
      </footer>
    </div>
  );
}
