import { createNote } from './notes'
import { setFilters } from './filters'
import { renderNotes } from './views'

renderNotes()

document.querySelector('#create-note').addEventListener('click', (e) => {
  const id = createNote()
  location.assign(`/edit.html#${id}`)

  /* document.querySelector(`#createNote`).addEventListener(`click`, (e) => {//, function (e) {
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
}); */
})

document.querySelector('#search-text').addEventListener('input', (e) => {
  setFilters({
    searchText: e.target.value
  })
  renderNotes()
  /* document.querySelector(`#searchText`).addEventListener(`input`, (e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
  }); */
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
  setFilters({
    sortBy: e.target.value
  })
  renderNotes()
  /* document.querySelector(`#filterBy`).addEventListener(`change`, (e) => {
//console.log(e.target.value);
filters.sortBy = e.target.value;
renderNotes(notes, filters);
}); */
})

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    renderNotes()
  }
  /* window.addEventListener(`storage`, (e) => {//, function (e) {
//This just takes six lines of code to add this live rendering data
console.log(`second of all, some data was changed`)
if (e.key === `notes`) {
  notes = JSON.parse(e.newValue);//This is where the new storage value for that key exists.
  renderNotes(notes, filters);
}
}); */
})