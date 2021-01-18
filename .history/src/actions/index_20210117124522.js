import jsonPlaceholder from '../apis/jsonPlaceholder';

    
export const fetchPosts =  () => async dispatch => {
       
    const response = await jsonPlaceholder.get("/posts");

       dispatch({type: 'FETCH_POSTS', payload: response.data })
       
   }


export const fetchUser = (3) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/3`)

    dispatch({type: 'FETCH_USER', payload: response.data})
}
