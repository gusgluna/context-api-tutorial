import { useContext } from 'react';
import { CartContext } from '../Context';
import '../Styles/Styles.css';

interface props {
  product: {
    image: string,
    name: string,
    price: string,
    id: string;
  },
}

export const SingleProduct = ({ product }: props) => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="products">
      <img src={product.image} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{product.name}</span>
        <span>$ {product.price.substring(0, 3)}</span>
      </div>
      {cart.includes(product) ?
        (
          <button
            className="add"
            onClick={() => {
              setCart(cart.filter((prod: any) => prod.id !== product.id));
            }}
          >
            Remove to cart
          </button>
        ) :
        (
          <button
            className="add"
            onClick={() => {
              setCart([...cart, product]);
            }}
          >
            Add to cart
          </button>
        )
      }
    </div>
  );
};
