import { useSelector } from 'react-redux';
import './Header.css';

function Header({ displayTotal }) {
  const orderTotal = useSelector((store) => store.orderTotal);

  return (
    <header className="App-header">
      <h1 className="App-title">Prime Pizza</h1>
      {displayTotal && (
        <p className="Order-total">
          Total: ${orderTotal}
          {/* add {orderTotal} where TBD is when ready */}
        </p>
      )}
    </header>
  );
}

export default Header;
