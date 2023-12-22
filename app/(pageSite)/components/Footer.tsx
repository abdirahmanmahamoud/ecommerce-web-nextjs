import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import pay from "../../../public/pay.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className='mt-16 bg-white'>
      <div className='w-full py-10 containers flex'>
        <div className='w-1/2'>
          <h1 className='text-4xl text-black font-Poppins font-semibold'>
            Join Us & Get Updates
          </h1>
          <span className='text-lg font-Poppins font-extralight'>
            Sing up for exclusive offers, latest new and updates
          </span>
        </div>
        <div className='w-1/2 flex items-center justify-center'>
          <input
            type='text'
            placeholder='Enter email addiress'
            className=' w-[65%] border border-slate-600 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] text-xl mt-1'
          />
          <button className='bg-blue-700 text-white ml-4 py-3 px-5 rounded-lg hover:bg-blue-900'>
            Subscribe
          </button>
        </div>
      </div>
      <div className='py-8 border-t-2 containers grid grid-cols-5'>
        <div className='col-span-2'>
          <div className='text-5xl font-Script cursor-pointer'>
            <span className='text-blue-700'>S</span>
            <span className='text-black'>agal</span>
          </div>
          <div className='mt-5 flex space-x-2'>
            <div className='w-7 h-7 bg-blue-200 flex items-center justify-center text-lg  text-blue-800 hover:bg-gray-300 cursor-pointer'>
              <FaFacebookF />
            </div>
            <div className='w-7 h-7 bg-blue-200 flex items-center justify-center text-lg  text-blue-800 hover:bg-gray-300 cursor-pointer'>
              <FaInstagram />
            </div>
            <div className='w-7 h-7 bg-blue-200 flex items-center justify-center text-lg  text-blue-800 hover:bg-gray-300 cursor-pointer'>
              <FaXTwitter />
            </div>
            <div className='w-7 h-7 bg-blue-200 flex items-center justify-center text-lg  text-blue-800 hover:bg-gray-300 cursor-pointer'>
              <FaTiktok />
            </div>
          </div>
          <div className='mt-3'>
            <span className='font-Poppins font-extralight'>
              &copy; 2023 Sagal All Rights Reserved
            </span>
          </div>
        </div>
        <div>
          <h3 className='text-lg font-Poppins font-semibold'>Get to Know Us</h3>
          <div className='w-16 h-[0.90px] bg-slate-700 mt-3'></div>
          <div className='mt-3 space-y-1 flex flex-col'>
            <span className='font-Poppins font-light'>About Us</span>
            <span className='font-Poppins font-light'>News & Blog</span>
            <span className='font-Poppins font-light'>Careers</span>
            <span className='font-Poppins font-light'>Contact Us</span>
            <span className='font-Poppins font-light'>How To Shop</span>
          </div>
        </div>
        <div>
          <h3 className='text-lg font-Poppins font-semibold'>
            Ordersv & Returns
          </h3>
          <div className='w-16 h-[0.90px] bg-slate-700 mt-3'></div>
          <div className='mt-3 space-y-1 flex flex-col'>
            <span className='font-Poppins font-light'>Shipping & Delivery</span>
            <span className='font-Poppins font-light'>Return & Exchange</span>
            <span className='font-Poppins font-light'>Track Order</span>
            <span className='font-Poppins font-light'>Selling Tips</span>
            <span className='font-Poppins font-light'>Payment</span>
          </div>
        </div>
        <div>
          <h3 className='text-lg font-Poppins font-semibold'>Contcat</h3>
          <div className='w-16 h-[0.90px] bg-slate-700 mt-3'></div>
          <div className='mt-3 space-y-2 flex flex-col'>
            <div className='flex items-center space-x-2'>
              <div className='text-2xl text-blue-600'>
                <IoCall />
              </div>
              <span className='text-lg font-Poppins font-light'>
                252900000000
              </span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='text-2xl text-blue-600'>
                <MdOutlineMail />
              </div>
              <span className='text-lg font-Poppins font-light'>
                info@sagalonline.so
              </span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='text-2xl text-blue-600'>
                <FaMapMarkerAlt />
              </div>
              <span className='text-lg font-Poppins font-light leading-6'>
                sagal hodan garoowe puntland somalia
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='py-4 border-t-2 containers flex items-center justify-between'>
        <div>
          <Image src={pay} alt='Payments logo' />
        </div>
        <div className='flex items-center space-x-5'>
          <span className='font-Poppins font-light'>Privacy Policy</span>
          <span className='font-Poppins font-light'>Terms of Use</span>
          <span className='font-Poppins font-light'>Shipping Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
