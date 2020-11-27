import styled, { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom';

const colors = {
  primary: '#f5d84e'
};

const GlobalStyles = createGlobalStyle`
    body {
      font-family: 'Kanit', sans-serif;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

    }

    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
    }
`;

export default GlobalStyles;

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    transition: 0.1s ease-out;
  }
`;

export const PrimaryButton = styled(Button)`
  font-size: 1rem;
  padding: 1rem 4rem;
  background-color: ${colors.primary};
`;

export const PrimaryButtonOutline = styled(PrimaryButton)`
  font-size: 1rem;
  padding: 1rem 4rem;
  background-color: transparent;
  border: 1px solid black;

  &:hover {
    background-color: ${colors.primary};
    border: 1px solid transparent;
    color: black;
  }
`;

export const Logo = styled(NavLink)`
  font-size: 2rem;
  font-weight: 700;

  @media (min-width: 500px) {
    font-size: 2.5rem;
  }
`;
