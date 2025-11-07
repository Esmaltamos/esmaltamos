import { useState, useEffect } from "react";
import Logo from "./Logo";

const navLinks = [
  { href: "/esmaltamos/", text: "Inicio" },
  { href: "/esmaltamos/trabajos.html", text: "Trabajos" },
  { href: "/esmaltamos/servicios.html", text: "Servicios" },
  { href: "/esmaltamos/contacto.html", text: "Contacto" },
];

export default function NavBar() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    // Escucha los cambios en el historial del navegador (botones atrás/adelante)
    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  const getLinkClass = (href) => {
    const baseClasses = "border-b-2 transition-colors duration-300 tracking-wide";
    // Comprueba si la ruta actual es la misma que la del enlace.
    // El caso de "Inicio" es especial porque puede ser "/" o "/index.html".
    const isActive = currentPath === href || (href === "/esmaltamos/" && currentPath.endsWith("/index.html"));
    return isActive ? `${baseClasses} border-foreground` : `${baseClasses} border-transparent hover:border-foreground`;
  };

  return (
    <nav className=" fixed top-0 left-0 w-full bg-white text-black dark:bg-black dark:text-white dark:border-white shadow-md z-50">
      <ul className="flex space-x-4 items-center justify-center p-4">
        <li>
          <Logo className="h-8 w-8" />
        </li>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={getLinkClass(link.href)}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
