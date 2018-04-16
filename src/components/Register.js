import React, { Component } from 'react';

import { Input, Card, Button, Navigation } from 'react-toolbox';  

import { Link } from 'react-router-dom'

import RRbutton from './RRbutton'

class Register extends Component {
    state = { name: '', password: '', label: ''};

    handleNameChange = (name, value) => {
        this.setState({...this.state, [name]: value});
    };

    handlePasswordChange = (password, value) => {
        this.setState({...this.state, [password]: value});
    };

    render() {
        console.log(this.state.name)
        return (
            <div style={{ flex: 1, padding: '4rem' }}>
            <div style={{maxWidth: 300, margin: 'auto'}}>
            <Card style={{width: '300px'}}>
                <form style={{width: "50%", margin: 'auto'}}>
                    <Input type='text' hint='login' name='name' autoComplete="off" style={{transitionDuration:'0.2s'}}
                        value={this.state.name}
                        onChange={this.handleNameChange.bind(this, 'name')}
                    />
                    <Input type='password' hint='password' name='password' autoComplete="off"
                        value={this.state.password}
                        onChange={this.handlePasswordChange.bind(this, 'password')}
                    />
                </form>
                
                <Navigation type='horizontal'>
                    <RRbutton style={{
                        width: "100%",
                        margin: "0 auto"
                        }}
                        exact to='/login' label='Register'/>
                </Navigation>
            </Card>
            </div>
            </div>
        )
    }
}

export default Register