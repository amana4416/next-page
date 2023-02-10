import React from "react"
import { useDispatch, useSelector } from "react-redux";
import swal from 'sweetalert';
import './BestSellerItem.css';
//mui imports
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function BestSellerItem({bestSeller}) {

    const dispatch = useDispatch();

    const user = useSelector((store) => store.user);

    const book_isbn = bestSeller.primary_isbn13;
    const book_title = bestSeller.title;
    const book_author = bestSeller.author;
    const book_cover = bestSeller.book_image;
    const book_description = bestSeller.description;

    const addToBookShelf = (event) => {
        console.log('user', user.id, user.username, 'is adding', book_title, 'to bookshelf', event.target.value)
        dispatch({
            type: 'SAGA/ADD_TO_BOOKSHELF',
            //we're adding a book to our bookshelf so we need to send all this info along
            //to so we can add the book to our database!
            payload: {
                book_isbn: book_isbn,
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
                <Paper 
                    elevation={3}
                    sx={{backgroundColor: '#B7B4A2', height:'auto', width: '1000px', marginTop: '15px', padding: '15px', display: 'inline-flex', }}
                >  
                    <section className="bestSellerBooks">
                        <section className="bestSellerCover">
                            <img 
                                src={book_cover} 
                                alt={book_title}
                            /> 
                        </section>
                        <section className="bestSellerInfo">
                            <h3>{book_title}</h3>
                            <h4>Written by: {book_author}</h4>
                            <p>{book_description}</p>
                        </section>
                        <section className="bestSellerBookshelfMenu">
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                                <InputLabel id="demo-simple-select-standard-label">Select Bookshelf</InputLabel>
                                <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={''}
                                onChange={addToBookShelf}
                                >
                                    <MenuItem value={1}>Currently Reading</MenuItem>
                                    <MenuItem value={2}>Want To Read</MenuItem>
                                    <MenuItem value={3}>Finished</MenuItem>
                                </Select>
                            </FormControl>
                        </section>
                    </section>
                </Paper>
        </>
    )
}

export default BestSellerItem;