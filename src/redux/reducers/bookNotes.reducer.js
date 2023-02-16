//setting state as an object because server is sending us an object
const bookNotes = (state = {}, action) => {
    switch (action.type) {
        //when you want to see book notes
        case 'SET_NOTES':
            return action.payload;
        //when you want go back to the open bookshelf
        //this will clear the object so the next book
        //you click on can be stored in the object
        case 'CLEAR_NOTES':
            return {}; 
        default: 
            return state;
    }
}

export default bookNotes;