import { initializeEditPage, generateLastEdited } from './views'
import { updateNote, removeNote } from './notes'

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const dateElement = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)
/* const titleElement = document.querySelector(`#noteTitle`);
const bodyElement = document.querySelector(`#noteBody`);
const removeElement = document.querySelector(`#removeNote`);

const dateElement = document.querySelector(`#lastEdited`);

const noteId = location.hash.substring(1); */

initializeEditPage(noteId)

titleElement.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        title: e.target.value
    })
    dateElement.textContent = generateLastEdited(note.updatedAt)

    /* titleElement.addEventListener(`input`, (e) => { 
  //document.querySelector(`#noteTitle`).addEventListener(`input`, function (e){    ...});
  note.title = e.target.value //I make strives to set note.title equal to whatever was typed in.
  note.updatedAt = moment().valueOf();
  dateElement.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
}); */
})

bodyElement.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    })
    dateElement.textContent = generateLastEdited(note.updatedAt)

    /* bodyElement.addEventListener(`input`, (e) => { //, function (e) {
  note.body = e.target.value
  note.updatedAt = moment().valueOf();
  dateElement.textContent = generateLastEdited(note.updatedAt);
  saveNotes(notes);
}); */
})

removeElement.addEventListener('click', (e) => {
    removeNote(noteId)
    location.assign('/index.html')

    /* removeElement.addEventListener(`click`, (e) => { //, function (e) {
  removeNote(note.id);
  saveNotes(notes);
  location.assign(`/index.html`);
}); */
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        initializeEditPage(noteId)
    }

    /* window.addEventListener(`storage`, (e) => { //, function (e) {
  console.log(`some data changed`);//11 some data changed
  if (e.key === `notes`); {
    notes = JSON.parse(e.newValue);

    let note = notes.find((note) => { //(function (note) {  ...})
      //This a dupcliate code taken on this page.
      return note.id === noteId
    })
    if (!note) { //if (note === undefined) { 
      //If we found a note, we would be flipping a truthy value into a falsey value, which is good. location.assign(`/index.html`) wouldn't run. If we didn't find a note and this was undefined, we would be turn a falsey value into the truthy value. location.assign(`/index.html`) would run.
      location.assign(`/index.html`);
    }

    titleElement.value = note.title
    bodyElement.value = note.body
    dateElement.textContent = generateLastEdited(note.updatedAt);
  }
}); */
})