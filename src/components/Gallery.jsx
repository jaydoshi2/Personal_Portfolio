import { rocketHacks_pic, Lj_innovation_Pic, TechnoQuiz, Startup_event } from "../assets"

// Fixed import path for carousel components
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./Carousel"

const exampleImages = [
  { src: rocketHacks_pic, alt: "RocketHacks 2025", index: 0 },
  { src: Lj_innovation_Pic, alt: "LJ innovation", index: 1 },
  { src: Startup_event, alt: "LJ Startup Event", index: 2 },
  { src: TechnoQuiz, alt: "Techno Quiz", index: 3 },
  
]

const Gallery = ({ images = exampleImages }) => {
  return (
    <section id="gallery" className="py-6 sm:py-10">
      <div className="flex flex-col items-center px-4 sm:px-6 md:px-8">
        <h2 className="font-terminal text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-8 text-[#FFDA20]">
          JD GALLERY
        </h2>
        {/* Responsive container using percentage and viewport units */}
        <div
          className="relative w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] xl:max-w-[70%] 
                        h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] 
                        overflow-hidden mx-auto"
        >
          <Carousel className="w-full h-full">
            <CarouselContent>
              {images.map((image) => (
                <CarouselItem key={image.index}>
                  <div className="relative w-full h-full">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity rounded-lg">
                      <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-center px-2">
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
  )
}

export default Gallery
