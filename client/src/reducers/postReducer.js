import { FETCH_POSTS, FETCH_POSTS_OF_TAG } from "../actions/types";
const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      return payload;
    case FETCH_POSTS_OF_TAG:
      return payload;
    default:
      return state;
  }
};
