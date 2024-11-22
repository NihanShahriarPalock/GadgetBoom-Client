import useUserData from "../../hooks/useUserData";


const Overview = () => {
  const  user  = useUserData();
  console.log(user);
  // console.log(user?.role);
  // console.log(user?.name);
  return (
    <div>
      <div className='m-10 max-w-sm'>
        <div className='rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg'>
          <div className='relative mx-auto w-36 rounded-full'>
            <span className='absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2'></span>
            <img
              className='mx-auto h-auto w-full rounded-full'
              src={
                user?.image ||
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              }
              alt=''
            />
          </div>
          <h1 className='my-1 text-center text-xl font-bold leading-8 text-gray-900'>
            Hello, {user?.name}
          </h1>

          <ul className='mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow'>
            {/* <li className='flex items-center py-3 text-sm'>
              <span>Status</span>
              <span className='ml-auto'>
                <span className='rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700'>
                  Open for side gigs
                </span>
              </span>
            </li> */}

            <li className='flex items-center py-3 text-sm'>
              <span>Email : </span>
              <span className='ml-auto'>{user?.email}</span>
            </li>
            <li className='flex items-center py-3 text-sm'>
              <span>Role : </span>
              <span className='ml-auto'>{user?.role}</span>
            </li>
            {user?.role === "buyer" && (
              <>
                <li className='flex items-center py-3 text-sm'>
                  <span>Wishlist : </span>
                  <span className='ml-auto'>{user?.wishlist?.length || 0}</span>
                </li>
                <li className='flex items-center py-3 text-sm'>
                  <span>Cartlist : </span>
                  <span className='ml-auto'>{user?.cartlist?.length || 0}</span>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Overview