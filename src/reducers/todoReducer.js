import {ADD_TODO} from '../actions/types'

const todoReducer = (state={}, action) =>{
    switch (action.type) {
        case ADD_TODO:
            return {...state, text: action.text};
        default:
            return state;
    }
}

export default todoReducer;