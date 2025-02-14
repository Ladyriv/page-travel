import React from 'react'
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white text-gray-900 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
        
        {/* Logo y redes sociales */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/logo.png" alt="All in Travels" className="w-48" />
          <div className="flex gap-4 mt-4">
            
            <a href="#" className="text-gray-900 text-2xl hover:text-yellow-600"><img src ="/src/assets/img/logs/logos_redes.png" /></a>
          </div>
        </div>

        {/* Menú de enlaces */}
        <ul className="text-center md:text-left space-y-2">
          <li><a href="#" className="hover:text-orange-400">Inicio</a></li>
          <li><a href="#" className="hover:text-orange-400">¿Quiénes somos?</a></li>
          <li><a href="#" className="hover:text-orange-400">Viajes grupales</a></li>
          <li><a href="#" className="hover:text-orange-400">Viajes a la medida</a></li>
          <li><a href="#" className="hover:text-orange-400">Contáctanos</a></li>
          <li><a href="#" className="hover:text-orange-400">Alianzas estratégicas</a></li>
          <li><a href="#" className="hover:text-orange-400">Blogs</a></li>
          <li><a href="#" className="hover:text-orange-400">Términos y condiciones</a></li>
          <li><a href="#" className="hover:text-orange-400">Política de privacidad</a></li>
          <li><a href="#" className="hover:text-orange-400">Registro Nacional de Turismo</a></li>
        </ul>

        {/* Información de contacto */}
        <div className="text-center md:text-left space-y-2">
          <p className="flex items-center gap-2"><FaEnvelope className="text-yellow-600" /> info@allintravels.com</p>
          <p className="flex items-center gap-2"><FaPhoneAlt className="text-yellow-600" /> 0057 (604) 444 45 83</p>
          <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-yellow-600" />
            Carrera 43A #18 Sur - 135 Of 834, <br />
            Sao Paulo Plaza Medellín - Colombia.
          </p>
        </div>
      </div>
    </footer>
  );
};


export default Footer
