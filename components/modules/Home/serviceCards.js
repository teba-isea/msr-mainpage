import { Button } from "../../common/buttons";
import Image from "next/image";
import styled from "styled-components";
import { GiTigerHead } from "react-icons/gi";
import {
  FaUniversity,
  FaAmbulance,
  FaGraduationCap,
  FaCity,
} from "react-icons/fa";

export const ServiceCardContainer = styled.div`
  position: relative;
  background-color: ${(props) => props.bgColor};
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin: 20px;
  padding: 18px 0px;
  overflow: hidden;
  width: 300px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  .tiger-ico {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    color: #1d2c41;
  }

  h2 {
    color: #fff;
    font-size: 1.8rem;
    font-weight: 600;
    margin-top: 0rem;
    margin-bottom: 0.2rem;
  }
  p {
    font-size: 0.98rem;
    font-weight: 400;
    text-align: center;
    color: #fff;

    width: 85%;
    line-height: 1;
    margin-bottom: 2rem;
  }
  .service-card-logo {
    position: relative;
    margin: 0 auto;
    svg {
      color: #ffffff73;
    }
  }
`;

export const ProceduresAndServices = ({ service, icon }) => (
  <ServiceCardContainer bgColor={"#ef732d"}>
    <GiTigerHead size="2.5rem" className="tiger-ico" />

    <div className="service-card-logo">
      <Image
        src="/svg/services.svg"
        layout="fixed"
        width="220"
        height="220"
        objectFit="contain"
      />
    </div>
    <h2>Tramites Y Servicios</h2>
    <p>
      Ahora puedes acceder y gestionar todos los servicios publicos del
      municipio desde esta misma plataforma sin salir de tu casa.
    </p>
    <Button fontSize="1.4rem" bgColor="#ff9900">
      <a href="/gestionar-servicios">Gestiona Ahora!</a>
    </Button>
  </ServiceCardContainer>
);

export const PopularConsultation = ({ service, icon }) => (
  <ServiceCardContainer bgColor={"#2590fa"}>
    <GiTigerHead size="2.5rem" className="tiger-ico" />

    <div className="service-card-logo">
      <Image
        src="/svg/voting.svg"
        layout="fixed"
        width="220"
        height="220"
        objectFit="contain"
      />
    </div>
    <h2>Consulta Ciudadana</h2>
    <p>
      Ahora tu tambien decidiras el futuro de El Tigre. Crear propuestas y
      muestra tu apoyo a otras. Participar en encuestas para ser escuchado
    </p>
    <Button fontSize="1.4rem">
      <a href="/consulta-ciudadana">Decidir ahora!</a>
    </Button>
  </ServiceCardContainer>
);

export const TigreCoin = ({ service, icon }) => (
  <ServiceCardContainer bgColor={"#83d988"}>
    <GiTigerHead size="2.5rem" className="tiger-ico" />

    <div className="service-card-logo">
      <Image
        src="/img/tc-logo.png"
        layout="fixed"
        width="220"
        height="220"
        objectFit="contain"
      />
    </div>
    <h2>TigreCoin Wallet</h2>
    <p>
      Invierte en la moneda oficial de la ciudad y crece junto a ella. Compra,
      vende y paga tus servicios con TigreCoin en todo Simon Rodriguez
    </p>
    <Button fontSize="1.4rem" bgColor="#519e52">
      <a href="/tigre-coin">Adquirir ahora!</a>
    </Button>
  </ServiceCardContainer>
);

export const ShareEvent = ({ service, icon }) => (
  <ServiceCardContainer bgColor={"#83d988"}>
    <GiTigerHead size="2.5rem" className="tiger-ico" />

    <div className="service-card-logo">
      <Image
        src="/img/tc-logo.png"
        layout="fixed"
        width="220"
        height="220"
        objectFit="contain"
      />
    </div>
    <h2>TigreCoin Wallet</h2>
    <p>
      Invierte en la moneda oficial de la ciudad y crece junto a ella. Compra,
      vende y paga tus servicios con TigreCoin en todo Simon Rodriguez
    </p>
    <Button fontSize="1.4rem" bgColor="#519e52">
      Adquirir ahora!
    </Button>
  </ServiceCardContainer>
);
