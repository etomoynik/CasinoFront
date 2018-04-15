import React, { Component } from 'react';

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
            <Layout>
                <AppBar title='' leftIcon='menu' onLeftIconClick={this.toggleDrawerActive} fixed={true}>
                    <Navigation type='horizontal'>
                    <Button label="Logout" raised primary />
                    </Navigation>   
                </AppBar>
                <div style={{ flex: 1, padding: '4rem' }}>
                        {this.props.children}
                </div>
               
                <NavDrawer active={this.state.drawerActive}
                    pinned={this.state.drawerPinned} permanentAt='xxxl'
                    onOverlayClick={ this.toggleDrawerActive }>
                    <Navigation type='vertical'>
                        <Button label="Home" raised primary />
                        <Button label="Profile" raised primary />
                        <Button label="Game" raised primary />
                        <Button label="About us" raised primary />
                    </Navigation>
                </NavDrawer>
                
            </Layout>
            
        );
    }
}

export default App