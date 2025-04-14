// src/components/Gallery.jsx
import React from "react";
import {
  rocketHacks_pic,
  Lj_innovation_Pic,
  TechnoQuiz,
  Startup_event
} from "../assets";

// Fixed import path for carousel components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "./Carousel";

const exampleImages = [
  { src: Lj_innovation_Pic, alt: "LJ innovation", index: 0 },
  { src: Startup_event, alt: "Startup Event", index: 1 },
  { src: TechnoQuiz, alt: "Techno Quiz", index: 2 },
  { src: rocketHacks_pic, alt: "RocketHacks 2025", index: 3 }
];

const Gallery = ({ images = exampleImages }) => {
  return (
    <section id="gallery" className="py-10">
      <div className="flex flex-col items-center">
        <h2 className="font-terminal text-4xl md:text-6xl mb-8 text-[#FFDA20]">
          JD GALLERY
        </h2>
        {/* Increased carousel container size */}
        <div className="relative w-[600px] md:w-[800px] h-[450px] md:h-[600px] overflow-hidden">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {images.map((image) => (
                <CarouselItem key={image.index}>
                  <div className="relative w-full h-full">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity rounded-lg">
                      <span className="text-white text-lg md:text-3xl text-center px-2">
                        {image.alt}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/30 hover:bg-white/50" />
            <CarouselNext className="bg-white/30 hover:bg-white/50" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
