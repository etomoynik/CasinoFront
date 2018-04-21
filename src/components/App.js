import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom'
//Modules
import {
    AppBar,
    Navigation,
    Link,
    Button,
    Layout,
    NavDrawer
} from 'react-toolbox';

import RRLink from './RRLink'

const styleDrawer = {
    width: "24rem"
}

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
                        <RRLink exact to='/Login' label='Logout'/>
                    </Navigation>
                </AppBar>
                <div style={{ flex: 1, padding: '4rem' }}>
                        {
                            this.props.children}
                </div>

                <NavDrawer active={this.state.drawerActive}
                    pinned={this.state.drawerPinned} permanentAt='xxxl'
                    onOverlayClick={ this.toggleDrawerActive }>
                    <Navigation type='vertical'>
                        <RRLink style={{width: "100%"}} exact to='/home' label='Home'/>
                        <RRLink exact to='/profile' label='Profile'/>
                        <RRLink exact to='/game' label='Game'/>
                        <RRLink exact to='/about' label='About us'/>
                        <RRLink exact to='/machines' label='Machines'/>
                    </Navigation>
                </NavDrawer>

            </Layout>

        );
    }
}

export default App
