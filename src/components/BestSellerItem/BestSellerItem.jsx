import React from "react"
import { useHistory } from 'react-router-dom';
//mui imports
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
                    sx={{backgroundColor: '#B7B4A2', height: 'auto', width: '450px', margin: '45px', marginTop: '15px', padding: '15px', display: 'inline-block', verticalAlign: 'top'}}
                >
                    <h3>{book_title}</h3>
                    <h4>Written by: {book_author}</h4>
                    <p>{book_description}</p>
                </Paper>
                <Paper
                    elevation={3}
                    sx={{backgroundColor: '#B7B4A2', height: 'auto', width: '250px', margin: '35px', marginTop: '15px', padding: '15px', display: 'inline-block', verticalAlign: 'top'}}
                >
                     <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                        <InputLabel id="demo-simple-select-standard-label">Select Bookshelf</InputLabel>
                        <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        
                        
                        label="Select Bookshelf"
                        >
                            <MenuItem value={1}>Currently Reading</MenuItem>
                            <MenuItem value={2}>Want To Read</MenuItem>
                            <MenuItem value={3}>Finished</MenuItem>
                        </Select>
                    </FormControl>
                </Paper>
            </div>
        </>
    )
}

export default BestSellerItem;