import { useEffect, useState } from "react";
import useUserData from "../../../hooks/useUserData";
import axios from "axios";
import ProductCard from "../../../components/ProductCard";
import Loading from "../../Loading";

const MyCartlist = () => {
  const [cartlist, setCartlist] = useState([]);
  const userData = useUserData();
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("access-token");
  const [latestData, setLatestData] = useState(true);

  useEffect(() => {
    const fetchCartlist = async () => {
      setLoading(true);
      await axios
        .get(`https://gadget-boom-server.vercel.app/cartlist/${userData._id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setCartlist(res.data);
          setLoading(false);
        });
    };

    if (userData._id && token) {
      fetchCartlist();
    }
  }, [token, userData._id, latestData]);

  return (
    <div className='mt-6 lg:mt-8'>
      <h1 className='text-3xl font-bold text-center pb-2'>My Cart List</h1>
      <div>
        {loading ? (
          <Loading></Loading>
        ) : (
          <>
            {cartlist.length > 0 ? (
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                {cartlist.map((product) => (
                  <ProductCard
                    product={product}
                    key={product._id}
                    isInWishlist
                    isInCartlist
                    setLatestData={setLatestData}
                  />
                ))}
              </div>
            ) : (
              <div className='min-w-full w-full min-h-screen flex items-center justify-center'>
                <h1>No products in your cart list</h1>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MyCartlist;
