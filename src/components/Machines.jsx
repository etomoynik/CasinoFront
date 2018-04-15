import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import {
    Input,
    Button,
    Navigation,
    Card, CardText,

} from 'react-toolbox';

import App from './App'

const styleMachine = {
  width: "300px",
  backgroundColor: "lightblue",
  height: "300px",
  marginLeft: "50px",
  marginTop: "50px"
}
const Machine = ({name, onClickFunc}) => {
    return (
      <div style={styleMachine}>
          <h1>{name}</h1>
          <Button onClick={() => onClickFunc()}>Open Menu</Button>
      </div>
    )
}
const styleMachineWrapper = {
    display: "flex",
    justifContent: "row"
}
class MachineList extends Component {

    state = {
      machine1_menu_opened: false,
      machine2_menu_opened: false,
      machine3_menu_opened: false
    }

    render() {
        return (
            <App>
                <div style={styleMachineWrapper}>
                    <Machine
                      name="test1"
                      onClickFunc={() => this.setState({machine1_menu_opened: true})}
                    />
                  <div hidden={!this.state.machine1_menu_opened}>
                      <Card>
                        <CardText>Machine Menu</CardText>
                        <Button
                          onClick={() => this.setState({machine1_menu_opened: false})}
                        >
                            Close Menu
                        </Button>
                      </Card>

                    </div>
                    <Machine name="test2" />
                    <Machine name="test3" />
                </div>
            </App>
        )
    }
}
export default MachineList
