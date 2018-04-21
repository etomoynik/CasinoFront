//  NPM IMPORTS
import React from 'react';
import PropTypes from 'prop-types';
//  INNER IMPORTS
import MachineWithState from './MachineWithState';
import App from '../App';

const generateMachinesFromArray = ({ array }) => (
  <App>
    {array.map(el => (<MachineWithState name={el.name} amountOfCash={el.amountOfCash} />))}
  </App>
);

generateMachinesFromArray.propTypes = {
    array: PropTypes.array.isRequired,
};

export default generateMachinesFromArray;
