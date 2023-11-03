import { useState } from "react";
import { Product, allProducts } from "./AllProducts";

export const UserService = () => {
    const [product, setProduct] = useState<Array<Product>>([])

    setTimeout(() => {
        setProduct(allProducts)
    }, 100)

    console.log(product)
}