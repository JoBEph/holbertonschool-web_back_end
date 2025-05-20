#!/usr/bin/node

const fs = require('fs');

function countStudents(path) {
  try {
    if (!fs.existsSync(path)) {
      throw new Error('Cannot load the database');
    }
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n').filter(line => line.trim() !== '');

    if (lines.length === 0) {
      console.log('Number of students: 0');
      return;
    }

    const headers = lines[0].split(',');
    const studentsData = lines.slice(1);
    const students = studentsData.map(line => {
      const values = line.split(',');
      const student = {};
      headers.forEach((header, index) => {
        student[header] = values[index];
      });
      return student;
    });

    const fields = {};
    students.forEach(student => {
      const field = student.field;
      if (fields[field]) {
        fields[field].count += 1;
        fields[field].names.push(student.firstname);
      } else {
        fields[field] = {
          count: 1,
          names: [student.firstname],
        };
      }
    });

    console.log(`Number of students: ${students.length}`);
    for (const field in fields) {
      if (Object.hasOwnProperty.call(fields, field)) {
        const { count, names } = fields[field];
        console.log(`Number of students in ${field}: ${count}. List: ${names.join(', ')}`);
      }
    }

  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    } else {
      throw err;
    }
  }
}

module.exports = countStudents;
