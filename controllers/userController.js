const { User, Show } = require('../models');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ include: [Show] });
    if (!users) res.status(404).send('cannot find users...');
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
  }
};

const getOneUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findByPk(userId);
    if (!user) res.status(404).send('user does not exist...');
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
  }
};

const getShowsByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findByPk(userId, { include: [Show] });
    if (!user) res.status(404).send('user does not exist...');
    res.status(200).json(user.shows);
  } catch (error) {
    console.error(error);
  }
};

const addShowToUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const showId = req.params.showId;

    const user = await User.findByPk(userId);
    const show = await Show.findByPk(showId);

    if (!user || !show) res.status(404).send('user or show does not exist...');

    await user.addShow(show);
    await user.save();

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  getShowsByUser,
  addShowToUser,
};
