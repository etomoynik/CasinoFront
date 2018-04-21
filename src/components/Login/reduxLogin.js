

//  ACTION TYPES
const loginAttempt = 'loginAttempt';
const loginSuccess = 'loginSuccess';
const loginFailure = 'loginFailure';

//  ACTION GENERATORS
export const action_loginAttempt = () => ({
    type: loginAttempt,
})

export const action_loginSuccess = (username, password, levelOfAccess) => ({
    type: loginSuccess,
    username,
    password,
    levelOfAccess,
})

export const action_loginFailure = () => ({
    type: loginFailure,
})

//  REDUCERS
const loginReducer = (state, action) => {
    switch (action.type) {
        case loginAttempt:
            break;
        case loginSuccess:
            return {...state,  };
        case loginFailure:
            break;
        default:
            return state;
    }
};

export default loginReducer;