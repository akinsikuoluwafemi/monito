export default (state = {}, action) => {
    switch(action.type){
        case 'FETCH_USER':
            console.log(act)
            return action.payload
        default:
            return state;
    }
}