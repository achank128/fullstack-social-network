const router = require("express").Router();
const {
  createPost,
  updatePost,
  likePost,
  deletePost,
  getPost,
  getTimelinePosts,
  getUserPost,
} = require("../controllers/postController");

router.post("/", createPost);
router.route("/:id").put(updatePost).get(getPost).delete(deletePost);
router.put("/:id/like", likePost);
router.get("/timeline/:userId", getTimelinePosts);
router.get("/profile/:username", getUserPost);

module.exports = router;
