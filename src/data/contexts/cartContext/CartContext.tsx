import { createContext, useContext, useState } from "react";
import { Product } from "../../servicees/AllProducts";
import { UserService } from "../../servicees/UserService";

export interface ICartContext  {
    productList: Array<Product>,
    setProducts: (products: Array<Product>) => void,
    cartItems: Array<Product>;
    addCartItem: (product: Product) => void;
    productQuantity: number,
    productSubtotal: number,
    subtotal: (product: Product) => void
}

type CartContextProviderProps = {
    children: React.ReactNode
}

  
const CartContext = createContext<ICartContext | null>(null)

export const CartContextProvider = ({children}: CartContextProviderProps) => {
    // const [products, setProducts] = useState(UserService);
    const [cartItems, setCartItems] = useState<Array<Product>>([]);

    

    const addCartItem = (product: Product) => {
        setCartItems((prev) => [...prev, product]);
      };

      
      cartItems.forEach((product) =>  
        console.log(product.id)
      )
      


    return (
        <CartContext.Provider value={{  UserService(), cartItems, addCartItem,  }}>
            {children}
        </CartContext.Provider>
    )

}

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error("useCartContext must be used within a CartContextProvider");
    }
    return context;
  };

export default CartContext