import moment from 'moment'
import { getFilters } from './filters'
import { sortNotes, getNotes } from './notes'

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')

    // Setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }
    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl)

    // Setup the link
    noteEl.setAttribute('href', `/edit.html#${note.id}`)
    noteEl.classList.add('list-item')

    // Setup the status message
    statusEl.textContent = generateLastEdited(note.updatedAt)
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)

    return noteEl

    /* // Generate the DOM structure for a note //Document Object Model
const generateNoteDOM = (note) => { // = function(note) {
  //const noteEl = document.createElement(`div`);
  const noteEl = document.createElement(`a`) //anchor tag
  //const textEl = document.createElement(`a`);
  const textEl = document.createElement(`p`)
  const statusEl = document.createElement(`p`) */
    /*const button = document.createElement(`button`);
  
    //Setup the remove note button
    button.textContent = `x`;
    noteEl.appendChild(button);//After writing this code row, the X buttons are appeared.
    button.addEventListener(`click`, () => { //, function () {
      //console.log(note);
      removeNote(note.id); //It's not the following. removeNote(note, id);
      saveNotes(notes);
      renderNotes(notes, filters);
    });*/
    /*
      //noteEl.appendChild(button);
      //We're completely overriding everything in that paragraph in a way this case includes the button.
      //Setup the note title text
      if (note.title.length > 0) {
        textEl.textContent = note.title//textElement
      } else {
        textEl.textContent = 'Unnamed note'
      }
      textEl.classList.add(`list-item__title`)
      noteEl.appendChild(textEl);
    
      //Seteup the link
      //textEl.setAttribute(`href`, `/notesEdit.html#${note.id}`);
      noteEl.setAttribute(`href`, `/notesEdit.html#${note.id}`) //edit.html was written by a programmer in its code application
      noteEl.classList.add(`list-item`)
    
      //Setup the status message
      statusEl.textContent = generateLastEdited(note.updatedAt)
      statusEl.classList.add(`list-item__subtitle`)
      noteEl.appendChild(statusEl)
    
      return noteEl
    } */
}

// Render application notes
const renderNotes = () => {
    const notesEl = document.querySelector('#notes')
    const filters = getFilters()
    const notes = sortNotes(filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    notesEl.innerHTML = ''

    if (filteredNotes.length > 0) {
        filteredNotes.forEach((note) => {
            const noteEl = generateNoteDOM(note)
            notesEl.appendChild(noteEl)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'No notes to show'
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }
    /* // Render application notes
const renderNotes = (notes, filters) => { //= function (notes, filters){
  const notesEl = document.querySelector(`#notes`)
  notes = sortNotes(notes, filters.sortBy);
  const filteredNotes = notes.filter((note) => { //(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  //document.querySelector('#notes').innerHTML = ''
  notesEl.innerHTML = ``

  if (filteredNotes.length > 0) {
    filteredNotes.forEach((note) => {
      const noteEl = generateNoteDOM(note)
      //document.querySelector(`#notes`).appendChild(noteEl)
      notesEl.appendChild(noteEl)
    })
  } else {
    const emptyMessage = document.createElement(`p`)
    emptyMessage.textContent = `No notes to show`//.textContent IS A METHOD
    emptyMessage.classList.add(`empty-message`) */ /*We created this section on JavaScript as opposed to using stylesNotesApp.css
    .empty-message {
  text-align: center;
  margin: 3.2rem 0;
}
    */ /*
    notesEl.appendChild(emptyMessage)
  }
} */
}

const initializeEditPage = (noteId) => {
    const titleElement = document.querySelector('#note-title')
    const bodyElement = document.querySelector('#note-body')
    const dateElement = document.querySelector('#last-edited')
    const notes = getNotes()
    const note = notes.find((note) => note.id === noteId)

    if (!note) {
        location.assign('/index.html')
    }

    titleElement.value = note.title
    bodyElement.value = note.body
    dateElement.textContent = generateLastEdited(note.updatedAt)

    /* const titleElement = document.querySelector(`#noteTitle`);
const bodyElement = document.querySelector(`#noteBody`);
const removeElement = document.querySelector(`#removeNote`);

const dateElement = document.querySelector(`#lastEdited`);

const noteId = location.hash.substring(1);

let notes = getSavedNotes();
let note = notes.find((note) => {
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

// Generate the last edited message
const generateLastEdited = (timestamp) => {
    return `Last edited ${moment(timestamp).fromNow()}`
    /* //Generate the last edited message
const generateLastEdited = (timestamp) => { //function (timestamp) {
  //return `Last edited ${moment(note.UpdateAt).fromNow()};
  return `Last edited ${moment(timestamp).fromNow()}`;
} */
}

export { generateNoteDOM, renderNotes, generateLastEdited, initializeEditPage }