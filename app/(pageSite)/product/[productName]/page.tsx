import Image from "next/image";
import headphone from "../../../../public/Head Phone.jpg";
import Link from "next/link";
const ProductInfoPage = ({ params }: { params: { productName: string } }) => {
  return (
    <div className='w-screen py-20 containers bg-slate-100'>
      <div className='w-full flex items-center'>
        <div className='w-[40%]'>
          <div className='w-full h-[30rem]'>
            <Image
              src={headphone}
              alt='head phone'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
        <div className='w-1/2 pl-4'>
          <Link
            href={"/category/head"}
            className='text-sm font-Poppins font-medium text-blue-950 hover:text-blue-800'
          >
            Head
          </Link>
          <h2 className='text-3xl font-Poppins font-medium text-black leading-5 mt-2'>
            Head Phone
          </h2>
          <p className='mt-3 font-Poppins font-light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero rerum
            doloribus, ratione laborum error vel porro maiores beatae laudantium
            ea.
          </p>
          <h3 className='text-2xl font-Poppins font-medium mt-2'>$20.00</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoPage;
