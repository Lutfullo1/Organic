import React from "react";

export const AboutTeamCard = ({ img, name, text }) => {
  return (
    <div className="border rounded-[30px] shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg">
      <img src={img} alt="" />
      <div className="p-[20px]">
        <h4 className="text-arapawa text-[25px] font-[800]">{name}</h4>
        <p className="text-p italic">{text}</p>
      </div>
    </div>
  );
};
