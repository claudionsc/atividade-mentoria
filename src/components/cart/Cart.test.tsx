import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi, it } from "vitest";
import { Cart } from "./Cart";
import {
  useCartContext,
  CartContextProvider,
} from "../../data/contexts/cartContext/CartContext";

function getProducts(mockProducts){
  return mockProducts.products
}

// Mock products for testing
const mockProducts = {
  products: [
    { id: 1, name: "Camiseta", price: 29.99, quantity: 50 },
    { id: 2, name: "Calça Jeans", price: 59.99, quantity: 30 },
    { id: 3, name: "Tênis Esportivo", price: 99.99, quantity: 20 },
  ],
  getProducts
};

describe("Show products", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should get the latest message with a spy", () => {
    const spy = vi.spyOn(mockProducts, 'getProducts');

    expect(spy.getMockName()).toEqual("getProducts");

    expect(mockProducts.getProducts(mockProducts)).toEqual(
      mockProducts.products
    )

    expect(spy).toHaveBeenCalledTimes(1)
  });
});
