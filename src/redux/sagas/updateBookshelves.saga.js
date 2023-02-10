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

function* updateBookshelvesSaga() {
    yield takeLatest('SAGA/DELETE_FROM_BOOKSHELF', deleteFromBookshelf);
}

export default updateBookshelvesSaga;
