const fs = require('fs');
const os = require('os');
const yargs = require('yargs').argv;

const note = require('./notes');


const command = yargs._[0].toLowerCase();
console.log('yArgs', yargs);

if (command === 'add') {
  const newNote = note.addNote(yargs.title, yargs.body);
  if (newNote) {
     console.log('Note saved successfully');
     console.log('-------------');
     console.log(`Title: ${newNote.title}`);
     console.log(`Body: ${newNote.body}`);
  }else { console.log('Note title already Exist'); }
}
else if (command === 'list') {
  note.listNote(yargs.title, yargs.body);
}
else if (command === 'remove'){
  note.removeNote(yargs.title, yargs.body);
}
else if (command === 'update') {
  note.updateNote(yargs.title, yargs.body);
}
else {
  console.log('Unknown command!');
}