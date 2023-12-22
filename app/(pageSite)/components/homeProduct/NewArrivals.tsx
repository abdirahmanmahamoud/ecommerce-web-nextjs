import Image from "next/image";
import linkImg from "../../../../public/Head Phone.jpg";

const NewArrivals = () => {
  return (
    <div className='w-screen my-8 containers'>
      <h1 className='text-2xl font-Poppins font-semibold'>New Arrivals</h1>
      <div className='w-full mt-5 flex space-x-4'>
        <div className='w-1/2'>
          <div className='w-full h-[29rem] relative'>
            <Image
              src={linkImg}
              alt='iphone'
              className='w-full h-full object-cover'
            />
            <div className='w-full bg-black absolute bottom-0 opacity-50 text-white px-4 py-5'>
              <h2 className='text-lg font-Poppins font-semibold leading-4'>
                Head iphone
              </h2>
              <p className='text-sm font-Poppins font-light leading-5 mt-1'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                corporis libero dolor, perferendis voluptatem eum voluptate quos
                sed eligendi odit?
              </p>
              <h2 className='text-lg font-Poppins font-normal'>$20.00</h2>
            </div>
          </div>
        </div>
        <div className='w-1/2 space-y-4'>
          <div className='w-full flex shadow-lg h-36'>
            <div className='w-[30%] h-full'>
              <Image
                src={linkImg}
                alt='iphone'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='w-full h-full bg-white flex flex-col justify-center px-3'>
              <h2 className='text-lg font-Poppins font-semibold leading-4'>
                Head iphone
              </h2>
              <p className='text-sm font-Poppins font-light leading-5 mt-1'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                corporis libero dolor, perferendis voluptatem eum voluptate quos
                sed eligendi odit?
              </p>
              <h2 className='text-lg font-Poppins font-normal'>$20.00</h2>
            </div>
          </div>
          <div className='w-full flex shadow-lg h-36'>
            <div className='w-[30%] h-full'>
              <Image
                src={linkImg}
                alt='iphone'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='w-full h-full bg-white flex flex-col justify-center px-3'>
              <h2 className='text-lg font-Poppins font-semibold leading-4'>
                Head iphone
              </h2>
              <p className='text-sm font-Poppins font-light leading-5 mt-1'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                corporis libero dolor, perferendis voluptatem eum voluptate quos
                sed eligendi odit?
              </p>
              <h2 className='text-lg font-Poppins font-normal'>$20.00</h2>
            </div>
          </div>
          <div className='w-full flex shadow-lg h-36'>
            <div className='w-[30%] h-full'>
              <Image
                src={linkImg}
                alt='iphone'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='w-full h-full bg-white flex flex-col justify-center px-3'>
              <h2 className='text-lg font-Poppins font-semibold leading-4'>
                Head iphone
              </h2>
              <p className='text-sm font-Poppins font-light leading-5 mt-1'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                corporis libero dolor, perferendis voluptatem eum voluptate quos
                sed eligendi odit?
              </p>
              <h2 className='text-lg font-Poppins font-normal'>$20.00</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
