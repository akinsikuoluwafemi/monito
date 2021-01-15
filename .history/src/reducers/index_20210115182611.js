import {combineReducers } from 'redux';


const countReducer = (count = 0, action) => {
    if(action.type === "INCREAMENT"){
        return count + 1
    }
     else if (action.type === "DECREAMENT") {
       return action.payload;
     }
     return count
}

export default combineReducers({
    count: countReducer
})