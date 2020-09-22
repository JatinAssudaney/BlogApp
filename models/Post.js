const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  heading: String,
  subHeading: String,
  headerImage: String,
  body: String,
  datePosted: Date,
});

mongoose.model("posts", postSchema);
