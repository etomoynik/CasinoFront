import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import { BrowserRouter, Link, Route } from 'react-router-dom'



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
                <Route path='/home' component={Home} /> 
                {/* <Route path='/profile' component={Profile} />
                <Route path='/game' component={Game} />  
                <Route path='/about' component={About} />                   */}
            </div>
        </BrowserRouter>
    </ThemeProvider>
    , document.getElementById('root'));
module.hot.accept();