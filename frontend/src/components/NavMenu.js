import React from 'react';
import './NavMenu.css';
import {
  Dropdown,
  DropdownToggle,
  Navbar,
  NavbarBrand,
  Nav, 
  NavItem, 
  NavLink, 
} from 'reactstrap';

const NavMenu = () => {
  return (
    <Navbar className="nav-bar">
      <header className="app-header">
        <NavbarBrand href="/"> <h1 className="app-title">Drink By Beer</h1></NavbarBrand>
      </header>
      <Nav className="nav">
        <NavItem>
          <NavLink href="#">Events</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Search</NavLink>
        </NavItem>
        <NavItem>
          <Dropdown>
            <DropdownToggle caret>
              Bangalore
            </DropdownToggle>
          </Dropdown>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavMenu;