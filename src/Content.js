// import images
import Hero_person from "./assets/images/Hero/person.png";


import currency from "./assets/images/Projects/currency.png"
import todo from "./assets/images/Projects/todo.png"
// import project1 from "./assets/images/projects/img1.png";
// import project2 from "./assets/images/projects/img2.png";
// import project3 from "./assets/images/projects/img3.png";
// import person_project from "./assets/images/projects/person.png";


import Hireme_person from "./assets/images/Hireme/person.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";


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
      { name: "SQL", percentage: 55 },
      { name: "Mongo DB", percentage: 50 },
      { name: "Python", percentage: 45 },
    ],
  },



  Experience: {
    title: "EXPERIENCE",
    //image: person_project,
    project_content: [
      {
        title: "Gym Website",
        // image: project1,
      },
      {
        title: "Social Media web",
        // image: project2,
      },
      {
        title: "Creative Website",
        // image: project3,
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
      {
        about_project:
          "I developed a responsive currency converter using React, featuring a clean UI and real-time exchange rates via API integration. The project supports multiple currencies and includes error handling for robust user feedback. I utilized React's state management for efficient data handling and optimized performance with techniques like lazy loading. The site is accessible, ensuring usability for all users. The project is deployed with scalable infrastructure, and I actively maintain and update for continuous improvement.",
        img: currency,
        name: "Currency Converter",
        project_url: 'https://currency-converter-ashy-theta-43.vercel.app/'
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
