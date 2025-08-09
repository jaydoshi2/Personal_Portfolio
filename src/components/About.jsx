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
              I build technology that provide real world soltuions, not just code that works.
            </p>
            
            <p className="text-secondary text-[19px] md:text-[20px] leading-relaxed">
              Among my peers, I'm the one who steps forward to lead—but I listen first. I synthesize diverse perspectives and help teams find consensus. I take responsibility for both success and failure.
            </p>
            
            <p className="text-secondary text-[19px] md:text-[20px] leading-relaxed">
              What drives me? Solving meaningful problems and helping others grow. I'm energized by new technologies, but even more by mentoring teammates and pushing boundaries together.
            </p>
            
            <p className="text-secondary text-[19px] md:text-[20px] leading-relaxed">
              My experience spans full-stack development, AI integration, and team leadership across multiple internships and university projects. I've led 4 teams, delivered performance improvements up to 30%, and maintained 95% on-time completion rates.
            </p>
            
            <p className="text-secondary text-[19px] md:text-[20px] leading-relaxed">
              Next: I want to deepen my expertise in scalable systems and AI. Seeking roles where I can contribute as both developer and leader—shaping products, mentoring teams, and making real impact.
            </p>
          </div>
        </motion.div>

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

