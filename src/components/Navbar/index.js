import React from 'react';
import { Fabars } from 'react-icons/fa'
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Dolla </NavLogo>
        </NavbarContainer>
        <MobileIcon>
          <Fabars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="discover">Discover</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services">Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="sign Up">Sign Up</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn to="/signin">   </NavBtn>
      </Nav>
    </>
  );
}

export default Navbar
