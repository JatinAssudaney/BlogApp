import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import postReducer from "./postReducer";
import tagReducer from "./tagReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  posts: postReducer,
  tags: tagReducer,
});
