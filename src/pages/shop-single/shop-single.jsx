import React from "react";
import { AboutHeroBanner } from "../../components/banner/about-hero-banner/about-hero-banner";
import { shopSingleHeroData } from "../../data/data";
import { productData } from "../../data/data";

import { useParams } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { ArrowRight } from "../../assets/icons/arrow-right";

import { ProductBanner } from "../../components/banner/product-banner/product-banner";
import { ProductCard } from "../../components/cards/product-card/product-card";
import { Link } from "react-router-dom";
import { useScrollTop } from "../../hooks/useScrollTop";

export const ShopSingle = () => {
  const params = useParams();
  useScrollTop(500);
  let result = productData.find((obj) => obj.id === Number(params.slug));

  return (
    <>
      <div>
        {shopSingleHeroData.map((item) => (
          <AboutHeroBanner
            key={item.id}
            img={item.img}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
      <div className="container">
        <div className="flex items-center justify-center gap-[80px] my-[50px]">
          <div className="border rounded-[30px] px-[20px] py-[20px] shadow-md p-4 transition-transform transform hover:-translate-y-1 hover:shadow-lg">
            <img src={result.img} alt="" />
          </div>
          <div className="w-[550px]">
            <h3 className="text-arapawa text-[40px] font-[600]">
              {result.title}
            </h3>
            <img src={result.img1} alt="" />
            <p className="text-arapawa text-[25px] font-[700]">
              {result.price}
            </p>
            <p className="text-p mt-[25px]">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className="flex items-center gap-[10px] mt-[35px]">
              <p className="text-arapawa text-[20px] font-[700]">Quantity:</p>
              <span className="py-[18px] px-[40px] border rounded-[16px] border-arapawa text-arapawa text-[20px] font-[700]">
                1
              </span>
              <Button variant="arapawa" icon={<ArrowRight />}>
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[20px]">
          <div className="flex items-center gap-[20px]">
            <Button variant="arapawa">Product Description</Button>
            <Button variant="transparent">Additional Info</Button>
          </div>
          <div className="w-[900px]">
            <p className="text-p text-center">
              Welcome to the world of natural and organic. Here you can discover
              the bounty of nature. We have grown on the principles of health,
              ecology, and care. We aim to give our customers a healthy
              chemical-free meal for perfect nutrition. It offers about 8–10%
              carbs. Simple sugars — such as glucose and fructose — make up 70%
              and 80% of the carbs in raw.
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-[70px]">
        <h4 className="text-center text-arapawa text-[50px] font-[800] mb-[40px]">
          Related Products
        </h4>
        <ProductBanner isButtonVisible={false} isHeadingVisible={false}>
          {productData.slice(5, 9).map((item) => (
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
    </>
  );
};
