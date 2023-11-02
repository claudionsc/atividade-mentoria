import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { Header } from "../header/Header"

describe("Header", () => {
    test("should render a header correctly", () => {
        render(<Header />)

        expect(screen.getByText("Home"))
    })
})