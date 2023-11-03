import "./App.css";
import { Cart } from "./components/cart/Cart";
import { Header } from "./components/header/Header";
import { Products } from "./components/products/Products";
import { CartContextProvider } from "./data/contexts/cartContext/CartContext";

function App() {
  return (
    <main className="App">
      <CartContextProvider>
        <Header />
        <Products />
        <Cart />
      </CartContextProvider>
      <h1>Test</h1>
    </main>
  );
}

export default App;
