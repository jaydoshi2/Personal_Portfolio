"use client"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { textVariant, fadeIn } from "../utils/motion"
import {
  Code2,
  Cog,
  BarChart3,
  Database,
  Cloud,
  Brain,
  Users,
  MessageSquare,
  Target,
  Lightbulb,
  Clock,
  UserCheck,
} from "lucide-react"

const technicalSkillsData = [
  {
    category: "Programming",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Core Java", "Python", "C++", "C", "JavaScript", "HTML5", "CSS3"],
  },
  {
    category: "Software Development",
    icon: <Cog className="w-6 h-6" />,
    skills: ["System Design", "Code Reviews", "Software Engineering Best Practices", "SDLC", "Agile Methodology"],
  },
  {
    category: "Data Analyst",
    icon: <BarChart3 className="w-6 h-6" />,
    skills: ["Data Visualization", "Statistical Analysis", "Excel", "Tableau", "Power BI", "Data Mining"],
  },
  {
    category: "Databases",
    icon: <Database className="w-6 h-6" />,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "SQL Optimization", "Database Design"],
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    skills: ["AWS", "Google Cloud Platform", "Docker", "Git", "GitHub", "CI/CD Pipelines", "Quality Assurance"],
  },
  {
    category: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6" />,
    skills: [
      "Machine Learning Algorithms",
      "Deep Learning",
      "Neural Networks",
      "TensorFlow",
      "Scikit-learn",
      "Data Science",
    ],
  },
]

const softSkillsData = [
  {
    category: "Management",
    icon: <Users className="w-6 h-6" />,
    skills: ["Project Management", "Team Coordination", "Resource Planning", "Risk Management", "Strategic Planning"],
  },
  {
    category: "Leadership",
    icon: <UserCheck className="w-6 h-6" />,
    skills: ["Team Leadership", "Mentoring", "Decision Making", "Conflict Resolution", "Vision Setting"],
  },
  {
    category: "Communication",
    icon: <MessageSquare className="w-6 h-6" />,
    skills: ["Technical Writing", "Presentation Skills", "Client Communication", "Documentation", "Public Speaking"],
  },
  {
    category: "Problem Solving",
    icon: <Lightbulb className="w-6 h-6" />,
    skills: ["Critical Thinking", "Analytical Skills", "Creative Solutions", "Debugging", "Innovation"],
  },
  {
    category: "Project Management",
    icon: <Target className="w-6 h-6" />,
    skills: ["Agile/Scrum", "Timeline Management", "Budget Planning", "Quality Control", "Stakeholder Management"],
  },
  {
    category: "Time Management",
    icon: <Clock className="w-6 h-6" />,
    skills: ["Prioritization", "Multitasking", "Deadline Management", "Efficiency Optimization", "Work-Life Balance"],
  },
]

const SkillCard = ({ category, icon, skills, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="bg-tertiary p-5 rounded-2xl w-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#915EFF] to-[#7c3aed] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-white text-[18px] font-bold">{category}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="bg-[#915EFF] bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-opacity-30 hover:scale-105 transition-all duration-200 cursor-default border border-[#915EFF] border-opacity-30"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

const SkillsSection = ({ title, data, startIndex }) => {
  return (
    <div className="mb-16">
      <motion.div variants={textVariant()} className="text-center mb-10">
        <h2 className={`${styles.sectionHeadText} text-[#915EFF] mb-3`}>{title}</h2>
        <div className="w-24 h-1 mx-auto rounded-full bg-[#915EFF]"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((category, index) => (
          <SkillCard
            key={index}
            index={startIndex + index}
            category={category.category}
            icon={category.icon}
            skills={category.skills}
          />
        ))}
      </div>
    </div>
  )
}

const Portfolio_skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I bring to the table</p>
        <h2 className={`${styles.sectionHeadText} text-center text-[#915EFF]`}>Skills & Expertise</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto text-center leading-[30px]"
      >
        A comprehensive overview of my technical capabilities and professional competencies that drive successful
        project outcomes and team collaboration.
      </motion.p>

      <div className="mt-20">
        <SkillsSection title="Technical Skills" data={technicalSkillsData} startIndex={0} />

        <SkillsSection title="Soft Skills" data={softSkillsData} startIndex={technicalSkillsData.length} />
      </div>
    </>
  )
}

export default SectionWrapper(Portfolio_skills, "skills")