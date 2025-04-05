import { useEffect, useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Custom arrows
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-25px] top-1/2 -translate-y-1/2 z-10 bg-tertiary hover:bg-secondary rounded-full p-2 transition-all duration-300 shadow-md"
  >
    <ChevronLeft className="text-white w-5 h-5" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-25px] top-1/2 -translate-y-1/2 z-10 bg-tertiary hover:bg-secondary rounded-full p-2 transition-all duration-300 shadow-md"
  >
    <ChevronRight className="text-white w-5 h-5" />
  </button>
);

// Project Card
const ProjectCard = ({ index, name, description, tags = [], image, source_code_link }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="h-full">
    <Tilt
      options={{ max: 25, scale: 1.05, speed: 450 }}
      className="bg-tertiary p-5 rounded-2xl h-full flex flex-col hover:shadow-lg transition-all duration-300"
    >
      <div className="relative w-full h-[200px] md:h-[230px]">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
          >
            <img src={github || "/placeholder.svg"} alt="source code" className="w-1/2 h-1/2" />
          </div>
        </div>
      </div>

      <div className="mt-5 flex-grow">
        <h3 className="text-white font-bold text-[20px] md:text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px] line-clamp-4">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[12px] ${tag.color} px-2 py-1 rounded-full bg-black/20`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

// Main Works component
const Works = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: dots => (
      <div style={{ bottom: "-30px" }}>
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-gray-500 hover:bg-white transition-colors duration-300" />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[28px]"
      >
        Following projects showcase my skills and experience through real-world examples of my work. Each project is
        briefly described with links to code repositories and live demos. It reflects my ability to solve complex
        problems, work with different technologies, and manage projects effectively.
      </motion.p>

      <div className="mt-16 sm:mt-20 relative px-4 sm:px-10 md:px-16">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={`project-${index}`} className="px-2">
              <ProjectCard index={index} {...project} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
