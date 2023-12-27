import Image from "next/image";
import headphone from "../../../../public/Head Phone.jpg";
import Link from "next/link";
import Product from "../../components/homeProduct/Product";
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
          <div className='mt-4'>
            <input
              type='number'
              value='1'
              className='px-1 py-2 w-14 border border-blue-700 focus:outline-none focus:border-blue-700'
            />
            <button className='ml-2 px-3 py-2 bg-blue-700 text-white'>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <h2 className='text-2xl font-Poppins font-medium'>
          Product description
        </h2>
        <p className='mt-2 font-Poppins font-light'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          deserunt, velit explicabo vel totam iusto veritatis maxime sit,
          accusantium repudiandae nesciunt optio dignissimos eveniet accusamus?
          Sint, cupiditate ex. Quis aliquid culpa iusto magnam esse repellendus
          nam, tempore autem eaque consequuntur veritatis cupiditate enim
          laudantium, atque minima. Laborum, voluptates perspiciatis velit eaque
          assumenda numquam molestias obcaecati magni quasi iusto possimus ipsam
          modi dolorum? Facilis, unde nobis? Aut ipsa in suscipit tempore ea sed
          nisi earum reprehenderit.
        </p>
      </div>
      <div className='mt-8'>
        <h2 className='text-2xl font-Poppins font-medium'>Related products</h2>
        <div className='mt-4 grid grid-cols-4 gap-4'>
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default ProductInfoPage;
