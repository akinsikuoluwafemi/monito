import { FETCH_MOVIES, UPDATE_QUERY, NOMINATE_MOVIE, SHOW_BANNER, ALREADY_NOMINATED } from "./types";
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

export const updateQuery = (query) => {
    return {
        type: UPDATE_QUERY,
        payload: query
    };
}

export const clickToNominateMovie = (movie) => {
    return {
        type: NOMINATE_MOVIE,
        payload: movie
    }
}

export const showAlertBanner = () => {
    return {
        type: SHOW_BANNER
    }
}

export const detectNominatedMovie = () => {
    return {
        
    }
}