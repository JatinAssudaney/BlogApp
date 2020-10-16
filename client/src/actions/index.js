import axios from "axios";
import {
  FETCH_USER,
  FETCH_POSTS,
  FETCH_TAGS,
  FETCH_POSTS_OF_TAG,
} from "./types";

export const fetchUser = () => {
  return async (dispatch, getState) => {
    const res = await axios.get("/api/current_user");
    dispatch({ type: FETCH_USER, payload: res.data });
  };
};

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const res = await axios.get("/api/posts");
    dispatch({ type: FETCH_POSTS, payload: res.data });
  };
};

export const fetchPost = (id) => {
  return async (dispatch, getState) => {
    const res = await axios.get(`/api/user/${id}`);
    dispatch({ type: FETCH_POSTS, payload: res.data });
  };
};

export const fetchPostsOfTag = (topic) => {
  return async (dispatch, getState) => {
    const res = await axios.get(`/api/${topic}`);
    dispatch({ type: FETCH_POSTS_OF_TAG, payload: res.data });
  };
};

export const fetchTags = () => {
  return async (dispatch, getState) => {
    const res = await axios.get("/api/posts/tags");
    dispatch({ type: FETCH_TAGS, payload: res.data });
  };
};

export const submitPost = (values, history) => {
  return async (dispatch, getState) => {
    const res = await axios.post("/api/posts", values);
    history.push("/");
    dispatch({ type: FETCH_USER, payload: res.data });
  };
};
