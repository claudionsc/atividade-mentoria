import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Products } from "./Products";
import { CartContextProvider } from "../../data/contexts/cartContext/CartContext";

describe("Products", () => {
  test("Should render a list of products", () => {
    render(
      <CartContextProvider>
        <Products />
      </CartContextProvider>
    );

    expect(screen.getAllByTestId("product")).toBeInTheDocument;
  });
});
