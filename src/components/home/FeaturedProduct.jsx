import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedProduct = () => {
  const [limitedData, setLimitedData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:4000/products`);
      
      const data = await response.json();

      // Check if data is an array
      if (Array.isArray(data)) {
        const slicedData = data.slice(0, 6); // Limit to 6 items
        setLimitedData(slicedData);
      } else {
      
        setLimitedData([]); // 
      }
    } catch (error) {
     
      setLimitedData([]); // Set to empty on error
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);


  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <p className='text-lg font-semibold text-gray-500'>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <p className='text-lg font-semibold text-red-500'>Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className='py-12 bg-base-100 dark:bg-[#24292F]'>
        <h2 className='text-center font-semibold text-2xl md:text-3xl lg:text-4xl text-gray-900 dark:text-gray-300'>
          Featured Products
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 lg:grid-cols-3'>
          {limitedData.map((data) => (
            <section key={data._id} className='bg-base-100 dark:bg-[#24292F]'>
              <div className='container px-6 py-10 mx-auto'>
                <div>
                  <img
                    className='relative z-10 object-cover w-full rounded-md h-96'
                    src={data.imageURL}
                    alt={data.title}
                  />
                  <div className='relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900'>
                    <p className='font-semibold text-gray-800 dark:text-white md:text-xl'>
                      Title: {data.title}
                    </p>
                    <p className='mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm'>
                      Category: {data.category}
                    </p>
                    <p className='mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm'>
                      Price: ${data.price}
                    </p>
                    <Link to={`/ProductDetails/${data._id}`}>
                      <p className='text-blue-500 text-xl font-bold flex justify-center items-center w-full'>
                        View Details
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
        <div className='flex justify-center items-center'>
          <Link to={`/products`}>
            <p className='text-gray-900 dark:text-gray-300 text-xl border-2 border-blue-500 px-10 py-3 rounded-md w-fit font-bold'>
              See all Product List
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
