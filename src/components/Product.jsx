

const Product = ({ productt }) => {
    // const {title,brand,price,stock,category,image,description}= productt
    // console.log(title,brand,price,stock,category,image,description);
    return (
        // <div><h1>hellow</h1></div>


        <div>
            <div className="rounded-md border-1 shadow-xl">
                <img
                    src={productt?.image}
                    alt="Shoes" />
                <div className="p-2">
                    <h2 className="text-xl font-bold "></h2>
                    <h2 className=" font-semibold"> {productt?.brand} </h2>
                    <h2 className=" text-sm">
                        Price: $<span> {productt?.price} </span>
                    </h2>
                    <h2 className=" text-sm">
                        In Stock: $<span> {productt?.stock} </span>
                    </h2>
                    <h2 className="text-sm font-semibold"> {productt?.category} </h2>
                    <p className="text-xs mt-2"> {productt?.description} </p>

                    <div className="mt-4">
                        <button>Add to whishList</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Product;