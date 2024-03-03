import React from "react";
import { Logo } from "../../assets/icons/logo";
import { Socials } from "../../assets/icons/socials";
import newsletter from "../../assets/img/newsletter.png";
import { Button } from "../../components/ui/button";

export const Footer = () => {
  return (
    <>
      <div className="container mt-[150px] mb-[90px]">
        <div className="relative">
          <img src={newsletter} alt="" />
          <div className="flex items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] justify-between w-[800px]">
            <p className="text-white font-[700] text-[30px]">
              Subscribe to our Newsletter
            </p>
            <form className="flex items-center gap-[10px]">
              <input
                className="w-[300px] py-[20px] px-[20px] rounded-[16px] outline-none"
                type="text"
                placeholder="Your Email Address"
              />
              <Button variant="arapawa">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
      <div className="container flex justify-center gap-[50px] mb-[50px]">
        <div className="flex flex-col gap-[32px]">
          <p className="text-right text-arapawa font-[700] text-[30px]">
            Contac Us
          </p>
          <ul className="flex flex-col items-end">
            <li className="text-[18px] font-medium text-city_rain">Email</li>
            <p>needhelp@Organia.com</p>
          </ul>
          <ul className="flex flex-col items-end">
            <li className="text-[18px] font-medium text-city_rain">Phone</li>
            <p>666 888 888</p>
          </ul>
          <ul className="flex flex-col items-end">
            <li className="text-[18px] font-medium text-city_rain">Address</li>
            <p>88 road, borklyn street</p>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-[26px] border-r-[2px] border-l-[2px]  px-[40px] w-[550px]">
          <Logo />
          <p className="text-center ">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing
          </p>
          <span className="cursor-pointer">
            <Socials />
          </span>
        </div>
        <div>
          <p className="text-right text-arapawa font-[700] text-[30px] mb-[30px]">
            Utility Pages
          </p>
          <ul className="flex flex-col gap-[25px] cursor-pointer">
            <li>Style Guide</li>
            <li>404 Not Found</li>
            <li>Password Protected</li>
            <li>Licences</li>
            <li>Changelog</li>
          </ul>
        </div>
      </div>
    </>
  );
};
