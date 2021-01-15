import {combineReducers } from 'redux';


const countReducer = (count = 0, action) => {
    if(action.type === "INCREMENT"){
        return action.payload
    }
     else if (action.type === "DECREMENT") {
       return action.payload;
     }
     return count
}

export default combineReducers({
    count: countReducer
})