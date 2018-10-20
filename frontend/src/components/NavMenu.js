import React from 'react';
import './NavMenu.css';
import {
  Navbar,
  NavbarBrand,
  Nav, 
  NavItem, 
  NavLink, 
} from 'reactstrap';

const NavMenu = () => {
  return (
    <Navbar className="nav-bar">
      <NavbarBrand href="/">Home</NavbarBrand>
      <Nav className="nav">
        <NavItem>
          <NavLink href="/">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Contact</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavMenu;