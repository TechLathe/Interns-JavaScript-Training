const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the user schema and model
const userSchema = new mongoose.Schema({
  name: String,
  pass: String
});
const User = mongoose.model('User', userSchema);

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Login endpoint
app.post('/login', (req, res) => {
  const { name, pass } = req.body;

  // Find user by name
  User.findOne({ name }, (err, foundUser) => {
    if (err) {
      res.status(500).send({ msg: 'Error occurred' });
    } else if (!foundUser || foundUser.pass !== pass) {
      res.status(401).send({ msg: 'Invalid credentials' });
    } else {
      res.send({ msg: 'Login successful' });
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
