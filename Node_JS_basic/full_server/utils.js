// full_server/utils.js
import fs from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');
      if (lines.length === 0) {
        resolve({});
        return;
      }

      const studentsByField = {};
      for (let i = 1; i < lines.length; i += 1) { // Skip header line
        const studentData = lines[i].split(',');
        const firstname = studentData[0];
        const field = studentData[3];

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
      }
      resolve(studentsByField);
    });
  });
}

export default readDatabase;