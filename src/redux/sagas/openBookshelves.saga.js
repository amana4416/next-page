import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchCurrentlyReading() {
    try {
        //sending request to server
        const response = yield axios({
            method: 'GET',
            //this route will get all the books marked as currently reading
            url: `/api/bookshelves/currently`
        })
        //store books in a reducer
        yield put({
            type: 'SET_CURRENTLY_READING',
            payload: response.data
        })
    } catch {
        console.log('error fetching all books you are currently reading');
    }
}

function* fetchWantToRead() {
    try {
        //sending request to server
        const response = yield axios({
            method: 'GET',
            //this route will get all the books marked as currently reading
            url: `/api/bookshelves/want`
        })
        //store books in a reducer
        yield put({
            type: 'SET_WANT_TO_READ',
            payload: response.data
        })
    } catch {
        console.log('error fetching all books you want to read');
    }
}



function* openBookshelvesSaga() {
    yield takeLatest('SAGA/FETCH_ALL_CURRENTLY_READING', fetchCurrentlyReading);
    yield takeLatest('SAGA/FETCH_ALL_WANT_TO_READ', fetchWantToRead);
}

export default openBookshelvesSaga;