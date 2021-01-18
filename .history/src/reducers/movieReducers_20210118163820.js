import { FETCH_MOVIES,UPDATE_QUERY, NOMINATE_MOVIE } from "../actions/types";

const initialState = {
  query: '',
  movies: [],
  allNominatedMovies: [],
  nominated: false,
  showBanner: false,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case UPDATE_QUERY:
      return {
        ...state,
        query: action.payload
      }
    case NOMINATE_MOVIE:
      
      return {
        ...state,
        allNominatedMovies: [action.payload, ...state.allNominatedMovies],
        localStorage.setItem(
        "n-movies",
        JSON.stringify(state.allNominatedMovies)
      );
      };

    default:
      return state;
  }
}
