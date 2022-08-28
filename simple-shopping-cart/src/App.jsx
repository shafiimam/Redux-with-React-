import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import store from './redux/store';
import { Provider } from 'react-redux';
function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <h1 className='header'>Shopping Cart</h1>
      <div className='grid grid-cols-12 gap-6'>
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
