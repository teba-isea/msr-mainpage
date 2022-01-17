import React from "react";
import styled from "styled-components";
import Head from "next/head"
import Image from "next/image";
import { Button } from "../components/common/buttons";
import { FaStopwatch, FaHandPeace, FaMugHot } from "react-icons/fa";

const Error404Container = getStyles();

const E404 = () => {
  return (
    <Error404Container>
      <Head>
        <title>Gracias!!! - Municipio Simon Rodriguez</title>
      </Head>
      <h1>
        <span className="color-a">Gracias por </span>
        <span className="color-b">Visitar</span>{" "}
        <span className="color-c">Mi diseño</span>
      </h1>
      <h5>
        Esta es la primera vista de un proyecto que busca demostrar de manera{" "}
        <br /> practica un poco de mis habilidades como Desarrollador Web
      </h5>
      <p>
        Muchos gobiernos nacionales de todo el mundo se están mostrando
        ineficientes y lentos en respuesta a problemas de larga duración y
        cambios rápidos en las necesidades subyacentes de las personas. <br />
        <br />
        Ahora consideremos los gobiernos locales. Las ciudades como hemos visto
        en Singapour, podrian al menos en teoría ser genuinamente autonomas e
        independientes. Existen diferencias culturales grandes y muy reales
        entre ciudades, por lo cual es más fácil encontrar una sola ciudad donde
        haya interés público en adoptar una idea innovadora que convencer a todo
        un país para que la acepte.
        <br />
        <br />
        Existen desafíos y oportunidades muy reales en los bienes públicos
        locales, la planificación urbana, el transporte y muchos otros sectores
        en la gobernanza de las ciudades que podrían abordarse. Las ciudades
        tienen economías internas estrechamente cohesivas donde cosas como la
        adopción generalizada de criptomonedas podrían suceder de manera
        realista e independiente.
        <br />
        <br /> Además, es menos probable que los experimentos dentro de las
        ciudades conduzcan a resultados terribles porque las ciudades están
        supervisadas por gobiernos de alto nivel y porque las ciudades tienen
        una válvula de escape más fácil: las personas que no están contentas con
        lo que está sucediendo pueden salir más fácilmente.
        <br />
        <br />
        Así que, en general, parece que el nivel de gobierno local está muy
        infravalorado. Y las tecnologias de la informacion son ingrediente clave
        prometedor para un camino más abierto y participativo a seguir.
        <br />
        <br />
        <strong>
          "Nuestro sistema político se puede transformar, y no con subversión o
          destrucción, sino rediseñándolo con herramientas que Intenet nos
          ofrece hoy por hoy. Pero el desafió real es encontrar, diseñar, crear,
          empoderar los conectores que pueden innovar, transformar ruido y
          silencio en señal, y finalmente traer nuestras democracias al siglo
          21. No digo que sea fácil. Pero, por experiencia, sé que tenemos una
          verdadera oportunidad de hacer que funcione. Y en mi corazón, sé que
          definitivamente, vale la pena intentarlo. Gracias. "
          <br />
          <br />- Pia Mancini
        </strong>
      </p>
      <div className="error-404-image">
        <Image src="/svg/me.svg" layout="fill" />
      </div>
      <div className="error-404-stats">
        <div className="error-404-stat">
          <h3>
            <span className="color-a">
              <FaHandPeace />2
            </span>
          </h3>
          <h4 className="error-404-stat-title">Días Laborales</h4>
        </div>
        <div className="error-404-stat">
          <h3>
            <span className="color-b">
              <FaStopwatch />
              12
            </span>
          </h3>
          <h4 className="error-404-stat-title">Horas Invertidas</h4>
        </div>
        <div className="error-404-stat">
          <h3>
            <span className="color-c">
              <FaMugHot />
              240
            </span>
          </h3>
          <h4 className="error-404-stat-title">Gramos de cafe</h4>
        </div>
      </div>

      <Button fontSize="1.3rem">
        <a href="https://tebai.netlify.com">Contactame!</a>
      </Button>
    </Error404Container>
  );
};

function getStyles() {
  return styled.div`
    position: relative;
    width: 100%;
    margin: 2rem auto;
    max-width: 1024px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      text-align: center;
      font-weight: 600;
      font-size: 3.2rem;
      text-transform: uppercase;
      margin-bottom: 0;
    }
    h5 {
      text-align: center;
      margin-bottom: 2rem;
    }
    p {
      text-align: left;
      margin: 0 auto;
      max-width: 768px;
      strong {
        font-size: 1.2rem;
        line-height: 1;
        font-style: italic;
      }
    }

    button {
      width: 100%;
      max-width: 512px;
      margin: 4rem auto 2rem auto;
    }
    .color-a {
      color: var(--bs-info);
      text-shadow: 1px 1px 5px var(--bs-info);
    }

    .color-b {
      color: var(--bs-warning);
      text-shadow: 1px 1px 5px var(--bs-warning);
    }

    .color-c {
      color: var(--bs-danger);
      text-shadow: 1px 1px 5px var(--bs-danger);
    }
    .error-404-image {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -1;
      margin-top: 3rem;
      width: 326px;
      height: 326px;
      filter: opacity(0.5);
    }
    .error-404-stats {
      display: flex;
      margin: 0 auto;
      width: 100%;
      max-width: 768px;
      justify-content: space-around;
      margin-top: 4rem;
      margin-bottom: 3rem;
      svg {
        margin-bottom: 0.5rem;
      }
      .error-404-stat-title {
        font-size: 1.3rem;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 0;
      }
    }
  `;
}

export default E404;
