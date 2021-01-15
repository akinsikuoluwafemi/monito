
export const increamentButton = (num) => {
    //    return an action
    return {
        type: "INCREAMENT",
        payload: num++
    }
} 

export const decreamentButton = () => {
    return {
        type: "DECREAMENT"
    }
}