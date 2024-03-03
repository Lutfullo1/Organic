import React from "react";
import clsx from "clsx";

export const Button = ({ variant, children, onClick, type, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        "px-[30px] py-[18px] flex items-center gap-[10px] text-[20px] font-[700] font-Roboto cursor-pointer text-center rounded-[16px]",
        {
          "bg-arapawa text-white hover:bg-white hover:text-arapawa hover:border-[1px] duration-500":
            variant === "arapawa",
          "bg-funky_yellow text-arapawa hover:bg-arapawa hover:text-funky_yellow hover:border duration-300":
            variant === "funk_yellow",
          "bg-transparent border-[2px] text-arapawa hover:bg-arapawa hover:text-funky_yellow duration-300":
            variant === "transparent",
        }
      )}
    >
      <span>{children}</span>
      {Icon ? Icon : ""}
    </button>
  );
};
