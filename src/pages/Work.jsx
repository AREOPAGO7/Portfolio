// import { useState } from "react";
import ProjectCard from '../component/cards/ProjectCard';
import "./GridOverlay.css";
// Import your images
import i1 from '../assets/projects/i1.png';
import i2 from '../assets/projects/i2.png';
import i3 from '../assets/projects/i3.png';
import dash from '../assets/projects/dash.png';
import chat from '../assets/projects/chat.png';
import ContactForm  from "../component/ContactForm.jsx";
import Section3 from "../layouts/Section3/Section3";




function Work() {
  const projects = [
    {
      id: 1,
      title: "Hospital Dashboard",
      description: [
        "An intuitive dashboard for managing hospital operations.",
        "Provides real-time data visualization.",
        "User-friendly interface with easy navigation.",
        "Built with React and Tailwind CSS."
      ],
      images: [i1, i2, i3],
      technologies: ["Html", "bootstrap CSS", "Javascript", "php", "MySQL"],
      githubLink: "https://github.com/yourusername/hospital-dashboard",
    },
    {
      id: 2,
      title: "AI chatbot PaLM 2 ",
      description: [
        "Built with PaLM 2 for advanced AI responses.",
        "Excels in multilingual support, reasoning, and coding.",
        "ntegrated into various tools for accessibility.",
        "Utilizes APIs for seamless user interactions.",
        "Designed for scalability and high performance."
        
      ],
      images: [chat],
      technologies: ["ReactJS", "TailwindCSS", "Typescript","Python","MongoDB"],
      githubLink: "https://github.com/yourusername/inventory-management",
    },
    {
      id: 3,
      title: "Admin Dashboard",
      description: [
        "The Admin Dashboard manages system data efficiently.",
        "It displays key metrics using charts and tables.",
        "Designed for admins to oversee operations seamlessly."
        
      ],
      images: [dash],
      technologies: ["Html", "Tailwindcss","Bootstrap", "Javascript", "php", "MySQL", "Python" ],
      githubLink: "https://github.com/yourusername/task-manager",
    },


  ];

  return (
    <>
     <ContactForm />
    <div className="grid-overlay"></div>
    <div className="w-[80%] mx-auto p-8 mt-52 gap-6">
      <h2 className="text-2xl font-bold text-white mb-6"> Work</h2>
      <div className=" w-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 ">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            images={project.images}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
    <Section3 />
    </>
  );
};

export default Work;
