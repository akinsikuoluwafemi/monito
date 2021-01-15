
export const increamentButton = () => {
    //    return an action
    return {
        type: "INCREMENT",
    }
} 

export const decreamentButton = (num) => {
    return {
        type: "DECREMENT",
        payload: num - 1
    }
}