import React, { Component } from 'react';
import { 
  Navbar, 
  NavbarBrand, 
  Nav, 
  NavItem, 
  NavLink, 
  Button 
} from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-root">
        <header className="app-header">
          <h1 className="app-title">Basic PWA page</h1>
        </header>
        <Navbar color="inverse">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Nav className="ml-auto">
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <main>
          <div className="app-main">
            PWA web page content
            <Button
              tag="a"
              color="success"
              size="large"
              href="http://reactstrap.github.io"
              target="_blank"
            >
                View Reactstrap Docs
            </Button>
          </div>
        </main>
        <footer>
          <p>Posted by: Hege Refsnes</p>
          <p>Contact information: <a href="mailto:someone@example.com">someone@example.com</a>.</p>
        </footer>
      </div>
    );
  }
}

export default App;
