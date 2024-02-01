const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const signModel = require('./model/sign');

const port = 8000;
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// db
mongoose.connect('mongodb://127.0.0.1:27017/upmarketic', { useNewUrlParser: true, useUnifiedTopology: true });
// route

app.post("/sign", (req, res) => {
  console.log("Received a sign-up request:", req.body);
  signModel.create(req.body)
      .then(users => res.json(users))
      .catch(err => {
          console.error('Error creating user:', err);
          res.status(500).json({ error: 'Internal Server Error' });
      });
});

app.listen(port, () => {
  console.log("server run on port : ", port);
});
