"use client"
import Tilt from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { services } from "../constants"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import Profile_Pic from "../assets/Profile_Pic.jpg"

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon || "/placeholder.svg"} alt="web-development" className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
)

const About = () => {
  return (
    <>
     <div className="mt-72 sm:mt-0">
     <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

     <div className="flex flex-col md:flex-row gap-6 items-center mt-2">
  {/* Concise pitch content */}
  <motion.div variants={fadeIn("right", "", 0.1, 1)} className="md:w-2/3">
    <div className="space-y-4">
      <p className="text-secondary text-[19px] md:text-[20px] leading-relaxed">
        I’m Jay Devesh Doshi a Computer Science student at the University of Toledo who builds technology that solves real-world problems, not just code that runs. I’ve shipped AI platforms, full-stack apps, and autonomous-drone systems that bridge research and production.
      </p>

      <p className="text-secondary text-[19px] md:text-[20px] leading-relaxed">
        I lead by listening first: I bring teams together, synthesize diverse perspectives, and act as the communicator and point-person to drive decisions. As a team lead and intern, I’ve guided cross-team delivery, improved feature performance , and reduced post-deployment issues.
      </p>

      <p className="text-secondary text-[19px] md:text-[20px] leading-relaxed">
        What drives me is solving meaningful problems and helping teammates grow I enjoy mentoring peers, improving processes, and turning prototypes into reliable products that users can trust.
      </p>

      {/* <p className="text-secondary text-[19px] md:text-[20px] leading-relaxed">
        Next, I want to deepen my expertise in scalable systems and AI. I’m seeking roles where I can contribute as both developer and leader building products, mentoring teammates, and delivering measurable impact.
      </p> */}
    </div>
  </motion.div>
{/* </div> */}


        {/* Profile picture */}
        <motion.div variants={fadeIn("left", "", 0.1, 1)} className="md:w-1/3 flex justify-center">
          <img src={Profile_Pic || "/placeholder.svg"} alt="Profile" className="w-64 h-84 object-cover shadow-lg" />
        </motion.div>
      </div>

      <div className="mt-12 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
     </div>
    </>
  )
}

export default SectionWrapper(About, "about")

