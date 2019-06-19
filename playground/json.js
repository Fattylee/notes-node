const fs = require('fs');

const noteObj = {
  title: 'This is a title',
  body: 'This is a body',
};

// converting object to a string for easy persistence

const stringNote = JSON.stringify(noteObj);
fs.writeFileSync('playground/note.json', stringNote);
console.log('here')

const strNote = fs.readFileSync('playground/note.json');
console.log(strNote, typeof strNote);

const objNote = JSON.parse(strNote);
console.log(objNote.body)

const res = [1,3,5].filter(num => num > 6);
console.log('res', res, Boolean(res[0]));