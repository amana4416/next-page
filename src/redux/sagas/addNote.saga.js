import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//we need to access action.payload so we can post it to our db
function* addNote(action) {
    try {
        const newNote = action.payload;
        console.log(newNote);
        const response = yield axios ({
            method: 'POST',
            url: `/api/notes`,
            data: {
                book_id: 'newNote.book_id',
                user_id: 'newNote.user_id'
            }
        })
    } catch (error) {
        console.log('error in addNote', error)
    }
}

function* addNoteSaga() {
    yield takeLatest('SAGA/ADD_NOTE', addNote);
}

export default addNoteSaga;

