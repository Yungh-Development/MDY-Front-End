import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CarouselImgs } from "../Constants";

export const CarouselSlide = () => (
  <Carousel autoPlay emulateTouch infiniteLoop centerMode>
    <div className="items-center justify-center">
      <img alt="" className="" src={CarouselImgs.photo01} />
      <p className="legend">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
    </div>
    <div>
      <img alt="" src={CarouselImgs.photo02} />
      <p className="legend">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
    </div>
    <div>
      <img alt="" src={CarouselImgs.photo03} />
      <p className="legend">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
    </div>
  </Carousel>
);
