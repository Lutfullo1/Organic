import React from "react";
import { Button } from "../../ui/button";
import { ArrowRight } from "../../../assets/icons/arrow-right";
import { Link } from "react-router-dom";

export const ProductBanner = ({
  children,
  isButtonVisible,
  isHeadingVisible,
}) => {
  return (
    <div>
      {isHeadingVisible && (
        <>
          <p className="text-center mb-[10px] text-[36px] font-[400] text-arapawa">
            Categories
          </p>
          <h2 className="text-center mb-[40px] text-[50px] font-[800] text-arapawa">
            Our Products
          </h2>
        </>
      )}
      <div className="grid grid-cols-4 gap-[15px] mb-[40px]">{children}</div>
      <div className="flex justify-center items-center">
        {isButtonVisible && (
          <Button variant="arapawa" icon={<ArrowRight />}>
            <Link to="/shop">Load More</Link>
          </Button>
        )}
      </div>
    </div>
  );
};
