const redux = require('redux');

console.log('---React-Redux/App---');

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAMS = 'BUY_ICECREAMS';

// action creator|returns an action
function buyCake(){
    return {
        type: BUY_CAKE,
        info: '1st-redux-action'
    }
}

function buyIceCreams(){
    return {
        type: BUY_ICECREAMS,
        info: '2nd-redux-action'
    }
}

// (prevState, action) => newState
const initState = {
    numberOfCakes: 10,
    numberOfIceCreams: 20,
};

// 4multipleReducer
const initStateCake = {
    numberOfCakes: 10,
};
const initStateIceCreams = {
    numberOfIceCreams: 20,
};

const reducer = (state=initState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numberOfCakes: state.numberOfCakes-1
        }

        case BUY_ICECREAMS: return {
            ...state,
            numberOfIceCreams: state.numberOfIceCreams-1
        }

        default: return state
    }
};

const cakeReducer = (state=initStateCake, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numberOfCakes: state.numberOfCakes-1
        }

        default: return state
    }
};

const icecreamReducer = (state=initStateIceCreams, action) => {
    switch(action.type) {
        case BUY_ICECREAMS: return {
            ...state,
            numberOfIceCreams: state.numberOfIceCreams-1
        }
        
        default: return state
    }
};

const combineReducers = redux.combineReducers;
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: icecreamReducer
});
const store = redux.createStore(rootReducer); //redux.legacy_createStore(reducer)
console.log('Initial state => ', store.getState());
const unsubscribe=store.subscribe(()=> console.log('Updated state => ', store.getState())); //anytime store updates, it's fired
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCreams());
store.dispatch(buyIceCreams());
unsubscribe();

/*
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';

const store = configureStore({
  reducer: rootReducer,
});
*/