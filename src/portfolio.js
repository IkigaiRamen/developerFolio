/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
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
  linkedin: "https://www.linkedin.com/in/RamKhammessi/",
  gmail: "Ram.khammessi@esprit.tn",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  
  title: "What I Do",
  subTitle:
    "FULL-STACK SOFTWARE ENGINEER SPECIALIZED IN BUILDING SCALABLE SYSTEMS, MODERN WEB APPLICATIONS, AND CLOUD-NATIVE SOLUTIONS",
  skills: [
    emoji("⚡ Develop robust and responsive front-end interfaces using React, Angular, and Next.js"),
    emoji("⚡ Design and implement scalable backends with Node.js, Django, Spring Boot, and Laravel"),
    emoji("⚡ Architect microservice-based systems with CI/CD pipelines using Docker, Jenkins, and GitLab CI"),
    emoji("⚡ Integrate cloud services like AWS (EC2, S3), Firebase, and deploy secure APIs with OAuth2 and JWT"),
    emoji("⚡ Optimize performance and developer workflow through automation, monitoring (Grafana), and Agile practices")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  // Programming Languages
  { skillName: "TypeScript", fontAwesomeClassname: "devicon-typescript-plain" },
  { skillName: "JavaScript", fontAwesomeClassname: "devicon-javascript-plain" },
  { skillName: "Java", fontAwesomeClassname: "devicon-java-plain" },
  { skillName: "Python", fontAwesomeClassname: "devicon-python-plain" },
  { skillName: "PHP", fontAwesomeClassname: "devicon-php-plain" },
  { skillName: "C#", fontAwesomeClassname: "devicon-csharp-plain" },
  { skillName: "Go", fontAwesomeClassname: "devicon-go-plain" },
  { skillName: "C", fontAwesomeClassname: "devicon-c-plain" },
  { skillName: "C++", fontAwesomeClassname: "devicon-cplusplus-plain" },
  { skillName: "SQL", fontAwesomeClassname: "devicon-mysql-plain" },

  // Frontend & Web
  { skillName: "Angular", fontAwesomeClassname: "devicon-angularjs-plain" },
  { skillName: "React", fontAwesomeClassname: "devicon-react-original" },
  { skillName: "Next.js", fontAwesomeClassname: "devicon-nextjs-line-wordmark" },
  // Backend & Frameworks
  { skillName: "Node.js", fontAwesomeClassname: "devicon-nodejs-plain" },
  { skillName: "Express.js", fontAwesomeClassname: "devicon-express-original" },
  { skillName: "Django", fontAwesomeClassname: "devicon-django-plain" },
  { skillName: "Laravel", fontAwesomeClassname: "devicon-laravel-plain" },
  { skillName: "Symfony", fontAwesomeClassname: "devicon-symfony-original" },

  // DevOps & Cloud
  { skillName: "Docker", fontAwesomeClassname: "devicon-docker-plain" },
  { skillName: "Kubernetes", fontAwesomeClassname: "devicon-kubernetes-plain" },
  { skillName: "Jenkins", fontAwesomeClassname: "devicon-jenkins-plain" },
  { skillName: "AWS", fontAwesomeClassname: "devicon-amazonwebservices-line-wordmark" },
  { skillName: "Nginx", fontAwesomeClassname: "devicon-nginx-original" },

  // Databases
  { skillName: "MySQL", fontAwesomeClassname: "devicon-mysql-plain" },
  { skillName: "PostgreSQL", fontAwesomeClassname: "devicon-postgresql-plain" },
  { skillName: "MongoDB", fontAwesomeClassname: "devicon-mongodb-plain" },

  // Version Control & Collaboration
  { skillName: "Git", fontAwesomeClassname: "devicon-git-plain" },
  { skillName: "GitHub", fontAwesomeClassname: "devicon-github-original" },
  { skillName: "GitLab", fontAwesomeClassname: "devicon-gitlab-plain" },
  { skillName: "Bitbucket", fontAwesomeClassname: "devicon-bitbucket-original" },
  { skillName: "Jira", fontAwesomeClassname: "devicon-jira-plain" },

  // Tools & Utilities
  { skillName: "Postman", fontAwesomeClassname: "devicon-postman-plain" },
  { skillName: "Linux", fontAwesomeClassname: "devicon-linux-plain" }
]

,
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "ESPRIT – Private Higher School of Engineering and Technology",
      logo: require("./assets/images/esprit.png"),
      subHeader: "Engineering Degree in Computer Science",
      duration: "September 2021 – July 2024",
      desc: "Completed a 3-year engineering program focused on full-stack development, microservices, and cloud technologies.",
      descBullets: [
        "Worked on complex software engineering projects using React, Spring Boot, and Docker",
        "Led agile team sprints and implemented CI/CD pipelines in DevOps environments"
      ],
      website_link: "https://www.esprit.tn/"
    },
    {
      schoolName: "ISET Charguia – Higher Institute of Technological Studies of Charguia",
      logo: require("./assets/images/isetch.jpg"),
      subHeader: "Undergraduate Degree in Computer Science",
      duration: "September 2016 – April 2019",
      desc: "Gained a strong foundation in algorithms, web development, and system programming.",
      descBullets: [
        "Graduated with honors in the top 10% of the class",
        "Studied core topics such as software engineering, operating systems, and web security"
      ],
      website_link: "https://isetch.rnu.tn/"
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "97%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "88%"
    },
    {
      Stack: "Programming",
      progressPercentage: "82%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set to true to show workExperiences Section
  experience: [
    {
      role: "Fullstack Developer Intern",
      company: "Sharing Technologies",
      companylogo: require("./assets/images/sharing.jpg"), // You can add your company logo here
      date: "April 2024 – October 2024",
      location: "Tunis, Tunisia",
      desc: "Built and enhanced a scalable Angular/Node.js platform INT-Elegance, improving delivery and user experience through modular design and AI features.",
      descBullets: [
        "Built INT-Elegance, a scalable Angular/Node.js platform, cutting delivery time by 20% via modular design and efficient RESTful APIs.",
        "Designed a responsive task management module with advanced state handling (NgRx), boosting project completion rates by 30%.",
        "Integrated an AI-enhanced semantic search feature into internal tools, improving knowledge retrieval and user experience.",
        "Built and maintained CI/CD pipelines using Docker, GitLab CI, Grafana Dashboards, and AWS, improving deployment frequency and system reliability.",
        "Operated in an Agile Scrum environment, collaborating with UI/UX, DevOps, and QA teams to ensure sprint success and product alignment."
      ]
    },
    {
      role: "Fullstack Developer Intern",
      company: "TunisAir",
      companylogo: require("./assets/images/tunisair.png"), // Add Tunisair logo file
      date: "March 2023 – September 2023",
      location: "Tunis, Tunisia",
      desc: "Developed a custom flight management system, enhancing scalability, performance, and security for internal operations.",
      descBullets: [
        "Built a custom flight management system using Angular, Express.js, and MySQL, reducing manual workflows by 30+ hours per month.",
        "Improved system scalability and performance by implementing modular architecture, optimizing APIs, and tuning front-end load speeds by 40%.",
        "Strengthened platform security using OAuth2, JWT, and CSRF protection.",
        "Contributed actively to Agile sprints through daily stand-ups and sprint planning sessions."
      ]
    },
    {
      role: "Web Development Intern",
      company: "Bouquiniste.tn",
      companylogo: require("./assets/images/book.png"), // Add logo or remove if unavailable
      date: "August 2023 – September 2023",
      location: "Tunis, Tunisia",
      desc: "Developed an innovative online library system focused on improving user experience by identifying and resolving usability issues.",
      descBullets: [
        "Pioneered an online library system enhancing user experience and usability.",
        "Conducted user research revealing 3 major usability issues leading to targeted improvements.",
        "Increased user satisfaction ratings among patrons through focused enhancements."
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/logoint.png"),
      projectName: "INT-Elegance",
      projectDesc: "A modular Angular and Node.js platform with AI-enhanced search, built to optimize project management workflows.",
      techStack: "Angular, Node.js, RESTful APIs, NgRx, Docker, AWS",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/IkigaiRamen/Int-elegance"
        }
      ]
    },
    {
      image: require("./assets/images/tunisair.png"),
      projectName: "Tunisair Meetings",
      projectDesc: "A meeting management system for Tunisair’s board of directors to organize meetings, track decisions, and manage documents.",
      techStack: "Angular, Spring Boot, MySQL, PrimeNG",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/IkigaiRamen/Tunisair-meetings"
        }
      ]
    },
    {
      image: require("./assets/images/inventory.png"),
      projectName: "Inventory Management App",
      projectDesc: "A comprehensive web app for managing product inventories, featuring CRUD operations and reporting tools.",
      techStack: "Angular, Spring Boot, MySQL, REST APIs",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/IkigaiRamen/Inventory-management-App"
        }
      ]
    },
   
    {
      image: require("./assets/images/barter.jpg"),
      projectName: "Barter App",
      projectDesc: "A peer-to-peer trading platform enabling users to exchange goods without currency, emphasizing user trust and matching.",
      techStack: "React Native, Firebase, Node.js",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/IkigaiRamen/Barter-app"
        }
      ]
    },
    {
      image: require("./assets/images/uni.jpg"),
      projectName: "University Management System",
      projectDesc: "A system to streamline university operations, including course management, student registration, and grading.",
      techStack: "Java, JavaFX, MySQL",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/IkigaiRamen/University-management-system"
        }
      ]
    },
    {
      image: require("./assets/images/jobyard.jpg"),
      projectName: "Job Portal Web Application",
      projectDesc: "A job listing platform that connects job seekers and employers with features like profile management and job applications.",
      techStack: "Symfony, Twig, MySQL, PHP",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/IkigaiRamen/Job-portal-web-application"
        }
      ]
    },
  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Feel free to reach out for collaboration or freelance work.",
  number: "+216-50598694",
  email_address: "Ram.Khammessi@esprit.tn"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
