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
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("asc")
  const [brand, setBrand] = useState("")
  const [category, setCategory] = useState("")
  const [uniqueBrand,setUniqueBrand]=useState([])
  const [uniqueCategory, setUniqueCategory] = useState([])
   
  // console.log(brand, category);

  useEffect(() => {
    Setloading(true);
    const fetch = async () => {
      axios
        .get(
          `http://localhost:4000/all-products?title=${search}&sort=${sort}&brand=${brand}&category=${category}`
        )
        .then((res) => {
          console.log(res.data);
          setProducts(res.data.products);
          setUniqueBrand(res.data.brands);
          setUniqueCategory(res.data.categories)
          Setloading(false);
        });
    };

    fetch();
  }, [search,sort,brand,category]);

  const handleSearch = (e)=> {
    e.preventDefault()
    setSearch(e.target.search.value)
    e.target.search.value=""

  }

  const handleReset = () => {
    setSearch("");
    setBrand("");
    setCategory("");
    setSort("asc");
    window.location.reload()
  }
  return (
    <div className='container mx-auto'>
      <h1 className='my-8 text-2xl font-semibold text-center'>All Products</h1>
      {/* searching and sort */}
      <div className='flex justify-between items-center w-full mb-6'>
        <SearchBar handleSearch={handleSearch}></SearchBar>
        <SortByPrice setSort={setSort}></SortByPrice>
      </div>
      {/* content */}
      <div className='grid grid-cols-12 gap-2'>
        <div className='col-span-2'>
          <FilterBar
            setBrand={setBrand}
            setCategory={setCategory}
            handleReset={handleReset}
            uniqueBrand={uniqueBrand}
            uniqueCategory={uniqueCategory}
          ></FilterBar>
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
                      key={product._id}
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

