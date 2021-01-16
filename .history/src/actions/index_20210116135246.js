import jsonplaceholder from '../apis/jsonPlaceholder';

    
export const fetchPosts = async () => {
   const promise =   jsonplaceholder.get('/posts');

    return {
        type: 'FETCH_POSTS',
        // payload: promise
    }

}

