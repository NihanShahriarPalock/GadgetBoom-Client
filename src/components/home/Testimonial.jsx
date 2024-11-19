

const Testimonial = () => {
  return (
    <div>
      <section className='bg-white'>
        <div className='mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
          <h2 className='text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            Read trusted reviews from our customers
          </h2>

          <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8'>
            <blockquote className='rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8'>
              <div className='flex items-center gap-4'>
                <img
                  alt=''
                  src='https://img.freepik.com/free-photo/woman-traveling-paris_23-2149305860.jpg'
                  className='size-14 rounded-full object-cover'
                />

                <div>
                  <div className='flex justify-center gap-0.5 text-green-500'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  </div>

                  <p className='mt-0.5 text-lg font-medium text-gray-900'>
                    Nadia Afjani
                  </p>
                </div>
              </div>

              <p className='mt-4 text-gray-700'>
                I ordered a smartphone from GadgetBoom, and it arrived in just
                two days! The packaging was secure, and the phone is 100%
                authentic. I also loved their customer support—they were super
                responsive to my questions. Highly recommend!
              </p>
            </blockquote>

            <blockquote className='rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8'>
              <div className='flex items-center gap-4'>
                <img
                  alt=''
                  src='https://img.freepik.com/free-psd/cartoon-young-boy-illustration_23-2151263874.jpg'
                  className='size-14 rounded-full object-cover'
                />

                <div>
                  <div className='flex justify-center gap-0.5 text-green-500'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  </div>

                  <p className='mt-0.5 text-lg font-medium text-gray-900'>
                    Mustak Sayem
                  </p>
                </div>
              </div>

              <p className='mt-4 text-gray-700'>
                I bought wireless earbuds, and not only were they cheaper than
                other stores, but the delivery was lightning fast. The sound
                quality is fantastic, and the product is exactly as described.
                I will definitely shop here again!
              </p>
            </blockquote>

            <blockquote className='rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8'>
              <div className='flex items-center gap-4'>
                <img
                  alt=''
                  src='https://img.freepik.com/free-psd/flat-man-character_23-2151534197.jpg'
                  className='size-14 rounded-full object-cover'
                />

                <div>
                  <div className='flex justify-center gap-0.5 text-green-500'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='size-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                    </svg>
                  </div>

                  <p className='mt-0.5 text-lg font-medium text-gray-900'>
                    Paul Starr
                  </p>
                </div>
              </div>

              <p className='mt-4 text-gray-700'>
                I ordered a smartwatch, and while it was genuine and worked
                perfectly, the delivery took an extra day. That said, their
                support team kept me updated the entire time. I will give them
                another try for sure!
              </p>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial