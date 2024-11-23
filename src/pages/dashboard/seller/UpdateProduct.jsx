import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
// import useUserData from '../../../hooks/useUserData';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
      const { id } = useParams();
      const navigate = useNavigate();
    //   const  user  = useUserData();
      const [product, setProduct] = useState({});
   
    //   console.log(user);

      useEffect(() => {
        fetch(`http://localhost:4000/mySingleProduct/${id}`)
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            setProduct(data);
          });
      }, [id]);
    
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const stock = form.stock.value;
        const category = form.category.value;
        const description = form.description.value;
        const imageURL = form.imageURL.value;
       
        

        const postData = {
          title,
          brand,
          price,
          stock,
          category,
          description,
          imageURL,
        };

        fetch(`http://localhost:4000/productUpdate/${id}`, {
          method: "PUT",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(postData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "Product Updated Successfully",
                icon: "success",
                confirmButtonText: "Updated",
              });
              // toast.success("Data is updated");
              navigate("/dashboard/my-products");
            } else {
              toast.error("Data is not updated");
            }
          })
          .catch(() => {
            toast.error("Error updating post");
          });
      };

  return (
    <div>
      {Object.keys(product).length > 0 && (
        <div className='w-full h-full'>
          <h1 className='text-center font-bold text-2xl'>Update Products</h1>
          <div className='w-full h-full'>
            <form onSubmit={handleFormSubmit}>
              <div className='lg:flex gap-8 w-full'>
                <div className='w-full'>
                  <label className='label'>
                    <span className='label-text'>Title</span>
                  </label>
                  <input
                    type='text'
                    name='title'
                    defaultValue={product.title}
                    className='w-full border border-black p-2 rounded-md'
                  />
                </div>
                <div className='w-full'>
                  <label className='label'>
                    <span className='label-text'>Brand</span>
                  </label>
                  <input
                    type='text'
                    name='brand'
                    defaultValue={product.brand}
                    className='w-full border border-black p-2 rounded-md'
                  />
                </div>
              </div>
              <div className='lg:flex gap-8 w-full'>
                <div className='w-full'>
                  <label className='label'>
                    <span className='label-text'>Price</span>
                  </label>
                  <input
                    type='number'
                    name='price'
                    defaultValue={product.price}
                    className='w-full border border-black p-2 rounded-md'
                  />
                </div>
                <div className='w-full'>
                  <label className='label'>
                    <span className='label-text'>Stock</span>
                  </label>
                  <input
                    type='number'
                    name='stock'
                    defaultValue={product.stock}
                    className='w-full border border-black p-2 rounded-md'
                  />
                </div>
                <div className='w-full'>
                  <label className='label'>
                    <span className='label-text'>Category</span>
                  </label>
                  <input
                    type='text'
                    name='category'
                    defaultValue={product.category}
                    className='w-full border border-black p-2 rounded-md'
                  />
                </div>
              </div>
              <div className='w-full'>
                <label className='label'>
                  <span className='label-text'>Description</span>
                </label>
                <textarea
                  type='text'
                  name='description'
                  defaultValue={product.description}
                  className='w-full border border-black p-2 rounded-md'
                />
              </div>
              <div className='w-full'>
                <label className='label'>
                  <span className='label-text'>Image URL</span>
                </label>
                <input
                  type='text'
                  name='imageURL'
                  defaultValue={product.imageURL}
                  className='w-full border border-black p-2 rounded-md'
                />
              </div>

              <div className='form-control mt-6'>
                <button type='submit' className='btn btn-primary'>
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdateProduct