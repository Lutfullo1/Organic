import React from "react";
import { AboutUsList } from "../about-us-list/about-us-list";
import { aboutUsCardData1 } from "../../../data/data";
import { aboutUsCardData2 } from "../../../data/data";
import { Button } from "../../ui/button";
import { ArrowRight } from "../../../assets/icons/arrow-right";

export const AboutUsCard = ({
  img,
  text,
  title,
  des,
  isButtonVisible = true,
}) => {
  return (
    <div className="flex gap-[20px] justify-center">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="w-[900px] flex flex-col gap-[20px]">
        <p className="text-p text-[36px] font-[400] italic">{text}</p>
        <h3 className="text-h3 text-arapawa font-[800] text-[50px]">{title}</h3>
        <p className="text-[18px] font-[400">{des}</p>
        <div>
          {aboutUsCardData1.map((item) => (
            <AboutUsList
              key={item.id}
              title={item.title}
              img={item.img}
              des={item.des}
            />
          ))}

          {aboutUsCardData2.map((item) => (
            <AboutUsList
              key={item.id}
              img={item.img}
              title={item.title}
              des={item.des}
            />
          ))}
          {isButtonVisible && (
            <Button variant="arapawa" icon={<ArrowRight />}>
              Shop Now
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
