const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  name: String,
  pass: String
});
const User = mongoose.model('User', userSchema);


app.use(bodyParser.json());


app.post('/login', (req, res) => {
  const { name, pass } = req.body;

  User.findOne({ name }, (err, foundUser) => {
    if (err) {
      res.status(500).send({ msg: 'Haker Bachaooo!!' });
    } else if (!foundUser || foundUser.pass !== pass) {
      res.status(401).send({ msg: 'Shanti se password daaal.' });
    } else {
      res.send({ msg: 'Sahi aadmi hai' });
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
