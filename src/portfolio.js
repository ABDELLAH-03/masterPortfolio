/* Change this file to get your personal Porfolio */
import htmlcssjs from "./assets/certificates/HTML-CSS-JS.pdf";
import machineLearning from "./assets/certificates/machine-learning-python.pdf";
import devops from "./assets/certificates/devops.pdf";
import deepLearning from "./assets/certificates/deeplearning.pdf";
import blockchain from "./assets/certificates/blockchain.pdf";
import ObjectOriented from "./assets/certificates/object-oriented design.pdf";
import containersDocker from "./assets/certificates/containers-docker.pdf";
import cloudComputing from "./assets/certificates/cloud-computing.pdf";
import uiux from "./assets/certificates/uiux.pdf";
import ia from "./assets/certificates/Ia.pdf";
import carrer from "./assets/certificates/carrer.pdf";
import mongo from "./assets/certificates/mongodb.pdf";

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abdellah Portfolio",
  description:
    "Passionate about building robust, responsive, and high-performance full-stack web applications.Transforming ideas into clean, efficient, and user-focused digital experiences.",
  og: {
    title: "Abdellah Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Abdellah Chahdi",
  logo_name: "Abdellah Chahdi",
  subTitle:
    "Passionate about building robust, responsive, and high-performance full-stack web applications.Transforming ideas into clean, efficient, and user-focused digital experiences.",
  resumeLink: "https://drive.google.com/drive/u/2/home",
  portfolio_repository: "",
  githubProfile: "https://github.com/ABDELLAH-03",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ABDELLAH-03",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/ABDELLAH-03",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link:
      "https://www.linkedin.com/in/abdellah-chahdi-98ab6a267/?skipRedirect=true",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:abdellah.chahdi.03@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native",
        "⚡ Creating application backend in Node & Express ",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF2D20",
          },
        },
        {
          skillName: "Symfony",
          fontAwesomeClassname: "simple-icons:symfony",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092E20",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Vue.js",
          fontAwesomeClassname: "simple-icons:vuedotjs",
          style: {
            color: "#4FC08D",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "Licence Professionnelle en Développement Informatique",
      subtitle: "ISMAGI AGDAL",
      logo_path: "ISMAGI.png",
      alt_name:
        "INSTITUT SUPERIEURE DE MANAGEMENT D'ADMINISTRATION ET GENIE INFORMATIQUE",
      duration: "2025-2026",
      descriptions: [
        "⚡ I have studied advanced frameworks and libraries including Laravel, Symfony, React, Vue.js, and Django, building full-stack web applications from the ground up.",
        "⚡ I have worked with cross-platform and mobile development using Flutter, Dart, and iOS development, as well as backend technologies like Node.js and Express.js.",
        "⚡ I have gained hands-on experience in Web Security, Cloud Computing with Microsoft Azure, and modern DevOps practices to build secure and scalable applications.",
      ],
    },
    {
      title: "Diplôme Technicien Spécialisé en Développement Digital",
      subtitle: "ISTA NTIC",
      logo_path: "iu_logo.png",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ I have studied core web technologies including HTML, CSS, and JavaScript, building responsive and interactive user interfaces.",
        "⚡ I have worked with relational and non-relational databases such as MySQL and MongoDB, learning data modeling and query optimization.",
        "⚡ I have also studied the fundamentals of Networking (Réseau), gaining knowledge of network protocols, infrastructure, and basic system administration.",
      ],
    },
    {
      title: "Baccalauréat - Sciences de la Vie et de la Terre",
      subtitle: "Lycée Ibn El Khatib",
      logo_path: "iiitk_logo.png",
      duration: "2020-2021",
      descriptions: [
        "⚡ I have studied core scientific subjects including Mathematics, Physics, and Life & Earth Sciences, building a strong analytical and problem-solving foundation.",
        "⚡ I have developed a solid understanding of scientific methods and logical reasoning through laboratory work and applied experiments.",
        "⚡ I successfully obtained my Baccalauréat in Sciences de la Vie et de la Terre, which prepared me for pursuing technical and engineering studies.",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Introduction to HTML, CSS, & JavaScript",
      logo_path: "ibm_logo.png",
      certificate_link: `${htmlcssjs}`,
      alt_name: "IBM",
      color_code: "#4285F499",
    },
    {
      title: "Machine Learning",
      logo_path: "stanford_logo.png",
      certificate_link: `${machineLearning}`,
      alt_name: "MICHIGAN",
      color_code: "#8C151599",
    },
    {
      title: "Application Security for Developers and DevOps Professionals",
      logo_path: "ibm_logo.png",
      certificate_link: `${devops}`,
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Deep Learning",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: `${deepLearning}`,
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
      logo_path: "ibm_logo.png",
      certificate_link: `${containersDocker}`,
      alt_name: "IBM",
      color_code: "#1F70C199",
    },

    {
      title: "Object-Oriented Design",
      logo_path: "alberta.png",
      certificate_link: `${ObjectOriented}`,
      alt_name: "ALBERTA",
      color_code: "#0C9D5899",
    },

    {
      title: "Introduction to Cloud Computing",
      logo_path: "ibm_logo.png",
      certificate_link: `${cloudComputing}`,

      alt_name: "IBM",
      color_code: "#1F70C199",
    },

    {
      title: "UI-UX Design",
      logo_path: "Orange.png",
      certificate_link: `${uiux}`,

      alt_name: "ORANGE",
      color_code: "#000000ef",
    },
    {
      title: "Blockchain Basics",
      logo_path: "bufalo.png",
      certificate_link: `${blockchain}`,
      alt_name: "BUFFALO",
      color_code: "#2A73CC",
    },
    {
      title: "Career Management",
      logo_path: "ibm_logo.png",
      certificate_link: `${carrer}`,

      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Mongo DB",
      logo_path: "Orange.png",
      certificate_link: `${mongo}`,
      alt_name: "ORANGE",
      color_code: "#000000ef",
    },
    {
      title: "IA Fundamentals",
      logo_path: "ibm_logo.png",
      certificate_link: `${ia}`,

      alt_name: "IBM",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship",
  description:
    "I completed two internships that significantly strengthened both my technical expertise and my soft skills. Throughout these experiences, I worked with modern web technologies such as React and Laravel, which enhanced my development capabilities and problem-solving approach. Additionally, collaborating in professional environments helped me improve my communication, teamwork, adaptability, and time management skills, allowing me to become more effective and confident in real-world projects.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "Full Stack Developer",
          company: "CAPELLA Engineering",
          logo_path: "capella_3.png",
          duration: "February 2024 - August 2024",
          location: "Morocco, Mohammédia",
          description:
            "Completed an internship at CAPELLA Engineering, where I contributed to the development of internal web applications aimed at digitizing and optimizing company workflows. Participated in building a local application to streamline task management and improve operational efficiency. Also assisted in developing a document management system to centralize, organize, and facilitate access to company files.",
          color: "#000000",
        },
        {
          title: "Full Stack Developer",
          company:
            "Ministère de l’Énergie, des Mines et de l’Environnement - Département de l’Environnement",
          logo_path: "ministere.png",
          duration: "march 2023 - Mai 2023",
          location: "Morocco, Rabat",
          description:
            "Developed and maintained web applications for the Ministry of Energy, Mines and Environment. Implemented CI/CD pipelines reducing deployment time by 60%, and optimized application performance resulting in 40% faster load times.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.png",
    description:
      "Whether you want to discuss a collaboration, share an idea, or just say hello — I'd love to hear from you.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
