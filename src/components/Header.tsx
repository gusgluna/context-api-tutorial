import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context';
import '../Styles/Styles.css';

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <span className='header'>React Context API tutorial</span>
      <ul className="nav">
        <li>
          <Link to={'/'}>Home Page</Link>
        </li>
        <li>
          <Link to={'/cart'}>Cart ({[...cart].length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;