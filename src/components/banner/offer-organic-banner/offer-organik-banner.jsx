import React from "react";
import { Button } from "../../ui/button";
import { ArrowRight } from "../../../assets/icons/arrow-right";

export const OfferOrganikBanner = ({
  children,
  isButtonVisible = false,
  isHeaderCentered = false,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-[78px]">
        <div
          className={
            isHeaderCentered
              ? "flex flex-col justify-center items-center flex-grow-[1]"
              : ""
          }
        >
          <p className="text-[24px] font-[400] text-white italic">Offer</p>
          <h3 className="text-[50px] font-[800] text-white">
            We Offer Organic For You
          </h3>
        </div>
        {isButtonVisible && (
          <Button variant="funk_yellow" icon={<ArrowRight />}>
            View All Product
          </Button>
        )}
      </div>
      <div className="grid grid-cols-4 gap-[15px] mb-[122px]">{children}</div>
    </div>
  );
};
