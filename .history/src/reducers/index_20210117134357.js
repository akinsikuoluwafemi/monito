import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from ./usersReducerer';





export default combineReducers({
    posts: postsReducer,
    users: usersReducer
})