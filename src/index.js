import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Link, Route } from 'react-router-dom'
require('./App.css');



//Themes
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

//My components
import Login from './components/Login'
import Register from './components/Register'



ReactDOM.render(
    <ThemeProvider>
        <BrowserRouter>
            <div>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route exact path='/' component={Login} />
                <Route path='/app' component={App} />
            </div>
        </BrowserRouter>
    </ThemeProvider>
    , document.getElementById('root'));
module.hot.accept();