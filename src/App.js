import Cart from "./component/cart/cart";
import Products from "./component/product/Products";

function App() {
  return (
    <div className="flex bg-gray-100 min-h-screen items-start p-10">
      <Products/>
      <Cart/>
    </div>
  );
}

export default App;
