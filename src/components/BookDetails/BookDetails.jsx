import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import swal from "sweetalert";
import './BookDetails.css';
//mui imports
import Paper from '@mui/material/Paper'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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
        history.push('/profile')
        //alert user book has been deleted
        swal({
            icon: 'success',
            title: 'Deleted book from your bookshelf'
        })
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
                        </section>
                    </Paper>
                </section>
            </section>
        </>
    )
}

export default BookDetails;