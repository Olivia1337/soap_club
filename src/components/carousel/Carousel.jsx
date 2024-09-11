import React, { forwardRef, useImperativeHandle, useRef } from "react";
import "./Carousel.css";
import Slider from "react-slick";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from "../../assets/products/products";
import { Link } from "react-router-dom";

const Carousel = forwardRef((props, ref) => {
  const sliderRef = useRef(null);
  const carouselPageRef = useRef(null);
  const { title } = props;
  const newProducts = products.filter((product) => product.new);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          width: "100%",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      if (carouselPageRef.current) {
        carouselPageRef.current.scrollIntoView({ behavior: "smooth" });
      }
    },
  }));

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section className="carousel_section" ref={carouselPageRef}>
      <div className="carousel">
        <div className="carousel_title">
          <FaAnglesLeft
            onClick={handlePrevClick}
            cursor={"pointer"}
            className="icon"
          />
          <h1>{title}</h1>
          <FaAnglesRight
            onClick={handleNextClick}
            cursor={"pointer"}
            className="icon"
          />
        </div>
        <Slider {...settings} ref={sliderRef}>
          {newProducts.map((product) => (
            <div className="box" key={product.id}>
              <Link to={`/product/${product.id}`} className="box_overlay">
                <h2>"{product.name}"</h2>
                <h3>{product.price}$</h3>
              </Link>
              <img src={product.image} alt={product.name} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
});

export default Carousel;
