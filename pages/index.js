import Image from "next/image";
import Head from "next/head"
import styled from "styled-components";
import Fade from "react-reveal";
import {
  FaAddressCard,
  FaLaptopMedical,
  FaHandPaper,
  FaGraduationCap,
  FaCar,
  FaHeart,
  FaChartLine,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { PostCard, AppCard } from "../components/common/cards";
import {
  ProceduresAndServices,
  PopularConsultation,
  TigreCoin,
} from "../components/modules/Home/serviceCards";
import HeroCarousel from "../components/modules/Home/HeroCarousel";
import EventList from "../components/modules/Home/EventList";

const HomeContainer = getStyles();

const postsData = [
  {
    _id: "1",
    image: "/img/notice-1.jpg",
    title: "Orgulloso del Desempeño de el Dpto. de Innovacion",
    content:
      "Han sido parte clave en la recuperacion de nuestra ciudad y su ejemplar est....",
    category: "popular",
    date: "hace 2h",
    user: {
      name: "Ernesto Paraqueima",
      avatar: "/img/user0.jpg",
    },
  },
  {
    _id: "2",
    image: "/img/notice-2.jpg",
    title: "Podras pagar tus servicios con estas 5 criptos",
    content:
      "desde el dia de hoy todos los servicios municipales podran ser cancelados en otr...",
    category: "gaceta oficial",
    date: "hace 5 dias",
    user: {
      name: "Municipio Simon Rodriguez",
      avatar: "/img/municipio-logo.png",
    },
  },
  {
    _id: "3",
    image: "/img/notice-3.jpg",
    title: "TigreCoin el Metodo de Pago favorito en la ciudad",
    content:
      "Los resultados publicados en la ultima encuesta realizada fueron claros y sorprendent...",
    category: "tecnologia",
    date: "Hace 1 dia",
    user: {
      name: "TigreCoin Oficial",
      avatar: "/img/tc-logo.png",
    },
  },
  {
    _id: "4",
    image: "/img/notice-4.jpg",
    title: "'El Tigre' en Top 30 mejores ciudades del Sur",
    content:
      "Anunciado este 15/12/21  por el secretario general de la Organizacion de Nacion...",
    category: "popular",
    date: "hace 13m",
    user: {
      name: "Diario digital El Tigrense",
      avatar: "/img/notices.png",
    },
  },
];

const appsData = [
  {
    category: "SAIME",
    name: "Documentacion Ciudadana",
    icon: <FaAddressCard size="3rem" />,
    color: "#fd7e14",
    url: "/documentacion-ciudadana",
    description:
      "Te ayudamos en tramites como la Cedula de Identidad o pasaporte, partidas de nacimiento, entre otras",
  },
  {
    category: "Ministerio de Salud",
    name: "Salud y Atencion Medica",
    icon: <FaLaptopMedical size="3rem" />,
    color: "#dc3545",
    url: "/salud-atencion",
    description:
      "Vacunas obligatorias, adquirir Medicamentos, consulta general o especializada, primeros auxilios. ",
  },
  {
    category: "Ministerio de Justicia y Paz",
    name: "Denunciar Violencia Delito o Abuso",
    icon: <FaHandPaper size="3rem" />,
    color: "#00BCD4",
    url: "/denunciar",
    description:
      "Ante una situacion de violencia o abuso por parte de una persona, autoridad publica o cuerpo armado. ",
  },
  {
    category: "Alcaldia Simon Rodriguez",
    name: "Educacion Y Capacitacion",
    icon: <FaGraduationCap size="3rem" />,
    color: "#ffc107",
    url: "/educacion",
    description:
      "Niveles y modalidades de estudio, programas, adquicision de becas y capacitacion para el trabajo. ",
  },
  {
    category: "INTT",
    name: "Transito y Automotor",
    icon: <FaCar size="3rem" />,
    color: "#198754",
    url: "/transito",
    description:
      "Informacion para circular en via publica, compra y registro de auto o moto. Pago online de multas",
  },
  {
    category: "Alcaldia Simon Rodriguez",
    name: "Pareja y Familia",
    icon: <FaHeart size="3rem" />,
    color: "#673AB7",
    url: "/familia",
    description:
      "Tramites, asesoria y asistencia a las parejas y familias, adopcion de hijos o enfrentar una perdida.",
  },
  {
    category: "Alcaldia Simon Rodriguez",
    name: "Emprendimiento e Innovacion",
    icon: <FaChartLine size="3rem" />,
    color: "#54cb59",
    url: "/innovacion",
    description:
      "Herramientas de financiamiento, exoneracion y capacitacion  para emprendedores y empresas.",
  },
  {
    category: "Alcaldia Simon Rodriguez",
    name: "Cambia Vidas",
    icon: <FaHandHoldingHeart size="3rem" />,
    color: "#F44336",
    url: "/cambia-vidas",
    description:
      "Participa en los distintos programas sociales y organizaciones de la ciudad. Registra tu organizacion.",
  },
  {
    category: "CORPOELEC",
    name: "Servicio Electrico",
    icon: <FaChartLine size="3rem" />,
    color: "#54cb59",
    url: "/electricidad",
    description:
      "Gestiona el gasto electrico de tus propiedades. Registra y adelanta pagos para obtener promociones.",
  },
];

const Index = ({ users }) => {
  return (
    <HomeContainer>
      <Head>
        <title>Municipio Simon Rodriguez - Inicio</title>
      </Head>
      <HeroCarousel />
      <div className="services">
        <Image src="/svg/waves.svg" layout="fill" />
        <h1>Principales Servicios</h1>
        <div className="services-container">
          <PopularConsultation />
          <ProceduresAndServices />
          <TigreCoin />
        </div>
      </div>
      <div className="common-searchs">
        <h1>Aplicaciones mas Usadas</h1>
        <div className="common-searchs-apps">
          {appsData.map((appData) => (
            <AppCard appData={appData} />
          ))}
        </div>
      </div>
      <EventList />
      <div className="new-entries">
        <h1>Ultimas Novedades</h1>
        <div className="new-entries-container">
          {" "}
          {postsData.map((post, index) => (
            <Fade bottom ssrFadeout delay={`${index * 500}`}>
              <PostCard post={post} key={post._id} />
            </Fade>
          ))}
        </div>
      </div>
    </HomeContainer>
  );
};

function getStyles() {
  return styled.div`
    .new-entries {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 3rem;
      padding-bottom: 3rem;
      .new-entries-container {
        margin-top: 2rem;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }
    }
    .services {
      position: relative;
      width: 100%;
      min-height: 90vh;
      margin: 0;
      padding: 0rem 0rem;
      background-color: ${(props) => props.theme.colors.backgroundDarken};
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      h1 {
        //color: ${(props) => props.theme.colors.text};
        color: #eff3f8;
        font-weight: 600;
        text-transform: uppercase;
      }

      .services-container {
        z-index: 2;
        margin-top: 1rem;
        width: 100%;
        height: 70vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .services span img {
      position: absolute;
      inset: unset !important;
      bottom: -25% !important;
      z-index: 2;
    }
    .common-searchs {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin: 3rem 0rem;
      h1 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .common-searchs-apps {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  `;
}

export default Index;
