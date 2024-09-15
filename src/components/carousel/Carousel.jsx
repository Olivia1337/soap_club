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
        <header className="carousel_header">
          <div className="buttons_row">
            <FaAnglesLeft
              onClick={handlePrevClick}
              aria-label="Previous slide"
              size={30}
            />

            <h2>{title}</h2>

            <FaAnglesRight
              onClick={handleNextClick}
              aria-label="next slide"
              size={30}
            />
          </div>
        </header>
        <Slider {...settings} ref={sliderRef}>
          {newProducts.map((product) => (
            <div className="box" key={product.id}>
              <Link
                to={`/product/${product.id}`}
                className="box_overlay"
                aria-label={`View details for ${product.name}`}
              >
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
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
