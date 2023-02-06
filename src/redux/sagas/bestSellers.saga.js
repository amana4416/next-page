import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchBestSellers() {
    try {
        //sending get requet to server
        const response = yield axios({
            method: 'GET',
            url: `/api/bestsellers`
        })
        //store the list of best sellers in reducer
        yield put({
            type: 'SET_BEST_SELLERS',
            payload: response.data
        })
        console.log('here are our best sellers', response.data)
    } catch {
        console.log('error fetching best sellers', error);
    }

}

function* bestSellersSaga() {
    yield takeLatest('SAGA/FETCH_BEST_SELLERS', fetchBestSellers);
}

export default bestSellersSaga;