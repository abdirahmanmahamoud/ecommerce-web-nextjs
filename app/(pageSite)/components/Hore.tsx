import Link from "next/link";

const Hore = () => {
  const stylleImg = {
    background: `url('../bag-hore.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className='w-screen h-[80vh] containers flex' style={stylleImg}>
      <div className='w-1/2 h-full flex flex-col justify-center'>
        <h1 className='text-5xl font-Poppins font-semibold'>
          Get all the things that work with electricity
        </h1>
        <p className='mt-1 w-[80%] font-Poppins font-light'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ab sint
          natus quo libero, rerum eaque expedita consectetur vero
        </p>
        <Link href='/product'>
          <button className='text-lg font-Roboto font-medium bg-blue-700 text-white px-3 py-1 mt-2 hover:bg-yellow-500 hover:text-white'>
            All Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hore;
