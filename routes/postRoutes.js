const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const Post = mongoose.model("posts");
const User = mongoose.model("users");

let offset = 0;
let limit = 7;

module.exports = (app) => {
  app.get("/api/posts", async (req, res) => {
    // Returns headings,tags and datePosted from the posts with the implementation of Pagination
    try {
      const trialPosts = await Post.aggregate([
        {
          $lookup: {
            from: "users",
            localField: "_user",
            foreignField: "_id",
            as: "_user",
          },
        },
        { $unwind: { path: "$_user" } },
      ]);
      const posts = await Post.find(
        {},
        {
          heading: 1,
          tags: 1,
          datePosted: 1,
          _user: 1,
        }
      ).sort({ datePosted: -1 });

      // .skip(offset)
      // .limit(limit);
      offset += limit;
      if (posts.length === 0) {
        res.send([]);
      } else {
        // res.send({ length: posts.length, posts });
        console.log(trialPosts.length);

        res.send(posts);
      }
    } catch (error) {
      res.send({ error: error.message });
    }
  });

  app.get("/api/posts/tags", async (req, res) => {
    // Returns All Unique Tags from all the posts in our dB

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
    // Returns top Posts from a particular topic from all the posts in our dB with implementation of Pagination

    const tag = req.params.topicName;
    console.log(tag);
    try {
      const posts = await Post.find(
        {
          tags: { $elemMatch: { topicName: tag } },
        },
        { heading: 1, tags: 1, datePosted: 1 }
      ).sort({ datePosted: -1 });
      // .skip(offset)
      // .limit(limit);
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

  app.post("/api/posts", requireLogin, async (req, res) => {
    // Creates new blog Post and saves them to our dB

    try {
      const { heading, subHeading, headerImage, body, tags } = req.body;
      const post = await new Post({
        heading,
        subHeading,
        body,
        headerImage,
        tags: tags.split(",").map((tag) => {
          return { topicName: tag.trim() };
        }),
        _user: req.user.id,
        datePosted: Date.now(),
      }).save();
      console.log(post);
      res.send({});
    } catch (error) {
      res.send({ error: error.message });
    }
  });
};
