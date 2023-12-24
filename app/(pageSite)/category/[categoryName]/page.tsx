import Product from "../../components/homeProduct/Product";

const CategoryPage = ({ params }: { params: { categoryName: string } }) => {
  return (
    <div className='w-screen py-6 containers'>
      <h2 className='text-3xl font-Poppins font-semibold'>
        Category: {params.categoryName}
      </h2>
      <p className='text-sm font-Poppins font-light'>
        List category of product
      </p>
      <div className='w-full mt-8 grid grid-cols-5 gap-4'>
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default CategoryPage;
