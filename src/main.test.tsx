import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Products } from "./components/products/Products";
import { CartContextProvider} from "./data/contexts/cartContext/CartContext";
import { Button } from "./components/button/Button";
import { Header } from "./components/header/Header";
import { Cart } from "./components/cart/Cart";

describe("Main", () => {
    
    test("Should render a header with text total de produtos", () => {
        render(
          <CartContextProvider>
            <Header />
          </CartContextProvider>
        )
  
          expect(screen.getByText("Total de produtos: 0"))
  
      })
  
      test("Should update the product amount when button is clicked ", () => {
        const handleClick = vi.fn()
        render(
          <CartContextProvider>
            <Header />
            <Products />
            <Button onClick={handleClick}>Comprar</Button>
          </CartContextProvider>
        )
  
  
  
        fireEvent.click(screen.getAllByText("Comprar")[0]) 
        expect(handleClick).toHaveBeenCalledTimes(0)
  
        expect(screen.getByText("Total de produtos: 1"))
  
      })
  
      test("Should update the product amount when button is clicked once again", () => {
        const handleClick = vi.fn()
        render(
          <CartContextProvider>
            <Header />
            <Products />
            <Button onClick={handleClick}>Comprar</Button>
          </CartContextProvider>
        )
  
  
  
        fireEvent.click(screen.getAllByText("Comprar")[0]) 
        fireEvent.click(screen.getAllByText("Comprar")[1]) 
        expect(handleClick).toHaveBeenCalledTimes(0)
        
        expect(screen.getByText("Total de produtos: 2"))
  
      })
})