const fs = require('fs');

const fetchNote = () => {
  try {
     return JSON.parse(fs.readFileSync('note-data.json')); 
  } catch(e) {
    return [];
  }
};

const saveNote = (notes) => {
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
   notes.push(note);
   saveNote(notes);
   return note;
 }
};

const removeNote = (title) => {
  const notes = fetchNote();
  const newNotes = notes.filter((note) => note.title.toLowerCase() !== title.toLowerCase());
  saveNote(newNotes);
  
  return notes.length !== newNotes.length;
};

const listNote = () => {
  return fetchNote();
};

const updateNote = (title, body) => {
  
  const notes = fetchNote();
  const filteredNote = notes.find((note) => note.title.toLowerCase() === title.toLowerCase());
   if(filteredNote) {
    const updatedNote = notes.map(note => {
      if(note.title.toLowerCase() === title.toLowerCase()){
        note.body = body;
        return note;
      }
      return note;
    });
    return {title, body};
  }
  return undefined;
};

const getNote = (title) => {
  const notes = fetchNote();
  const filteredNote = notes.filter((note) => note.title.toLowerCase() === title.toLowerCase());
  
  return filteredNote[0];
 
}

const log = (note) => {
   debugger;
   console.log('-------------');
   console.log(`Title: ${note.title}`);
   console.log(`Body: ${note.body}`);
}

module.exports = {
  addNote,
  listNote,
  removeNote,
  updateNote,
  getNote,
  log,
};