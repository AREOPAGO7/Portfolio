import { useState } from "react";
import ProjectCard from '../component/cards/ProjectCard';

// Import your images
import i1 from '../assets/projects/i1.png';
import i2 from '../assets/projects/i2.png';
import i3 from '../assets/projects/i3.png';

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
      title: "Inventory Management System",
      description: [
        "A system to track inventory levels and orders.",
        "Includes features for generating reports.",
        "Built for small to medium-sized businesses.",
        "Utilizes a MERN stack."
      ],
      images: [i1, i2, i3],
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      githubLink: "https://github.com/yourusername/inventory-management",
    },
    {
      id: 3,
      title: "Task Management App",
      description: [
        "An application to manage personal tasks and projects.",
        "Features task categorization and reminders.",
        "Optimized for both web and mobile usage.",
        "Developed using React and Firebase."
      ],
      images: [i1, i2, i3],
      technologies: ["React", "Firebase", "CSS"],
      githubLink: "https://github.com/yourusername/task-manager",
    },
    {
      id: 4,
      title: "E-Commerce Website",
      description: [
        "A full-featured e-commerce platform.",
        "Includes product listings, a shopping cart, and user accounts.",
        "Responsive design for mobile and desktop users.",
        "Powered by a MERN stack."
      ],
      images: [i1, i2, i3],
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      githubLink: "https://github.com/yourusername/e-commerce",
    },
    {
      id: 5,
      title: "Social Media Platform",
      description: [
        "A platform for connecting with friends and sharing updates.",
        "Features include profiles, messaging, and notifications.",
        "Built with React and a RESTful API.",
        "Focus on user experience and scalability."
      ],
      images: [i1, i2, i3],
      technologies: ["React", "Node.js", "Express.js"],
      githubLink: "https://github.com/yourusername/social-media",
    },
    {
      id: 6,
      title: "Blog Application",
      description: [
        "A blogging platform for writers to share their thoughts.",
        "Supports rich text formatting and media uploads.",
        "Includes user authentication and commenting.",
        "Built with React and Firebase."
      ],
      images: [i1, i2, i3],
      technologies: ["React", "Firebase", "CSS"],
      githubLink: "https://github.com/yourusername/blog-app",
    },
    // Add more projects as needed
  ];

  return (
    <div className="w-[70%] mx-auto p-8 mt-52 ">
      <h2 className="text-2xl font-bold text-white mb-4"> Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
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
  );
};

export default Work;
