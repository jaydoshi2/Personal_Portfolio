import { rocketHacks_pic, Lj_innovation_Pic, TechnoQuiz, Startup_event } from "../assets"
import { useState } from "react"

// Fixed import path for carousel components
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./Carousel"

const exampleImages = [
  { 
    src: rocketHacks_pic, 
    alt: "RocketHacks 2025", 
    caption: "Won 1st place at RocketHacks 2025 for BEST USE OF MONGODB developing fake news detection app Deeptruth AI",
    index: 0 
  },
  { 
    src: Lj_innovation_Pic, 
    alt: "LJ Innovation Village", 
    caption: "Led team to victory at LJ Innovation Village competition with collaborative editing platform",
    index: 1 
  },
  { 
    src: Startup_event, 
    alt: "LJ Startup Event", 
    caption: "Presented SkillsBridge EdTech platform at university startup showcase",
    index: 2 
  },
  { 
    src: TechnoQuiz, 
    alt: "Techno Quiz Competition", 
    caption: "Achieved 1st ranking in inter-university technical knowledge competition",
    index: 3 
  },
]

const Gallery = ({ images = exampleImages }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section id="gallery" className="py-6 sm:py-10">
      <div className="flex flex-col items-center px-4 sm:px-6 md:px-8">
        <h2 className="font-terminal text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-8 text-[$00000]">
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
                  <div className="relative w-full h-full group">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-300"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg p-4">
                      <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 text-center">
                        {image.alt}
                      </h3>
                      <p className="text-white text-sm sm:text-base md:text-lg text-center max-w-md">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/50 hover:bg-white/70 text-black font-bold" />
            <CarouselNext className="bg-white/50 hover:bg-white/70 text-black font-bold" />
          </Carousel>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
