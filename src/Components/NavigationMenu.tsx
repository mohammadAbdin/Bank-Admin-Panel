// NavigationMenu.tsx
import React from "react";
import { Outlet } from "react-router-dom";

interface NavigationLink {
  label: string;
  href: string;
}

const NavigationMenu: React.FC<NavigationLink[]> = ({ links }) => {
  return (
    <div className="navbar flex flex-col h-screen bg-gray-100">
      <header>
        <nav className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white">
          <ul className="flex space-x-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-lg font-medium hover:text-gray-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Outlet></Outlet>
      {/* Other content */}
    </div>
  );
};

export default NavigationMenu;
