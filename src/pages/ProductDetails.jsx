import { Link, useLoaderData, useNavigate } from "react-router-dom";


const ProductDetails = () => {
      const navigate = useNavigate();
      const data = useLoaderData();
      const {
        _id,
        title,
        brand,
        price,
        stock,
        category,
        description,
        imageURL,
       
      } = data || {};


  return (
    <div className='flex items-center justify-center min-h-scree py-20 bg-slate-200 dark:bg-gray-700'>
      <div className='flex flex-col lg:flex-row w-full max-w-7xl mx-auto bg-slate-200 dark:bg-gray-800 p-8 shadow-md rounded-md text-gray-900 dark:text-gray-300 '>
        <div className='w-full lg:w-1/2 pr-8 '>
          <img src={imageURL} alt='' className='w-full h-full rounded-lg' />
        </div>
        <div className='flex justify-between w-full lg:w-1/2 flex-col'>
          <div className=''>
            <div className='space-y-2'>
              <div className='flex'>
                <p className='font-medium'>
                  Product Title : <span className='font-normal'>{title}</span>
                </p>
              </div>
              <p className='underline underline-offset-4 font-medium'>
                {" "}
                Description :{" "}
              </p>
              <p className='font-normal'> {description} </p>
              <div className='flex'>
                <p className='font-medium'>
                  Category : <span className='font-normal'>{category}</span>
                </p>
              </div>
              <div className='flex'>
                <p className='font-medium'>
                  Brand : <span className='font-normal'>{brand}</span>
                </p>
              </div>
              <div className='flex'>
                <p className='font-medium'>
                  Price : <span className='font-normal'>{price}</span>
                </p>
              </div>
              <div className='flex'>
                <p className='font-medium'>
                  Stock : <span className='font-normal'>{stock}</span>
                </p>
              </div>
            </div>
          </div>
          <div className=' mt-4 '>
            {" "}
            <Link
              to='/products'
              //   onClick={checkVolunteersNeeded}
              className=' bg-red-400  px-4 py-2 rounded-md text-gray-900   hover:bg-red-500 text-lg w-full'>
              Back to Products Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails