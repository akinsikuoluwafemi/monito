import jsonPlaceholder from '../apis/jsonPlaceholder';

    
export const fetchPosts =  () => {
   const promise =   jsonplaceholder.get('/posts');

    return {
        type: 'FETCH_POSTS',
        payload: promise
    }

}
