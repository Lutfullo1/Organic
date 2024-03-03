import React from "react";
import { heroBannerData } from "../../data/data";
import { HeroBanner } from "../../components/banner/hero-banner/hero-banner";

import { OfferBanner } from "../../components/banner/offer-banner/offer-banner";
import { OfferCard } from "../../components/cards/offer-card/offer-card";
import { offerData1 } from "../../data/data";
import { offerData2 } from "../../data/data";

import { AboutUsBanner } from "../../components/banner/about-us-banner/about-us-banner";
import { AboutUsCard } from "../../components/cards/offer-card/about-us-card";
import { aboutUsData } from "../../data/data";

import { ProductBanner } from "../../components/banner/product-banner/product-banner";
import { ProductCard } from "../../components/cards/product-card/product-card";
import { productData } from "../../data/data";

import { CustomerBanner } from "../../components/banner/customer-banner/customer-banner";
import { consumerData } from "../../data/data";

import { OfferOrganikBanner } from "../../components/banner/offer-organic-banner/offer-organik-banner";
import { OfferOrganikCard } from "../../components/cards/offer-organik-card/offer-organik-card";
import { organicData } from "../../data/data";

import { ecoData } from "../../data/data";

import organicJuice from "../../assets/img/organic-juice.jpeg";
import organicFood from "../../assets/img/organic-food.png";
import nutsCookies from "../../assets/img/nuts-cookis.jpeg";
import { Button } from "../../components/ui/button";
import { ArrowRight } from "../../assets/icons/arrow-right";

import news1 from "../../assets/img/news1.png";
import news2 from "../../assets/img/news2.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      {/* Hero */}
      <div>
        {heroBannerData.map((item) => (
          <HeroBanner
            key={item.id}
            img={item.img}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
      {/* Offer */}
      <div className="container">
        <OfferBanner>
          {offerData1.map((item) => (
            <OfferCard
              key={item.id}
              title={item.title}
              img={item.img}
              text={item.text}
            />
          ))}

          {offerData2.map((item) => (
            <OfferCard
              key={item.id}
              title={item.title}
              img={item.img}
              text={item.text}
            />
          ))}
        </OfferBanner>
      </div>

      {/* About Us */}
      <div className="bg-[rgb(249, 248, 248)]">
        <div className="container my-[60px]">
          <AboutUsBanner>
            {aboutUsData.map((item) => (
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

      {/* Product */}
      <div className="container my-[70px]">
        <ProductBanner isButtonVisible={true} isHeadingVisible={true}>
          {productData.slice(0, 8).map((item) => (
            <Link to={`/shop-single/${item.id}`}>
              <ProductCard
                key={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
                img1={item.img1}
              />
            </Link>
          ))}
        </ProductBanner>
      </div>
      {/* Consumer */}
      <div>
        {consumerData.map((item) => (
          <CustomerBanner
            key={item.id}
            img={item.img}
            title={item.title}
            text={item.text}
            des={item.des}
            starImg={item.starImg}
            bgImg={item.bgImg}
            name={item.name}
          />
        ))}
      </div>

      {/* Offer */}
      <div className="bg-arapawa py-[50px]">
        <div className="container my-[70px]">
          <OfferOrganikBanner isButtonVisible={true}>
            {productData.slice(8, 12).map((item) => (
              <Link to={`/shop-single/${item.id}`}>
                <OfferOrganikCard
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  img1={item.img1}
                />
              </Link>
            ))}
          </OfferOrganikBanner>
        </div>
      </div>

      {/* Eco */}
      <div className="bg-[rgb(249, 248, 248)]">
        <div className="container my-[60px]">
          <AboutUsBanner>
            {ecoData.map((item) => (
              <AboutUsCard
                key={item.id}
                img={item.img}
                title={item.title}
                text={item.text}
                des={item.des}
                isButtonVisible={false}
              />
            ))}
          </AboutUsBanner>
        </div>
      </div>

      {/* Organic */}
      <div className="bg-heavy_sugar">
        <div className="container flex gap-[20px] py-[80px]">
          <div className="relative w-[500px]">
            <img src={organicJuice} alt="" />
            <div className="bg-white py-[10px] px-[30px] rounded-[16px] absolute top-[170px] left-[125px] text-arapawa text-[25px] font-[500]">
              <p>Organic Juice</p>
            </div>
          </div>
          <div className="relative w-[525px]">
            <img src={organicFood} alt="" />
            <div className="bg-white py-[10px] px-[30px] rounded-[16px] absolute top-[170px] left-[125px] text-arapawa text-[25px] font-[500]">
              <p>Organic Food</p>
            </div>
          </div>
          <div className="relative w-[500px]">
            <img src={nutsCookies} alt="" />
            <div className="bg-white py-[10px] px-[30px] rounded-[16px] absolute top-[170px] left-[125px] text-arapawa text-[25px] font-[500]">
              <p>Nuts Cookies</p>
            </div>
          </div>
        </div>
      </div>

      {/* News */}
      <div className="container pt-[80px]">
        <div className="flex justify-between items-center">
          <div className="w-[780px]">
            <p className="text-arapawa text-[24px] font-[400] italic">News</p>
            <h3 className="text-arapawa text-[50px] font-[800]">
              Discover weekly content about organic food, & more
            </h3>
          </div>
          <div>
            <Button variant="transparent" icon={<ArrowRight />}>
              More News
            </Button>
          </div>
        </div>
        <div className="flex gap-[20px] my-[50px]">
          <div className="relative">
            <img src={news1} alt="" />
            <div className="flex flex-col gap-[10px] w-[550px] absolute bottom-[-60px] left-[35px] bg-white py-[40px] px-[50px] rounded-[16px] shadow-lg">
              <p className="text-arapawa text-[18px] font-[400]">
                By Rachi Card
              </p>
              <p className="text-arapawa text-[25px] font-[800]">
                The Benefits of Vitamin D & How to Get It
              </p>
              <p className="text-arapawa text-[18px] font-[400]">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
              <div>
                <Button variant="funk_yellow" icon={<ArrowRight />}>
                  Read More
                </Button>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={news2} alt="" />
            <div className="flex flex-col gap-[10px] w-[550px] absolute bottom-[-60px] left-[35px] bg-white py-[40px] px-[50px] rounded-[16px] shadow-lg">
              <p className="text-arapawa text-[18px] font-[400]">
                By Rachi Card
              </p>
              <p className="text-arapawa text-[25px] font-[800]">
                The Benefits of Vitamin D & How to Get It
              </p>
              <p className="text-arapawa text-[18px] font-[400]">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
              <div>
                <Button variant="funk_yellow" icon={<ArrowRight />}>
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
