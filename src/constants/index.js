import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  team_leader_icon,
  software_developer_icon,
  ai_and_ml_icon,
  backend_icon2,  
  lj_logo,
  github_logo,
  java_logo,
  django_logo,
  python_logo,
  cpp_logo,
  c_logo,
  nextjs_logo,
  aws_logo,
  Deeptruth_logo,
  SportSight_logo,
  skillbridge_logo,
  Multifunctional_car_Logo,
  civic_infotech_logo,
  Emerging_five_logo,
  Notion_image,
  utoledo_logo2,
  emerging_five_logo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "Projects",
    title: "Projects",
  },
  // {
  //   id: "certificates",
  //   title: "Certificates",
  // },
  {
    id: "contact",
    title: "Contact",
  },
];

export const certificates = [
  {
    title: "AWS Cloud Technical Essentials",
    provider: "Amazon Web Services · Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/VKYVF30I0LAY",
    preview: "https://www.coursera.org/account/accomplishments/verify/VKYVF30I0LAY",
    date: "Feb 24, 2025",
  },
  {
    title: "Exploratory Data Analysis for Machine Learning",
    provider: "IBM · Coursera",
    url: "https://www.coursera.org/account/accomplishments/records/HDQHRW3ADDY5",
    preview: "https://www.coursera.org/account/accomplishments/records/HDQHRW3ADDY5",
    date: "Aug 12, 2024",
  },
];

const services = [
  {
    title: "Software Development",
    icon: software_developer_icon,
  },
  {
    title: "AI and Machine Learning",
    icon: ai_and_ml_icon,
  },
  {
    title: "Backend Development",
    icon: backend_icon2,
  },
  {
    title: "Team Leadership & Project Management",
    icon: team_leader_icon,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python_logo,
  }, 
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs_logo,
  },
  {
    name: "Django",
    icon: django_logo,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws_logo,
  },
];

const experiences = [
  {
    title:"Drone Lab Assistant (Internship)",
    company_name: "University of Toledo",
    icon: utoledo_logo2,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Provided comprehensive technical support and maintained documentation for Linux systems, resolving hardware/software issues while creating clear technical documentation using Microsoft Office Suite.",
    ],
  },
  {
    title: "Team Leader",
    company_name: "Lok Jagruti University",
    icon: lj_logo,
    iconBg: "#383E56",
    date: "March 2023 - September 2024",
    points: [
      "Led 4 diverse project teams, conducting training sessions on critical concepts while implementing weekly progress reviews that increased project delivery efficiency through effective communication and task delegation.",
    ],
  },

  {
    title:"Full Stack Intern",
    company_name: "Emerging Five",
    icon: emerging_five_logo,
    iconBg: "#383E56",
    date: "September 2022 - February 2023",
    points: [
      "Developed full-stack applications using MERN stack, improving performance by 20% while maintaining 95% on-time completion rate and resolving 50% of critical bugs through systematic analysis.",
    ],
  },
  
  {
    title:"IT Intern",
    company_name: "Civic Infotech",
    icon: civic_infotech_logo,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Delivered first-level technical support and maintained comprehensive documentation for Linux systems, resolving hardware/software issues while creating clear technical documentation using Microsoft Office Suite.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Jay consistently delivered high-quality code and showed excellent problem-solving skills. His collaborative approach made him a valuable team member.",
    name: "Jay Patel",
    designation: "CEO",
    company: "Emerging Five",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Jay's leadership skills and technical expertise helped our team achieve project goals efficiently. He's a natural mentor and problem solver.",
    name: "Priya Sharma",
    designation: "Project Lead",
    company: "Lok Jagruti University",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

const projects = [
  {
    name: "SPORTSIGHT AI",
    description:
      "SPORTSIGHT is an AI-powered football analytics system that detects players, referees, and the ball using YOLOv8. It uses KMeans for team classification, optical flow for camera movement tracking, and perspective transformation for real-world speed and distance calculations.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "YOLOv8",
        color: "pink-text-gradient",
      },
    ],
    image: SportSight_logo,
    source_code_link: "https://github.com/jaydoshi2/SportsSight",
  },
   {
    name: "Notion Clone ",
    description:
      "A modern Notion-style web app featuring real-time collaboration, AI-powered translation, and secure authentication. It’s built on a serverless stack using Cloudflare Workers, Liveblocks, and Firebase Firestore for scalable performance and live editing.",
    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Liveblocks",
        color: "pink-text-gradient",
      },
    ],
    image: Notion_image,
    source_code_link: "https://github.com/jaydoshi2/SportsSight",
  },
  {
    name: "Deeptruth AI",
    description:
      "DeepTruth is an innovative fact-checking platform that combines the power of Google's Gemini AI and DistilBERT to provide real-time analysis of news articles and claims. Our Chrome extension makes it easy to verify information while browsing the web.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "HuggingFace",
        color: "pink-text-gradient",
      },
    ],
    image: Deeptruth_logo,
    source_code_link: "https://github.com/jaydoshi2/DeepTruth",
  },
  {
    name: "SkillsBridge",
    description:
      "SkillsBridge, an innovative EdTech platform that bridges the skills gap with engaging, personalized learning experiences.This platform combines AI-powered features like a recommendation engine,Mcq generation and a NN based chatbot, and detailed user insights for admin.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Node js",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },

    ],
    image: skillbridge_logo,
    source_code_link: "https://github.com/jaydoshi2/Sem4_FSD_Group_Project",
  },

  {
    name: "Multifunctional Car IOT ",
    description:
      "This is the Smart Obstacle Avoidance and Bluetooth Controlled Vehicle project! This Arduino-based creation combines ultrasonic sensors, servo motors, Bluetooth communication, and teamwork to bring a robot to life.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Node js",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },

    ],
    image: Multifunctional_car_Logo,
    source_code_link: "https://github.com/jaydoshi2/Multifunctional-Car",
  },
];

export { services, technologies, experiences, testimonials, projects };
