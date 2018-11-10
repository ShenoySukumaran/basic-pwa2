import React, { Component } from 'react';
import './App.css';
import NavMenu from './NavMenu';
import Beer from './Beer';
import { Container, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';

class App extends Component {
  constructor({beers}) {
    super(...arguments);
    this.state = {beers: beers};
  }
  render() {
    return (
      <div className="app-root">
        <NavMenu />
        <main>
          <Container className="main-content container-fluid">
            <Row>
              <Col xs="12" sm="6" md="4" lg="3" xl="3">
                {this.state.beers.map(beer => <Beer {...beer} key={beer.id}></Beer>)}
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    );
  }
}

Beer.propTypes = {
  beers: PropTypes.array.isRequired,
};
export default App;