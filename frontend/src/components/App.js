import React, { Component } from 'react';
import './App.css';
import NavMenu from './NavMenu';
import { Container, Col, Row } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="app-root">
        <NavMenu />
        <main>
          <Container className="main-content">
            <Row>
              <Col>Fix Me Page Content</Col>
            </Row>
          </Container>
        </main>
      </div>
    );
  }
}
export default App;