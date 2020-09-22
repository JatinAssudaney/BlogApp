const mongoose = require("mongoose");
const { Schema } = mongoose;
const TopicSchema = require(".//Topic");

const postSchema = new Schema({
  heading: String,
  subHeading: String,
  headerImage: String,
  body: String,
  datePosted: Date,
  tags: [TopicSchema],
});

mongoose.model("posts", postSchema);
