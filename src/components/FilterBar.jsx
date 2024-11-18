import React from 'react';
import { GrFilter } from "react-icons/gr";

const FilterBar = ({setBrand,setCategory,handleReset,uCategory,uniqueBrand}) => {
    return (
        <div className='bg-gray-200 h-full min-h-screen p-4 rounded-t-md'>
            <div className='flex items-center gap-1'>
                <GrFilter />
                <h2 className='text-xl font-semibold'>Filters</h2>
            </div>
            <div className='mt-8 flex flex-col gap-2 items-center'>
                <div className='w-full'>
                    <select className="select select-bordered w-full max-w-xs" onChange={(e) =>setBrand(e.target.value)}>
                        <option value="">Brand</option>
                        {
                            uniqueBrand.map((brand)=>(
                                <option key={brand} value={brand}>{brand}</option> 
                            ))
                        }                       
                    </select>
                </div>
                <div className='w-full'>
                    <select className="select select-bordered w-full max-w-xs" onChange={(e) =>setCategory(e.target.value)}>
                        <option value="">Category</option>
                        {
                            uCategory.map((category)=>(
                                <option key={category} value={category}>{category}</option>   
                            ))
                        }           
                    </select>
                </div>
            </div>
            <button className='btn btn-primary mt-4 w-full' onClick={handleReset}>Reset</button>
        </div>
    );
};

export default FilterBar;