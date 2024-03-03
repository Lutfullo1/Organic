import React from "react";
import { HeaderPath } from "./header-components/header-path/header-path";
import { SearchCart } from "./header-components/search-cart/search-cart";

export const Header = () => {
  return (
    <div className="container flex items-center justify-between my-[69px] gap-[10px]">
      <HeaderPath />
      <SearchCart />
    </div>
  );
};
