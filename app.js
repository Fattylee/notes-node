const fs = require('fs');
const os = require('os');
const yargs = require('yargs').argv;

const note = require('./notes');

const log = (note) => {
   debugger;
   console.log('-------------');
   console.log(`Title: ${note.title}`);
   console.log(`Body: ${note.body}`);
}
const command = yargs._[0].toLowerCase();
console.log('yArgs', yargs);

if (command === 'add') {
  const newNote = note.addNote(yargs.title, yargs.body);
  if (newNote) {
     console.log('Note saved successfully');
     log(newNote);
  }else { console.log('Note title already Exist'); }
}
else if (command === 'list') {
  const notes = note.listNote();
  console.log(`There are ${notes.length} note(s)`);
  notes.forEach(log);
}
else if (command === 'remove'){
  const res = note.removeNote(yargs.title);
  console.log( res ? 'Note was deleted' : 'Note not found');
}
else if (command === 'update') {
  note.updateNote(yargs.title, yargs.body);
}
else if (command === 'read') {
  const filteredNote = note.getNote(yargs.title);
  if (!filteredNote) {
    console.log('Note not found');
  } else { 
  console.log('Here is ur note');
  log(filteredNote);
  }
}
else {
  console.log('Unknown command!');
}