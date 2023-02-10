import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//we want access to action.payload, so we give 'action' as a parameter
function* deleteFromBookshelf(action) {
    
}

function* updateBookshelvesSaga() {
    yield takeLatest('SAGA/DELETE_FROM_BOOKSHELF', deleteFromBookshelf);
}
