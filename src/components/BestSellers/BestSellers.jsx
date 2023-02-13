import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './BestSellers.css';
import BestSellerItem from '../BestSellerItem/BestSellerItem';
//mui imports
import Paper from '@mui/material/Paper';

function BestSellers() {

    const dispatch = useDispatch();

    //call best sellers from the redux store
    const bestSellers = useSelector(store => store.bestSellers);

    useEffect(() => {
        dispatch({
            type: 'SAGA/FETCH_BEST_SELLERS'
        })
    }, [])

    return (
        <>
            <section className="bestSellersBackground">
                <Paper 
                    sx={{backgroundColor: '#808274', width: '1250px', height: 'auto', margin: 'auto', marginTop: '20px', padding: '15px',}}
                >
                    <h2 className="bestSellerHeading"> Current New York Times Best Sellers </h2>
                        {bestSellers.map(bestSeller => {
                            return (
                                <BestSellerItem 
                                //nyt doesn't send each book with an "id", 
                                //but each book has an isbn number which is a unqiue identifier
                                key={bestSeller.primary_isbn13}
                                //sending array to BestSelleritem as a prop
                                bestSeller={bestSeller}
                            />
                            ) 
                        })}
                    </Paper>
            </section> 
        </>
    )
}

export default BestSellers;