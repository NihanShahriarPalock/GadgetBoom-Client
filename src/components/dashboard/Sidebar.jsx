import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import useUserData from "../../hooks/useUserData";
import { MdOutlineInventory2, MdOutlineShoppingCart, MdPeopleOutline } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import useAuth from "../../hooks/useAuth";
import { FaRegHeart } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";


const buyerRoutes = [
  {
    id: 1,
    route: "/dashboard/wishlist",
    title: "My Wishlists",
    icon: <FaRegHeart />,
  },
  {
    id: 2,
    route: "/dashboard/cartlist",
    title: "My Carts",
    icon: <MdOutlineShoppingCart />,
  },
];


const sellerRoutes = [
  {
    id: 1,
    route: "/dashboard/my-products",
    title: "My Products",
    icon: <MdOutlineInventory2 />,
  },
  {
    id: 2,
    route: "/dashboard/add-products",
    title: "Add Products",
    icon: <IoMdAddCircleOutline />,
  },
];

const adminRoutes = [
  {
    id: 1,
    route: "/dashboard/all-users",
    title: "View Users",
    icon: <MdPeopleOutline />,
  },
];





const Sidebar = () => {
  const userData = useUserData();
  const { Logout } = useAuth();
  // console.log(data);
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    // Close sidebar if click is outside both sidebar and button
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Hamburger Menu Button */}
      <button
        ref={buttonRef}
        onClick={toggleSidebar} // Toggle the sidebar
        aria-controls='default-sidebar'
        type='button'
        className='inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'>
        <svg
          className='w-6 h-6'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            clipRule='evenodd'
            fillRule='evenodd'
            d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'></path>
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        id='default-sidebar'
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label='Sidebar'>
        <div className='h-full px-3 py-4 overflow-y-auto bg-gray-200'>
          <ul className='space-y-2 font-medium mt-8'>
            <li className='p-2 border border-black rounded-md '>
              <NavLink
                to='/dashboard/overview'
                className='flex gap-1 justify-center items-center'>
                <span>Overview</span>
              </NavLink>
            </li>
            {/* Other menu items */}
            <li className='p-2 border border-black rounded-md '>
              <NavLink
                to='/'
                className='flex gap-1 justify-center items-center'>
                <span>Home</span>
              </NavLink>
            </li>

            {/* for buyer */}
            {userData.role === "buyer" &&
              buyerRoutes.map((route) => (
                <li
                  key={route.id}
                  className='p-2 border border-black rounded-md '>
                  <NavLink
                    className='flex gap-1 justify-center items-center'
                    to={route.route}>
                    <>{route.icon}</>
                    <p>{route.title}</p>
                  </NavLink>
                </li>
              ))}

            {/* for seller */}
            {userData.role === "seller" &&
              sellerRoutes.map((route) => (
                <li
                  key={route.id}
                  className='p-2 border border-black rounded-md '>
                  <NavLink
                    className='flex gap-1 justify-center items-center'
                    to={route.route}>
                    <>{route.icon}</>
                    <p>{route.title}</p>
                  </NavLink>
                </li>
              ))}

            {/* for admin */}
            {userData.role === "admin" &&
              adminRoutes.map((route) => (
                <li
                  key={route.id}
                  className='p-2 border border-black rounded-md '>
                  <NavLink
                    className='flex gap-1 justify-center items-center'
                    to={route.route}>
                    <>{route.icon}</>
                    <p>{route.title}</p>
                  </NavLink>
                </li>
              ))}
            <li
              className='p-2 border border-black rounded-md  '
              onClick={() => Logout()}>
              <div className='flex flex-row gap-1 justify-center items-center'>
                <button className='flex justify-center items-center gap-1'>
                  <span className='text-red-500'>
                    {" "}
                    <GrLogout />
                  </span>
                  <p className='text-red-500'>Logout</p>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
