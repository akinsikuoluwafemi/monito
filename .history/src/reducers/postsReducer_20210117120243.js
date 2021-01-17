export default (state, action) => {
   
    // return state;
    switch(action.type){
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state
    }
}