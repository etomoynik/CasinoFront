import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import {Input} from 'react-toolbox'
import {Button} from 'react-toolbox';
import {Navigation} from 'react-toolbox';
import { Card } from 'react-toolbox';

import RRbutton from './RRbutton'

class Login extends Component {
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
                <form style={{width: "50%", margin: 'auto'}} autoComplete="on">
                    <Input type='text' hint='login' name='name' autoComplete='username'
                        value={this.state.name}
                        onChange={this.handleNameChange.bind(this, 'name')}
                    />
                    <Input type='password' hint='password' name='password' autoComplete='current-password'
                        value={this.state.password}
                        onChange={this.handlePasswordChange.bind(this, 'password')}
                    />
                </form>
                
                <Navigation type='horizontal'>
                    <RRbutton style={{
                        width: "50%",
                        margin: "0 auto"
                        }}
                        exact to='/home' label='Login'/>
                    <RRbutton style={{
                        width: "50%",
                        margin: "0 auto"
                        }}
                        exact to='/register' label='Register'/>
                </Navigation>
            </Card>
            </div>
            </div>
        )
    }
}

export default Login
