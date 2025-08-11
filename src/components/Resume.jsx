import { motion } from "framer-motion"
import { SectionWrapper } from "../hoc"
import { styles } from "../styles"
import { fadeIn, textVariant } from "../utils/motion"

const RESUME_URL = "https://drive.google.com/file/d/1AoXKlnZ0xXXy1L5yS7QvvuBb-1IyoV9j/preview"
const RESUME_DOWNLOAD = "https://drive.google.com/uc?export=download&id=1AoXKlnZ0xXXy1L5yS7QvvuBb-1IyoV9j"

const Resume = () => {
  return (
    <div className="w-full min-h-screen">
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText}`}>Curriculum Vitae</p>
        <h2 className={`${styles.sectionHeadText}`}>Resume</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl mx-auto text-center"
      >
        Below is a quick preview. You can open it in a new tab or download a copy.
      </motion.p>

      <div className="mt-6 max-w-2xl mx-auto">
        <div className="aspect-[8.5/11] w-full rounded-xl overflow-hidden shadow-xl bg-white">
          <iframe
            src={RESUME_URL}
            title="Resume Preview"
            className="w-full h-full"
            allow="autoplay"
          />
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href={RESUME_DOWNLOAD}
            className="px-5 py-2.5 rounded-lg bg-[#915EFF] text-white font-medium hover:opacity-90 transition"
          >
            Download PDF
          </a>
          <a
            href={"https://drive.google.com/file/d/1AoXKlnZ0xXXy1L5yS7QvvuBb-1IyoV9j/view?usp=sharing"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-tertiary text-white font-medium hover:bg-opacity-80 transition"
          >
            Open in New Tab
          </a>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Resume, "resume")

