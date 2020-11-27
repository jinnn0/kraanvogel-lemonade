import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 20px;
  z-index: 100;

  @media (min-width: 600px) {
    justify-content: center;
  }
`;

export const Menu = styled(FaBars)`
  font-size: 1.5rem;
  position: fixed;
  right: 60px;
  cursor: pointer;
`;
