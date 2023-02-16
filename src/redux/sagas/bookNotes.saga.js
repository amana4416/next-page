import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//we want access to action.payload
function* fetchNotes(action) {
    try {
        const book_id = action.payload;
        const response = yield axios({
            method: 'GET',
            url: `/notes${book_id}`
        })
    } catch (error) {
        console.log('error fetching book notes', error);
    }
}


//we need to access action.payload so we can post it to our db
function* addNote(action) {
    try {
        const newNote = action.payload;
        console.log(newNote);
        const response = yield axios ({
            method: 'POST',
            url: `/api/notes`,
            data: {
                book_id: newNote.book_id,
                note: newNote.note,
                user_id: newNote.user_id
            }
        })
        yield put({
            type: 'SET_NOTES',
            payload: response.data
        })
    } catch (error) {
        console.log('error in addNote', error)
    }
}

function* BookNotesSaga() {
    yield takeLatest('SAGA/FETCH_NOTES', fetchNotes);
    yield takeLatest('SAGA/ADD_NOTE', addNote);
}

export default BookNotesSaga;

