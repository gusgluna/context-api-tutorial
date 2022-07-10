import { createContext, useState } from 'react';

export const CartContext: any = createContext([]);

export const Context = ({ children }: any) => {
  const [cart, setCart] = useState([]);
  return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>;
};
