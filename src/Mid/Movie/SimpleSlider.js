import React from "react";
import Slider from "react-slick";
import { MovieIcon } from "../MovieIcon";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <Slider {...settings}>
      <div>
      <MovieIcon/>
      </div>
    </Slider>
  );
}