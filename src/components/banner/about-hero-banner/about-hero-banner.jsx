import React from "react";

export const AboutHeroBanner = ({ img, title }) => {
  return (
    <div className="relative">
      <img src={img} alt="hero-banner" />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h1 className="text-h1">{title}</h1>
      </div>
    </div>
  );
};
