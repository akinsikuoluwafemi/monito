import { FETCH_MOVIES } from './types';
import axios from 'axios';



export const  fetchMovies  a = (query)  => dispatch => {
    
    let result = await axios
      .get(`https://www.omdbapi.com/?apikey=2a3aa076&s=${query}`)
      .then(
        (response) => {
        //   response.data.Search
        //   setLoading(false);
              
        },
        (error) => {
          console.log(error);
        //   setLoading(false);
        }
      );
    return result;
}