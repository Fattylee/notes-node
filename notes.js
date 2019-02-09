console.log('Starting notes');
const fs = require('fs');

const fetchNote = () => {
  try {
     return JSON.parse(fs.readFileSync('note-data.json')); 
  } catch(e) {
    return [];
  }
};

const saveNote = (notes) => {
  notes.push(note);
   fs.writeFileSync('note-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  let notes = fetchNote();
  
  note = {
    title,
    body
  };
 duplicateNote = notes.filter((note) => note.title.toLowerCase() === title.toLowerCase());

 if (duplicateNote.length === 0) {
   saveNote(notes);
   return note;
 }
};

const removeNote = (title, body) => {
  console.log('Removing note', title, body);
};

const listNote = (title, body) => {
  console.log('Listing note', title, body);
};

const updateNote = (title, body) => {
  console.log('Updating note', title, body);
};


module.exports = {
  addNote,
  listNote,
  removeNote,
  updateNote
};