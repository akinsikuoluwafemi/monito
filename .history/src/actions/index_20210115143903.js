
export const increamentButton = () => {
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