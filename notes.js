console.log('Starting notes');

const addNote = (title, body) => {
  console.log('Adding note', title, body);
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