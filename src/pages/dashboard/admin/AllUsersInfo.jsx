import axios from "axios";
import toast from "react-hot-toast";
import useUserData from "../../../hooks/useUserData";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";



const AllUsersInfo = () => {
    const user  = useUserData();;
      const [ausers, setAusers] = useState([]);

      useEffect(() => {
        getData();
      }, [user]);

      const getData = async () => {
        const { data } = await axios(`http://localhost:4000/all-users`, {
          
        });
        setAusers(data);
    };
    
    const handleChangeRole = async (id) => {
      try {
        const confirmed = await confirmChangeRole();
        if (confirmed) {
          const response = await axios.put(
            `http://localhost:4000/user-update/${id}`
          );

          if (response.data.message === "User role updated successfully") {
            toast.success("User role updated to 'seller'");
            getData(); // Refresh data after the update
          } else {
            toast.error(response.data.message || "Failed to update user role");
          }
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "An error occurred");
      }
    };

    const confirmChangeRole = async () => {
      return new Promise((resolve) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You want to change the user's role to 'seller'?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Change Role",
        }).then((result) => {
          resolve(result.isConfirmed);
        });
      });
    };


      const handleDelete = async (id) => {
        try {
          const confirmed = await confirmDelete();
          if (confirmed) {
            // eslint-disable-next-line no-unused-vars
            const { data } = await axios.delete(
              `http://localhost:4000/user-delete/${id}`
            );
           
            toast.success("Delete Successful");
            getData();
          }
        } catch (err) {
    
          toast.error(err.message);
        }
      };

      const confirmDelete = async () => {
        return new Promise((resolve) => {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete It!",
          }).then((result) => {
            resolve(result.isConfirmed);
          });
        });
      };
  return (
    <div>
      <div className='overflow-hidden bg-base-100 dark:bg-[#24292F] '>
        <div className='px-2 lg:px-24 mx-auto py-5'>
          <h2 className='text-center text-4xl font-bold py-5 text-gray-900 dark:text-gray-300'>
            All Users Info
          </h2>
          {ausers.length === 0 ? (
            <h2 className=' h-[40vh] flex justify-center items-center text-red-600 font-bold text-4xl underline underline-offset-[12px] italic'>
              You Have Not Posted Anything Yet
            </h2>
          ) : (
            <section className='container px-4 mx-auto'>
              <div className='flex items-center gap-x-3'>
                <h2 className='text-lg font-medium text-gray-800 dark:text-white'>
                  Total User
                </h2>

                <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400'>
                  {ausers.length}
                </span>
              </div>

              <div className='flex flex-col mt-6'>
                <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                  <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                    <div className='overflow-hidden border border-gray-300 dark:border-gray-700 md:rounded-lg'>
                      <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
                        <thead className='bg-gray-200 dark:bg-gray-800 '>
                          <tr>
                            <th
                              scope='col'
                              className='py-3.5 px-4 text-lg font-bold text-center text-gray-500 dark:text-gray-400  border-r-2 border-gray-600'>
                              <div className='gap-x-2'>
                                <span>Email</span>
                              </div>
                            </th>

                            <th
                              scope='col'
                              className='px-4 py-3.5 text-lg font-bold text-center text-gray-500 dark:text-gray-400 border-r-2 border-gray-600'>
                              <div className='gap-x-2'>
                                <span>Name</span>
                              </div>
                            </th>

                            <th
                              scope='col'
                              className='px-4 py-3.5 text-lg font-bold text-center text-gray-500 dark:text-gray-400 border-r-2 border-gray-600'>
                              <div className='gap-x-2'>
                                <span>Current Role</span>
                              </div>
                            </th>
                            <th
                              scope='col'
                              className='px-4 py-3.5 text-lg font-bold text-center text-gray-500 dark:text-gray-400 border-r-2 border-gray-600'>
                              <div className='gap-x-2'>
                                <span>Change Role</span>
                              </div>
                            </th>

                            <th
                              scope='col'
                              className='px-4 py-3.5 text-lg font-bold text-center text-gray-500 dark:text-gray-400 '>
                              <div className='gap-x-2'>
                                <span>Block</span>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900'>
                          {ausers.map((auser) => (
                            <tr key={auser._id}>
                              <td className='px-4 py-3.5 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r-2 border-gray-500'>
                                {auser.email}
                              </td>

                              <td className='px-4 py-3.5 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r-2 border-gray-500'>
                                {auser.name}
                              </td>
                              <td className='px-4 py-3.5 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r-2 border-gray-500'>
                                {auser.role}
                              </td>
                              {auser.role === "admin" ? (
                                <button
                                  className='btn btn-error opacity-100 '
                                  onClick={() =>
                                    toast.error(
                                      "You cannot change the role of an admin."
                                    )
                                  }>
                                  Change to Seller
                                </button>
                              ) : (
                                <button
                                  onClick={() => handleChangeRole(auser._id)}
                                  className='btn btn-primary'>
                                  Change to Seller
                                </button>
                              )}

                              <td className='px-4 py-3.5 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap'>
                                <div className='flex justify-around'>
                                  {auser.role === "admin" ? (
                                    <button
                                      className='text-gray-500'
                                      onClick={() =>
                                        toast.error(
                                          "You cannot delete an Admin"
                                        )
                                      }
                                      >
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth='1.5'
                                        stroke='red'
                                        className='w-6 h-6'>
                                        <path
                                          strokeLinecap='round'
                                          strokeLinejoin='round'
                                          d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                                        />
                                      </svg>
                                    </button>
                                  ) : (
                                    <button
                                      onClick={() => handleDelete(auser._id)}
                                      title='Delete'
                                      className='text-gray-500 hover:text-red-500 focus:outline-none'>
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth='1.5'
                                        stroke='currentColor'
                                        className='w-6 h-6'>
                                        <path
                                          strokeLinecap='round'
                                          strokeLinejoin='round'
                                          d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                                        />
                                      </svg>
                                    </button>
                                  )}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllUsersInfo