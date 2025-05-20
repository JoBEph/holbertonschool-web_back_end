const http = require('http');
const countStudents = require('./3-read_file_async');
const fs = require('fs');

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databasePath = process.argv[2];

    if (!databasePath) {
      res.end('This is the list of our students\nCannot load the database');
      return;
    }

    let capturedOutput = '';
    const originalConsoleLog = console.log;
    console.log = (message) => {
      capturedOutput += message + '\n';
    };

    try {
      await countStudents(databasePath);
      res.end(`This is the list of our students\n${capturedOutput.trim()}`);
    } catch (error) {
      res.end(`This is the list of our students\nCannot load the database`);
    } finally {
      console.log = originalConsoleLog;
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {

});

module.exports = app;
