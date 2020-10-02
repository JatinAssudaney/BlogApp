const mongoose = require("mongoose");
const { Schema } = mongoose;
const TopicSchema = require("./Topic");

const postSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  tags: [TopicSchema],
  heading: String,
  subHeading: String,
  headerImage: String,
  body: String,
  datePosted: Date,
});

mongoose.model("posts", postSchema);
