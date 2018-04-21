//  NPM IMPORTS
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {Input, Button, Navigation, Card} from 'react-toolbox'
//  INNER IMPORTS
import { func_loginUser } from '../../redux.js';
import {
    loginRequest,
    loginSuccess,
    loginFailure
} from "./reduxLogin";
import RRbutton from '../RRbutton'


class Login extends Component {
    constructor(props) {
        super(props);
        this.LoginAttempt = this.props.LoginAttempt;
        this.state={
            username: '',
            password: '',
            cookie: '',
            label: '',
            isLoggedIn: this.props.isLoggedIn,
        }
    }

    handleNameChange = (username, value) => {
        this.setState({...this.state, [username]: value});
    };
    handlePasswordChange = (password, value) => {
        this.setState({...this.state, [password]: value});
    };

    // LoginAttempt(username, password) {
    //     this.props.LoginAttempt(this.state.username, this.state.password);
    // }


    render() {
        if (this.state.isLoggedIn === true) {
            return <Redirect to='/home' />
        }
        return (
            <div style={{ flex: 1, padding: '4rem' }}>
                <div style={{maxWidth: 300, margin: 'auto'}}>
                    <Card style={{width: '300px'}}>
                        <form style={{width: "50%", margin: 'auto'}} autoComplete="on">
                            <Input type='text' hint='login' name='username' autoComplete='username'
                                   value={this.state.username}
                                   onChange={this.handleNameChange.bind(this, 'username')}
                            />
                            <Input type='password' hint='password' name='password' autoComplete='current-password'
                                   value={this.state.password}
                                   onChange={this.handlePasswordChange.bind(this, 'password')}
                            />
                        </form>

                        <Navigation type='horizontal'>
                            {!this.state.isLoggedIn?
                                <Button style={{
                                    width: "50%",
                                    margin: "0 auto"
                                }}
                                        onClick={() => this.props.LoginAttempt(this.state.username, this.state.password)}
                                        label='Login'/>
                                :
                                <RRbutton style={{
                                    width: "50%",
                                    margin: "0 auto"
                                }}
                                          exact to='/home' label='Login'/>
                            }
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

const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn
});
const mapDispatchToProps = (dispatch) => ({
    LoginAttempt: (username,  password) => {
        func_loginUser(username, password, dispatch);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
