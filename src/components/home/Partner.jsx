import Marquee from "react-fast-marquee";

const Partner = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-300'>
      <h2 className='p-4 md:p-10 text-center font-bold text-2xl lg:text-4xl'>
        Our Payments Partners
      </h2>
      <div className=' w-full h-40 flex items-center justify-center shadow-2xl'>
        <Marquee speed={70}>
          <img
            className='mr-10 h-28'
            src='https://okcredit-blog-images-prod.storage.googleapis.com/2021/05/cashondelivery1.jpg'
            alt=''
          />
          <img
            className='mr-10 h-28'
            src='https://www.lendingexpert.co.uk/wp-content/uploads/2019/02/Visa-MasterCard.jpg'
            alt=''
          />
          <img
            className='mr-10 h-28'
            src='https://1000logos.net/wp-content/uploads/2016/10/American-Express-Color.png'
            alt=''
          />
          <img
            className='mr-10 h-28'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7aYy_DnTNxWyE44yFTiyuISNQyuo4zYZpYQ&s'
            alt=''
          />
          <img
            className='mr-10 h-28'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl7-xshwJ4kJ2PQvNqtuXh0wtmMijpJMAXgg&s'
            alt=''
          />
          <img
            className='mr-10 h-28'
            src='https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png'
            alt=''
          />
          <img
            className='mr-10 h-28'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCSs46uCN_EdHnNtdDSXWlCD0k57n1fuvsiQ&s'
            alt=''
          />
          <img
            className='mr-10 h-28'
            src='https://financialallianceforwomen.org/wp-content/uploads/2023/11/BRAC-Bank-Square.png'
            alt=''
          />
          <img
            className='mr-10 h-28'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWIMW0N257rnezJdXsaUe0ZFmliO8rjzcI3Q&s'
            alt=''
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Partner;
