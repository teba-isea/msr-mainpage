import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

const CarouselContainer = getStyles();

const CarouselSection = ({ children }) => {
  return (
    <CarouselContainer>
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000}
        transitionTime={700}
        emulateTouch={true}
        swipeable={true}
      >
        {children}
      </Carousel>
      <Image src="/svg/herowaves.svg" layout="fill" objectFit="contain" />
    </CarouselContainer>
  );
};

export default CarouselSection;

function getStyles() {
  return styled.div`
    position: relative;
    padding: 2rem 0rem 6rem 0rem;
    .carousel-container {
      width: 100%;
      min-height: 90vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    span img {
      position: absolute;
      bottom: -60% !important;
    }
  `;
}
