import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { Button } from "../../common/buttons";
import {
  FaCalendarPlus,
  FaShareSquare,
  FaPhoneAlt,
  FaLaptopHouse,
  FaMoneyCheckAlt,
  FaQrcode,
  FaClock,
} from "react-icons/fa";

const events = [
  {
    name: "Gran Evento de Ejemplo",
    description:
      "lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor ametlorem ppsum dolor sit ametlorem ipsum dolor sit",
    type: "paid",
    date: "24/Ene",
  },
  {
    name: "Gran Evento de Ejemplo",
    description:
      "lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor ametlorem ppsum dolor sit ametlorem ipsum dolor sit",
    type: "paid",
    date: "05/Feb",
  },
  {
    name: "Gran Evento de Ejemplo",
    description:
      "lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor ametlorem ppsum dolor sit ametlorem ipsum dolor sit",
    type: "paid",
    date: "12/Feb",
  },
];

const EventListContainer = getStyles();

const EventList = () => {
  return (
    <EventListContainer>
      <div className="event-list-img">
        <Image
          src="/img/events.jpg"
          alt="Event List"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </div>
      <div className="event-list">
        <h2>PROXIMOS EVENTOS </h2>
        <div className="list-info-container">
          <h3>
            RESERVA EN 1 MINUTO <FaClock fontSize="1.5rem" />
          </h3>
          <div className="list-info-steps">
            {" "}
            <div className="info-steps-one">
              <FaLaptopHouse fontSize="3.5rem" />
              <h3>INICIA </h3>
              <h6>Sesion con tu Cuenta</h6>
            </div>
            <div className="info-steps-two">
              <FaMoneyCheckAlt fontSize="3.5rem" />
              <h3>ADQUIERE</h3>
              <h6>Tu entrada al evento</h6>
            </div>
            <div className="info-steps-three">
              <FaQrcode fontSize="3.5rem" />
              <h3>GUARDA</h3>
              <h6>Tu ticket digital QR </h6>
            </div>
          </div>{" "}
          <div className="list-info-content">
            <h2>PROMOCIONA TU EVENTO</h2>
            <p>
              La siguiente lista posee los primeros 4 eventos que se haran en
              nuestra ciudad. Puedes obtener informacion como fecha, lugar,
              horarios y reservar o confirmar asistencia desde esta misma
              plataforma.
            </p>
            <div className="list-info-buttons">
              <Button fontSize="1.1rem" bgColor="#ffc107">
                <Link href="/promocionar-evento">Promocionar mi Evento</Link>
              </Button>
              <Button fontSize="1.1rem">
                <Link href="/promocionar-evento">Ver Agenda Municipal</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="event-list-events">
          {events.map((event) => (
            <div className="list-events-item">
              <div className="events-item-buttons">
                <FaCalendarPlus size="1.6rem" />
                <FaShareSquare size="1.6rem" />
                <FaPhoneAlt size="1.6rem" />
              </div>
              <div className="events-item-date">
                <h2>
                  <strong>{event.date.split("/")[0]} </strong>
                  <br />
                  <small>{event.date.split("/")[1]}</small>
                </h2>
              </div>
              <div className="events-item-content">
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                {/*
                   *<FlatButton>
                  {event.type === "paid"
                    ? "Reservar Entrada"
                    : "Confirmar Asistencia"}
                </FlatButton>
                */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </EventListContainer>
  );
};
export default EventList;

function getStyles() {
  return styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 90vh;
    .event-list-img {
      z-index: 1;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      span img {
        filter: grayscale(40%) blur(2px);
      }
    }

    .event-list {
      z-index: 2;
      width: 100%;
      height: inherit;
      padding: 3rem 0rem;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      background-color: #1d2c41b3;
      & > h2 {
        width: 100%;
        margin-bottom: 2rem;
        text-align: center;
        color: #fff;
        font-weight: 600;
      }
      .event-list-container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .list-info-steps {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        margin-bottom: 3.2rem;
        svg {
          fill: #fff;
        }
        & > div {
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
          color: #fff;

          h3 {
            text-align: center;
            font-size: 1.2rem;
            margin-bottom: 0rem;
          }
        }
        .info-steps-one,
        .info-steps-two {
          position: relative;
        }
        .info-steps-one::after,
        .info-steps-two::after {
          content: "";
          width: 70px;
          border-bottom: solid 1px #fff;
          position: absolute;
          left: 85%;
          top: 40%;
          z-index: 1;
        }
      }
      .list-info-container {
        justify-content: space-between;
      }
      .list-info-container h3 {
        color: ${(props) => props.theme.colors.primary};
        font-size: 1.8rem;
        font-weight: 600;
        text-align: center;
        margin-bottom: 2rem;
        & > svg {
          margin-bottom: 0.5rem;
        }
      }
    }
    .list-info-content {
      width: 100%;
      height: fit-content;
      max-width: 512px;
      padding: 1.6rem;
      padding-bottom: 0.4rem;
      border-radius: 5px;
      background-color: ${(props) => props.theme.colors.secondary};
      h2 {
        color: ${(props) => props.theme.colors.text};
        font-weight: 600;
        font-size: 2.2rem;
        text-align: center;
      }
      p {
        width: 90%;
        margin: 0 auto 1rem;
        color: ${(props) => props.theme.colors.text};
        line-height: 1;
        font-size: 1.05rem;
      }

      .list-info-buttons {
        display: flex;
        justify-content: space-around;
        margin: 1.2rem 0rem;
      }

      @media (max-width: 1024px) {
        margin-bottom: 3rem;
      }
    }
    .event-list-events {
      z-index: 2;
      margin-left: 1rem;
      width: 50%;
      max-width: 512px;
      .list-events-item {
        position: relative;
        display: flex;
        margin-bottom: 1rem;
        border-radius: 5px;
        box-shadow: 0px 0px 5px #333;
        overflow: hidden;
        background-color: #fff;

        .events-item-buttons {
          position: absolute;
          top: 0;
          right: 0;
          padding-right: 0.8rem;
          display: flex;
          height: 100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          svg {
            fill: ${(props) => props.theme.colors.primary};
            margin-bottom: 0.5rem;
          }
        }
        .events-item-date {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 25%;
          background-color: ${(props) => props.theme.colors.primary};
          h2 {
            line-height: 1;
            margin: 0;
          }
          small {
            font-size: 1.5rem;
          }
        }
        .events-item-content {
          width: 65%;
          padding: 1rem 1rem;
          padding-bottom: 0.1rem;
          h3 {
            margin: 0 0 0.5rem 0;
            font-size: 1.5rem;
            color: ${(props) => props.theme.colors.textDarken};
          }
          p {
            line-height: 1.1;
            width: 95%;
          }
        }
      }
    }
  `;
}
