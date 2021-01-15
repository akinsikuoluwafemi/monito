
export const increamentButton = () => {
    //    return an action
    return {
        type: "INCREMENT",
        payload: num + 1
    }
} 

export const decreamentButton = (num) => {
    return {
        type: "DECREMENT",
        payload: num - 1
    }
}