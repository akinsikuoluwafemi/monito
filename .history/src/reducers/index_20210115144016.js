
export const countReducer = (count = 0, action) => {
    if(action.type === "INCREAMENT"){
        return action.payload
    }
     return count--

}