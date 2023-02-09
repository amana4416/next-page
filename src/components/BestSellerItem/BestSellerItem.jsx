import React from "react"
import { useHistory } from 'react-router-dom';
//mui imports
import Paper from '@mui/material/Paper';

function BestSellerItem({bestSeller}) {

    const history = useHistory();

    const bookIsbn = bestSeller.primary_isbn13;
    const bookCover = `https://storage.googleapis.com/du-prd/books/images/${bookIsbn}.jpg`;
    const bookTitle = bestSeller.title;
    const bookAuthor = bestSeller.author;
    const bookDescription = bestSeller.description;
    const bookPublishDate = bestSeller.publishedDate;
    const bookPublisher = bestSeller.publisher;


    const showDetails = (bestSeller) => {
        console.log(bookIsbn);
        history.push(`/details/${bookIsbn}`)
    }

    return (
        <>
                <Paper 
                    elevation={3}
                    sx={{backgroundColor: '#B7B4A2', height:'auto', width: '180px', margin: '15px', marginBottom: '15px', padding: '15px',  display: 'inline-flex'}}
                >  
                    <img 
                        className="bestSellerCovers"
                        src={bookCover} 
                        alt={bookTitle}
                        onClick={(e) => {showDetails(bestSeller)}}
                    /> 
                </Paper>
        </>
    )
}

export default BestSellerItem;