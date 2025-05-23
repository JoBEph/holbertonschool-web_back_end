const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const database = process.argv[2];
  if (!database) {
    res.send('Cannot load the database');
    return;
  }

  try {
    const originalConsoleLog = console.log;
    let response = '';

    console.log = (message) => {
      response += `${message}\n`;
    };

    await countStudents(database);
    console.log = originalConsoleLog;

    res.send(response.trim());
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
