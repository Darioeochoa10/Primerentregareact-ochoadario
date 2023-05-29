import "./../../assets/styles/categories.css";
import CartWidget from "../Cartwidget/CartWidget";
const Products = () => {
  return (
    <div className="categories">
      <button>Pendants</button>
      <button>Rings</button>
      <button>Necklaces</button>
      <CartWidget />
    </div>
  );
};

export default Products;
