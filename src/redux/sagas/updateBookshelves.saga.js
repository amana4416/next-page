import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//we want access to action.payload, so we give 'action' as a parameter
function* deleteFromBookshelf(action) {
    try {
        const bookToDelete = action.payload;
        console.log('we deleted book with id:', bookToDelete);
        const response = yield axios({
            method: 'DELETE',
            url: `/api/bookshelves/${bookToDelete}`
        })

    } catch (error) {
        console.log('error deleting book from the bookshelf', error)
    }
}

//need access to action.payload again
function* changeBookshelf(action) {
    try {
        const bookToChange = action.payload;
        console.log('we moved book with id', bookToChange, 'to another bookshelf');
        const response = yield axios({
            method: 'PUT',
            url: `/api/bookshelves/${bookToChange.id}`,
            data: {
                bookshelf: bookToChange.bookshelf
            }
        })
    } catch (error) {
        console.log('error changing bookshelf', error)
    }
}

function* updateBookshelvesSaga() {
    yield takeLatest('SAGA/DELETE_FROM_BOOKSHELF', deleteFromBookshelf);
    yield takeLatest('SAGA/CHANGE_BOOKSHELF', changeBookshelf);
}

export default updateBookshelvesSaga;
