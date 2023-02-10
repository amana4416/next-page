import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import swal from "sweetalert";
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
        //navigate back to profile
        history.push('/profile');
        //alert user book has been deleted
        swal({
            icon: 'success',
            title: 'Deleted book from your bookshelf'
        })
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
        //navigate user back to profile page
        // history.push('/profile');
    }

    return (
        <>
            <section className="bestSellerDetailsBackground">
                <Paper
                    elevation={3}
                    sx={{backgroundColor: '#B7B4A2', height:'300', width: '275px', margin: '100px', padding: '15px'}}
                > 
                    <img 
                        src={bookDetails.book_cover}
                        alt={bookDetails.book_title}
                    />
                </Paper>

                <section className="bestSellerBookInfo">
                    <Paper
                        elevation={3}
                        sx={{backgroundColor: '#B7B4A2', height:'300px', width: '525px', marginTop: '100px',}}
                    > 
                        <h2>{bookDetails.book_title}</h2>
                        <h2>Written by: {bookDetails.book_author}</h2>
                        <p>{bookDetails.book_description}</p>

                        <section className="updateBook">
                            <DeleteForeverIcon
                                onClick={() => deleteFromBookshelf(bookDetails.id)}
                            >
                            </DeleteForeverIcon>
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                                <InputLabel id="demo-simple-select-standard-label">Select Bookshelf</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={''}
                                    onChange={(event) => {changeBookshelf(bookDetails.id, event)}}
                                >
                                    <MenuItem value={1}>Currently Reading</MenuItem>
                                    <MenuItem value={2}>Want To Read</MenuItem>
                                    <MenuItem value={3}>Finished</MenuItem>
                                </Select>
                            </FormControl>
                        </section>
                    </Paper>
                </section>
            </section>
        </>
    )
}

export default BookDetails;