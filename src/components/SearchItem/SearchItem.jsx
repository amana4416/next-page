import React from 'react';
import './SearchItem.css';
//mui imports
import Paper from '@mui/material/Paper';

function SearchItem({results}) {

    const bookCover = `http://books.google.com/books/content?id=${results.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`
    const bookTitle = results.volumeInfo.title;
    
    return(
        <>
            <section className='resultBackground'>
                <Paper 
                    elevation={3}
                    sx={{backgroundColor: '#808274', margin: '15px', height: '335px', width: '300px', }}
                >
                    <h4>{bookTitle}</h4>
                    <img 
                        className='searchBookCovers'
                        src={bookCover} 
                        alt={bookTitle} 
                    />

                </Paper>
            </section>


            
        </>
    )
}

export default SearchItem;