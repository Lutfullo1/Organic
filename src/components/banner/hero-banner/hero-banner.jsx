import React from "react";
import { Button } from "../../ui/button";
import { ArrowRight } from "../../../assets/icons/arrow-right";

export const HeroBanner = ({ img, title, text }) => {
  return (
    <div className="relative">
      <img src={img} alt="hero-banner" />
      <div className="container">
        <div className="absolute top-[200px] w-[750px]">
          <p className="text-arapawa font-[500] italic">{text}</p>
          <h1 className="text-h1">{title}</h1>
          <Button variant="funk_yellow" icon={<ArrowRight />}>
            Explore Now
          </Button>
        </div>
      </div>
    </div>
  );
};
