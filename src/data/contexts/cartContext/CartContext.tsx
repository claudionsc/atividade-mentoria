import { createContext, useContext, useState } from "react";

export interface ICartContext  {
    productList: Array<Product>,
    setProducts: (products: Array<Product>) => void,
    cartItems: Array<Product>;
    addCartItem: (product: Product) => void;
}

type Product = {
    name: string,
    price:  number,
    quantity: number
}

type CartContextProviderProps = {
    children: React.ReactNode
}

 const allProducts: Array<Product> = [
    { name: "Camiseta", price: 29.99, quantity: 50 },
    { name: "Calça Jeans", price: 59.99, quantity: 30 },
    { name: "Tênis Esportivo", price: 99.99, quantity: 20 },
    { name: "Jaqueta de Couro", price: 149.99, quantity: 10 },
    { name: "Shorts", price: 19.99, quantity: 40 },
    { name: "Sapato Social", price: 79.99, quantity: 25 },
    { name: "Vestido de Festa", price: 129.99, quantity: 15 },
    { name: "Saia", price: 39.99, quantity: 35 },
    { name: "Sapato Casual", price: 69.99, quantity: 30 },
    { name: "Blusa de Frio", price: 49.99, quantity: 45 },
  ];

  
const CartContext = createContext<ICartContext | null>(null)

export const CartContextProvider = ({children}: CartContextProviderProps) => {
    const [products, setProducts] = useState<Array<Product>>(allProducts);
    const [cartItems, setCartItems] = useState<Array<Product>>([]);

    const addCartItem = (product: Product) => {
        setCartItems((prev) => [...prev, product]);
      };

    return (
        <CartContext.Provider value={{ productList: products, setProducts, cartItems, addCartItem }}>
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