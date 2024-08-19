// import images
import Hero_person from "./assets/images/Hero/person.png";


import currency from "./assets/images/Projects/currency.png"
import todo from "./assets/images/Projects/todo.png"
import BlogBook from "./assets/images/Projects/BlogBook.png"



import Hireme_person from "./assets/images/Hireme/person.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdCall } from "react-icons/md";


export const content = {


  hero: {
    firstName: "Raushan",
    LastName: "Kumar",
    btnText: "RESUME",
    image: Hero_person,
  },

  Aboutme: {
    subtitle: "ABOUT ME",
    image1: Hireme_person,
    name: "Raushan Kumar",
    para: "I am a full-stack MERN developer with expertise in JavaScript, React.js, Node.js, and MongoDB. I build intuitive UIs and scalable back-end systems, focusing on performance, new features, and problem-solving. Check out my portfolio and connect for collaboration. Let's create something exceptional!",
  },


  skills: {
    title: "Skills",
    skills_content: [
      { name: "HTML 5", percentage: 90 },
      { name: "CSS 3", percentage: 85 },
      { name: "Java Script", percentage: 80 },
      { name: "React js", percentage: 75 },
      { name: "Node js", percentage: 70 },
      { name: "Express js", percentage: 65 },
      { name: "Redux", percentage: 60 },
      // { name: "SQL", percentage: 55 },
      { name: "Mongo DB", percentage: 50 },
      { name: "Python", percentage: 45 },
    ],
  },



  Experience: {
    title: "EXPERIENCE",

    Research: {
      Research_title: "Publications",
      research_content: [
        {
          publication: "Secrecy Performance of Untrusted AF Relays in Underlay Cognitive Radio Networks*",
          link: "https://drive.google.com/file/d/1UFI-asz2cDuryb65gn1_6LitSzs613O4/view?usp=sharing",
          para: "In an underlay cognitive radio (CR) system, secondary users can transmit during primary transmissions but must limit interference to the primary receiver. Amplify-and-forward (AF) relaying enhances CR performance by offering an alternative signal path, though the wireless medium's broadcast nature risks eavesdropping. This study examines the secrecy performance of an untrusted AF relay in a semi-duplex model. We introduce a new power and interference temperature limit (ITL) apportioning factor, α, to allocate ITL across two hops using different relay gain policies. Future work will focus on modeling α as an instantaneous variable to explore potential improvements in secrecy performance."
        },
        {
          publication: "Secrecy and Reliability Analysis of Underlay Cooperative Radios with CSI-Assisted Power Apportioning*",
          link: "https://drive.google.com/file/d/1g7A_QrAFAfZ1IK5K9ZXUW4Rm_yZF0nyU/view?usp=sharing",
          para: "In an underlay cognitive radio (CR) system, secondary users can transmit during primary transmissions but must limit interference to the primary receiver. Amplify-and-forward (AF) relaying enhances CR performance by offering an alternative signal path but risks eavesdropping due to the wireless medium's broadcast nature. This study explores the secrecy performance of an underlay cooperative CR network with an eavesdropping AF relay using a semi-duplex model. We introduce a novel interference temperature limit (ITL) apportioning factor to enable destination-assisted jamming and use a new joint secrecy and reliability metric. Results indicate that an optimal ITL apportioning factor minimizes joint secrecy and reliability outage, showing improved performance with perfect channel state information for secondary nodes."
        },  
      ]
    },


    Experience_content: [
      {
        Experience: "Internship at ERTL (east)",
        Roal: "Web Vulnerability Tester",
        para1: "Led comprehensive vulnerability assessments on 5 government websites using tools including Burp Suite, App Scan, and Kali Linux (Putty).",
        para2: "Generated detailed reports identifying and prioritizing 100+ vulnerabilities performing risk assessments that led to targeted mitigation recommendations thereby significantly enhancing site security.",
        para3: "Implemented effective mitigation strategies resulting in reduction in vulnerabilit exposure, thereby greatly improving the overall website security posture."
        // image: project1,
      },
      {
        Experience: "Contribution in Placement Portal Website (IIIT Kalyani)",
        Roal: "Web Devloper",
        para1: "Developed and enhanced the placement portal website for IIIT Kalyani using HTML, CSS, JavaScript, and React, resulting in a more responsive and user-friendly interface",
        para2: "Collaborated with a team to implement front-end features and optimize web performance, improving the overall functionality and user experience of the placement portal hosted on GitHub.",
        // image: project1,
      },
    ],
  },

  Project: {
    title: "PROJECTS",
    Project_content: [
      {
        about_project:
          "I developed a responsive To-Do app using React, featuring a clean and intuitive interface for task management. The app leverages React's component-based architecture and hooks for efficient state management. It uses local storage to persist tasks, ensuring data is retained even after browser refreshes or closures. Key features include task sequence, due dates, and its updatation as well as deletion technique, enhancing user productivity. The app is optimized for performance and accessibility, providing a seamless experience across devices.",
        img: todo,
        name: "TO-DO",
        project_url: 'https://to-do-pied-xi.vercel.app/'
      },
      {
        about_project:
          "I developed a responsive currency converter using React, featuring a clean UI and real-time exchange rates via API integration. The project supports multiple currencies and includes error handling for robust user feedback. I utilized React's state management for efficient data handling and optimized performance with techniques like lazy loading. The site is accessible, ensuring usability for all users. The project is deployed with scalable infrastructure, and I actively maintain and update for continuous improvement.",
        img: currency,
        name: "Currency Converter",
        project_url: 'https://currency-converter-ashy-theta-43.vercel.app/'
      },
      //blog - book
      {
        about_project:
          "I created a blog book website using Appwrite, React, and JavaScript. The project allows users to create, manage, and browse blog posts seamlessly. Appwrite serves as the backend, providing user authentication, database management, and storage services, ensuring a secure and scalable environment. React was used to build a dynamic and responsive user interface, enhancing the user experience with smooth navigation and interactive features. JavaScript ties the project together, handling logic and functionality across the application. This project showcases the integration of modern web technologies to deliver a comprehensive blogging platform.",
        img: BlogBook,
        name: "Blog-Book",
        project_url: 'https://blog-book-roan.vercel.app/'
      },
     
    ],
  },

  Contact: {
    title: "CONTACT ME",
    social_media: [
      {
        text: "ece21144@iiitkalyani.ac.in",
        icon: GrMail,
        link: "mailto:ece21144@iiitkalyani.ac.in",
      },
      {
        text: "+91 82985 42621",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
    ],
  },

};
