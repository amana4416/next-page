//setting state as an object because server is sending us an object
const bookDetails = (state = {}, action) => {
    switch (action.type) {
        //when you want to see book details
        case 'SET_BOOK_DETAILS':
            return action.payload;
        //when you want go back to the open bookshelf
        //this will clear the object so the next book
        //you click on can be stored in the object
        case 'CLEAR_BOOK_DETAILS':
            return {}; 
        default: 
            return state;
    }
}