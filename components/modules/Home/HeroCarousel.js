import React from "react";
import Image from "next/image";
import CarouselSection from "../../common/CarouselSection";
import styled from "styled-components";

const CarouselItem = getStyles();

export default () => {
  return (
    <>
      <CarouselSection>
        <CarouselItem>
          <div className="container-item-image">
            <Image src="/svg/city-life.svg" layout="fill" />
          </div>
          <div className="container-item-texts">
            <h1>
              Bienvenido <br /> al Municipio <br />
              <span className="highlighted">Simon Rodriguez</span>
            </h1>
            <h5>Y su plataforma digital para la gestion de nuestra ciudad.</h5>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="container-item-image">
            <Image src="/svg/all-in.svg" layout="fill" />
          </div>
          <div className="container-item-texts">
            <h1>
              Toda la <br />
              ciudad en la
              <br /> <span className="highlighted">Palma tu Mano</span>
            </h1>
            <h5>
              Accede a todos los programas y servicios de la ciudad desde un
              solo lugar.
            </h5>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="container-item-image">
            <Image src="/svg/develop.svg" layout="fill" />
          </div>
          <div className="container-item-texts">
            <h1>
              Innovamos <span className="highlighted">Continuamente</span>
            </h1>
            <h5>
              Para ser la mejor plataforma de gestion municipal en el pais.
            </h5>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="container-item-image">
            <Image src="/svg/listen.svg" layout="fill" />
          </div>
          <div className="container-item-texts">
            <h1>
              Tu Opinion <br />
              <span className="highlighted">SI Importa</span>
            </h1>
            <h5>
              Como Tigrense podras participar activamente a mejorar nuestra
              ciudad.
            </h5>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="container-item-image">
            <Image src="/svg/person.svg" layout="fill" />
          </div>
          <div className="container-item-texts">
            <h1>
              Se Parte de el <br />
              <span className="highlighted">Gran Cambio</span>
            </h1>
            <h5>Y participa en el renacimiento de nuestra gran ciudad</h5>
          </div>
        </CarouselItem>
      </CarouselSection>
    </>
  );
};

function getStyles() {
  return styled.div`
    position: relative;
    width: 100%;
    height: 75vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;

    .highlighted {
      color: ${(props) => props.theme.colors.primary};
      text-shadow: 0px 0px 5px ${(props) => props.theme.colors.secondary};
    }
    .container-item-image {
      z-index: 0;
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;

      @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        width: 100%;
      }

      & > span img {
        width: 70% !important;
        height: 100%;
        min-width: unset !important;
        margin: 0 !important;
        margin-left: auto !important;

        @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
          width: 100%;
          filter: blur(2px);
          margin: auto;
        }
      }
    }
    .container-item-texts {
      z-index: 2;
      position: absolute;
      width: 50%;

      @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        width: 100%;
      }

      h1 {
        font-size: 3.5rem;
        font-family: "Open Sans", sans-serif;
        text-transform: uppercase;
        font-weight: 800;
        text-align: left;
        text-shadow: 0px 0px 5px #fff;
        line-height: 1;
        width: 80%;
        @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
          font-size: 3rem;
          text-align: center;
          margin: 0 auto;
        }
      }
      h5 {
        text-shadow: 0px 0px 5px #fff;
        font-size: 1.5rem;
        text-align: left;
        width: 70%;
        @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
          font-size: 1.2rem;
          text-align: center;
          margin: 0 auto;
        }
      }
    }
  `;
}
