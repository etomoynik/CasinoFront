//  NPM IMPORTS
import React, { Component } from 'react';
import { connect } from 'react-redux';
//  INNER IMPORTS
import fetchUsers from '../../api/fetchUsers.js';
import SingleProfile from './SingleProfile';
import App from '../App';

const styleProfileList = {
    display: "flex",
    justifyContent: "spaceAround",
    flexWrap: "wrap",
};

class ProfileList extends Component {
    componentWillMount() {
        if (this.props.Users.length === 0) {
            fetch('https://randomuser.me/api/?results=10')
                .then(response => response.json())
                .then(data => data.results)
                .then(results => this.props.recordUsers(results))
        }
    }
    render() {
        return (
            <App>
                <div style={styleProfileList}>
                    {this.props.Users.map(user => (
                        <SingleProfile
                            name={user.name.first}
                            surname={user.name.last}
                            imageLink={user.picture.medium}
                        />
                    ))}
                </div>
            </App>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state.Users = ', state.Users);
    return {
        Users: state.Users,
    }
};
const mapDispatchToProps = (dispatch) => ({
    recordUsers: (usersList) => dispatch({type: 'ADD_USERS', Users: usersList}),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileList)
