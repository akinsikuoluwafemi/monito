import jsonplaceholder from '../apis/jsonPlaceholder';

    
export const fetchPosts = async () => {
    await jsonplaceholder.get('/posts');

    return {
        type: 'FETCH_POSTS'
    }

}

