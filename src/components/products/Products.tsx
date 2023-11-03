import { Button } from "../button/Button";
import  { useCartContext } from "../../data/contexts/cartContext/CartContext";



export const Products = () => {

  const { productList, addCartItem } = useCartContext();
  
  
  return (
    <div>
      <ul className="product-list">
        {productList.map((product) => {
          return (
            <span data-testId="product" key={product.id} className="product-card">
              <li>{product.name}</li>
              <li>R$ {product.price}</li>
              <li>Qtd: {product.quantity}</li>
             <Button onClick={() => addCartItem({
              id: product.id,
              name: product.name,
              price: product.price,
              quantity: product.quantity
              })}>Comprar</Button>
            </span>
          );
        })}
      </ul>
    </div>
  );
};
