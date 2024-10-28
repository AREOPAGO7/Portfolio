import { useState } from "react";

const ProjectCard = ({ title, images, description, technologies, githubLink }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePreviousImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-sm mx-auto bg-tahiti rounded-lg overflow-hidden shadow-lg border border-white/15">
      <div className="relative">
        <img
          src={images[currentImage]}
          alt="Project"
          className="w-full p-4 rounded-lg h-50 object-cover"
        />
        <div className="absolute top-0 left-0 right-0 flex justify-between p-2">
          <button style={{border:'1px solid #6b6b6b'}}
            className="bg-black/80 hover:bg-black text-white font-bold py-2 px-3 rounded-lg mt-20"
            onClick={handlePreviousImage}
          >
            &lt; {/* Left arrow */}
          </button>
          <button style={{border:'1px solid #6b6b6b'}}
            className="bg-black/80 hover:bg-black text-white font-bold py-2 px-3   rounded-lg mt-20 "
            onClick={handleNextImage}
          >
            &gt; {/* Right arrow */}
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        {description.map((para, index) => (
          <p key={index} className="text-white mb-2 flex items-start">
            <span className="dot text-white mr-2">•</span> {/* Added margin-right for spacing */}
            <span>{para}</span> {/* Wrapped text in a span for alignment */}
          </p>
        ))}
        <div className="flex flex-wrap gap-2 mt-2 ">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-white/20 text-white text-xs font-semibold px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      
      </div>
    </div>
  );
};

export default ProjectCard;
