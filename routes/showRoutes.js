const { check } = require('express-validator');
const {
  getAllShows,
  getOneShow,
  getUsersThatWatchedShow,
  updateShowAvailability,
  deleteShow,
  getShowsByGenre,
} = require('../controllers/showController');

const router = require('express').Router();

router.get('/', getAllShows);
router.get('/:showId', getOneShow);
router.get('/:showId/users', getUsersThatWatchedShow);
router.get('/genre/list', getShowsByGenre);
router.put(
  '/:showId/available',
  [check('available').isBoolean().toBoolean()],
  updateShowAvailability
);
router.delete('/:showId', deleteShow);

module.exports = router;
