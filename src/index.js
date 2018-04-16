import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { BrowserRouter, Link, Route } from 'react-router-dom'

//My components
import Login from './components/Login'
import Register from './components/Register'
import Machines from './components/Machines'
import Profile from './components/Profile'

// redux
import { Provider } from 'react-redux'
import { store } from './redux'

console.log("store = ", store)

ReactDOM.render(
  <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route exact path='/' component={Login} />
                <Route path='/home' component={Home} />
                <Route path='/machines' component={Machines} />
                <Route path='/profile' component={Profile} />
                {/* <Route path='/game' component={Game} />
                <Route path='/about' component={About} />                   */}
            </div>
        </BrowserRouter>
  </Provider>
    , document.getElementById('root'));
module.hot.accept();
