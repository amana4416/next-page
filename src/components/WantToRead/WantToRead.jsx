import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './WantToRead.css';
//mui imports
import Paper from '@mui/material/Paper';

function WantToRead() {

    const dispatch = useDispatch();
    const history = useHistory();

    //call the books marked as 'want to read' from the redux store
    const wantToRead = useSelector(store => store.bookshelves.lastWantToRead);

    //we're going to use useEffect in this component because we want the bookshelf to populate with
    //books marked as 'want to read' as soon as the profile page opens
    useEffect(() => {
        dispatch({
            type: 'SAGA/FETCH_WANT_TO_READ'
        })
    }, [])

     //when you click anywhere on the want to read bookshelf,
    //you will be navigated to a new page that shows every book 
    //that is marked as want to read
    const openWantToRead = () => {
        console.log('you opened the want to read bookshelf');
        history.push(`/wantToReadOpen`)
    }
    return (
        <>
           <section className="wantToReadBackground" onClick={openWantToRead}>
                <Paper
                    sx={{backgroundColor: '#808274', height: 'auto', width: '1200px', margin: 'auto', marginTop: '25px', paddingLeft: '25px', paddingRight: '25px', paddingBottom: '15px',}}
                >
                    <h2 className="bookshelfHeading">Want To Read:</h2>
                    {wantToRead.map(want => {
                        return (
                            <Paper
                            key={want.id}
                            sx={{backgroundColor: '#B7B4A2', height:'auto', width: '160px', margin: '15px', marginBottom: '15px',  display: 'inline-flex'}}
                            >
                                <img 
                                    className="profileWantLast"
                                    src={want.book_cover} 
                                    alt={want.book_title}
                                />
                            </Paper>
                        )
                    })}
                </Paper>
            </section>
        </>
    )
}

export default WantToRead;