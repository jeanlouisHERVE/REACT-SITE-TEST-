import { FaBars } from 'react-icons/fa';
import PropTypes from 'prop-types';
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

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Dolla </NavLogo>
        </NavbarContainer>
        <MobileIcon onClick={toggle}>
          <FaBars />
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
        <NavBtn to="/signin"><NavBtnLink /></NavBtn>
      </Nav>
    </>
  );
};

Navbar.propTypes = {
  toggle: PropTypes.bool.isRequired,
};

export default Navbar;
