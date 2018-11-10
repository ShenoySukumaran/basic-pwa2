import React, { Component } from 'react';
import './NavMenu.css';
import {
  Collapse,
  Input,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav, 
  NavItem, 
  NavLink,
  Button, 
} from 'reactstrap';
import MaterialIcon from 'material-icons-react';
import Location from './Location';

class NavMenu extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar className="nav-bar" expand="md">
        <header className="app-header">
          <MaterialIcon icon="dashboard" size='large'/>
          <NavbarBrand href="/"> <h4 className="app-title">Drink By Beer</h4></NavbarBrand>
        </header>
        <NavbarToggler onClick={this.toggle} >
          <MaterialIcon icon="menu"/>
        </NavbarToggler>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="nav-custom ml-auto" navbar>
            <NavItem>
              <NavLink href="#">Events</NavLink>
            </NavItem>
            <NavItem className="form-inline">
              <Input className="form-control search-beer" type="text" placeholder="Search"/>
              <Button color="success">Search</Button>
            </NavItem>
            <NavItem>
              <Location/>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavMenu;