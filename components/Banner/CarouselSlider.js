import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Image from 'next/image';
const CarouselSlider = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <Image src={slide.image} alt={`Slide ${index}`} />
          
          <h3>{slide.title}</h3>
          <p>{slide.description}</p>
        </div>
      ))}
    </Slider>
  );
};

export default CarouselSlider;
