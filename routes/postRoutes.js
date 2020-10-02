const mongoose = require("mongoose");
const Post = mongoose.model("posts");

let offset = 0;
let limit = 7;

module.exports = (app) => {
  app.get("/api/posts", async (req, res) => {
    try {
      const posts = await Post.find({}, { heading: 1, tags: 1, datePosted: 1 })
        .sort({ datePosted: -1 })
        .skip(offset)
        .limit(limit);
      offset += limit;
      if (posts.length === 0) {
        res.send([]);
      } else {
        // res.send({ length: posts.length, posts });
        res.send(posts);
      }
    } catch (error) {
      res.send({ error: error.message });
    }
  });

  app.get("/api/posts/tags", async (req, res) => {
    try {
      const tags = await Post.aggregate([
        { $unwind: "$tags" },
        { $group: { _id: "$tags.topicName" } },
      ]);
      if (tags.length === 0) {
        res.send([]);
      } else {
        // res.send({ length: posts.length, posts });
        res.send(tags);
      }
    } catch (error) {
      res.send({ error: error.message });
    }
  });

  app.get("/api/:topicName", async (req, res) => {
    const tag = req.params.topicName;
    console.log(tag);
    try {
      const posts = await Post.find(
        {
          tags: { $elemMatch: { topicName: tag } },
        },
        { heading: 1, tags: 1, datePosted: 1 }
      )
        .sort({ datePosted: -1 })
        .skip(offset)
        .limit(limit);
      offset += limit;
      console.log(posts);
      if (posts.length === 0) {
        res.send([]);
      } else {
        res.send(posts);
      }
    } catch (error) {
      res.send({ error: error.message });
    }
  });

  app.post("/api/posts", async (req, res) => {
    try {
      const { heading, subHeading, headerImage, body, tags } = req.body;
      const id = mongoose.Types.ObjectId("4edd40c86762e0fb12000003");
      const post = await new Post({
        heading,
        subHeading,
        body,
        tags: tags.split(",").map((tag) => {
          return { topicName: tag.trim() };
        }),
        _user: id,
        datePosted: Date.now(),
      }).save();
      res.send({});
    } catch (error) {
      res.send({ error: error.message });
    }
  });
};
