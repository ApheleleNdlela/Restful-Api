const express = require('express');
const mongoose = require('mongoose');
const heroRoutes = require('./routes/heroRoutes');

const app = express();
const port = 3000;

mongoose.connect('mongodb://127.0.0.1/myHeroes', {

  useNewUrlParser: true,
  useUnifiedTopology: true

});

app.use(express.json());
app.use('/hero', heroRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});