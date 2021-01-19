import { FETCH_MOVIES,UPDATE_QUERY, NOMINATE_MOVIE, SHOW_BANNER } from "../actions/types";

const initialState = {
  query: "",
  movies: [],
  allNominatedMovies: JSON.parse(localStorage.getItem("n-movies")) || [],
  alreyNominated: false,
  showAbanner: false,
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

    case SHOW_BANNER:
      return {
        ...state,
        showAbanner: !state.showAbanner,
      };

    default:
      return state;
  }
}