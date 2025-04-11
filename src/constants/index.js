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
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
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
    title: "Team Leader",
    company_name: "Lok Jagruti University",
    icon: lj_logo,
    iconBg: "#383E56",
    date: "January 2023 - September 2024",
    points: [
      "Managed 4 teams on diverse projects at LJIET, gaining expertise in various technologies while simultaneously developingsoft skills such as effective communication, project management, collaboration, problem solving, and leadership.",
      "Conducted training sessions on critical project concepts like Schema Designing and Architecture Project, introducingtools such as Git, GitHub, ExcailDraw, and AWS while embedding best practices, to enhance team capabilities; equippedteammates with technical proficiency and boosted project contributions",
      "Applied a weekly progress review, streamlining communication and aligning teammates toward project goals by assigningtasks based on individual strengths, to foster collaboration; achieved increase in project delivery efficiency..",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   // company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   // company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   // company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
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
      "Welcome to SkillsBridge, an innovative EdTech platform that bridges the skills gap with engaging, personalized learning experiences. Built with a microservices architecture, this platform combines AI-powered features like a recommendation engine and a chatbot, detailed user insights, and robust security features to create a seamless, secure, and insightful learning environment.",
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
];

export { services, technologies, experiences, testimonials, projects };
