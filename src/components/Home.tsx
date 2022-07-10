import { useState } from 'react';
import { faker } from '@faker-js/faker';
import { SingleProduct } from './SingleProduct';
import '../Styles/Styles.css';

faker.seed(92);
const prodsArr: any[] = [...Array(20)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  image: faker.image.image()
}));

export const Home = () => {
  const [products] = useState(prodsArr);

  return (
      <div className='productContainer'>
        {products.map((product) => {
          return (
            <SingleProduct product={product} key={product.id} />
          );
        })}
      </div>
  );
};
