const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

pp.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social-media-template', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));
