const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('default'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(express.static(path.join(__dirname, '..', 'client')));

app.use('/:id', express.static(path.join(__dirname, '..', 'client')));
