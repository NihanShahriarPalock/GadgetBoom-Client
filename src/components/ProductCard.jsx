import axios from "axios";
import useUserData from "../hooks/useUserData";
import Swal from "sweetalert2";

const ProductCard = ({ product, isInWishlist, setLatestData }) => {
  const userData = useUserData();
  const userEmail = userData.email;

  const handleWishlist = async () => {
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

  const handleRemoveWishlist = async () => {
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
          setLatestData((prev)=>!prev)
        }
      });
  };

  return (
    <div>
      <figure>
        <img src={product.imageURL} />
      </figure>
      <div>
        <h2>Title: {product.title}</h2>
        <h2>Brand : {product.brand}</h2>
        <h2>Stock : {product.stock}</h2>
        <h2>Price : {product.price}</h2>

        <div className='mt-4'>
          {isInWishlist ? (
            <>
              <button
                className='btn btn-warning'
                onClick={handleRemoveWishlist}>
                Remove Wishlist
              </button>
            </>
          ) : (
            <>
              <button className='btn btn-primary' onClick={handleWishlist}>
                Add to Wishlist
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
