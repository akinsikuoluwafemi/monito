import {FETCH_MOVIES } from '../actions/types';

const initialState = {
    movies: [],
    showBanner: false,
    loading: false
}


export default function (state = initialState, action){
    switch(action.type){
        case FETCH_MOVIES:
            return {
                
            }
    }
}