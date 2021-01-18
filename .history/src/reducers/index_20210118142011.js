import {FETCH_MOVIES } from '../actions/types';

const initialState = {
    movies: [],
    showBanner: false,
    loading: false
}


export const movieReducer =  f (state = initialState, action){
    switch(action.type){
        case FETCH_MOVIES:
            return {
                ...state, 
                movies: action.payload
            }
        
        default:
            return state;
    }
}