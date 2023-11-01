import { useCartContext } from "../../data/contexts/cartContext/CartContext";

export const Cart = () => {
  const { cartItems } = useCartContext();

  console.log(cartItems);

  return (
    <aside id="cart">
      <h1>Cart</h1>
      {cartItems.map((item) => {
        return (
        <div>Nome: {item.name}</div>
        )
      })}
    </aside>
  );
};
