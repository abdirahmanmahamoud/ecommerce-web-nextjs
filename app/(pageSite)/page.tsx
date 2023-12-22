import Category from "./components/Category";
import Hore from "./components/Hore";
import NewArrivals from "./components/homeProduct/NewArrivals";
import Products from "./components/homeProduct/Products";

const HomePage = () => {
  return (
    <div>
      <Hore />
      <Category />
      <Products />
      <NewArrivals />
    </div>
  );
};

export default HomePage;
