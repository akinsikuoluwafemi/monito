import { FETCH_MOVIES,UPDATE_QUERY, NOMINATE_MOVIE } from "../actions/types";

const initialState = {
  query: '',
  movies: [],
  nominatedMovies: [],
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
       localStorage.setItem(
         "n-movies",
         JSON.stringify([action.payload,...state.nominatedMovies, tempObj])
       );
      return {
        ...state,
        nominatedMovies: [action.payload, ...state.nominatedMovies]
      }

    default:
      return state;
  }
}
