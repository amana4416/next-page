import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './BestSellers.css';

function BestSellers() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'SET_BEST_SELLERS'
        })
    }, [])

    return (
        <>
            <section className="bestSellersBackground">
                <h2 className="heading">Current New York Times Best Sellers</h2>

            </section> 
        </>
    )
}

export default BestSellers;