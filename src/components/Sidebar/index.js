import { SidebarContainer, SideBarMenue, Close, SideBarLink, SideBarButton } from './style';

const Sidebar = ({ shouldSidebarOpen, toggleSidebar }) => {
  return (
    <SidebarContainer shouldSidebarOpen={shouldSidebarOpen} onClick={toggleSidebar}>
      <Close />
      <SideBarMenue>
        <SideBarLink>Pizzas</SideBarLink>
        <SideBarLink>Desserts</SideBarLink>
        <SideBarLink>Full Menu</SideBarLink>
      </SideBarMenue>
      <SideBarButton>Order Now</SideBarButton>
    </SidebarContainer>
  );
};

export default Sidebar;
