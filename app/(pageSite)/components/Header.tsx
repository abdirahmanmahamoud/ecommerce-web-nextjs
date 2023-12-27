"use client";
import Link from "next/link";
import { CiSearch, CiUser } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { handleShoppingIsOpen } from "@/app/lib/Slice/ShoppingCartSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className='w-screen h-16 bg-white containers flex items-center justify-between'>
      <Link href='/' className='text-4xl font-Script'>
        <span className='text-blue-700'>S</span>
        <span className='text-black'>agal</span>
      </Link>
      <nav className='flex items-center space-x-3'>
        <Link
          href='/'
          className='text-[1.07rem] font-Poppins font-normal text-black hover:text-blue-800'
        >
          Home
        </Link>
        <Link
          href='/product'
          className='text-[1.07rem] font-Poppins font-normal text-black hover:text-blue-800'
        >
          Product
        </Link>
        <Link
          href='/category/mobile'
          className='text-[1.07rem] font-Poppins font-normal text-black hover:text-blue-800'
        >
          Mobile
        </Link>
        <Link
          href='/category/wacth'
          className='text-[1.07rem] font-Poppins font-normal text-black hover:text-blue-800'
        >
          Wacht
        </Link>
        <Link
          href='/category/laptop'
          className='text-[1.07rem] font-Poppins font-normal text-black hover:text-blue-800'
        >
          Laptop
        </Link>
      </nav>
      <div className='flex items-center space-x-2'>
        <div className='text-2xl cursor-pointer'>
          <CiSearch />
        </div>
        <div
          className='text-[1.3rem] cursor-pointer'
          onClick={() => dispatch(handleShoppingIsOpen())}
        >
          <BsCart3 />
        </div>
        <div className='text-2xl cursor-pointer'>
          <CiUser />
        </div>
      </div>
    </div>
  );
};

export default Header;
