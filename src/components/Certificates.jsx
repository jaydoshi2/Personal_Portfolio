import { motion } from "framer-motion"
import { SectionWrapper } from "../hoc"
import { styles } from "../styles"
import { fadeIn, textVariant } from "../utils/motion"
import { certificates } from "../constants"

const CertificateCard = ({ cert, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="bg-tertiary rounded-xl overflow-hidden shadow-lg"
    >
      <div className="aspect-video bg-black">
        {/* Use iframe to show a live preview; Coursera pages allow embedding their certificate view */}
        <iframe
          src={cert.preview}
          title={cert.title}
          className="w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-white text-lg font-semibold">{cert.title}</h3>
        <p className="text-secondary text-sm mt-1">{cert.provider}</p>
        {cert.date ? <p className="text-secondary text-xs mt-1">{cert.date}</p> : null}
        <div className="mt-4 flex gap-3">
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-[#915EFF] text-white text-sm font-medium hover:opacity-90 transition"
          >
            View Certificate
          </a>
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-black/40 text-white text-sm font-medium hover:bg-black/60 transition"
          >
            Open in New Tab
          </a>
        </div>
      </div>
    </motion.div>
  )
}

const Certificates = () => {
  return (
    <div className="w-full">
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText}`}>Achievements</p>
        <h2 className={`${styles.sectionHeadText}`}>Certificates</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl mx-auto text-center"
      >
        Recently earned certifications. This section will grow as new certificates are added.
      </motion.p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <CertificateCard key={cert.url} cert={cert} index={index} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Certificates, "certificates")

