import { FETCH_MOVIES,UPDATE_QUERY } from "../actions/types";

const initialState = {
  query: '',
  movies: [],
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

    default:
      return state;
  }
}
