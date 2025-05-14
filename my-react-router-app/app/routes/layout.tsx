import { Link, Outlet, useLocation } from "react-router";

export default function Component () {
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-amber-200 text-gray-800 ">
      {/* Навигация */}
      <header className="text-xl font-bold">
        <nav className="container mx-auto px-8 py-8 flex justify-center items-center">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`hover:text-amber-600 transition ${
                    location.pathname === link.to ? "text-amber-600" : ""
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
      <main className="flex-1 container mx-auto px-4 py-10">
        <Outlet />
      </main>

      {/* Футер */}
      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} My Name. All rights reserved.
      </footer>
    </div>
  );
};
