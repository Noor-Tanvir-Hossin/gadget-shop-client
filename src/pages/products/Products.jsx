import { useEffect, useState } from 'react';
import SeachBar from '../../components/SeachBar';
import SortByPrice from '../../components/SortByPrice';
import FilterBar from '../../components/FilterBar';
import axios from 'axios';
import Product from '../../components/Product';
// import Product from '../../components/Product';
// import Product from './../../components/Product';


const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("asc")
    const [brand, setBrand] = useState("")
    const [category, setCategory] = useState("")
    const [uniqueBrand, setUniqueBrand] = useState([])
    const [uCategory, setUCategory] = useState([])

   

    useEffect(() => {
        setLoading(true)
        const fetch = async () => {
            axios.get(`http://localhost:5000/all-product?title=${search}&sort=${sort}&brand=${brand}&category=${category}`).then((res) => {
                // console.log(res.data);
                setProducts(res.data.products)
                setUniqueBrand(res.data.brands)
                setUCategory(res.data.categories)
                setLoading(false)
            })
        }
        fetch()
    }, [brand,category,sort,search])

    const handleSearch = (e) =>{
        e.preventDefault()
        setSearch(e.target.search.value);
        e.target.search.value=""
    }

    const handleReset = () =>{
        setSearch('')
        setBrand('')
        setCategory('')
        setSort("asc")
        window.location.reload()
    }


    return (
        <div className='constainer mx-auto w-[80%]'>
            <h1 className='my-8 text-2xl font-semibold text-center'>All Products</h1>
            {/* searching and sorting */}
            <div className='flex justify-between items-center w-full'>
                <SeachBar handleSearch={handleSearch}></SeachBar>
                <SortByPrice setSort={setSort}></SortByPrice>
            </div>
            <div className='grid grid-cols-12 gap-2'>
                <div className='col-span-2 my-4'><FilterBar setCategory={setCategory}
                setBrand={setBrand} handleReset={handleReset} uniqueBrand={uniqueBrand} uCategory={uCategory}></FilterBar></div>
                <div className='col-span-10 my-4'>
                    {
                        loading ? (<p>Loading ...</p>) : (
                            <>
                                {
                                    products.length === 0 ? (<div className='w-full h-full flex items-center justify-center'>
                                        <h1 className='text-3xl font-bold'>No product Found</h1>
                                    </div>) : (<div className='grid grid-cols-3 gap-3'>
                                        {
                                            products.map((product) => (<Product key={product._id} productt={product}  />))
                                        }
                                    </div>)
                                }
                            </>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default Products;