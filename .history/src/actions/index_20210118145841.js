import { FETCH_MOVIES } from './types';
import axios from 'axios';



export const  fetchMovies  = (query)  => async dispatch => {
    
    let result = await axios
      .get(`https://www.omdbapi.com/?apikey=2a3aa076&s=${query}`)
      .then(
        (response) => {
        //   response.data.Search
        //   setLoading(false);
        dispatch({type: FETCH_MOVIES, payload: response.data.Search})
              
        },
        (error) => {
          console.log(error);
        //   setLoading(false);
        }
      );
    return result;
}

export const updateQuery = () => {
    return {
        
    }
}