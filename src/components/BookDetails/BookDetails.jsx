import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import swal from "sweetalert";
import BookNotesForm from "../BookNotesForm/BookNotesForm";
import BookNotes from "../BookNotes/BookNotes";
import './BookDetails.css';
//mui imports
import Paper from '@mui/material/Paper'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function BookDetails() {

    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    //call bookDetails from the redux store
    const bookDetails = useSelector(store => store.bookDetails);

    useEffect(() => {  
        const bookId = params.id;
        dispatch({
            type: 'SAGA/FETCH_BOOK_DETAILS',
            payload: bookId
        })
        return ({
            type: 'CLEAR_BOOK_DETAILS'
        })
    }, [params.id]) //putting params.id in the bracket allows us to refresh the page and still
    //show the details for the same book. the BestSellerDetails will show the same book details until
    //until it is given a new params.id

    const deleteFromBookshelf = (id) => {
        console.log('you deleted', bookDetails.book_title, 'from the bookshelf');
        dispatch({
            type: 'SAGA/DELETE_FROM_BOOKSHELF',
            payload: bookDetails.id
        })
        //alert user book has been deleted
        swal({
            icon: 'success',
            title: 'Deleted book from your bookshelf'
        })
        //navigate back to profile
       .then( history.push('/profile'));
    }

    const changeBookshelf = (id, event) => {
        console.log('you moved', bookDetails.book_title, 'to bookshelf', event.target.value);
        dispatch({
            type: 'SAGA/CHANGE_BOOKSHELF',
            payload: {
                id: bookDetails.id,
                bookshelf: event.target.value
            }
        })
        //alert user book has been moved to another bookshelf
        swal({
            icon: 'success',
            title: 'Moved book to another bookshelf'
        })
        //navigate back to profile
        // .then(history.push('/profile'));
    }

    return (
        <>
            <section className="bookDetailsBackground">
                <Paper
                    sx={{backgroundColor: '#808274', height: 'auto', width: '1200px', margin: 'auto', marginTop: '25px', marginLeft: '85px', paddingRight: '55px', paddingBottom: '45px', display: 'inline-flex'}}
                >
                    <section className="bookDetailCover">
                        <section className="leftSide">
                            <Paper
                                elevation={3}
                                sx={{backgroundColor: '#B7B4A2', height:'500px', width: '400px', margin: '100px', marginBottom: '45px'}}
                            > 
                                <img 
                                    className="bookDetailsCover"
                                    src={bookDetails.book_cover}
                                    alt={bookDetails.book_title}
                                />
                            </Paper>
                            <Paper
                                elevation={3}
                                sx={{backgroundColor: '#B7B4A2', height:'auto', width: '400px', marginLeft: '100px',}}
                            >
                                <section className="notesForm">
                                    <BookNotesForm 
                                        bookDetails={bookDetails}
                                    />
                                </section>
                                <section className="previousNotes">
                                    <BookNotes />
                                </section>
                            </Paper>
                        </section>
                    </section>
                
                    <section className="bookDetailsInfo">
                        <Paper
                            elevation={3}
                            sx={{backgroundColor: '#B7B4A2', height:'auto', width: '525px', marginTop: '100px', paddingTop: '20px', paddingLeft: '20px', paddingRight: '20px'}}
                        > 
                            <section className="bookData">
                                <h2>{bookDetails.book_title}</h2>
                                <h2>Written by: {bookDetails.book_author}</h2>
                                <p>{bookDetails.book_description}</p>
                            </section>

                            <section className="updateBook">
                                <DeleteForeverIcon
                                    className="deleteButton"
                                    fontSize="large"
                                    sx={{color: '#42373A'}}
                                    onClick={() => deleteFromBookshelf(bookDetails.id)}
                                >
                                </DeleteForeverIcon >
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                                    <InputLabel id="demo-simple-select-standard-label">Select Bookshelf</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={''}
                                        onChange={(event) => {changeBookshelf(bookDetails.id, event)}}
                                    >
                                        <MenuItem value={2}>Want To Read</MenuItem>
                                        <MenuItem value={1}>Currently Reading</MenuItem>
                                        <MenuItem value={3}>Finished Reading</MenuItem>
                                    </Select>
                                </FormControl>
                            </section>
                        </Paper>
                    </section>
                </Paper>
            </section>
        </>
    )
}

export default BookDetails;