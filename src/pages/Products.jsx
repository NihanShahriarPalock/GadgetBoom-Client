import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import SortByPrice from "../components/SortByPrice";
import FilterBar from "../components/FilterBar";
import Loading from "../pages/Loading";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [uniqueBrand, setUniqueBrand] = useState([]);
  const [uniqueCategory, setUniqueCategory] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Fetch products and filter data
  useEffect(() => {
    setLoading(true);
    setError(null); // Reset error before fetching
    axios
      .get(
        `https://gadget-boom-server.vercel.app/all-products?title=${search}&sort=${sort}&brand=${brand}&category=${category}`
      )
      .then((res) => {
        setProducts(res.data.products);
        setUniqueBrand(res.data.brands);
        setUniqueCategory(res.data.categories);
      })
      .catch(() => {
        setError("Failed to fetch products. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search, sort, brand, category]);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
  };

  // Handle reset
  const handleReset = () => {
    setSearch("");
    setBrand("");
    setCategory("");
    setSort("asc");
  };

  return (
    <div className='container mx-auto px-4'>
      <h1 className='my-8 text-2xl font-semibold text-center'>
        All Products List
      </h1>

      {/* Search and Sort */}
      <div className='flex flex-col md:flex-row justify-between items-center w-full mb-6 gap-4'>
        <SearchBar handleSearch={handleSearch} />
        <SortByPrice setSort={setSort} />
      </div>

      {/* Responsive Filter Bar */}
      <div className='md:hidden mb-4'>
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded'
          onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
        {/* Conditionally render the filter bar */}
        {showFilters && (
          <div className='mt-4'>
            <FilterBar
              setBrand={setBrand}
              setCategory={setCategory}
              handleReset={handleReset}
              uniqueBrand={uniqueBrand}
              uniqueCategory={uniqueCategory}
            />
          </div>
        )}
      </div>

      <div className='grid grid-cols-12 gap-2'>
        {/* Filter Sidebar for Larger Screens */}
        <div className='hidden md:block col-span-2'>
          <FilterBar
            setBrand={setBrand}
            setCategory={setCategory}
            handleReset={handleReset}
            uniqueBrand={uniqueBrand}
            uniqueCategory={uniqueCategory}
          />
        </div>

        {/* Product Listing */}
        <div className='col-span-12 md:col-span-10'>
          {loading ? (
            <Loading />
          ) : error ? (
            <div className='w-full h-full flex justify-center items-center'>
              <h2 className='text-red-500 text-xl'>{error}</h2>
            </div>
          ) : products.length === 0 ? (
            <div className='w-full h-full flex justify-center items-center'>
              <h2 className='text-gray-500 text-2xl'>No Products Found</h2>
            </div>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
