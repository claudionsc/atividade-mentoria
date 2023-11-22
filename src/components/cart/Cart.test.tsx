import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Products } from "../products/Products";
import {
  CartContextProvider,
  Product,
  useCartContext,
} from "../../data/contexts/cartContext/CartContext";
import { Button } from "../button/Button";
import { Cart } from "./Cart";
import { ICartContext } from "../../data/contexts/cartContext/CartContext";

vi.mock("../../data/contexts/cartContext/CartContext", () => {
  const actual = vi.importActual("../../data/contexts/cartContext/CartContext");
  return {
    ...actual,
    
      productList: [{ id: 1, name: "Camiseta", price: 29.99, quantity: 50 }],
      cartItems: [{ id: 1, name: "Camiseta", price: 29.99, quantity: 50 }],
      setProducts: vi.fn(),
      addCartItem: vi.fn(),
      removeCartItem: vi.fn(),
      cleanCart: vi.fn(),
    }
  }); // passar para o vitest de onde vem o objeto a ser mockado

describe("Cart", () => {
  const allProducts: Array<Product> = [
    { id: 1, name: "Camiseta", price: 29.99, quantity: 50 },
    { id: 2, name: "Calça Jeans", price: 59.99, quantity: 30 },
    { id: 3, name: "Tênis Esportivo", price: 99.99, quantity: 20 },
  ];

  const useCartContextMocked = vi.mocked(useCartContext);

  function testRenderProducts(products) {
    useCartContextMocked.mockReturnValue({
      productList: products,
      cartItems: products,
      setProducts: vi.fn(),
      addCartItem: vi.fn(),
      removeCartItem: vi.fn(),
      cleanCart: vi.fn(),
    });

    render(
      <CartContextProvider>
        <Cart />
      </CartContextProvider>
    );

    return screen;
  }
  test("Should render products in the cart when fire event in product button", () => {
    useCartContextMocked.mockReturnValue({
      productList: [{ id: 1, name: "Camiseta", price: 29.99, quantity: 50 }],
      cartItems: [{ id: 1, name: "Camiseta", price: 29.99, quantity: 50 }],
      setProducts: vi.fn(),
      addCartItem: vi.fn(),
      removeCartItem: vi.fn(),
      cleanCart: vi.fn(),
    });

    render(
      <CartContextProvider>
        <Cart />
      </CartContextProvider>
    );

    screen.debug();

    // Verifica se cada produto está presente na tela
  });
});
