import React from "react";
import { Logo } from "../../../../assets/icons/logo";
import { headerPath } from "../../../../data/data";
import { Link } from "react-router-dom";

export const HeaderPath = () => {
  return (
    <div className="flex items-center gap-[80px]">
      <Logo />
      <ul className="flex items-center gap-[30px]">
        {headerPath.map((item) => (
          <li key={item.path}>
            <Link
              className="font-sans text-arapawa font-[700] text-[20px]"
              to={item.path}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
