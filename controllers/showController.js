const { Show, User } = require('../models');

const getAllShows = async (req, res) => {
  try {
    const shows = await Show.findAll({ include: [User] });
    if (!shows) res.status(404).send('cannot find shows...');
    res.status(200).json(shows);
  } catch (error) {
    console.error(error);
  }
};

const getOneShow = async (req, res) => {
  try {
    const showId = req.params.showId;
    const show = await Show.findByPk(showId);
    if (!show) res.status(404).send('show does not exist...');
    res.status(200).json(show);
  } catch (error) {
    console.error(error);
  }
};

const getUsersThatWatchedShow = async (req, res) => {
  try {
    const showId = req.params.showId;
    const show = await Show.findByPk(showId, { include: [User] });
    if (!show) res.status(404).send('show does not exist...');
    res.status(200).json(show.users);
  } catch (error) {
    console.error(error);
  }
};

const updateShowAvailability = async (req, res) => {
  try {
    const showId = req.params.showId;
    const isAvailable = req.body;

    const show = await Show.findByPk(showId);
    if (!show) res.status(404).send('show does not exist...');

    show.update(isAvailable);
    show.save();

    res.status(200).json(show);
  } catch (error) {
    console.error(error);
  }
};

const deleteShow = async (req, res) => {
  try {
    const showId = req.params.showId;
    const show = await Show.findByPk(showId);
    if (!show) res.status(404).send('show does not exist...');

    show.destroy();
    res.send(200).send('show successfully deleted...');
  } catch (error) {
    console.error(error);
  }
};

const getShowsByGenre = async (req, res) => {
  try {
    const genre = req.query.genre;
    const showsByGenre = await Show.findAll({ where: { genre } });

    if (showsByGenre.length === 0) {
      res.status(200).send('there are no shows with that genre...');
    }

    res.status(200).json(showsByGenre);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllShows,
  getOneShow,
  getUsersThatWatchedShow,
  updateShowAvailability,
  deleteShow,
  getShowsByGenre,
};
