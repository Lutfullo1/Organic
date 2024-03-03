import React from "react";

export const AboutUsList = ({ img, des, title }) => {
  return (
    <>
      <div>
        <div>
          <img src={img} alt="" />
        </div>
        <div className="w-[300px]">
          <h3 className="text-arapawa text-25px font-[800]">{title}</h3>
          <p className="text-p text-18px font-[400] mb-[15px]">{des}</p>
        </div>
      </div>
    </>
  );
};
