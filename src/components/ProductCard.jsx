/* eslint-disable react/prop-types */
import axios from "axios";
import useUserData from "../hooks/useUserData";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ProductCard = ({ product, isInWishlist, isInCartlist, setLatestData }) => {
  const userData = useUserData();
  // console.log(userData.role);
  const userEmail = userData.email;

  const handleWishlist = async () => {
    if (userData.role === "seller" || userData.role === "admin") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Sellers and Admins cannot add products to the wishlist.",
        showConfirmButton: true,
      });
      return;
    }

    await axios
      .patch("http://localhost:4000/wishlist/add", {
        userEmail: userEmail,
        productId: product._id,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product Added to Wishlist",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
   const handleCartlist = async () => {
     if (userData.role === "seller" || userData.role === "admin") {
       Swal.fire({
         position: "center",
         icon: "error",
         title: "Sellers and Admins cannot add products to the cartlist.",
         showConfirmButton: true,
       });
       return;
     }

     await axios
       .patch("http://localhost:4000/cartlist/add", {
         userEmail: userEmail,
         productId: product._id,
       })
       .then((res) => {
         if (res.data.modifiedCount) {
           Swal.fire({
             position: "center",
             icon: "success",
             title: "Product Added to Cartlist",
             showConfirmButton: false,
             timer: 1500,
           });
         }
       });
   };

  const handleRemoveWishlist = async () => {
    if (userData.role === "seller" || userData.role === "admin") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Sellers and Admins cannot remove products from the wishlist.",
        showConfirmButton: true,
      });
      return;
    }

    await axios
      .patch("http://localhost:4000/wishlist/remove", {
        userEmail: userEmail,
        productId: product._id,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product Removed from Wishlist",
            showConfirmButton: false,
            timer: 1500,
          });
          setLatestData((prev) => !prev);
        }
      });
  };
   const handleRemoveCartlist = async () => {
     if (userData.role === "seller" || userData.role === "admin") {
       Swal.fire({
         position: "center",
         icon: "error",
         title: "Sellers and Admins cannot remove products from the wishlist.",
         showConfirmButton: true,
       });
       return;
     }

     await axios
       .patch("http://localhost:4000/cartlist/remove", {
         userEmail: userEmail,
         productId: product._id,
       })
       .then((res) => {
         if (res.data.modifiedCount) {
           Swal.fire({
             position: "center",
             icon: "success",
             title: "Product Removed from Cartlist",
             showConfirmButton: false,
             timer: 1500,
           });
           setLatestData((prev) => !prev);
         }
       });
   };

  return (
    <div>
      <div>
        <section className='bg-base-100 dark:bg-[#24292F] '>
          <div className='container px-6 py-10 mx-auto'>
            <div>
              <img
                className='relative z-10 object-cover w-full rounded-md h-96'
                src={product.imageURL}
                alt=''
              />

              <div className='relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900'>
                <p className='font-semibold text-gray-800 dark:text-white md:text-xl'>
                  {product.title}
                </p>
                <p className='mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm'>
                  Brand : {product.brand}
                </p>

                <p className='mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm'>
                  Category : {product.category}
                </p>
                <p className='mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm'>
                  Price : {product.price}
                </p>

                <p className='mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm'>
                  Stock : {product.stock}
                </p>

                <div className='flex gap-2'>
                  <div className='my-4 w-full '>
                    {isInWishlist ? (
                      <div className=' btn btn-warning w-full '>
                        <button
                          className=' btn-warning w-full'
                          onClick={handleRemoveWishlist}>
                          Remove Wishlist
                        </button>
                      </div>
                    ) : (
                      <div className='flex  gap-2'>
                        <button
                          className='btn btn-primary w-full'
                          onClick={handleWishlist}>
                          Add to Wishlist
                        </button>
                      </div>
                    )}
                  </div>
                  <div className='my-4 w-full '>
                    {isInCartlist ? (
                      <div className=' btn btn-warning w-full '>
                        <button
                          className=' btn-warning w-full'
                          onClick={handleRemoveCartlist}>
                          Remove Cartlist
                        </button>
                      </div>
                    ) : (
                      <div className='flex  gap-2'>
                        <button
                          className='btn btn-secondary w-full'
                          onClick={handleCartlist}>
                          Add to Cartlist
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <Link to={`/ProductDetails/${product._id}`}>
                  <p className='text-blue-500 text-xl  font-bold  flex justify-center items-center w-full '>
                    View Details
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductCard;
