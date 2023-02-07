import { combineReducers } from "redux";

const currentlyReading = (state = [], action) => {
    switch (action.type) {
        case 'SET_CURRENTLY_READING':
            return action.payload;
        default: 
            return state;
    }
}


export default combineReducers({
    currentlyReading,
})