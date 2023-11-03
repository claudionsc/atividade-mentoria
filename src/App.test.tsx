import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import App from "./App"

// o app está renderizando
describe("App", () => {
    test("Should render a main", () => {
        const { getByRole } = render(<App />)

        expect(getByRole("main")).toBeInTheDocument()
    })
})
