import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchBestSellerDetails() {
    try {
        // //sending request to server
        // const response = yield axios({
        //     method: 
        // })

    } catch {
        console.log('error fetching best seller book details')
    }
}




function* detailsSaga() {
    yield takeLatest('SAGA/FETCH_BESTSELLER_DETAILS', fetchBestSellerDetails);
}

export default detailsSaga;