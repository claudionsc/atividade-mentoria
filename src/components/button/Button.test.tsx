import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
    const handleClick = vi.fn()
    beforeEach(() => {
        render(<Button onClick={handleClick}>Adicionar ao carrinho</Button>)
    })

    test("Should be able to render the button", () => {
        expect(screen.getByRole("button")).toBeInTheDocument()
    })

    test("Should be able to render based on the children prop", () => {
        expect(screen.getByRole("button")).toHaveTextContent("Adicionar ao carrinho")
    })

    test("Should be able to fire event", () => {
        fireEvent.click(screen.getByRole("button"))

        expect(handleClick).toHaveBeenCalledTimes(1)
    })

})