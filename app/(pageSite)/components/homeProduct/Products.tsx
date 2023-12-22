import Product from "./Product";

const Products = () => {
  return (
    <div className='w-screen my-5 containers'>
      <h1 className='text-2xl font-Poppins font-semibold'>Featured Product</h1>
      <div className='mt-4 grid grid-cols-4 gap-4'>
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

export default Products;
