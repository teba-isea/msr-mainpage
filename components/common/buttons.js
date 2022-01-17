import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : props.theme.colors.primary};
  box-shadow: 0px 2px 3px #333;
  color: ${(props) => props.theme.colors.text};
  border: 0;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "0.15rem"};
  padding: 4px 12px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "0.9rem")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "600")};
  transition: all 0.3s ease;
  &:active {
    filter: contrast(0.6);
  }
  a {
    color: inherit;
  }
`;

export const FlatButton = styled.button`
  background-color: transparent;
  border: 1px solid ${(props) => props.bgColor || props.theme.colors.primary};
  color: ${(props) => props.bgColor || props.theme.colors.primary};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "0.25rem"};
  padding: 4px 12px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "0.9rem")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "600")};
  transition: all 0.3s ease;
  &:active {
    background-color: ${(props) =>
      props.bgColor ? props.bgColor : props.theme.colors.primary};
  }
`;
