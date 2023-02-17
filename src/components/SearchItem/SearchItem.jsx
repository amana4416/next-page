import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import swal from 'sweetalert';
import './SearchItem.css';
//mui imports
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SearchItem({results}) {

    const dispatch = useDispatch();

    const user = useSelector((store) => store.user);
    
    //NYT books api sends book titles in all upercase => it's easier to switch book titles
    //that come from the google books api to all upercase to match
    const book_title = results.volumeInfo.title.toUpperCase();
    const book_author = results.volumeInfo.authors[0];
    const book_cover = results.volumeInfo.imageLinks.thumbnail;
    const book_description = results.volumeInfo.description;
    
    const addToBookShelf = (event) => {
        dispatch({
            type: 'SAGA/ADD_TO_BOOKSHELF',
            //we're adding a book to our bookshelf so we need to send all this info along
            //to so we can add the book to our database!
            payload: {
                book_title: book_title,
                book_author: book_author,
                book_cover: book_cover,
                book_description: book_description,
                bookshelf: event.target.value,
                user_id: user.id
            }
        })
        swal({
            title: 'Success!',
            text:'You added this book to your library.',
            icon: 'success'
        })
    }
    
    return (
        <>
            <section className="searchResultsPaper">
                <Paper 
                    elevation={3}
                    sx={{backgroundColor: '#B7B4A2', height: 'auto', width: '1200px', marginTop: '15px', display: 'inline-flex' }}
                >
                    <section className="searchResultsBooks">
                        <section className="searchResultsCover">
                            <img 
                                className="searchResultsCover"
                                src={book_cover} 
                                alt={book_title}
                            />
                        </section>
                        <section className="searchResultInfo">
                            <h3>{book_title}</h3>
                            <h4>Written by: {book_author}</h4>
                            <p>{book_description}</p>
                        </section>
                        <section className="searchBookshelfMenu">
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                                <InputLabel id="demo-simple-select-standard-label">Select Bookshelf</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={''}
                                    onChange={addToBookShelf}
                                >
                                    <MenuItem value={2}>Want To Read</MenuItem>
                                    <MenuItem value={1}>Currently Reading</MenuItem>
                                    <MenuItem value={3}>Finished Reading</MenuItem>
                                </Select>
                            </FormControl>
                        </section>
                    </section>
                </Paper>
            </section>


            
        </>
    )
}

export default SearchItem;