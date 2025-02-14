import React from 'react'

const Newsletter = () => {
    return (
      <section  style={{ backgroundColor: "#111B33" }} className="text-white py-8 px-4 flex flex-col items-center">
        <h2 className="text-lg md:text-xl font-medium text-center mb-4 font-stretch-extra-expanded">
          Suscríbete a nuestro newsletter y recibe noticias, descuentos y más
        </h2>
        <div className="w-full max-w-md flex flex-col items-center gap-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none"
          />
          <button className="bg-[#C89038] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#a07a3b] transition">
            SUSCRIBIRME
          </button>
        </div>
      </section>
    );
};

export default Newsletter
