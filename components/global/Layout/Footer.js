import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { FlatButton, Button } from "../../common/buttons";
import { FaCopyright } from "react-icons/fa";
import { GiTigerHead } from "react-icons/gi";
const FooterContainer = getStyles();

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-cta">
        <Image src="/svg/join.svg" layout="fill" objectFit="contain" />
        <div className="footer-cta-title">
          <h1>AUN NO TE HAS REGISTRADO? </h1>
          <p>Crea tu pasaporte tigrense en menos de 2 minutos</p>
        </div>
        <form className="footer-cta-form">
          <GiTigerHead size="2rem" />
          <input
            type="number"
            placeholder="Cedula de Identidad"
            max="99999999"
          />
          <Button
            bgColor={(props) => props.theme.colors.secondary}
            fontSize="1rem"
          >
            REGISTRAME
          </Button>
        </form>
      </div>
      <div className="footer-content">
        <div className="footer-content-logo">
          <Image
            src="/img/municipio-logo.png"
            layout="fixed"
            width="56"
            height="56"
            quality="100"
          />
          <h4>Municipio Simon Rodriguez</h4>
        </div>
        <div className="footer-content-list">
          <ul>
            <h5>Principales Servicios</h5>
            <li>
              <Link href="/consulta-popular">Consulta Popular</Link>
            </li>
            <li>
              <Link href="/tramites-servicios">Tramites y Servicios</Link>
            </li>
            <li>
              <Link href="/tigrecoin">TigreCoin</Link>
            </li>
          </ul>
        </div>
        <div className="footer-content-list">
          <ul>
            <h5>Recursos e Informacion </h5>
            <li>
              <Link href="/faq">Preguntas Frecuentes</Link>
            </li>
            <li>
              <Link href="/docs">Documentacion</Link>
            </li>
            <li>
              <Link href="/asistencia">Centro de Asistencia</Link>
            </li>
            <li>
              <Link href="/report-bug">Reportar Error</Link>
            </li>
          </ul>
        </div>
        <div className="footer-content-list">
          <ul>
            <h5>Sobre Nosotros</h5>
            <li>
              <Link href="/about-us">Quienes Somos</Link>
            </li>
            <li>
              <Link href="/our-mission">Nuestra Mision</Link>
            </li>
            <li>
              <Link href="/proximos-proyectos">Proximos Proyectos</Link>
            </li>
          </ul>
        </div>
        <div className="footer-content-list">
          <ul>
            <h5>Redes Sociales</h5>
            <li>
              <Link href="#!">Facebook</Link>
            </li>
            <li>
              <Link href="#!">Twitter</Link>
            </li>
            <li>
              <Link href="#!">Linkedin</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-foot">
        <div className="footer-foot-rights">
          <span>
            {" "}
            <FaCopyright size="1.1rem" /> 2021 Municipio Simon Rodriguez
          </span>
        </div>
        <div className="footer-foot-rights">
          <FlatButton>
            <a href="https://tebai.netlify.com">Contactame!</a>
          </FlatButton>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

function getStyles() {
  return styled.footer`
    position: relative;
    width: 100%;
    display: flex;
    margin-top: 6rem;
    padding: 0% 0%;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.backgroundDarken};

    .footer-cta {
      position: relative;
      display: flex;
      justify-content: left;
      align-items: center;
      top: -65px;
      padding: 1rem 3rem;
      margin-bottom: 3rem;
      width: 100%;
      max-width: 1024px;
      min-height: 130px;
      background-color: ${(props) => props.theme.colors.primary};
      border-radius: 10px;
      box-shadow: 0px 0px 3px #cecfd2;

      h1 {
        width: fit-content;
        border-bottom: 2px solid;
        margin-bottom: 0.2rem;
        color: #fff;
        font-size: 2rem;
        font-weight: 600;
      }
      p {
        margin: 0;
        font-size: 1.15rem;
        font-weight: 600;
        color: #fff;
      }

      .footer-cta-title {
        z-index: 2;
      }
      .footer-cta-form {
        position: relative;
        z-index: 2;
        display: flex;
        width: 30%;
        margin-left: auto;
        flex-direction: column;
        align-items: center;
        svg {
          z-index: 2;
          position: absolute;
          top: 2px;
          right: 2px;
          background-color: #fff;
        }
        input {
          position: relative;
          width: 100%;
          margin-bottom: 8px;
          padding: 6px 8px;
          border: none;
          border-radius: 2px;
          box-shadow: 0px 0px 3px #333;
        }

        button {
          width: 100%;
        }
      }
    }

    .footer-content {
      z-index: 3;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: top;
      width: 100%;
      max-width: 1024px;
      margin-bottom: 2rem;

      .footer-content-logo {
        display: flex;
        align-items: center;
        width: 100%;
        margin-bottom: 2rem;
        h4 {
          display: block;
          margin: 0 0 0 8px;
          font-weight: 500;
          font-size: 1rem;
          color: #fff;
        }
      }

      .footer-content-list {
        width: 25%;
        padding: 0;
        h5 {
          color: #9ea2a9;
          font-size: 0.8rem;
          font-weight: 400;
        }
        li {
          list-style: none;
          color: #cfd2d6;
        }
      }
    }
    .footer-foot {
      border-top: 1.5px solid #4e5a6a;
      width: 100%;
      max-width: 1024px;
      display: flex;
      justify-content: space-between;
      padding: 1rem 0rem;
      .footer-foot-rights {
        margin-top: 1rem;
        color: #fff;
        span svg {
          margin-bottom: 3px;
        }
      }
    }
  `;
}
