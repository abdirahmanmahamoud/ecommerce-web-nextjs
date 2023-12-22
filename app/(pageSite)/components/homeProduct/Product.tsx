import Image from "next/image";
import linkImg from "../../../../public/iphone.webp";
const Product = () => {
  return (
    <div className='w-full shadow-2xl shadow-gray-200 bg-white'>
      <div className='w-full h-60'>
        <Image
          src={linkImg}
          alt='iphone 15'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='py-2 px-3'>
        <h2 className='font-Poppins font-medium text-lg leading-5 text-gray-600'>
          Apple iphone 15 pro
        </h2>
        <h2 className='font-Poppins font-medium text-xl mt-1'>$1200</h2>
      </div>
    </div>
  );
};

export default Product;
