import React from 'react'

interface CartItemProps {
    children: React.ReactNode,
    props?: React.ReactNode
}

export const CartItems = ({children ,...props}: CartItemProps) => {
  return (
    <section className='cart-item' {...props}>{children}</section>
  )
}
