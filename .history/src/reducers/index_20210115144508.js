import { } from 'redux';


export const countReducer = (count = 0, action) => {
    if(action.type === "INCREAMENT"){
        return action.payload
    }
     else if (action.type === "DECREAMENT") {
       return action.payload;
     }

}