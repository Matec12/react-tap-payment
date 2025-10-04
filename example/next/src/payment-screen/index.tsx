'use client';

import { useState } from 'react';
import { useTAPPayment, TAPPaymentButton } from '../dist';
import './index.css';

const config: any = {
  env: 'sandbox', // or 'production'
  transID: `KLMNOYZabcdefghijkl${Math.random().toString(36).slice(2)}qrstuvwxyz`,
  email: 'john@example.com',
  amount: 20,
  superMerchantFee: 10.23, // Optional fee amount for super merchant transactions. Used for advanced fee management scenarios.
  apiKey: 'TkdLb2VUMk46ZXRoWEdJSEF0Z24xOnB1WVUzd3dvS1c4bw==',
  firstname: 'john',
  lastname: 'doe',
  phone: '123456789',
  savePaymentDetails: true,
  customerReference: '1828292899'
};

const onSuccess = (response: any) => {
  // Implementation for whatever you want to do with response and after success call.
  console.log('response', response);
};

const onClose = () => {
  // implementation for whatever you want to do when the TAPPayment dialog closed.
  console.log('closed');
};

const TAPPaymentHookExample = () => {
  const initializePayment = useTAPPayment(config);
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

function PaymentScreen() {
  const [count, setCount] = useState(0);

  const componentProps = {
    ...config,
    text: 'TAPPayment Button Sample',
    onSuccess,
    onClose
  };

  return (
    <div className="PaymentScreen">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/next.svg" className="logo" alt="Next logo" />
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

export default PaymentScreen;
