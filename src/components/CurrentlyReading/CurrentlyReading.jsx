import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function CurrentlyReading() {

    const dispatch = useDispatch();
    const history = useHistory();

    //we're going to use useEffect in this component because we want the bookshelf to populate with
    //books marked as 'currently reading' as soon as the profile page opens
    useEffect(() => {
        dispatch({
            type: 'SAGA/FETCH_CURRENTLY_READING'
        })
    }, [])


    return (
        <>
            <p>currently reading:</p>
        </>
    )
}

export default CurrentlyReading;