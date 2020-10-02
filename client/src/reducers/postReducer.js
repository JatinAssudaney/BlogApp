import { FETCH_POSTS } from "../actions/types";
const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      return payload;
    default:
      return state;
  }
};
