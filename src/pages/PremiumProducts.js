import React from "react";
import { useFetchItemsFromAllStores } from "../helpers/api";
import ProductSlide from "../components/ProductsSlide";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import "../App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const PrevArrow = (props) => {
  const { onClick } = props;

  return (
    <div onClick={onClick} className="slick-arrow prev-arrow">
      <BsArrowLeft />
    </div>
  );
};
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="slick-arrow next-arrow">
      <BsArrowRight />
    </div>
  );
};

export const Slidersettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const PremiumProducts = () => {
  const { data, error, isLoading, isSuccess } = useFetchItemsFromAllStores();
  return (
    <>
      <h1>Premium store</h1>
      {isLoading && "Loading..."}
      {error && <h2>Somethig went wrong</h2>}
      <Slider {...Slidersettings}>
        {isSuccess &&
          data &&
          data
            .filter((item) => item.type === "featured")
            .map((product) => {
              const {
                uid,
                title,
                price,
                description,
                defaultImage,
                images,
                colors,
              } = product;
              return (
                <ProductSlide
                  key={uid}
                  product={product}
                  id={uid}
                  title={title}
                  description={description}
                  defaultImage={defaultImage}
                  images={images}
                  price={price}
                  colors={colors}
                ></ProductSlide>
              );
            })}
      </Slider>
    </>
  );
};

export default PremiumProducts;
