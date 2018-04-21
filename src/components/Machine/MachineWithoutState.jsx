//  NPM IMPORTS
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-toolbox';
//  INNER IMPORTS
import './styles.css'

const MachineWithoutState =  ({ name, onClickFunc }) => (
    <div className="machine">
        <h2>{name}</h2>
        <Button onClick={() => onClickFunc()}>Open Menu</Button>
    </div>
)

MachineWithoutState.propTypes = {
    name: PropTypes.string.isRequired,
    onClickFunc: PropTypes.func.isRequired,
};

export default MachineWithoutState;

//  TODO: prop-Types

//  TODO: Удалить, как разберусь с css
// const styleMachine = {
//     width: "300px",
//     backgroundColor: "lightblue",
//     height: "300px",
//     marginLeft: "50px",
//     marginTop: "50px"
// }
