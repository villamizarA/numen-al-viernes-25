import React from "react";
import { Link } from "react-router-dom";

const SeasonCard = ({ title, content, imageSrc, link }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={imageSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
      <div className="px-6 py-4">
        <Link to={link} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ver temporada
        </Link>
      </div>
    </div>
  );
};

export default SeasonCard;
