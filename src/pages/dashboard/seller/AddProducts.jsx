import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const AddProducts = () => {
     const {
       register,
       handleSubmit,
       
       formState: { errors },
     } = useForm();
  const navigate = useNavigate();
     const { user } = useAuth();

     const onSubmit = (data) => {
       const title = data.title;
       const brand = data.brand;
       const imageURL = data.imageURL;
       const price = parseFloat(data.price);
       const stock = parseFloat(data.stock);
       const category = data.category;

       const description = data.description;
       const sellerEmail = user.email;
       const product = {
         title,
         brand,
         imageURL,
         price,
         stock,
         category,
         description,
         sellerEmail,
       };

       const token = localStorage.getItem("access-token");

       axios
         .post("http://localhost:4000/add-products", product, {
           headers: {
             authorization: `Bearer ${token}`,
           },
         })
         .then((res) => {
           if (res.data.insertedId) {
             Swal.fire({
               position: "center",
               icon: "success",
               title: "Product Added Successfully",
               showConfirmButton: false,
               timer: 1500,
             });
           }
         });
       navigate("/dashboard/my-products")
       
     };
  return (
    <div className='w-full h-full'>
      <h1 className='text-center font-bold text-2xl'>Add Products</h1>
      <div className='w-full h-full'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='lg:flex gap-8 w-full'>
            <div className='w-full'>
              <label className='label'>
                <span className='label-text'>Title</span>
              </label>
              <input
                type='text'
                placeholder='Product Title'
                className='w-full border border-black p-2 rounded-md'
                {...register("title", { required: true })}
              />
              {errors.title && (
                <p className='text-red-600'>Title is required</p>
              )}{" "}
            </div>
            <div className='w-full'>
              <label className='label'>
                <span className='label-text'>Brand</span>
              </label>
              <input
                type='text'
                placeholder='Brand'
                className='w-full border border-black p-2 rounded-md'
                {...register("brand", { required: true })}
              />
              {errors.brand && (
                <p className='text-red-600'>Brand is required</p>
              )}
            </div>
          </div>
          <div className='lg:flex gap-8 w-full'>
            <div className='w-full'>
              <label className='label'>
                <span className='label-text'>Price</span>
              </label>
              <input
                type='number'
                placeholder='Product Price'
                className='w-full border border-black p-2 rounded-md'
                {...register("price", { required: true })}
              />
              {errors.price && (
                <p className='text-red-600'>Price is required</p>
              )}{" "}
            </div>
            <div className='w-full'>
              <label className='label'>
                <span className='label-text'>Stock</span>
              </label>
              <input
                type='number'
                placeholder='Stock Quantity'
                className='w-full border border-black p-2 rounded-md'
                {...register("stock", { required: true })}
              />
              {errors.stock && (
                <p className='text-red-600'>Stock is required</p>
              )}
            </div>
            <div className='w-full'>
              <label className='label'>
                <span className='label-text'>Category</span>
              </label>
              <input
                type='text'
                placeholder='Product Category'
                className='w-full border border-black p-2 rounded-md'
                {...register("category", { required: true })}
              />
              {errors.stock && (
                <p className='text-red-600'>Category is required</p>
              )}
            </div>
          </div>
          <div className='w-full'>
            <label className='label'>
              <span className='label-text'>Image URL</span>
            </label>
            <input
              type='text'
              placeholder='Image URL'
              className='w-full border border-black p-2 rounded-md'
              {...register("imageURL", { required: true })}
            />
            {errors.imageURL && (
              <p className='text-red-600'>Image URL is required</p>
            )}
          </div>
          <div className='w-full'>
            <label className='label'>
              <span className='label-text'>Description</span>
            </label>
            <textarea
              type='text'
              placeholder='Product Description'
              className='w-full border border-black p-2 rounded-md'
              {...register("description", { required: true })}
            />
            {errors.description && (
              <p className='text-red-600'>Description is required</p>
            )}
          </div>

          <div className='form-control mt-6'>
            <button type='submit' className='btn btn-primary'>
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProducts