import useUserData from "../customHooks/useUserData";
import axios from 'axios';
import Swal from 'sweetalert2';


const Product = ({ productt }) => {
    const userData = useUserData()
    const userEmail= userData.email
    // console.log(userEmail);
    // const {title,brand,price,stock,category,image,description}= productt
    // console.log(title,brand,price,stock,category,image,description);

    const handleWhishlist = async() =>{
        await axios.patch("http://localhost:5000/wishlist/add",{
            userEmail: userEmail, productId: productt._id
        })
        .then((res) => {
            if(res.data.modifiedCount){
                Swal.fire({
                    position: "success",
                    icon: "success",
                    title: "Product added to your whishlist",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        
    )
    }


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
                        <button className="" onClick={handleWhishlist}>Add to whishList</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Product;