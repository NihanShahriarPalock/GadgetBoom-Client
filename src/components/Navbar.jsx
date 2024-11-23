import { useState, useEffect, useRef } from "react";
import { IoMenu } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import useAuth from "../hooks/useAuth";


const Navbar = () => {
  
  const { user, Logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [imageMenu, setImageMenu] = useState(false);
  const dropdownRef = useRef(null);

  
  const toggleDropdown = () => {
    setOpen(!open);
  };
  const toggleImage = () => {
    setImageMenu(!imageMenu);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const allLink = (
    <>
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive
            ? "text-lg mr-4   text-gray-900 underline underline-offset-8  font-semibold h-full px-5 py-3 "
            : "text-gray-900 text-lg mr-4 hover:underline hover:underline-offset-8   rounded-lg font-normal px-5 py-3"
        }>
        <span>Home</span>
      </NavLink>

      <NavLink
        to='/products'
        className={({ isActive }) =>
          isActive
            ? "text-lg mr-4  text-gray-900 underline underline-offset-8  font-semibold    px-5 py-3"
            : "text-gray-900 text-lg mr-4 hover:underline hover:underline-offset-8    rounded-lg font-normal px-5 py-3"
        }>
        <span>Products</span>
      </NavLink>

      <NavLink
        to='/about'
        className={({ isActive }) =>
          isActive
            ? "text-lg mr-4  text-gray-900 underline underline-offset-8  font-semibold    px-5 py-3"
            : "text-gray-900 text-lg mr-4 hover:underline hover:underline-offset-8    rounded-lg font-normal px-5 py-3"
        }>
        <span>About</span>
      </NavLink>

      <NavLink
        to='/contact'
        className={({ isActive }) =>
          isActive
            ? "text-lg mr-4  text-gray-900 underline underline-offset-8  font-semibold    px-5 py-3"
            : "text-gray-900 text-lg mr-4 hover:underline hover:underline-offset-8    rounded-lg font-normal px-5 py-3"
        }>
        <span>Contact</span>
      </NavLink>

    </>
  );

  return (
    <div>
      <div className='navbar bg-base-200  '>
        <div className='navbar-start'>
          <div className='dropdown' ref={dropdownRef}>
            <div
              onClick={toggleDropdown}
              tabIndex={0}
              role='button'
              className='btn btn-ghost lg:hidden text-gray-900 text-4xl'>
              {open ? <ImCross /> : <IoMenu />}
            </div>
            {open && (
              <ul className='menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100  text-gray-900  rounded-box w-52'>
                {allLink}
              </ul>
            )}
          </div>
          <Link
            to='/'
            className='text-xl md:text-2xl lg:text-4xl text-gray-900 '>
            GadgetBoom
          </Link>
        </div>

        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 '>{allLink}</ul>
        </div>
        <div className='navbar-end flex gap-4'>
          {user && (
            <div className='dropdown dropdown-end'>
              <div
                onClick={toggleImage}
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar'>
                <div className='w-10 rounded-full'>
                  <a
                    data-tooltip-id='my-tooltip'
                    data-tooltip-content={
                      user?.displayName || "User Name not Available"
                    }
                    data-tooltip-place='bottom'
                    className=' size-14 mr-6'>
                    <Tooltip
                      id='my-tooltip'
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        border: "1px solid black",
                        zIndex: 100,
                        fontWeight: "bold",
                      }}
                    />
                    <img
                      referrerPolicy='no-referrer'
                      alt='User Profile Image'
                      src={
                        user?.photoURL ||
                        "https://i.ibb.co/9cZ7vD2/user-icon.jpg"
                      }
                    />
                  </a>
                </div>
              </div>
              {imageMenu && (
                <ul className='mt-4 z-50 p-2 shadow menu menu-sm dropdown-content bg-base-100 flex flex-col gap-1 '>
                  <NavLink to="/dashboard/overview"
                    className='text-black text-xl font-normal '
                    >
                    Dashboard
                  </NavLink>
                  <button
                    className='text-red-600 text-xl font-normal '
                    onClick={Logout}>
                    Logout
                  </button>
                </ul>
              )}
              <span></span>
            </div>
          )}
          {!user && (
            <div className='flex gap-2'>
              <Link to='/login'>
                <span className=' text-gray-900 text-lg hover:underline underline-offset-8'>
                  Login
                </span>
              </Link>
              <Link to='/register'>
                <span className=' text-gray-900 text-lg hover:underline underline-offset-8'>
                  Register
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
