import React from 'react';
import Product from './Product';

const FeaturedProdects = () => {
    return (
        <div className='sm:grid grid-cols-2 lg:flex items-center justify-between gap-4  '>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    );
};

export default FeaturedProdects;