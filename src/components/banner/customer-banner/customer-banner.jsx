import React from "react";

export const CustomerBanner = ({
  text,
  title,
  img,
  starImg,
  des,
  name,
  bgImg,
}) => {
  return (
    <div className="relative ">
      <img src={bgImg} alt="" />
      <div className="container">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center gap-[50px] w-[700px]">
            <p className="text-p text-arapawa text-[36px] font-[500] italic">
              {text}
            </p>
            <h4 className=" text-arapawa text-[50px] font-[800]">{title}</h4>
            <div className="flex flex-col items-center">
              <img src={img} alt="" />
              <img src={starImg} alt="" />
            </div>
            <p className="text-p text-center">{des}</p>
            <p className=" text-arapawa text-[25px] font-[600]">{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
