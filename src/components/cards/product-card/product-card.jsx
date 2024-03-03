import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const ProductCard = ({ img1, img, title, price }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="border rounded-[30px] px-[20px] py-[20px] shadow-md p-4 transition-transform transform hover:-translate-y-1 hover:shadow-lg"
    >
      <img src={img} alt="" />
      <div className="flex flex-col items-center gap-[10px]">
        <h3 className="text-arapawa text-[20px] font-[600]">{title}</h3>
        <div className="flex items-center gap-[30px]">
          <p className="line-through text-dhusar_grey">$20.00</p>
          <p className="text-arapawa text-[18px] font-[700]">{price}</p>
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};
