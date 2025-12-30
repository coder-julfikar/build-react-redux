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