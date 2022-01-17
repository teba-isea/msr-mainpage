import { useState } from "react";
import styled from "styled-components";
import { GoSearch } from "react-icons/go";

const SearchBarContainer = getStyles();

export const SearchBar = ({ width, onSubmit, className }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchBarContainer width={width} onSubmit={onSubmit} className={className}>
      <input
        onChange={(el) => setSearch(el.target.value)}
        placeholder="Buscar"
      />
      <button type="submit">
        <GoSearch />
      </button>
    </SearchBarContainer>
  );
};

function getStyles() {
  return styled.form`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.width || "95%"};
    min-width: 320px;
    height: 100%;
    background-color: #fdfdfd;
    border-radius: 20px;
    padding: 0.2rem;
    margin: 1rem 0rem;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.009);
      box-shadow: 0px 0px 9px #333;
    }
    input {
      background-color: transparent;
      color: ${(props) => props.theme.colors.textDarken};
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 5px;
      padding: 3px 12px;
      font-size: 1.2rem;
      &:focus {
        outline: none;
      }
    }
    button {
      background-color: transparent;
      border: none;
      position: absolute;
      right: 15px;
      font-size: 1.2rem;
      color: #8e8e8e;
    }
  `;
}
