import { React, useState } from 'react';
import { HiX, HiMenuAlt3 } from "react-icons/hi";
//import { logo } from '../../img/logs/logo.png'
//import { Link } from 'react-router-dom';
import viajesGrupales from '../../assets/img/viajes_grupales.png';
import viajesMedida from '../../assets/img/viajes_a_la_medida.png';
import viajesPareja from '../../assets/img/destinos_para_parejas.png';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
      <header
        className="relative bg-cover bg-center h-screen flex flex-col justify-between"
        style={{ backgroundImage: "url('/header.png')" }}
      >
        <nav className="fixed top-0 left-0 w-full flex items-center justify-between bg-black/50 backdrop-blur-md z-50">
          <div className="container mx-auto flex justify-between items-center p-6">
            {/* Logo */}
            <a href="#inicio" className="text-xl font-bold">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-5 w-auto"
              />
            </a>

            {/* Menú Desktop */}
            <ul className="hidden md:flex space-x-6">
              <li>
                <a
                  href="#inicio"
                  className="text-white no-underline hover:text-gray-300 transition"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="text-white no-underline hover:text-gray-300 transition"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#viajes"
                  className="text-white no-underline hover:text-gray-300 transition"
                >
                  Viajes
                </a>
              </li>
              <li>
                <a
                  href="#blogs"
                  className="text-white no-underline hover:text-gray-300 transition"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-white no-underline hover:text-gray-300 transition"
                >
                  Contacto
                </a>
              </li>
            </ul>

            {/* Botón menú móvil */}
            <button className="md:hidden text-white" onClick={toggleMenu}>
              {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>

          {/* Menú Móvil */}
          {isOpen && (
            <div className={`absolute top-16 left-0 w-full bg-black/80 p-6 text-center transition-transform transform ${isOpen ? "translate-y-0" : "-translate-y-full"} md:hidden`}>
              <ul className="flex flex-col space-y-4 list-none">
                <li>
                  <a
                    href="#inicio"
                    className="block text-white no-underline hover:text-gray-300 transition"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#nosotros"
                    className="block text-white no-underline hover:text-gray-300 transition"
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#viajes"
                    className="block text-white no-underline hover:text-gray-300 transition"
                  >
                    Viajes
                  </a>
                </li>
                <li>
                  <a
                    href="#blogs"
                    className="block text-white no-underline hover:text-gray-300 transition"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="block text-white no-underline hover:text-gray-300 transition"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
        <div className="flex flex-col items-center justify-center flex-grow text-white text-center">
          <h1 className="text-center text-5xl md:text-7xl font-bold">THE TRAVEL</h1>
          <p className="text-xl md:text-3xl tracking-widest">
            EXPERIENCE
          </p>
        </div>

        {/* Tarjetas de Navegación */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto mb-10 w-8/12">
          {[
            { title: "Viajes grupales", img: viajesGrupales },
            { title: "Viajes a la medida", img: viajesMedida },
            { title: "Destinos para parejas", img: viajesPareja },
          ].map((item, index) => (
            <div
              key={index}
              className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </header>
    );
}

export default Navbar