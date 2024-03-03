import React from "react";

export const AboutServiceCard = ({ img, title, text }) => {
  return (
    <div className="flex flex-col items-center border rounded-[16px] py-[30px] px-[20px] w-[230px] bg-white">
      <img src={img} alt="about-service" />
      <h4 className="text-arapawa text-[20px] font-[700]">{title}</h4>
      <p className="text-p text-[18px] text-center">{text}</p>
    </div>
  );
};
