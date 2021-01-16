import jsonPlaceholder from '../apis/jsonPlaceholder';

    
export const fetchPosts =  () => {
   return function(dispatch, get) {
       
    const promise = jsonPlaceholder.get("/posts");

    return {
      type: "FETCH_POSTS",
      payload: promise,
    };
   }


}

