#!/usr/bin/node

/* this script reads a csv file */

const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n').filter(line => line.trim() !== '');

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const headers = lines[0].split(',');
    const students = lines.slice(1).map(line => {
      const values = line.split(',');
      const student = {};
      headers.forEach((header, index) => {
        student[header.trim()] = values[index].trim();
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
      const { count, names } = fields[field];
      console.log(`Number of students in ${field}: ${count}. List: ${names.join(', ')}`);
    }

  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
