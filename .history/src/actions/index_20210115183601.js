
export const increamentButton = (num) => {
    //    return an action
    return {
        type: "INCREAMENT",
        payload: num + 1
    }
} 

export const decreamentButton = (num) => {
    return {
        type: "DECREMENT",
        payload: num - 1
    }
}