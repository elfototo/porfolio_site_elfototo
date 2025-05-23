import { Link, Outlet, useLocation } from "react-router";
import "swiper/css/bundle";
import "../app.css";

export default function Component() {
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex flex-col bg-white text-gray-700 relative w-full min-h-screen overflow-x-hidden">
        {/* absolute inset-0 flex */}
      <div className="">
        {/* <div className="md:w-[65%] w-ful bg-white h-screen"></div>
        <div className="md:w-[35%] w-0 md:bg-yellow-400 h-screen"></div> */}
      </div>

      {/* Навигация */}
      <header className="text-xl font-bold relative z-10">
        <nav className="container max-w-[1200px] mx-auto px-8 py-8 flex justify-center items-center">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`hover:text-yellow-500 transition duration-500 ease-in-out ${
                    location.pathname === link.to ? "text-yellow-500" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
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
