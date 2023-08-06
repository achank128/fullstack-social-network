const router = require("express").Router();
const {
  getAllUser,
  updateUser,
  deleteUser,
  getUser,
  followUser,
  unfollowUser,
  getFriend,
} = require("../controllers/userController");

router.get("/all", getAllUser);
router.route("/:id").put(updateUser).delete(deleteUser);
router.get("/", getUser);
router.put("/:id/follow", followUser);
router.put("/:id/unfollow", unfollowUser);
router.get("/friends/:userId", getFriend);
module.exports = router;
