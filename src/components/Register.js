import React, { Component } from 'react';

import {Input} from 'react-toolbox'
import {Button} from 'react-toolbox';

import { Link } from 'react-router-dom'

class Login extends Component {
    state = { name: '', password: ''};

    handleNameChange = (name, value) => {
        this.setState({name: value});
    };

    handlePasswordChange = (password, value) => {
        this.setState({password: value});
    };



    render() {
        return (
            <div style={{maxWidth: 300, margin: 'auto', verticalAlign: 'middle'}}>
                <Input type='text' label='Name' name='name' 
                    value={this.state.name} 
                    onChange={this.handleNameChange.bind(this, 'name')}
                />
                <Input type='password' label='Password' name='password' 
                    value={this.state.password} 
                    onChange={this.handlePasswordChange.bind(this, 'password')} 
                />
                <Link to='/login'>
                    <Button label="register" raised primary />
                </Link>

            </div>
        )
    }
}

export default Login