const mongoose = require("mongoose");
const { Schema } = mongoose;
const TopicSchema = require(".//Topic");

const postSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  heading: String,
  subHeading: String,
  headerImage: String,
  body: String,
  datePosted: Date,
  tags: [TopicSchema],
});

mongoose.model("posts", postSchema);
