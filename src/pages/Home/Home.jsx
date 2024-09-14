import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../../components/hero/Hero";
import Featured from "../../components/featured/Featured";
import Banner from "../../components/banner/Banner";
import Carousel from "../../components/carousel/Carousel";

function Home() {
  const featuredRef = useRef(null);
  const carouselPageRef = useRef(null);
  const navigate = useNavigate();

  const scrollToFeatured = () => {
    if (featuredRef.current) {
      featuredRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCarousel = () => {
    if (carouselPageRef.current) {
      carouselPageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToProducts = () => {
    navigate("/products");
  };

  return (
    <main>
      <Hero
        scrollToFeatured={scrollToFeatured}
        scrollToCarousel={scrollToCarousel}
        goToProducts={goToProducts}
      />
      <Featured ref={featuredRef} />
      <Banner onExploreClick={goToProducts} />
      <Carousel ref={carouselPageRef} title={"New Products"} />
    </main>
  );
}

export default Home;
