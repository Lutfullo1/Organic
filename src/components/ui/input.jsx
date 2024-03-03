import React from "react";
import clsx from "clsx";

export const Input = React.forwardRef(
  (
    {
      name,
      placeholder,
      value,
      onChange,
      id,
      type,
      label,
      error,
      helperText,
      variant,
      icon: Icon,
    },
    ref
  ) => {
    return (
      <div>
        {label && <label htmlFor={id}>{label}</label>}
        <input
          className={clsx(
            "px-[10px] py-[16px] flex items-center gap-[10px] text-[18px] font-medium bg-grey border outline-none",
            {
              "color-[rgb(171, 171, 171)] rounded-[36px]": variant === "search",
              "color-[rgb(171, 171, 171)] px-[23px] py-[28px] bg-white":
                variant === "search",
            }
          )}
          ref={ref}
          value={value}
          onChange={onChange}
          name={name}
          id={id}
          placeholder={placeholder}
          type={type}
        />
        {Icon ? Icon : ""}
      </div>
    );
  }
);
