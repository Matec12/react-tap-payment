import { useState } from 'react';
import { useTAPPaymentPayment, TAPPaymentButton } from './dist/index.es';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const config = {
  transID: `KLMNOYZabcdefghijkl${Math.random().toString(36).slice(2)}qrstuvwxyz`,
  email: 'john@example.com',
  amount: 20,
  apiKey: 'TkdLb2VUMk46ZXRoWEdJSEF0Z24xOnB1WVUzd3dvS1c4bw==',
  firstname: 'john',
  lastname: 'doe'
};

const onSuccess = (response) => {
  // Implementation for whatever you want to do with response and after success call.
  console.log('response', response);
};

const onClose = () => {
  // implementation for whatever you want to do when the TAPPayment dialog closed.
  console.log('closed');
};

const TAPPaymentHookExample = () => {
  const initializePayment = useTAPPaymentPayment(config);
  return (
    <div>
      <button
        onClick={() => {
          console.log('hell');
          initializePayment({ onSuccess, onClose });
        }}
      >
        TAPPayment Hooks Sample
      </button>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);

  const componentProps = {
    ...config,
    text: 'TAPPayment Button Sample',
    onSuccess,
    onClose
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>Library Samples</p>
      </div>
      <p className="read-the-docs">Click on the buttons to test either usecase</p>
      <TAPPaymentHookExample />
      <TAPPaymentButton {...componentProps} />
    </div>
  );
}

export default App;
