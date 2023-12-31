import { createContext, useContext, useState } from "react";

export interface ICartContext  { // dados passados para o nosso componente interagir
    productList: Array<Product>,
    cartItems: Array<Product>;
    setProducts: (products: Array<Product>) => void,
    addCartItem: (product: Product) => void;
    removeCartItem: (product: Product) => void;
    cleanCart: () => void;
}

export type Product = {
    id: number
    name: string,
    price:  number,
    quantity: number
}

type CartContextProviderProps = {
    children: React.ReactNode
}

 const allProducts: Array<Product> = [
    { id: 1, name: "Camiseta", price: 29.99, quantity: 50 },
    { id: 2, name: "Calça Jeans", price: 59.99, quantity: 30 },
    { id: 3, name: "Tênis Esportivo", price: 99.99, quantity: 20 },
    { id: 4, name: "Jaqueta de Couro", price: 149.99, quantity: 10 },
    { id: 5, name: "Shorts", price: 19.99, quantity: 40 },
    { id: 6, name: "Sapato Social", price: 79.99, quantity: 25 },
    { id: 7, name: "Vestido de Festa", price: 129.99, quantity: 15 },
    { id: 8, name: "Saia", price: 39.99, quantity: 35 },
    { id: 9, name: "Sapato Casual", price: 69.99, quantity: 30 },
    { id: 10, name: "Blusa de Frio", price: 49.99, quantity: 45 },
  ];

  
const CartContext = createContext<ICartContext | null>(null)

export const CartContextProvider = ({children}: CartContextProviderProps) => {
  const [products, setProducts] = useState<Array<Product>>(allProducts);
    const [cartItems, setCartItems] = useState<Array<Product>>([]);

    const addCartItem = (product: Product) => {
        setCartItems((prev) => [...prev, product]);
      };


      const removeCartItem = (product: Product) => {
        setCartItems((prev) => prev.filter((item) => item.id !== product.id));
      };

      const cleanCart = () => {
        setCartItems([]);
      };

    return (
        <CartContext.Provider value={{ productList: products, setProducts, cartItems, addCartItem, removeCartItem, cleanCart }}>
            {children}
        </CartContext.Provider>
    )

}

export const useCartContext = () => {
    const context = useContext(CartContext);
    console.log({context})
    if (!context) {
      throw new Error("useCartContext must be used within a CartContextProvider");
    }
    return context;
  };

export default CartContext