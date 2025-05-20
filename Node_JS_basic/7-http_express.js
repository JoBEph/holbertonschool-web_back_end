#!/usr/bin/node

const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const databasePath = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.set('Content-Type', 'text/plain');

  if (!databasePath) {
    res.send('This is the list of our students\nCannot load the database');
    return;
  }

  let capturedOutput = '';
  const originalConsoleLog = console.log;
  console.log = (message) => {
    capturedOutput += message + '\n';
  };

  try {
    await countStudents(databasePath);
    res.send(`This is the list of our students\n${capturedOutput.trim()}`);
  } catch (error) {
    res.send('This is the list of our students\nCannot load the database');
  } finally {
    console.log = originalConsoleLog;
  }
});

app.listen(port, () => {
  // console.log(`Server listening on port ${port}`);
});

module.exports = app;
