import React, { Component } from 'react';

function SearchItem({results}) {

    const bookCover = `http://books.google.com/books/content?id=${results.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`
    const bookTitle = results.volumeInfo.title;
    
    return(
        <>
            <img src={bookCover} alt={bookTitle} />
        </>
    )
}

export default SearchItem;