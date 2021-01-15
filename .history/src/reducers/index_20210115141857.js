
export const countReducer = (count = 0, action) => {
    if(action.type === "INCREAMENT"){
        return count++
    }else {
        return count--
    }
}