const redux = require('redux');

console.log('---React-Redux/App---');

const BUY_CAKE = 'BUY_CAKE';

// action creator|returns an action
function buyCake(){
    return {
        type: BUY_CAKE,
        info: '1st-redux-action'
    }
}

// (prevState, action) => newState
const initState = {
    numberOfCakes: 10
};

const reducer = (state=initState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numberOfCakes: state.numberOfCakes-1
        }

        default: return state
    }
};

const store = redux.createStore(reducer); //redux.legacy_createStore(reducer)
console.log('Initial state => ', store.getState());
const unsubscribe=store.subscribe(()=> console.log('Updated state => ', store.getState())); //anytime store updates, it's fired
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();

/*
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';

const store = configureStore({
  reducer: rootReducer,
});
*/