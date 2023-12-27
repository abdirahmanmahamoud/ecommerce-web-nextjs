"use client";
import { LiaTimesSolid } from "react-icons/lia";
import ProductCart from "./ProductCart";

const ShoppingCart = () => {
  const handleClick = (e: any) => {
    // e.target.classList[0]
  };
  return (
    <div
      className='w-screen h-screen absolute top-0 z-50 bg-[#0000002a]'
      onClick={handleClick}
    >
      <div className='w-screen h-screen static'>
        <div className='w-[30%] h-screen absolute top-0 right-0 bg-white'>
          <div className='flex items-center justify-between px-4 py-4 border-b-2'>
            <h3 className='font-Poppins font-normal text-sn'>Shopping Cart</h3>
            <LiaTimesSolid className='text-2xl cursor-pointer mr-2' />
          </div>
          <div className='w-[98%] h-[71%] px-4 py-2 space-y-2 overflow-auto'>
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
          <div className='w-full border-t-2 border-slate-300'>
            <div className='flex items-center justify-between px-4 py-2'>
              <h4 className='font-Poppins font-normal'>Subtotal</h4>
              <h4 className='font-Poppins font-normal'>$25.00</h4>
            </div>
            <div className='pt-5 px-3 space-y-2'>
              <button className='w-full h-9 bg-blue-600 text-white hover:bg-blue-900'>
                View Cart
              </button>
              <button className='w-full h-9 bg-blue-600 text-white hover:bg-blue-800'>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
