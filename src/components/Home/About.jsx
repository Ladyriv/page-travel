import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import NosotrosUno from '../../assets/img/nosotros_1.png';
import NosotrosDos from '../../assets/img/nosotros_2.png';
import NosotrosTres from '../../assets/img/nosotros_3.png';
import NosotrosCuatro from '../../assets/img/nosotros_4.png';




function About() {
  const images = [
    { src: NosotrosUno, alt: "Nosotros 1"},
    { src: NosotrosDos , alt: "Nosotros 2" },
    { src: NosotrosTres, alt: "Nosotros 3" },
    { src: NosotrosCuatro, alt: "Nosotros 4"}
  ];

  return (
    <section className="text-center py-10">
      {/* Título */}
      <h2 className="text-6xl font-bold text-gray-700 uppercase tracking-widest mb-3">
        Nosotros
      </h2>
      <p className="text-gray-600 text-lg max-w-lg mx-auto leading-relaxed">
        Un copy cercano como hablandole a un amigo. Lorem ipsum dolor sit amet,
        consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
        veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
        aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
        hendrerit in vulputate velit esse molestie consequat, vel illum dolore
        eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
        dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
        te feugait nulla facilisi.
      </p>

      {/* Slider de imágenes */}
      <div className="mx-auto mt-6 w-7/10">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={5}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative group">
                {/* Imagen */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-40 p-2.5 object-cover rounded-md shadow-md transition-transform transform hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}


export default About
