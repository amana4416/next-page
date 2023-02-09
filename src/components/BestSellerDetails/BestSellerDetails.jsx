import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import './BestSellerDetails.css';
//mui imports
import Paper from '@mui/material/Paper'


function BestSellerDetails() {

    const dispatch = useDispatch();
    const params = useParams();

     //call best sellers from the redux store
     const bestSellers = useSelector(store => store.bestSellers);

     //declare our variables from the bestSellers reducer so we can show info on the page
     const book_ibsn = params.id
     console
     const book_cover = `https://storage.googleapis.com/du-prd/books/images/${book_ibsn}.jpg`;
     const book_title = bestSellers.title;
     const book_author = bestSellers.author;
     const book_description = bestSellers.description;
    

    useEffect(() => {  
        dispatch({
            type: 'SAGA/FETCH_BEST_SELLERS'
        })
    }, [params.id]) //putting params.id in the bracket allows us to refresh the page and still
    //show the details for the same book. the BestSellerDetails will show the same book details until
    //until it is given a new params.id
    

    // const bestSellers = () => {
        
    // }

    return (
        <>
            <section className="bestSellerDetailsBackground">
                <Paper
                    elevation={3}
                    sx={{backgroundColor: '#B7B4A2', height:'300', width: '275px', margin: '100px', padding: '15px'}}
                > 
                    <img 
                        src={book_cover}
                        alt={book_title}
                    />
                </Paper>

                <section className="bestSellerBookInfo">
                    <Paper
                        elevation={3}
                        sx={{backgroundColor: '#B7B4A2', height:'300px', width: '525px', marginTop: '100px'}}
                    > 
                        <h2>{book_title}</h2>
                        
                    </Paper>

                   
                </section>
            </section>
        </>
    )
}

export default BestSellerDetails;