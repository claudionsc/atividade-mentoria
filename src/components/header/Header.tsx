import { useCartContext } from "../../data/contexts/cartContext/CartContext"

export const Header = () => {

  const { cartItems } = useCartContext()

  return (
    <header>
        <span><h2>Home</h2></span>
        <span className='header-subtotal'>
            <p>Total de produtos: {cartItems.length}</p>
            <h2>Subtotal: R$:00</h2>
        </span>
    </header>
  )
}
