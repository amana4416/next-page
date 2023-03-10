import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchLastCurrentlyReading() {
    try {
        //sending request to server
        const response = yield axios({
            method: 'GET',
            //currently reading get route in the bookshelves router
            //to get the last 6 books
            url: `/api/bookshelves/currently/last`
        })
        //store books in a reducer
        yield put({
            type: 'SET_LAST_CURRENTLY_READING',
            payload: response.data
        })
    } catch {
        console.log('error fetching the last 6 books you are currently reading');
    }
}

function* fetchLastWantToRead() {
    try {
        //sending request to server
        const response = yield axios({
            method: 'GET',
            url: `/api/bookshelves/want/last`
        })
        //store books in a reducer
        yield put({
            type: 'SET_LAST_WANT_TO_READ',
            payload: response.data
        })
    } catch {
        console.log('error fetching the last 6 books you want to read');
    }
}

function* fetchLastFinishedReading() {
    try {
        //sending request to server
        const response = yield axios({
            method: 'GET',
            url: `/api/bookshelves/finished/last`
        })
        //store books in a reducer
        yield put({
            type: 'SET_LAST_FINISHED_READING',
            payload: response.data
        })
    } catch {
        console.log('error fetching the last 6 books you finished reading');
    }
}

function* bookshelvesSaga() {
    yield takeLatest('SAGA/FETCH_LAST_CURRENTLY_READING', fetchLastCurrentlyReading);
    yield takeLatest('SAGA/FETCH_LAST_WANT_TO_READ', fetchLastWantToRead);
    yield takeLatest('SAGA/FETCH_LAST_FINISHED_READING', fetchLastFinishedReading);
}

export default bookshelvesSaga;