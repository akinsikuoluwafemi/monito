import jsonplaceholder from '../apis/jsonPlaceholder';

    
export const fetchPosts = async () => {
    await jsonplaceholder.get('/pos')

    return {
        type: 'FETCH_POSTS'
    }

}

