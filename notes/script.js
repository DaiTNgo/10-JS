const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
window.onload = () => {
	function addNote() {
		const body = document.body;
		const note = document.createElement('div');
		note.classList.add('note');
		note.innerHTML = `
        <div class='notes'>
            <div class='header'>
                <i class='bx bxs-pencil edit'></i>
                <i class='bx bxs-trash delete'></i>
            </div>
            <div class='main'></div>
            <textarea class='text'></textarea>
        </div>
    `;
		body.append(note);
		const edit = note.querySelector('.edit');
		const del = note.querySelector('.delete');
		const notes = note.querySelector('.notes');
		const main = note.querySelector('.main');
		const textArea = note.querySelector('.text');

		let value = null;
		textArea.addEventListener('input', (e) => {
			value = e.target.value;
			updateLs();
		});
		edit.addEventListener('click', () => {
			main.innerHTML = value;
			notes.classList.toggle('change');
			// arrNotes = [...arrNotes, value];
			// localStorage.setItem('notes', JSON.stringify(arrNotes));
		});
		del.addEventListener('click', () => {
			note.remove();
		});
	}
	const btnAdd = $('.add');
	btnAdd.addEventListener('click', addNote);

	function updateLs() {
		const arrNotes = $$('.text');
		let notes = [];
		[...arrNotes].forEach((note) => {
			notes = [...notes, note.value];
		});
		localStorage.setItem('notes', JSON.stringify(notes));
	}
};
