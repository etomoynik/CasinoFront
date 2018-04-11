import React, { Component } from 'react';
//Modules
import {Button} from 'react-toolbox';
import {Drawer} from 'react-toolbox';

class DrawerTest extends React.Component {
  state = {
    active: false
  };

  handleToggle = () => {
    this.setState({active: !this.state.active});
  };

  render () {
    return (
      <div>
        <Button label='Show Drawer' raised accent onClick={this.handleToggle} />
        <Drawer active={this.state.active} onOverlayClick={this.handleToggle}>
          <Button label="Login" raised primary />
        </Drawer>
      </div>
    );
  }
}

export default DrawerTest