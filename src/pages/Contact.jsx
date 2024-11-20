import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";


const Contact = () => {
  const { user } = useAuth();
  // console.log(user);
  const handleSubmit = () => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Account Created Successful",
        showConfirmButton: false,
        timer: 1500,
      });
   }
  return (
    <div>
      <div className='w-full lg:w-3/5 mx-2 lg:mx-auto my-8 lg:my-12'>
        <div className='w-full h-[1200px] md:h-[60vh] lg:h-[90vh] text-white'>
          <div className='p-2 md:p-4 h-full bg-gray-800 col-span-2'>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col md:flex-row justify-around items-start md:items-center pt-8 p-4'>
                <h2 className='text-2xl md:text-3xl font-semibold'>
                  Send Us A Message
                </h2>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-mail-forward'
                  width='33'
                  height='33'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='#fff'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5' />
                  <path d='M3 6l9 6l9 -6' />
                  <path d='M15 18h6' />
                  <path d='M18 15l3 3l-3 3' />
                </svg>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-6 px-4 md:py-12 md:px-8 text-sm'>
                <div className='flex flex-col gap-1'>
                  <label className='font-semibold'>
                    Name <span className='text-red-500'>&#42;</span>
                  </label>
                  <input
                    value={user?.displayName}
                    className='border-[1px]  border-white bg-gray-800 p-2 rounded-md'
                    placeholder='Enter Your Name'
                    type='text'
                    readOnly
                  />
                </div>

                <div className='flex flex-col gap-1'>
                  <label className='font-semibold'>
                    Email <span className='text-red-500'>&#42;</span>
                  </label>
                  <input
                    value={user?.email}
                    className='border-[1px] border-white bg-gray-800 p-2 rounded-md'
                    placeholder='Enter Your Email'
                    readOnly
                    type='email'
                  />
                </div>

                <div className='flex flex-col gap-1'>
                  <label className='font-semibold'>
                    Phone <span className='text-red-500'>&#42;</span>
                  </label>
                  <input
                    className='border-[1px] border-white bg-gray-800 p-2 rounded-md'
                    placeholder='Enter Your Phone Number'
                    required
                    name='phone'
                    type='tel'
                  />
                </div>

                <div className='flex flex-col gap-1'>
                  <label className='font-semibold'>
                    Subject <span className='text-red-500'>&#42;</span>
                  </label>
                  <input
                    className='border-[1px] border-white bg-gray-800 p-2 rounded-md'
                    placeholder='Enter Your Subject'
                    required
                    name='subject'
                    type='text'
                  />
                </div>

                <div className='flex flex-col gap-1 md:col-span-2'>
                  <label className='font-semibold'>
                    Message <span className='text-red-500'>&#42;</span>
                  </label>
                  <textarea
                    rows='5'
                    className='border-[1px] border-white bg-gray-800 p-2 rounded-md'
                    placeholder='Enter Your Message'
                    required
                    name='subject'
                    type='text'
                  />
                </div>
              </div>
            </form>

            <div className='flex items-center justify-center md:justify-end py-4 px-8'>
              <button
                type='submit'
                className='py-2 px-4 md:py-4 md:px-6 bg-gray-800 rounded-md border-2 border-white flex items-center gap-2 hover:scale-95 transition-all'>
                <span className='text-xl text-white'>Submit</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-brand-telegram'
                  width='30'
                  height='30'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='#fff'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact