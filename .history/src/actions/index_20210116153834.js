import jsonPlaceholder from '../apis/jsonPlaceholder';

    
export const fetchPosts =  () => {
   return async function(dispatch, getState) {
       
    const promise =await jsonPlaceholder.get("/posts");

       dispatch({type: 'FETCH_POSTS', payload: })
       
   }


}

