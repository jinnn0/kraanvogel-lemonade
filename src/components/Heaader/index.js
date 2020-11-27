import { HeaderContainer, Menu } from './style';
import { Logo } from '../../GlobalStyles';

function Header({ toggleSidebar }) {
  return (
    <HeaderContainer>
      <Logo to="/">Kraanvogel</Logo>
      <Menu onClick={toggleSidebar} />
    </HeaderContainer>
  );
}

export default Header;
