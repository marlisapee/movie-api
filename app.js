const express = require('express');
const app = express();
const PORT = 3000;

const userRoutes = require('./routes/userRoutes');
const showRoutes = require('./routes/showRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/routes/users', userRoutes);
app.use('/routes/shows', showRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});

module.exports = app;
