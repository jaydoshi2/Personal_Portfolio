import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  carrent,
  jobit,
  tripguide,
  threejs,
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
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "C logo",
  //   icon: c_logo,
  // },
  // {
  //   name: "c++ logo",
  //   icon: cpp_logo,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Java logo",
    icon: java_logo,
  },
  {
    name: "Python logo",
    icon: python_logo,
  }, 
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Nextjs logo",
    icon: nextjs_logo,
  },
  {
    name: "django",
    icon: django_logo,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "github",
    icon: github_logo,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "aws",
    icon: aws_logo,
  },
];

const experiences = [
   {
    title:"Full Stack Intern",
    company_name: "Emerging Five",
    icon: Emerging_five_logo,
    iconBg: "#383E56",
    date: "September 2022- Febuary 2023",
    points: [
      "Leveraged MERN stack to craft UI, REST APIs,Backend Logic, and Database Integration, improves performance by 20%.",
      "Delivered all assigned tasks within weekly sprints, collaborating with other developers to maintain a 95% on-time completion rate.",
      "Debugged and resolved 50% of critical bugs through root-cause analysis, reducing system errors by 30%.",
    ],
  },
  {
    title:"IT Intern",
    company_name: "Civic Infotech",
    icon: civic_infotech_logo,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Diagnosed and resolved hardware and software issues, efficiently managed internal support tickets, and delivered responsive first-level technical support to end users.",
      "Operated and maintained Linux-based systems using command-line tools, and utilized Microsoft Office to create clear and concise technical documentation.",
      "Communicated directly with customers to address IT-related concerns, applying analytical thinking and a user-focused mindset to deliver effective solutions.",
    ],
  },
  {
    title: "Team Leader",
    company_name: "Lok Jagruti University",
    icon: lj_logo,
    iconBg: "#383E56",
    date: "March 2023 - September 2024",
    points: [
      "Managed 4 teams on diverse projects at LJIET, gaining expertise in various technologies while simultaneously developingsoft skills such as effective communication, project management, collaboration, problem solving, and leadership.",
      "Conducted training sessions on critical project concepts like Schema Designing and Architecture Project, introducingtools such as Git, GitHub, ExcailDraw, and AWS while embedding best practices, to enhance team capabilities; equippedteammates with technical proficiency and boosted project contributions",
      "Applied a weekly progress review, streamlining communication and aligning teammates toward project goals by assigningtasks based on individual strengths, to foster collaboration; achieved increase in project delivery efficiency..",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Jay has good skills in web development. He is a quick learner and has a great attitude towards work.",
    name: "Jay Patel",
    designation: "CEO",
    company: "Emerging Five",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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
