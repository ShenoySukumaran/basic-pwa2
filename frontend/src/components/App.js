import React, { Component } from 'react';
import './App.css';
import NavMenu from './NavMenu';
import Beer from './Beer';
import { Col, Row } from 'reactstrap';
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
          <div className="main-content">
            <Row>
              {this.state.beers.map((beer) => 
                <Col xs="12" sm="6" md="4" lg="4" xl="3" key={beer.id}>
                  <Beer {...beer} key={beer.id}></Beer>
                </Col>
              )}
            </Row>
          </div>
        </main>
      </div>
    );
  }
}

Beer.propTypes = {
  beers: PropTypes.array,
};
export default App;