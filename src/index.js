//Modules
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Link, Route } from 'react-router-dom'

//Themes
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

//My components
import Login from './components/Login'
import Register from './components/Register'



ReactDOM.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <div>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/app' component={App} />
            </div>
        </BrowserRouter>
    </ThemeProvider>
    , document.getElementById('root'));
registerServiceWorker();
