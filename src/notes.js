import uuidv4 from 'uuid/v4'
import moment from 'moment'

let notes = []

// Read existing notes from localStorage
const loadNotes = () => {
  const notesJSON = localStorage.getItem('notes')
  try {
    return notesJSON ? JSON.parse(notesJSON) : []
  } catch (e) {
    return []
  }
  /* //Read existing notes from localStorage
const getSavedNotes = () => { 
const notesJSON = localStorage.getItem('notes')
//We're reading data from localStorage without any sort of validation. We blindly and unintentionally parse it. Now, this assumption might be correct. However, what if it's not? What if there's other data inside there? We would in fact get an error and our program would crash becoming unusable for the user. 
try { //Try will throw the error.
  //return notesJSON !== null ? JSON.parse(notesJSON) : []
  return notesJSON ? JSON.parse(notesJSON) : []
  //We'll check if there's notesJSON. If there is, we'll parse it. If there's not, we'll use an empty array instead. */
  /*if (notesJSON !== null) {
    return JSON.parse(notesJSON)
  }
  else {
    return []
  }*/
  /*  } catch (e) {
    //If the date in the local storage is in valid for some reason, we can in fact go ahead and fix that by adding some code in the catch body
    return [] //We're not gettting an error which is great even though the data in the local storage is still invalid.
  }
}*/
}

// Save the notes to localStorage
const saveNotes = () => {
  localStorage.setItem('notes', JSON.stringify(notes))
  /* // Save the notes to localStorage
const saveNotes = (notes) => { // = function (notes)) {
localStorage.setItem('notes', JSON.stringify(notes))
} */
}

// Expose notes from module
const getNotes = () => {
  return notes
}

const createNote = () => {
  const id = uuidv4()
  const timestamp = moment().valueOf()
  notes.push({
    id: id,
    title: '',
    body: '',
    createdAt: timestamp,
    updatedAt: timestamp
  })
  saveNotes()
  return id
  /*document.querySelector(`#createNote`).addEventListener(`click`, (e) => {
const id = uuidv4();

const timestamp = moment().valueOf(); //valueOf() is a method.

//e.target.textContent = `The button was clicked`;
notes.push({
  //
  id: id,
  title: ``,
  body: ``,
  createdAt: timestamp,
  updatedAt: timestamp
});
saveNotes(notes);//This is recently added.
//localStorage.setItem(`notes`, JSON.stringify(notes));

//renderNotes(notes, filters); In the 76th video, it was abolished.
//location.assign(`/notesEdit.html`); In the 76th video, it was abolished.
location.assign(`/notesEdit.html#${id}`);
});*/
}

// Remove a note from the list
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id)
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1)
    saveNotes()
  }
  /* //Remove a note from the list !
const removeNote = (id) => { 
const noteIndex = notes.findIndex((note) => { 
  return note.id === id;
});
if (noteIndex > -1) { //This if statement cannot be converted because we're striving to compare numbers to one another and that's not something we can do with truthy and falsey.
  notes.splice(noteIndex, 1);
}
}; */
}

// Sort your notes by one of three ways
const sortNotes = (sortBy) => {
  if (sortBy === 'byEdited') {
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1
      } else if (a.updatedAt < b.updatedAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'byCreated') {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1
      } else if (a.createdAt < b.createdAt) {
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'alphabetical') {
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1
      } else {
        return 0
      }
    })
  } else {
    return notes
  }
  /* //Sort your notes by one of three ways
const sortNotes = (notes, sortBy) => { 
if (sortBy === `byEdited`) {
  return notes.sort((a, b) => { 
    //If a should come before b, then, -1 gets returned. If b should come before a, we return 1. If both are the same, we return 0.
    if (a.updatedAt > b.updatedAt) {
      //The above one means that a is recently updated. We want the recently updated one first.
      return -1;
    } else if (b.updatedAt > a.updatedAt) {
      return 1;
    } else if (b.updatedAt = a.updatedAt) {
      return 0;
    }
  });
}
else if (sortBy === `byCreated`) {
  return notes.sort((a, b) => { 

    if (a.createdAt > b.createdAt) { //The behind one means that a is a more recent one.
      return -1;
    }
    else if (a.createdAt < b.createdAt) {
      return 1;
    }
    else {
      return 0;
    }
  })
}
else if (sortBy === `alphabetical`) {
  return notes.sort((a, b) => { 
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return -1;
    }
    else if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return 1;
    }
    else {
      return 0;
    }
  })
}

else {
  return notes
}
} */
}

const updateNote = (id, updates) => {
  const note = notes.find((note) => note.id === id)

  if (!note) {
    return
  }

  if (typeof updates.title === 'string') {
    note.title = updates.title
    note.updatedAt = moment().valueOf()
  }

  if (typeof updates.body === 'string') {
    note.body = updates.body
    note.updatedAt = moment().valueOf()
  }

  saveNotes()
  return note

  /* let notes = getSavedNotes();
let note = notes.find((note) => {//(function (note){   ...})
  //This is a call back function
  return note.id === noteId
});

if (!note) { //if (note === undefined) {
  location.assign(`/index.html`)
}
//http://127.0.0.1:8080/notesEdit.html#94422cc9-50c8-4c16-a075-e16ec7d4b94c

titleElement.value = note.title;
//document.querySelector(`#noteTitle`).value = note.title;
bodyElement.value = note.body;
//http://127.0.0.1:8080/notesEdit.html#022fdd7c-95ab-4e54-b378-3e4f9daf5f8f
//http://127.0.0.1:8080/index.html

//dateElement.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`;//Last edited a few seconds ago
dateElement.textContent = generateLastEdited(note.updatedAt);

titleElement.addEventListener(`input`, (e) => { //, function (e) {
  //document.querySelector(`#noteTitle`).addEventListener(`input`, function (e){    ...});
  note.title = e.target.value //I make strives to set note.title equal to whatever was typed in.
  note.updatedAt = moment().valueOf();
  dateElement.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
});

bodyElement.addEventListener(`input`, (e) => { //, function (e) {
  note.body = e.target.value
  note.updatedAt = moment().valueOf();
  dateElement.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
});

removeElement.addEventListener(`click`, (e) => { //, function (e) {
  removeNote(note.id);
  saveNotes(notes);
  location.assign(`/index.html`);
}); */
}

notes = loadNotes()

export { getNotes, createNote, removeNote, sortNotes, updateNote }