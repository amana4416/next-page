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
     const bestSellerIbsn = params.id
     const book_cover = `https://storage.googleapis.com/du-prd/books/images/${bestSellerIbsn}.jpg`;
     const book_title = bestSellers.title;
     const book_author = bestSellers.author;
     const book_description = bestSellers.description;
    

    useEffect(() => {  
    }, [params.id]) //putting params.id in the bracket allows us to refresh the page and still
    //show the details for the same book. the BestSellerDetails will show the same book details until
    //until it is given a new params.id
    

    // const bestSellers = () => {
        
    // }

    return (
        <>
            <Paper
                 elevation={3}
                 sx={{backgroundColor: '#B7B4A2', height:'auto', width: '180px', margin: '15px', marginBottom: '15px', padding: '15px',  display: 'inline-flex'}}
            > 
                <img 
                    src={book_cover}
                    alt={book_title}
                />


            </Paper>
        </>
    )
}

export default BestSellerDetails;