import {ADD_TODO} from '../actions/types'

const todoReducer = (state={}, action) =>{
    console.log(action.text);
    switch (action.type) {
        case ADD_TODO:
            return {...state, text: action.text};
        default:
            return state;
    }
}

export default todoReducer;