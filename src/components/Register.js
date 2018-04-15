import React, { Component } from 'react';

import {Input} from 'react-toolbox'
import {Button} from 'react-toolbox';
import { Card } from 'react-toolbox';  

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
            <div style={{ flex: 1, padding: '4rem' }}>
            <div style={{maxWidth: 300, margin: 'auto', }}>
            <Card style={{width: '300px', }}>
                <Input type='text' label='Name' name='name' 
                    value={this.state.name} 
                    onChange={this.handleNameChange.bind(this, 'name')}
                />
                <Input type='password' label='Password' name='password' 
                    value={this.state.password} 
                    onChange={this.handlePasswordChange.bind(this, 'password')} 
                />
                <Link to='/login'>
                    <Button label="register" raised primary style={{}}/>
                </Link>

            </Card>
            </div>
            </div>
        )
    }
}

export default Login