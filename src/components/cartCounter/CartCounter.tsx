import React from "react";

interface CartCounterProps {
    children: React.ReactNode,
    onClickDecrement?: React.MouseEventHandler<HTMLButtonElement>
    onClickIncrement?: React.MouseEventHandler<HTMLButtonElement>
    props?: React.ReactNode
}

export const CartCounter = ({ children, onClickDecrement, onClickIncrement, ...props }: CartCounterProps) => {

    
  return (
    <span className="counter-cart">
      <button {...props} onClick={onClickDecrement}>-</button>
      <span>{children}</span>
      <button {...props} onClick={onClickIncrement}>+</button>
    </span>
  );
};

