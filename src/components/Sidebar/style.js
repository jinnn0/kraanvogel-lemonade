import styled from 'styled-components';
import { PrimaryButtonOutline } from '../../GlobalStyles';
import { GrFormClose } from 'react-icons/gr';

export const SidebarContainer = styled.aside`
  width: 100%;
  height: 100vh;
  background-color: #ffff94;
  position: fixed;
  top: 0;
  right: ${({ shouldSidebarOpen }) => (shouldSidebarOpen ? '0' : '-100%')};
  transition: 0.3s ease-in-out;
  display: grid;
  align-items: center;
  z-index: 200;

  @media (min-width: 600px) {
    width: 350px;
  }
`;

export const Close = styled(GrFormClose)`
  position: absolute;
  top: 1.2rem;
  right: 20px;
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
`;

export const SideBarMenue = styled.ul`
  list-style-type: none;
`;

export const SideBarLink = styled.li`
  padding: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;
`;

export const SideBarButton = styled(PrimaryButtonOutline)`
  width: 70%;
  margin: 0 auto;
`;
