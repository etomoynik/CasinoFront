//  NPM IMPORTS
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Input,
    Button,
    Navigation,
    Card, CardText,
} from 'react-toolbox';
//  INNER IMPORTS
import MachineWithoutState from './MachineWithoutState';

const styleMachineWrapper = {
    display: "flex",
    justifyContent: "row"
}


//  TODO: prop-Types
export default class MachineWithState extends Component {
    static propTypes = {
        amountOfCash: PropTypes.number.isRequired,
    };

    state = {
        isModalOpen: false,
    };

    switchModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        })
    }

    render() {
        return (
            <div style={styleMachineWrapper}>
                <MachineWithoutState name={this.props.name} onClickFunc={() => this.switchModal()} />
                <div hidden={!this.state.isModalOpen}>
                    <Card>
                        <CardText>
                            Machine Menu:
                            <h2>{`Количество денег в автомате - ${this.props.amountOfCash}`}</h2>
                        </CardText>
                        <Button onClick={() => this.switchModal()}>
                            Close Menu
                        </Button>
                    </Card>
                </div>
            </div>
        )
    }
}