import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import SortByPrice from "../components/SortByPrice";
import FilterBar from "../components/FilterBar";
import axios from "axios";
import Loading from "../pages/Loading";
import ProductCard from "../components/ProductCard";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, Setloading] = useState(false);

  useEffect(() => {
    Setloading(true);
    const fetch = async () => {
      axios.get(`http://localhost:4000/all-products`).then((res) => {
        console.log(res.data);
        setProducts(res.data);
        Setloading(false);
      });
    };

    fetch();
  }, []);

  return (
    <div className='container mx-auto'>
      <h1 className='my-8 text-2xl font-semibold text-center'>All Products</h1>
      {/* searching and sort */}
      <div className='flex justify-between items-center w-full mb-6'>
        <SearchBar></SearchBar>
        <SortByPrice></SortByPrice>
      </div>
      {/* content */}
      <div className='grid grid-cols-12 gap-2'>
        <div className='col-span-2'>
          <FilterBar></FilterBar>
        </div>
        {/* products  */}
        <div className='col-span-10'>
          {loading ? (
            <Loading></Loading>
          ) : (
            <>
              {products.length === 0 ? (
                <div className='w-full h-full flex justify-center items-center'>
                  <h2 className='text-red-500 text-2xl'>No Product Found</h2>
                </div>
              ) : (
                <div className='min-h-screen grid grid-cols-3 gap-2'>
                  {products.map((product) => (
                    <ProductCard
                      key={product.objectId}
                      product={product}></ProductCard>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;

