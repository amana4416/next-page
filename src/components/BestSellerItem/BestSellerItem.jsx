import React from "react"

//mui imports
import Paper from '@mui/material/Paper';

function BestSellerItem({bestSeller}) {

    const bookId = bestSeller.primary_isbn13
    const bookCover = `https://storage.googleapis.com/du-prd/books/images/${bookId}.jpg`
    const bookTitle = bestSeller.title

    return (
        <>
            <section className="bestSellerItemBackground">
                <Paper 
                    elevation={3}
                    sx={{backgroundColor: '#C79A96', margin: '15px', height: '335px', width: '300px' }}
                >  
                    <img src={bookCover} alt={bookTitle}/> 
                </Paper>
            </section>
        </>
    )
}

export default BestSellerItem;