import React, { Component } from 'react';
import './App.css';
import NavMenu from './NavMenu';
import { Container, Col, Badge, Row } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="app-root">
        <NavMenu />
        <header className="app-header">
          <h1 className="app-title text-center"><Badge>Fix Me Page Header</Badge></h1>
        </header>
        <main>
          <Container className="main-content">
            <Row>
              <Col>Fix Me Page Content</Col>
            </Row>
          </Container>
        </main>
        <footer className="footer">
          <span>Copyright @ Shenoy Sukumaran</span>
          <br/>
          <span>Contact information: <a href="mailto:someone@example.com">someone@example.com</a>.</span>
        </footer>
      </div>
    );
  }
}
export default App;