import React from 'react'


interface ButtonProps {
    children: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    props?: React.ReactNode 
}


export const Button = ({ children, onClick, ...props}: ButtonProps) => {
  return (
    <button onClick={onClick} {...props}>{children}</button>
  )
}
