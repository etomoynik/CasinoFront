import React, { Component } from 'react';
import './App.css';
//My components
import Login from './components/Login'
import Drawer from './components/Drawer'
import DrawerTest from './components/Drawer';
import TestCards from './components/TestCard';


//Themes
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
//Modules
import {AppBar} from 'react-toolbox';
import {Navigation} from 'react-toolbox';
import {Link} from 'react-toolbox';
import {Button} from 'react-toolbox';
import {Layout} from 'react-toolbox';
import {NavDrawer} from 'react-toolbox';



class App extends Component {
  state = {
    drawerActive: false,
    drawerPinned: false,
    sidebarPinned: false
};

toggleDrawerActive = () => {
    this.setState({ drawerActive: !this.state.drawerActive });
};

toggleDrawerPinned = () => {
    this.setState({ drawerPinned: !this.state.drawerPinned });
}
  render() {
    return (
      <div className="App"  theme={theme}>
        <Layout>
        <AppBar title='' leftIcon='menu' onLeftIconClick={this.toggleDrawerActive}>
            <Navigation type='horizontal'>
              <Button label="Logout" raised primary />
            </Navigation>
          </AppBar> 
          <NavDrawer active={this.state.drawerActive}
            pinned={this.state.drawerPinned} permanentAt='xxxl'
            onOverlayClick={ this.toggleDrawerActive }>
            <p>
                Navigation, account switcher, etc. go here.
            </p>
          </NavDrawer>
        </Layout>
      </div>
    );
  }
}

export default App;

