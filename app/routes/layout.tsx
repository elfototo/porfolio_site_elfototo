import { Link, Outlet, useLocation } from "react-router";
// import "swiper/css/bundle";
import "../app.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { LanguageSwitcheMobiler } from "../components/LanguageSwitcher";
import { IoCloseOutline } from "react-icons/io5";
import { BsArrowUpCircleFill } from "react-icons/bs";

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
      <div>
        <div
          className={`${
            menuOpen ? "hidden" : "block"
          } fixed z-99 bottom-5 right-4 cursor-pointer font-bold rounded-full hover:scale-105 transition duration-300 hover:text-white text-white shadow-xl`}
        >
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <BsArrowUpCircleFill className="w-[50px] h-[50px]  text-yellow-500 rounded-full bg-white" />
          </Link>
        </div>
      </div>
      {/* Навигация */}
      <header className="text-lg relative z-20">
        {/* Mobile */}
        <button
          className="md:hidden block text-3xl absolute top-5 right-5"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="gap-2 flex flex-col">
            <div className="bg-gray-500 w-8 h-1 rounded-full"></div>
            <div className="bg-gray-500 w-8 h-1 rounded-full"></div>
            <div className="bg-gray-500 w-8 h-1 rounded-full"></div>
          </div>
        </button>

        <ul className="hidden md:flex gap-6 container max-w-[1200px] mx-auto px-8 py-8 flex justify-center  items-center z-99">
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
          <div className="flex relative items-center">
            {/* divide-y divide-gray-300 */}
            <ul
              className={`fixed top-0 right-0 h-screen w-full md:hidden flex flex-col item-center justify-center gap-8 pl-[20%]  pb-8 bg-white shadow-md z-50 text-2xl transition transition-transform duration-700 ease-in-out ${
                menuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={`block hover:text-yellow-500 font-inter-regular transition duration-300 ${
                      location.pathname === link.to ? "text-yellow-500" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="fixed z-99 bottom-5 right-5">
              <LanguageSwitcheMobiler />
            </div>
            <button
              className={`fixed top-2 right-2 z-99 ${
                menuOpen ? "block" : "hidden"
              }`}
              onClick={toggleMenu}
            >
              <IoCloseOutline className="w-[50px] h-[50px]" />
            </button>
          </div>
        )}
      </header>

      {/* Контент */}
      <main className="flex-1 w-screen mx-auto">
        <Outlet />
      </main>

      {/* Футер */}
      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} {t("footer.name")}. All rights reserved.
      </footer>
    </div>
  );
}
