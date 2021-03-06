import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {ProgressBar} from 'react-toolbox'


import {
    Input,
    Button,
    Navigation,
    Card, CardText,
} from 'react-toolbox';

import App from './App'

const styleProfile = {
  width: "300px",
  backgroundColor: "blue",
  height: "300px",
  marginLeft: "50px",
  marginTop: "50px",
  color: "white"
}
class Profile extends Component {
    state = {
      access_level: 1,
    }
    render() {
        const {data} = this.props
        
        console.log(data)
        return (
          <Card style={styleProfile}>
              <h1>{data.ЧЕЛОВЕК.name + data.ЧЕЛОВЕК.lastname} has salary of { data.salary}</h1>
              <h3><i>Access level = </i>{this.state.access_level}</h3>
              <Button
                onClick={() => {
                  this.setState({access_level: this.state.access_level + 1}/*, () => alert('ACCESS LEVEL INCREASED')*/)
                  this.props.incrFunc(data.id.value)
                  }
                }
              >
                  Increase access level
              </Button>
              <Button
                onClick={() => this.setState({access_level: this.state.access_level - 1}/*, () => alert('ACCESS LEVEL DECREASED')*/)}
              >
                  Increase access level
              </Button>
          </Card>
        )
    }
}
const styleProfileWrapper = {
    display: "flex",
    justifyContent: "row",
    flexWrap: "wrap",
    minWidth: "300px"
}


class ProfileList extends Component {

    state = {
      users: [],
      fetched: false,
    }

    fetchUsers() {
        fetch('http://localhost:8079/employee/')
            .then(response => response.json())
            .then(arrayOfResults => this.setState({
                users: arrayOfResults,
                fetched: true,
            }))
    }

    componentDidMount() {
        this.fetchUsers()
    }

    render() {
        return (
            <App>
                <div style={styleProfileWrapper}>
                    {this.state.fetched ? this.state.users.map((user_data, i) =>
                      (<div>
                          <Profile
                              data={user_data}
                              key={"Profile_" + i}
                              incrFunc={this.props.increaseAccessLvl}
                              usersState={this.props.users}
                          />
                    </div>)
                    ) : (<ProgressBar type="circular" mode="indeterminate" />)}
                    {/* {this.state.fetched ? this.state.users.map(user_data =>this.props.addUser(user_data)) : (<i></i>)} */}
                </div>
            </App>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users,
})

const mapDispatchToProps = (dispatch) => ({
    increaseAccessLvl: (ID) => dispatch({type: 'INCREASE_ACCESS_LEVEL', payload: ID}),
    addUser: (data) => dispatch({type: 'USER_ADD', user_data: data}),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileList)
