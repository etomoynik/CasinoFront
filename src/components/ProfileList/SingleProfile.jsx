//  NPM IMPORTS
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-toolbox';
//  INNER IMPORTS

const styleSingleProfile = {
    width: "150px",
    marginTop: "30px",
    marginLeft: "30px",
    border: "1px solid black",
};

const SingleProfile = ({name, surname, imageLink, deleteUser}) => (
    <div style={styleSingleProfile}>
        <h4>{`${name} ${surname}`}</h4>
        <img src={imageLink} />
        <Button
            onClick={() => deleteUser(name)}
            raised
            primary
        >Delete user</Button>
    </div>
);

const mapStateToProps = state => state;
const mapDispatchToProps = (dispatch) => ({
    deleteUser: (name) => dispatch({type: 'DELETE_USER', name}),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProfile)