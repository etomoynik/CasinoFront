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
                        <RouterLink to="/profile">
                            <Button label="Profile" raised primary />
                        </RouterLink>
                        <Button label="Game" raised primary />
                        <Button label="About us" raised primary />
                        <RouterLink to="/machines">
                            <Button label="Machines" raised primary />
                        </RouterLink>
                    </Navigation>
                </NavDrawer>

            </Layout>

        );
    }
}

export default App
