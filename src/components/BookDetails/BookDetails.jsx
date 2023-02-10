import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './BookDetails.css';
//mui imports
import Paper from '@mui/material/Paper'


function BookDetails() {

    const dispatch = useDispatch();
    const params = useParams();

    //call bookDetails from the redux store
    


    
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

    return (
        <>
            <section className="bestSellerDetailsBackground">
                <Paper
                    elevation={3}
                    sx={{backgroundColor: '#B7B4A2', height:'300', width: '275px', margin: '100px', padding: '15px'}}
                > 
                    <img 
                        // src={book_cover}
                        // alt={book_title}
                    />
                </Paper>

                <section className="bestSellerBookInfo">
                    <Paper
                        elevation={3}
                        sx={{backgroundColor: '#B7B4A2', height:'300px', width: '525px', marginTop: '100px'}}
                    > 
                        {/* <h2>{book_title}</h2> */}
                        
                    </Paper>

                   
                </section>
            </section>
        </>
    )
}

export default BookDetails;