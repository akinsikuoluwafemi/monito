import { FETCH_MOVIES,UPDATE_QUERY, NOMINATE_MOVIE, SHOW_BANNER } from "../actions/types";

const initialState = {
  query: "",
  movies: [],
  allNominatedMovies: JSON.parse(localStorage.getItem("n-movies")) || [],
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
        JSON.stringify([action.payload, ...state.allNominatedMovies])
      );
      return {
        ...state,
        allNominatedMovies: [action.payload, ...state.allNominatedMovies],
      };

    default:
      return state;
  }
}
