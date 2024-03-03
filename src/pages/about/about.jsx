import React from "react";
import { AboutHeroBanner } from "../../components/banner/about-hero-banner/about-hero-banner";
import { aboutHeroData, productData } from "../../data/data";

import { AboutUsBanner } from "../../components/banner/about-us-banner/about-us-banner";
import { AboutUsCard } from "../../components/cards/offer-card/about-us-card";
import { aboutPageAboutData } from "../../data/data";

import { chooseData } from "../../data/data";

import { AboutServiceBanner } from "../../components/banner/about-service-banner/about-service-banner";
import { AboutServiceCard } from "../../components/cards/about-service-card/about-service-card";
import { serviceData } from "../../data/data";

import { OfferOrganikBanner } from "../../components/banner/offer-organic-banner/offer-organik-banner";
import { OfferOrganikCard } from "../../components/cards/offer-organik-card/offer-organik-card";

import { AboutTeamBanner } from "../../components/banner/about-team-banner/about-team-banner";
import { AboutTeamCard } from "../../components/cards/about-team-card/about-team-card";
import { teamData } from "../../data/data";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <div>
        {aboutHeroData.map((item) => (
          <AboutHeroBanner
            key={item.id}
            img={item.img}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>

      {/* About us */}
      <div className="bg-[rgb(249, 248, 248)]">
        <div className="container my-[60px]">
          <AboutUsBanner>
            {aboutPageAboutData.map((item) => (
              <AboutUsCard
                key={item.id}
                img={item.img}
                title={item.title}
                text={item.text}
                des={item.des}
              />
            ))}
          </AboutUsBanner>
        </div>
      </div>

      <div className="bg-dr_white py-[40px]">
        {/* Choose */}
        {chooseData.map((item) => (
          <div className="container flex justify-between mt-[80px]">
            <div className="flex flex-col gap-[15px] w-[600px]">
              <p className="text-arapawa text-[24px] font-[400] italic">
                {item.text}
              </p>
              <h3 className="text-arapawa text-[50px] font-[800]">
                {item.title}
              </h3>
              <p className="text-p">{item.des}</p>
              <div className="bg-heavy_sugar text-center w-[200px] border rounded-[20px] py-[10px] px-[10px]">
                <p className="text-p">{item.subtitle}</p>
              </div>
              <p className="text-p">{item.subtext}</p>
              <div className="bg-heavy_sugar text-center w-[200px] border rounded-[20px] py-[10px] px-[10px]">
                <p className="text-p">{item.subtitle}</p>
              </div>
              <p className="text-p">{item.subtext}</p>
            </div>
            <div className="w-[600px]">
              <img className="rounded-[16px]" src={item.img} alt="" />
            </div>
          </div>
        ))}

        {/* Serviec */}

        <div className="container my-[70px]">
          <AboutServiceBanner>
            {serviceData.map((item) => (
              <AboutServiceCard
                key={item.id}
                img={item.img}
                title={item.title}
                text={item.text}
              />
            ))}
          </AboutServiceBanner>
        </div>
      </div>

      {/* team */}
      <div className="container my-[70px]">
        <AboutTeamBanner>
          {teamData.map((item) => (
            <AboutTeamCard
              key={item.id}
              img={item.img}
              name={item.name}
              text={item.text}
            />
          ))}
        </AboutTeamBanner>
      </div>

      {/* Offer */}
      <div className="bg-arapawa py-[50px]">
        <div className="container my-[70px]">
          <OfferOrganikBanner isHeaderCentered={true}>
            {productData.slice(3, 7).map((item) => (
              <Link to={`/shop-single/${item.id}`}>
                <OfferOrganikCard
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  isButtonVisible={false}
                />
              </Link>
            ))}
          </OfferOrganikBanner>
        </div>
      </div>
    </>
  );
};
