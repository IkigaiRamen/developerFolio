// Portfolio Configuration File for Ram Khammessi

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Ram Khammessi",
  title: "Hi all, I'm Ram",
  subTitle: emoji(
    "A passionate Full Stack Software Engineer 🚀 with experience building enterprise-grade web apps using Angular, React, Spring Boot, and modern backend frameworks."
  ),
  resumeLink: "https://github.com/IkigaiRamen", // Optional resume link
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/IkigaiRamen",
  linkedin: "https://www.linkedin.com/in/ramkhammessi/",
  gmail: "Ram.Khammessi@esprit.tn",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER EXPLORING MODERN TECH STACKS",
  skills: [
    emoji("⚡ Develop scalable full-stack apps with Angular, React, Spring Boot, and Node.js"),
    emoji("⚡ Build RESTful and GraphQL APIs for seamless integration"),
    emoji("⚡ Implement secure, cloud-native deployments using Docker and CI/CD pipelines")
  ],
  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "TypeScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "angular", fontAwesomeClassname: "fab fa-angular" },
    { skillName: "springboot", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "ESPRIT University",
      logo: require("./assets/images/placeholderLogo.png"),
      subHeader: "Engineering Degree in Computer Science",
      duration: "Sept 2021 - June 2024",
      desc: "Graduated with a focus on web technologies, backend systems, and distributed architecture."
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend", progressPercentage: "85%" },
    { Stack: "Backend", progressPercentage: "75%" },
    { Stack: "DevOps / CI", progressPercentage: "60%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "TikTak Pro",
      companylogo: require("./assets/images/placeholderLogo.png"),
      date: "2023 – 2024",
      desc: "Built a SaaS platform using Next.js, TypeScript, Django, and CI/CD pipelines on AWS."
    },
    {
      role: "Full Stack Developer",
      company: "Beego",
      companylogo: require("./assets/images/placeholderLogo.png"),
      date: "2021 – 2022",
      desc: "Developed full-stack web apps with React, Node.js, and PostgreSQL in an Agile team."
    }
  ]
};

const openSource = {
  showGithubProfile: true,
  display: true
};

const bigProjects = {
  title: "Major Projects",
  subtitle: "Platforms I've built or contributed to",
  projects: [
    {
      image: require("./assets/images/placeholderLogo.png"),
      projectName: "Tunisair Meeting Management System",
      projectDesc: "Built an internal meeting & document management system using Angular and Spring Boot for Tunisair."
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle: "Noteworthy milestones and accomplishments",
  achievementsCards: [],
  display: false
};

const blogSection = {
  title: "Blogs",
  subtitle: "Articles and tutorials coming soon.",
  displayMediumBlogs: false,
  blogs: [],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: emoji("Public Speaking & Demos"),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Conversations around tech & dev life.",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Download my latest resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Feel free to reach out for collaboration or freelance work.",
  number: "+216-50598694",
  email_address: "Ram.Khammessi@esprit.tn"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
