const express = require('express');
const router = express.Router();

// Sample data for users (replace this with your actual data)
const users = [
  { id: 1, name: 'John', surname: 'Doe', age: 25 },
  { id: 2, name: 'Jane', surname: 'Smith', age: 30 },
  // Add more user objects here as needed
];

router.get('/search', function (req, res) {
  const result = users.filter(user => user.age == req.query.age);
  if (result.length === 0) {
    res.send('Not found');
  }
  res.send('Found: ' + JSON.stringify(result));
});

router.get('/:id', function (req, res) {
  const result = users.find(user => user.id == req.params.id);
  if (result === undefined) {
    res.send('Not found');
  }
  res.send('Found: ' + JSON.stringify(result));
});

router.get('/:name/:surname', function (req, res) {
  const result = users.find(user => user.name === req.params.name && user.surname === req.params.surname);
  if (result === undefined) {
    res.send('Not found');
  }
  res.send('Found: ' + JSON.stringify(result));
});

module.exports = router;
