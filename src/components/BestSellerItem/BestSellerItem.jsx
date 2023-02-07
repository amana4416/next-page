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
            <section className="bestSellerItemBackground">
                <Paper 
                    elevation={3}
                    sx={{backgroundColor: '#C79A96', margin: '15px', height: '300px', width: '280px' }}
                >  
                    <img 
                        src={bookCover} 
                        alt={bookTitle}
                        onClick={(e) => {showDetails(bestSeller)}}
                    /> 
                </Paper>
            </section>
        </>
    )
}

export default BestSellerItem;