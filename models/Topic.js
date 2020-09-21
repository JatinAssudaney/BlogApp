const mongoose = require("mongoose");
const { Schema } = mongoose;
const PostSchema = require("./Post");

const topicSchema = new Schema({
  topicName: String,
  posts: [PostSchema],
});

mongoose.model("topics", topicSchema);
