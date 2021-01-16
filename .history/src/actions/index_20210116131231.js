import jsonplaceholder from '../apis/jsonPlaceholder';

    
export const fetchPosts = async () => {
    await jsonplaceholder.get

    return {
        type: 'FETCH_POSTS'
    }

}

