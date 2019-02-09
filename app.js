const fs = require('fs');
const os = require('os');

const yargs = require('yargs').argv;

const note = require('./notes');

const argv = process.argv;
console.log('process', argv);
const command = yargs._[0].toLowerCase();
console.log('yArgs', yargs);

if (command === 'add') {
  note.addNote(yargs.title, yargs.body);
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