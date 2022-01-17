import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Button } from "../../common/buttons";
import { SearchBar } from "../../common/searchBar";
import { GiTigerHead } from "react-icons/gi";

const NavbarContainer = getStyles();

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="navbar">
        <a as="/" href="/" passHref={true}>
          <h1 className="navbar-brand">
            {" "}
            <GiTigerHead size="2.2rem" className="navbar-brand-icon" />
            <span className="brand-title-a">S</span>imon{" "}
            <span className="brand-title-b">R</span>odriguez
          </h1>
        </a>
        <SearchBar
          className="navbar-searchbar"
          width="35%"
          onSubmit={() => console.log("searching")}
        />
        <div className="navbar-join">
          <Link href="/como-participar" className="join-info">
            ¿Como Registrarme?
          </Link>
          <Button fontSize="1.1rem">
            <Link href="/entrar" className="join-info">
              Entrar
            </Link>
          </Button>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;

function getStyles() {
  return styled.nav`
    width: 100%;
    background-color: ${(props) => props.theme.colors.backgroundDarken};
    .navbar {
      max-width: 95%;
      margin-left: auto;
      margin-right: auto;
      padding: 0.4rem 0;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;

      @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      }
      .navbar-brand {
        color: ${(props) => props.theme.colors.text};
        font-size: 1.8rem;
        letter-spacing: -0.8px;
        margin: 0;
        display: block;

        @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
          font-size: 1.5rem;
          margin-right: auto;
          order: 0;
        }
        @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
          font-size: 1.35rem;
        }
        .navbar-brand-icon {
          margin-right: 0.5rem;
        }
        .brand-title-a {
          color: ${(props) => props.theme.colors.primary};
        }
        .brand-title-b {
          color: ${(props) => props.theme.colors.secondary};
        }
      }
      .navbar-searchbar {
        margin-left: auto;
        margin-right: auto;
        @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
          width: 100% !important;
          order: 2;
        }
      }
      .navbar-join {
        display: inline-block;
        @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
          order: 1;
        }

        a {
          margin-right: 0.6rem;
          color: ${(props) => props.theme.colors.text};
          font-size: 1.2rem;
          @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
            display: none;
          }
        }
      }
    }
  `;
}
