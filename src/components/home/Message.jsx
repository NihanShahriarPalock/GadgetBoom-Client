const Message = () => {
  return (
    <div>
      <section className='bg-white  text-gray-900 '>
        <div className='max-w-6xl px-6 py-10 mx-auto'>
          <h1 className='mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl '>
            Message From CEO of Gadget Boom
          </h1>

          <main className='relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12'>
            <div className='absolute w-full -z-10 md:h-96 rounded-2xl'></div>

            <div className='w-full p-6 bg-gray-100 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly'>
              <img
                className='h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl'
                src='https://i.ibb.co/yygH3Yb/ceo.jpg'
                alt='client photo'
              />

              <div className='mt-2 md:mx-6'>
                <div>
                  <p className='text-xl font-medium tracking-tight '>
                    Jack Watson
                  </p>
                  <p className=' '>CEO of Gadget Boom</p>
                </div>

                <p className='mt-4 text-lg leading-relaxed  md:text-xl'>
                  {" "}
                  “ Our mission has always been to make shopping easier, faster,
                  and more enjoyable for you. Every product we offer, every
                  feature we launch, and every step we take is driven by our
                  commitment to serving your needs better. We are constantly
                  working to improve your experience—whether through expanding
                  our product range, enhancing our customer support, or
                  introducing innovative features to simplify your shopping
                  journey. Your feedback has been instrumental in shaping our
                  growth, and we encourage you to continue sharing your thoughts
                  with us. Looking ahead, we are excited about the opportunities
                  to serve you even better. Together, we are building more than
                  just a marketplace; we’re creating a community of shoppers and
                  sellers united by trust, quality, and convenience.”.
                </p>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Message;
