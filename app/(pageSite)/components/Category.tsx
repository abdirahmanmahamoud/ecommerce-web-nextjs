import Image from "next/image";
import laptop from "../../../public/laptop.png";
import mobile from "../../../public/mobile-phone.png";
import watch from "../../../public/wrist-watch.png";
import camera from "../../../public/camera.png";
import headPhone from "../../../public/headphones.png";
import videoGame from "../../../public/play-station.png";

const Category = () => {
  return (
    <div className='w-screen my-8 containers'>
      <h1 className='text-2xl font-Poppins font-semibold'>
        Browse by Category
      </h1>
      <div className='mt-4 grid grid-cols-6 gap-0'>
        <div className='flex flex-col items-center justify-between border-[1px] w-[90%] py-2'>
          <Image src={laptop} alt='laptop' className='w-20 h-20' />
          <span className='text-lg font-Poppins font-normal'>Laptop</span>
        </div>
        <div className='flex flex-col items-center justify-between border-[1px] w-[90%] py-2'>
          <Image src={mobile} alt='laptop' className='w-20 h-20' />
          <span className='text-lg font-Poppins font-normal'>Moblie</span>
        </div>
        <div className='flex flex-col items-center justify-between shadow-lg w-[90%] py-2'>
          <Image src={watch} alt='laptop' className='w-20 h-20' />
          <span className='text-lg font-Poppins font-normal'>Watch</span>
        </div>
        <div className='flex flex-col items-center justify-between border-[1px] w-[90%] py-2'>
          <Image src={camera} alt='laptop' className='w-20 h-20' />
          <span className='text-lg font-Poppins font-normal'>Camera</span>
        </div>
        <div className='flex flex-col items-center justify-between border-[1px] w-[90%] py-2'>
          <Image src={headPhone} alt='laptop' className='w-20 h-20' />
          <span className='text-lg font-Poppins font-normal'>Head Phone</span>
        </div>
        <div className='flex flex-col items-center justify-between border-[1px] w-[90%] py-2'>
          <Image src={videoGame} alt='laptop' className='w-20 h-20' />
          <span className='text-lg font-Poppins font-normal'>Video Game</span>
        </div>
      </div>
    </div>
  );
};

export default Category;
