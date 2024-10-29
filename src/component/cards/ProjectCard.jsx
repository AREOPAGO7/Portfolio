/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import left from '../../assets/projects/left.png';
import right from '../../assets/projects/right.png';
import link from '../../assets/projects/link.png';

const ProjectCard = ({
  title,
  images,
  description,
  technologies,
  githubLink,
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePreviousImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-[28rem] mx-auto mb-10  rounded-lg overflow-hidden shadow-lg border border-white/15">
      <div className="relative">
        <img
          src={images[currentImage]}
          alt="Project"
          className="w-[97%] mx-auto p-4 rounded-lg h-50 object-cover"
        />
        <div className="absolute top-0 left-0 right-0 flex justify-between p-2">
          <button
            style={{ border: "1px solid #6b6b6b" }}
            className="bg-black/80 hover:bg-black text-white font-bold py-2 px-3 rounded-md mt-28"
            onClick={handlePreviousImage}
          >
            <img className="w-3 h-2 mt-2 mb-2" src={left}  alt="" />
          </button>
          <button
            style={{ border: "1px solid #6b6b6b" }}
            className="bg-black/80 hover:bg-black text-white font-bold py-2 px-3 rounded-md mt-28 "
            onClick={handleNextImage}
          >
             <img className="w-3 h-2 mt-2 mb-2" src={right} alt="" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        {description.map((para, index) => (
          <p key={index} className="text-white  mb-2 flex items-start">
            <span className="dot text-white ml-3 mr-3">•</span>{" "}
            {/* Added margin-right for spacing */}
            <span>{para}</span> {/* Wrapped text in a span for alignment */}
          </p>
        ))}
        <div className="flex flex-wrap gap-2 mt-4 mb-10">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-white/20 text-white text-xs font-semibold px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <button className="flex items-center text-white w-fit font-medium border-[1px] border-white/15 p-3 rounded-xl">
  GitHub 
  <span className="ml-3">
    <img className="size-5" src={link} alt="GitHub Icon" />
  </span>
</button>
      </div>
      
    </div>
  );
};

export default ProjectCard;
