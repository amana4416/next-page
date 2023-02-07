import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchCurrentlyReading() {
    try {
        //sending request to server
        const response = yield axios({
            method: 'GET',
            //currently reading get route in the bookshelves router
            url: `/api/bookshelves/currently`
        })
    } catch {
        console.log('error fetching books you are currently reading');
    }
}

function* currentlyReadingSaga() {
    yield takeLatest('SAGA/FETCH_CURRENTLY_READING', fetchCurrentlyReading);
}

export default currentlyReadingSaga;