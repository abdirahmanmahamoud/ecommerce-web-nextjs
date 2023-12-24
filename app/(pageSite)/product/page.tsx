import Product from "../components/homeProduct/Product";

const ProductPage = () => {
  return (
    <div className='w-full py-9 containers'>
      <h2 className='text-3xl font-Poppins font-semibold leading-6'>
        All Product
      </h2>
      <p className='text-sm font-Poppins font-light'>
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <div className='w-full mt-8 grid grid-cols-5 gap-4'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default ProductPage;
