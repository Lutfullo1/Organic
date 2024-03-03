import React from "react";
import { AboutHeroBanner } from "../../components/banner/about-hero-banner/about-hero-banner";
import { shopHeroData } from "../../data/data";
import { ProductBanner } from "../../components/banner/product-banner/product-banner";
import { ProductCard } from "../../components/cards/product-card/product-card";
import { productData } from "../../data/data";
import { Link } from "react-router-dom";
import { useScrollTop } from "../../hooks/useScrollTop";

export const Shop = () => {
  useScrollTop();
  return (
    <>
      <div>
        {shopHeroData.map((item) => (
          <AboutHeroBanner
            key={item.id}
            img={item.img}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>

      <div className="container my-[70px]">
        <ProductBanner isButtonVisible={false} isHeadingVisible={false}>
          {productData.map((item) => (
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
