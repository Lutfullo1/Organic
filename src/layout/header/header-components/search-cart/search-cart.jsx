import React from "react";
import { Input } from "../../../../components/ui/input";
import { SearchIcon } from "../../../../assets/icons/search-icon";
import { CartIcon } from "../../../../assets/icons/cart-icon";

export const SearchCart = () => {
  return (
    <div className="flex items-center gap-[10px]">
      <form className="relative">
        <input
          type="text"
          className="px-[10px] py-[18px] flex items-center gap-[10px] text-[18px] font-medium bg-grey border rounded-[36px] outline-none"
        />
        <span className="absolute top-1/2 -translate-y-1/2 right-2">
          <SearchIcon />
        </span>
      </form>
      <div className="flex items-center gap-[5px] border-[2px] rounded-[36px] px-[5px] py-[2px]">
        <CartIcon />
        <p className="text-[18px] font-[600] text-arapawa">Cart (0)</p>
      </div>
    </div>
  );
};
