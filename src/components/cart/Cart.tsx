import { useCartContext } from "../../data/contexts/cartContext/CartContext";
import { CartCounter } from "../cartCounter/CartCounter";
import { CartItems } from "../cartItems/CartItems";
import { useState } from "react";

export const Cart = () => {
  const { cartItems, removeCartItem, cleanCart, productList } = useCartContext();

  console.log(productList)
  // console.log(useCartContext())
  const [counter, setCounter] = useState(1);

  const decrement = () => {
    setCounter(counter > 1 ? counter - 1 : 1);
  };

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <aside id="cart">
      <h2>Carrinho</h2>
      <p className='remove-item' onClick={() => cleanCart()}>Limpar carrinho</p>
      {cartItems.map((item) => {
        return (
          <CartItems>
            <div className="cart-item-subtotal">
              <h4>{item.name}</h4>
              <p>R$ {item.price * counter}</p>
              <p
                className="remove-item"
                onClick={() =>
                  removeCartItem({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity,
                  })
                }
              >
                Remover
              </p>
            </div>
            <CartCounter
              onClickDecrement={decrement}
              onClickIncrement={increment}
            >
              {counter}
            </CartCounter>
          </CartItems>
        );
      })}
    </aside>
  );
};
