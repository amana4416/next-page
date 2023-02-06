import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BestSellerItem from '../BestSellerItem/BestSellerItem';
import './BestSellers.css';

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
                <h2 className="heading"> Current New York Times Best Sellers </h2>
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
            </section> 
        </>
    )
}

export default BestSellers;