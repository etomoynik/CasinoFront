//  NPM IMPORTS
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {Input, Button, Navigation, Card} from 'react-toolbox'
//  INNER IMPORTS
import RRbutton from './RRbutton'

class Login extends Component {
    constructor(props) {
        super(props)
  
        this.LoginAttempt = this.props.LoginAttempt
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
                        onClick={(event) => this.LoginAttempt(this.state.username, this.state.password)}
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

const mapStateToProps = (state) => {
    return {
      isLoggedIn: state.isLoggedIn
    }
  };
  
const mapDispatchToProps = (dispatch) => {
return {
    LoginAttempt: (username,  password) => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', 
        {headers: {
        "Content-Type": "application/json",
        "Host": "localhost:46080"}, 
        method: "POST", 
        body: JSON.stringify({
            "username": username,
            "password": password
        })
        }).then(data => dispatch({ type: 'loginAttempt', data: data })).then(data => console.log(data.body))
    }
}
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
