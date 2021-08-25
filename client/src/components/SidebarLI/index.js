import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const SidebarLI = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="north" onClick={toggle}>North</SidebarLink>
          <SidebarLink to="east" onClick={toggle}>Easty</SidebarLink>
          <SidebarLink to="south" onClick={toggle}>South</SidebarLink>
          <SidebarLink to="west" onClick={toggle}>West</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/profile" onClick={toggle}>Profile</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SidebarLI;
