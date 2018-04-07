import React, { Component } from 'react';

import Input from 'react-toolbox/lib/input/Input'
import Button from 'react-toolbox/lib/button/Button';
import { Link } from 'react-router-dom'

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
            <div style={{maxWidth: 300, margin: 'auto', verticalAlign: 'middle'}}>
                <Input type='text' label='Name' name='name' 
                value={this.state.name} 
                onChange={this.handleNameChange.bind(this, 'name')}
                maxLength={5 }
                 />
                <Input type='text' label='Password' name='password' value={this.state.password} onChange={this.handlePasswordChange.bind(this, 'password')} maxLength={5 } />
                <Button label="register" raised primary />

            </div>
        )
    }
}

export default Login