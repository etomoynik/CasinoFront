import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import {Input} from 'react-toolbox'
import {Button} from 'react-toolbox';
import {Navigation} from 'react-toolbox';
import { Card } from 'react-toolbox';



class Login extends Component {
    state = { name: '', password: ''};

    handleNameChange = (name, value) => {
        this.setState({...this.state, [name]: value});
    };

    handlePasswordChange = (password, value) => {
        this.setState({...this.state, [password]: value});
    };

    render() {


        return (
            <div style={{ flex: 1, padding: '4rem' }}>
            <div style={{maxWidth: 300, margin: 'auto'}}>
            <Card style={{width: '300px'}}>
                <Input type='text' label='Name' name='name'
                    value={this.state.name}
                    onChange={this.handleNameChange.bind(this, 'name')}
                />
                <Input type='password' label='Password' name='password'
                    value={this.state.password}
                    onChange={this.handlePasswordChange.bind(this, 'password')}
                />
                <Navigation type='horizontal'>
                    <Link to="/home">
                      <Button label = "Login"  raised primary/>
                    </Link>
                    <Link to="/register">
                      <Button label = "Register"  raised primary/>
                    </Link>
                </Navigation>
            </Card>
            </div>
            </div>
        )
    }
}

export default Login
