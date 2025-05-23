import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    const databasePath = process.argv[2];
    try {
      const studentsByField = await readDatabase(databasePath);
      let responseText = 'This is the list of our students\n';

      const sortedFields = Object.keys(studentsByField).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );

      for (const field of sortedFields) {
        const students = studentsByField[field];
        responseText += `Number of students in ${field}: ${
          students.length
        }. List: ${students.join(', ')}\n`;
      }
      response.status(200).send(responseText.trim());
    } catch (error) {
      response.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const databasePath = process.argv[2];
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const studentsByField = await readDatabase(databasePath);
      const students = studentsByField[major];

      if (students) {
        response.status(200).send(`List: ${students.join(', ')}`);
      } else {
        response.status(200).send('List:');
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  }
}

export default StudentsController;