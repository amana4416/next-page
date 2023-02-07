import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchBookShelves() {
    try {
        //sending request to server
        const response = yield axios({
            method: 'GET',
            //currently reading get route in the bookshelves router
            url: `/api/bookshelves/currently`
        })
        yield put({
            type: 'SET_CURRENTLY_READING',
            payload: response.data
        })
    } catch {
        console.log('error fetching books you are currently reading');
    }
}

function* bookshelvesSaga() {
    yield takeLatest('SAGA/FETCH_CURRENTLY_READING', fetchBookShelves);
}

export default bookshelvesSaga;