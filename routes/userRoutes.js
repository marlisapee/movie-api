const router = require('express').Router();
const {
  getAllUsers,
  getOneUser,
  getShowsByUser,
  addShowToUser,
} = require('../controllers/userController');

router.get('/', getAllUsers);
router.get('/:userId', getOneUser);
router.get('/:userId/shows', getShowsByUser);
router.put('/:userId/:showId', addShowToUser);

module.exports = router;
