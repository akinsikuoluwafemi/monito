import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import userReducer from './'





export default combineReducers({
    posts: postsReducer
})