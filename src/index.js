//  NPM IMPORTS
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux';
//  INNER IMPORTS
import Home from './Home';
import Login from './components/Login';
import Register from './components/Register';
//  import Machines from './components/Machines'
import MachineGenerator from './components/Machine/MachineGenerator';
import Profile from './components/Profile';


const arrayOfMachines = [
  {
      name: 'Тестовая машина #1',
      amountOfCash: Math.round(1000*Math.random()),
  },
  {
      name: 'Тестовая машина #2',
      amountOfCash: Math.round(1000*Math.random()),
  },
  {
      name: 'Тестовая машина #3',
      amountOfCash: Math.round(1000*Math.random()),
  },
  {
      name: 'Тестовая машина #4',
      amountOfCash: Math.round(1000*Math.random()),
  },
  {
      name: 'Тестовая машина #5',
      amountOfCash: Math.round(1000*Math.random()),
  },
];

const Machines = () => (<MachineGenerator array={arrayOfMachines} />);

render(
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/machines" component={Machines} />
          <Route path="/profile" component={Profile} />
          {/* <Route path='/game' component={Game} />
                    <Route path='/about' component={About} />                   */}
        </div>
      </BrowserRouter>
    </Provider>, document.getElementById('root')
);


/*
TODO: Разобраться, почему не jsx не импортиться по умолчанию
TODO: Удалить лишние зависимости babel
TODO: Перенести все компоненты в свою папку
*/
