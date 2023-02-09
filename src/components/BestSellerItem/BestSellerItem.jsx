import React from "react"
import { useHistory } from 'react-router-dom';
//mui imports
import Paper from '@mui/material/Paper';

function BestSellerItem({bestSeller}) {

    const history = useHistory();

    // const book_isbn = bestSeller.primary_isbn13;
    const book_cover = bestSeller.book_image;
    const book_title = bestSeller.title;
    const book_author = bestSeller.author;
    const book_description = bestSeller.description;

    return (
        <>
            <div className="bestSellerInfo">
                <Paper 
                    elevation={3}
                    sx={{backgroundColor: '#B7B4A2', height:'auto', width: '180px', margin: '35px', marginTop: '15px', padding: '15px', display: 'inline-block'}}
                >  
                    <img 
                        className="bestSellerCover"
                        src={book_cover} 
                        alt={book_title}
                    /> 
                </Paper>
                <Paper 
                    elevation={3}
                    sx={{backgroundColor: '#B7B4A2', height: '150px', width: '500px', margin: '45px', marginTop: '15px', padding: '15px', display: 'inline-block', verticalAlign: 'top'}}
                >
                    <h3>{book_title}</h3>
                    <h4>Written by: {book_author}</h4>
                    <p>{book_description}</p>
                </Paper>
            </div>
        </>
    )
}

export default BestSellerItem;