// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/ccs_logo.png';
import agcLogo from './assets/company_logo/saic_logo.jpg';
import newtonschoolLogo from './assets/company_logo/tp.png';


// Education Section Logo's
import glaLogo from './assets/education_logo/tiet_logo.png';
import bsaLogo from './assets/education_logo/aps_logo.jpg';
import vpsLogo from './assets/education_logo/aps_logo.jpg';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/bookzone.jpg';
import csprepLogo from './assets/work_logo/recipe.jpg';
import movierecLogo from './assets/work_logo/eduapp.jpg';
/*import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';*/


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'Java Script', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Boot strap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring boot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Mongo DB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'Postgre SQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'Java Script', logo: javascriptLogo },
      { name: 'Type Script', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Post man', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Creative Computing Society",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Student-Mentor",
      company: "Student Alumni Interactive Cells",
      date: "July 2023 - March 2024",
      desc: "I am honored to be among the 800 individuals selected as executive members of the student chapter of the world's largest SAIC organization. This prestigious opportunity reflects a commitment to excellence and collaboration, and I am eager to contribute meaningfully to its vision and objectives.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Cyber-Security Intern",
      company: "Threat Prism",
      date: "September 2021 - August 2022",
      desc: "I have successfully completed an internship as part of the Cyber Security & Ethical Hacking Industrial Program with Threat Prism, running from 1st August 2023 to 30th September 2023. During this program, I developed the Information Gathering Tool - Network and Port Scanner, gaining hands-on experience in key aspects of cyber security, including network analysis and ethical hacking techniques. Under the mentorship of industry professionals, I enhanced my skills in practical security solutions and project implementation.",
      skills: [
        "Python",
        "Kali-Linux",
        "OSINT",
        
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Thapar Universtiy",
      date: "Sept 2022 - July 2026",
      
      desc: "I have completed my BTECH(CSE) from Thapar University, Patiala. During my time at Tiet, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Thapar University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Technology -(BTECH)",
    },
   
    {
      id: 2,
      img: vpsLogo,
      school: "Army Public School , Firozpur",
      date: "Apr 2021 - March 2022",
      
      desc: "I completed my class 12 education from Army Public School, Firozpur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "Army Public School , Patiala",
      date: "Apr 2019 - March 2020",
      
      desc: "I completed my class 10 education from Army Public School, Patiala, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Book-Zone",
      description:
        "The Book Selling Website is a fully functional e-commerce platform designed to connect book enthusiasts with a vast collection of books. The website provides users with an easy, efficient, and enjoyable online shopping experience, offering features like book browsing, purchasing, and reviews. It caters to both casual readers and avid bibliophiles by ensuring accessibility, variety, and affordability.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/NavjotSingh2003/Book-Zone",
      webapp: "https://kissan-a96e9.web.app/",
    },
    {
      id: 1,
      title: "Recipe Webiste",
      description:
        "The Recipe Sharing Website is an interactive platform where users can explore, create, and share their favorite recipes. Designed for food enthusiasts, this website aims to foster a community of cooking lovers by offering a diverse range of recipes, cooking tips, and user-generated content. It provides a seamless way for users to discover new dishes, learn cooking techniques, and share their culinary creations.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/NavjotSingh2003/Recipe-website2",
      webapp: "",
    },
    {
      id: 2,
      title: "Endless Learning Wesbsite",
      description:
        "The E-Learning Website for College Students is a platform designed to help college students access educational content, collaborate, and enhance their learning experience. The website aims to centralize academic resources, provide interactive learning tools, and support peer-to-peer engagement. It is a user-friendly solution tailored to meet the unique needs of students in higher education.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/NavjotSingh2003/hackthon2",
      webapp: "",
    },
    
  ];  
