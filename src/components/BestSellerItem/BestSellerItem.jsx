import React from "react"
import { useHistory } from 'react-router-dom';
//mui imports
import Paper from '@mui/material/Paper';

function BestSellerItem({bestSeller}) {

    const history = useHistory();

    const book_isbn = bestSeller.primary_isbn13;
    const book_cover = `https://storage.googleapis.com/du-prd/books/images/${book_isbn}.jpg`;
    const book_title = bestSeller.title;
    const book_author = bestSeller.author;
    const book_description = bestSeller.description;


    const showDetails = (bestSeller) => {
        console.log(book_isbn);
        history.push(`/bestSellerDetails/${book_isbn}`)
    }

    return (
        <>
                <Paper 
                    elevation={3}
                    sx={{backgroundColor: '#B7B4A2', height:'auto', width: '180px', margin: '15px', marginBottom: '15px', padding: '15px',  display: 'inline-flex'}}
                >  
                    <img 
                        className="bestSellerCovers"
                        src={book_cover} 
                        alt={book_title}
                        onClick={(e) => {showDetails(bestSeller)}}
                    /> 
                </Paper>
        </>
    )
}

export default BestSellerItem;