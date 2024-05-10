const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.use('/routes/users', userRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`);
});

module.exports = app;
