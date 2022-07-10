import Header from './components/Header';
import { Cart } from './components/Cart';
import { Home } from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Styles/App.css';
import { useState } from 'react';


function App() {
  // const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='*' element={<Home />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
