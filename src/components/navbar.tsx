"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Quem Somos", href: "#quem-somos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="w-full bg-white pt-6 pl-2">
      <div className="w-full max-w-7xl mx-auto py-3">
        <div className="flex items-center">
          <div className="relative w-24 h-12 md:w-32 md:h-14 lg:w-40 lg:h-16">
            <Image 
              src="/logo.png" 
              alt="Tirar Visto" 
              className="w-full h-full object-contain object-left"
              width={160}
              height={64}
            />
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center justify-between ml-12 flex-1">
            {navLinks.map(({ label, href }) => (
              <Link 
                key={label} 
                href={href} 
                className={`group relative font-medium text-base tracking-wider whitespace-nowrap py-2 px-4 ${
                  (href === '#' ? pathname === '/' : pathname?.startsWith(href))
                    ? 'text-black font-semibold'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <span className="block group-hover:font-semibold transition-all duration-200">
                  {label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-black focus:outline-none ml-auto"
            aria-label="Abrir menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-inner px-6 pb-4 mt-4"
            >
              <ul className="flex flex-col gap-4">
                {navLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={`block font-medium pb-1 ${
                        (href === '#' ? pathname === '/' : pathname?.startsWith(href))
                          ? 'text-black font-semibold'
                          : 'text-gray-700 hover:text-black'
                      }`}
                    >
                      <span className="relative block">
                        {label}
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-black transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
