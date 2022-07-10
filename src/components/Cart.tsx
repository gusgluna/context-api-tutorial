import { useContext, useEffect, useState } from "react";
import { SingleProduct } from "./SingleProduct";
import { CartContext } from "../Context";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc:number, curr:any) => acc + Number(curr.price), 0)
    );
  }, [cart]);


  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: ${total} </span>
      <div className="productContainer">
        {
          cart.map((product:any) => {
            return (
              <SingleProduct product={product} key={product.id} />
            );
          })
        }
      </div>
    </div>
  );
};
