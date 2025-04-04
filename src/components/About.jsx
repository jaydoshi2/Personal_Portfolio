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
  // Bullet points content
  const bulletPoints = [
    "Versatile software developer with robust background in development, logical structuring, and architecture design.",
    "Extensive hands-on experience with React, Next.js, Django, and Spring Boot frameworks.",
    "Led teams building innovative real-time applications including collaborative editing platforms and AI-driven learning systems.",
    "Passionate about creating efficient, scalable, and user-friendly solutions for real-world challenges.",
    "Thrive on collaboration and excited to bring your vision to life.",
  ]

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Reduced spacing from mt-4 to mt-2 */}
      <div className="flex flex-col md:flex-row gap-6 items-center mt-2">
        {/* Text content with bullet points */}
        <motion.div variants={fadeIn("right", "", 0.1, 1)} className="md:w-2/3">
          <ul className="list-disc pl-5 space-y-7">
            {bulletPoints.map((point, index) => (
              <li key={index} className="text-secondary text-[19px] md:text-[20px] leading-tight">
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Profile picture */}
        <motion.div variants={fadeIn("left", "", 0.1, 1)} className="md:w-1/3 flex justify-center">
          <img src={Profile_Pic || "/placeholder.svg"} alt="Profile" className="w-64 h-84 object-cover shadow-lg" />
        </motion.div>
      </div>

      {/* Reduced spacing from mt-20 to mt-12 */}
      <div className="mt-12 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")

