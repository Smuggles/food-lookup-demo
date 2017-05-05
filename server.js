const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const Blog = require('./schemas/blogSchema.js');
const app = express();
const db = mongoose.connection;
app.set('port', (process.env.PORT || 3001));
mongoose.connect('mongodb://localhost/mydb', function(err, db) {
  if(err) { return console.dir(err); }
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
