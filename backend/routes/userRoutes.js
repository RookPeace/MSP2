const express = require('express')
const { registerUser,authUser, allUsers } = require("../controllers/userControllers");
const router = express.Router();
router.use(express.json());
const { protect } = require("../middleware/authMiddleware");


router.route('/').post(registerUser).get(protect,allUsers);
router.post('/login', authUser)


module.exports = router;

