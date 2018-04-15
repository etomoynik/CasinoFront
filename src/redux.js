import { createStore } from 'redux'

// ACTION GENERATORS



// REDUCERS

const rootReducer = (state, action) => {
  console.log('inner reducer state check. state = ', state)
  let newState;
  switch (action.type) {
    case 'USER_ADD':
        newState = state
        const userData = action.user_data
        userData.access_level = 1
        newState.users.push(userData)
        return newState
    case 'INCREASE_ACCESS_LEVEL':
        newState = state
        for (let i = 0;i < newState.users.length; i++) {
            if (newState.users[i].id.value === action.payload) {
                alert("found")
            }
        }
        return {

        };
    default:
        return state;
  }
};

// store

const initialState = {
    users: [],
}

export const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
