import Image from "next/image";
import img from "../../../../public/Head Phone.jpg";
import { LiaTimesSolid } from "react-icons/lia";

const ProductCart = () => {
  return (
    <div className='flex items-center justify-between w-full bg-slate-100'>
      <div className='flex items-center w-[80%]'>
        <div className='w-[33%] h-24'>
          <Image src={img} alt='img' className='w-full h-full object-cover' />
        </div>
        <div className='ml-4'>
          <h4 className='text-lg font-Poppinsb font-normal leading-4'>
            Head Phone
          </h4>
          <span className='text-sm'>2x20</span>
        </div>
      </div>
      <div className='w-8 h-8 rounded-full border border-black mr-4 cursor-pointer flex items-center justify-center text-lg'>
        <LiaTimesSolid />
      </div>
    </div>
  );
};

export default ProductCart;
