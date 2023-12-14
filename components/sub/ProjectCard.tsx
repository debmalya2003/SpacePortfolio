import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  visitLink: string;
}

const ProjectCard = ({ src, title, description, visitLink }: Props) => {
  const handleVisitClick = () => {
    // Handle the click event, e.g., redirect to the visitLink
    window.location.href = visitLink;
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] h-[400px] group">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent group-hover:from-opacity-80 transition duration-300">
        <h1 className="text-2xl font-semibold text-black">{title}</h1>
        <p className="mt-2 text-black font-bold">{description}</p>

        {/* Visit Button */}
        <button
          onClick={handleVisitClick}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded transition duration-300 opacity-0 group-hover:opacity-100"
        >
          Visit
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
