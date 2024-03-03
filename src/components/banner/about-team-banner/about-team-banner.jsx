import React from "react";

export const AboutTeamBanner = ({ children }) => {
  return (
    <div>
      <div className="flex flex-col items-center gap-[15px]">
        <p className="text-arapawa text-[24px] font-[400] italic">Team</p>
        <h3 className="text-arapawa text-[50px] font-[800]">
          Our Organic Experts
        </h3>
        <p className="text-p w-[800px] text-center mb-[50px]">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-[20px]">{children}</div>
    </div>
  );
};
