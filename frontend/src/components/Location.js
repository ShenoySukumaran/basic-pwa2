import React, { Component } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class Location extends Component {
  constructor(props){
    super(props);

    this._toggle = () => {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
    };
    this.state = {
      dropdownOpen: false
    };
  }
  render() {
    return (
      <div className="location">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this._toggle}>
          <DropdownToggle caret>
            Bengaluru
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Bengaluru</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default Location;