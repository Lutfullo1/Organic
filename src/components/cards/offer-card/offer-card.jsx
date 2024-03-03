import React from "react";

export const OfferCard = ({ img, text, title }) => {
  return (
    <div className="relative transition-transform transform hover:-translate-y-1 hover:shadow-lg rounded-[26px]">
      <img src={img} alt="" />
      <div className="absolute top-[70px] left-[30px] w-[290px] ">
        <p className="text-arapawa text-[36px] font-medium">{text}</p>
        <h3 className=" text-arapawa text-h3 text-[40px] font-[800]">
          {title}
        </h3>
      </div>
    </div>
  );
};
