//  NPM IMPORTS
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//  INNER IMPORTS
import fetch_loginUser from './api/loginUser.js';

//  ACTION TYPOS
const USER_LOGIN_ATTEMPT = 'USER_LOGIN_ATTEMPT';
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

//  ACTION GENERATORS
export const func_loginUser = (login, pass, dispatch) => {
        // return (dispatch) => {
        //     dispatch({
        //         type: USER_LOGIN_ATTEMPT
        //     });
        fetch('http://localhost:3000/registered_users')
            .then(response => response.json())
            .then((arrayOfRegistredUsers) => {
                console.log('Ответ от сервера = ', arrayOfRegistredUsers);

                for (let i in arrayOfRegistredUsers) {
                    if ((arrayOfRegistredUsers[i].login === login) && (arrayOfRegistredUsers[i].password===pass)) {
                        console.log('i = ', i);
                        dispatch({
                            type: USER_LOGIN_SUCCESS,
                            Login: arrayOfRegistredUsers[i].login,
                            Pass: arrayOfRegistredUsers[i].password,
                            AccessLevel: arrayOfRegistredUsers[i].access_level,
                        });
                        alert('Успех!');
                        return;
                    } else {
                        console.log('dispatch', dispatch);
                        dispatch({
                            type: USER_LOGIN_FAILURE,
                            login1: i[login],
                            login: login,
                            pass1: i[pass],
                            pass: pass,
                        });
                        alert('Не удалось');
                        return;
                    }
                }

                // arrayOfRegistredUsers.map(registredUser => {
                //     const n_registredUser = registredUser;
                //     if ((n_registredUser.login===login) && (n_registredUser.pass===pass)) {
                //         console.log('dispatch', dispatch);
                //         dispatch({
                //             type: USER_LOGIN_SUCCESS,
                //             Login: n_registredUser.login,
                //             Pass: n_registredUser.pass,
                //             AccessLevel: n_registredUser.access_level,
                //         });
                //         alert('Успех!');
                //     } else {
                //         console.log('dispatch', dispatch);
                //         dispatch({
                //             type: USER_LOGIN_FAILURE
                //         });
                //         alert('Не удалось');
                //     }
                // })
            })
    //};
};


//  REDUCER
const rootReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_USERS':
            const Users = action.Users;
            return {...state, Users};
        case 'DELETE_USER':
            let newUsers = [];
            for (let i in state.Users) {
                if (state.Users[i].name.first !== action.name) {
                    newUsers.push(state.Users[i]);
                }
            }
            let newState = {
                isLoggedIn: state.isLoggedIn,
                AccessLevel: state.AccessLevel,
                Users: newUsers,
            };
            return newState;
        case 'USER_LOGIN_SUCCESS':
            console.log('USER_LOGIN_SUCCESS');
            let anotherNewState = {...state};
            anotherNewState.AccessLevel = action.AccessLevel;
            return anotherNewState;
        case 'USER_LOGIN_FAILURE':
            console.log('USER_LOGIN_FAILURE');
            return state;
    default:
            return state;
    }
};

// STORE
const initialState = {
    isLoggedIn: false,
    AccessLevel: 0,
    Users: [],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(thunk)
));

// export const store = createStore(
//   rootReducer,
//   initialState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
