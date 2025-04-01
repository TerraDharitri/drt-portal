import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "./assets/image1.webp";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpeg";
import image4 from "./assets/image4.jpg";

const HeroSection = () => {
  const images = [image1, image2, image3, image4];

  return (
    <div
      className="relative bg-gray-900 overflow-hidden"
      style={{ top: "90px" }}
    >
      {/* Left section */}
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-4 sm:pb-8 md:pb-12 lg:max-w-2xl lg:w-1/2 lg:pb-16 xl:pb-20">
          <main className="w-full px-4 pt-10 sm:px-6 lg:px-8">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-extrabold transition-all duration-700 ease-in-out">
                <span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-emerald-500 
                  filter drop-shadow-lg [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
                >
                  The Future of
                </span>
                <span
                  className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-500 to-green-500 
                  filter drop-shadow-lg [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
                >
                  Digital Finance
                </span>
              </h1>

              <p
                className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed
                filter drop-shadow-lg [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] transition-all duration-700 ease-in-out"
              >
                Build the next generation of financial applications on a highly
                scalable, fast and secure blockchain platform designed for
                global adoption.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-8 justify-center lg:justify-start w-full">
                <a
                  href="/dharitriChanges"
                  className="px-12 py-3 rounded-xl text-base font-medium text-white
                    bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600
                    hover:from-blue-500 hover:via-teal-500 hover:to-emerald-500
                    transition-all duration-300 ease-in-out
                    transform hover:scale-105
                    shadow-lg hover:shadow-xl
                    hover:shadow-teal-500/25"
                >
                  Start Building
                </a>
                <a
                  href="/dharitriChanges"
                  className="px-8 py-3 rounded-xl text-base font-medium
                    text-white
                    border-2 border-teal-500/50 hover:border-teal-400
                    backdrop-blur-sm hover:backdrop-blur-lg
                    transition-all duration-300 ease-in-out
                    transform hover:scale-105
                    shadow-lg hover:shadow-xl
                    hover:shadow-emerald-500/25
                    bg-white/10 hover:bg-white/20"
                >
                  Explore The Ecosystem
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* Right section */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-r from-blue-500 to-emerald-600">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 2500 }}
            loop={true}
            className="w-full h-[500px]"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;