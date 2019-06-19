const fs = require('fs');
const os = require('os');

const titleHolder = {
      describe: 'Title of the note',
      demand: true,
      alias: 't',
    };
const bodyHolder = {
      describe: 'Body of the note',
      demand: true,
      alias: 'b',
    };
    
const yargs = require('yargs')
  .command('add', 'Add a note',{
    title: titleHolder,
    body: bodyHolder,
  })
  .command('remove', 'Delete a note',{
    title: titleHolder,
  })
  .command('update', 'Update a note',{
    title: titleHolder,
    body: bodyHolder,
  })
  .command('read', 'Read a note',{
    title: titleHolder,
  })
  .help()
  .argv;

const note = require('./notes');
const {log} = require('./notes');

const command = yargs._[0].toLowerCase();
if (command === 'add') {
  console.log(yargs, 'yargs');
  const newNote = note.addNote(yargs.t, yargs.b);
  if (newNote) {
     console.log('Note saved successfully');
     log(newNote);
  }else { console.log('Note title already Exist'); }
}
else if (command === 'list') {
  const notes = note.listNote();
  console.log(`There ${notes.length > 1 ? 'are':'is'} ${notes.length} note${notes.length > 1 ? 's':''}`);
  notes.forEach(log);
}
else if (command === 'remove'){
  const res = note.removeNote(yargs.t);
  console.log( res ? 'Note was deleted' : 'Note not found');
}
else if (command === 'update') {
   const updatedNote = note.updateNote(yargs.t, yargs.b);
   if (updatedNote) {
     console.log('Note updated successfully');
     log(updatedNote);
  }else { console.log('Note title not found'); }
}
else if (command === 'read') {
  const filteredNote = note.getNote(yargs.t);
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