# react-tap-payment

 ReactJS library for implementing TAP payment gateway

## Demo

![Demo](TestImg.png?raw=true "Demo Image")

## Get Started

This React library provides a wrapper to add TAPPayment Payments to your React application

### Install

```sh
npm install react-tap-payment --save
```

or with `yarn`

```sh
yarn add react-tap-payment
```

### Usage

This library can be implemented into any react application in 3 different ways:

1. By using hooks provided by the library
2. By using a button provided by the library

Note that both implementations produce the same results.

### 1. Using the tap-payment hook

```javascript
import { useState } from 'react';
import { useTAPPaymentPayment } from 'react-tap-payment';
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
    </div>
  );
}

export default App;

```

### 2. Using the tap-payment button

``` javascript
import { useState } from 'react';
import { TAPPaymentButton } from 'react-tap-payment';
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
      <TAPPaymentButton {...componentProps} />
    </div>
  );
}

export default App;

```

Please checkout [TAPPayment Documentation](https://www.npmjs.com/package/tap-payment-popupjs) for other available options you can add to use the inlinejs directly.

## Deployment

REMEMBER TO CHANGE THE KEY WHEN DEPLOYING ON A LIVE/PRODUCTION SYSTEM

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Some commit message'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## How can I thank you?

Why not star the github repo? I'd love the attention! Why not share the link for this repository on Twitter or Any Social Media? Spread the word!

Inspiration!
[React Paystack](https://www.npmjs.com/package/react-paystack) by Olusegun Ayeni .

Thanks!
Ibrahim Alayo.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
