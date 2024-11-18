import React from 'react';

const SortByPrice = ({setSort}) => {
    return (
        <div>
            <select className="select select-bordered w-full max-w-xs" onChange={(e) =>setSort(e.target.value)}>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
            </select>
        </div>
    );
};

export default SortByPrice;