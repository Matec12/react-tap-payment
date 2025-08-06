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

Versions

    • Version 2.0.0: Current stable version. Introduces an `env` parameter for environment selection (e.g., 'sandbox', 'production'), eliminating the need for separate library versions for different environments. Parameters `savePaymentDetails`, `customerReference`, and `phone` are available in this version.
    • Version 1.0.4: Production-ready. (Deprecated: Please use v2.0.x for new projects. This version does not support the `env` parameter.)
    • Version 1.0.3: Staging environment. (Deprecated: Please use v2.0.x for new projects. This version does not support the `env` parameter.)

### Usage

This library can be implemented into any react application in 2 different ways:

1. By using hooks provided by the library
2. By using a button provided by the library

Note that both implementations produce the same results.

With version 2.0.0 and above, an `env` parameter is introduced in the configuration. Set `env: 'sandbox'` for testing and `env: 'production'` for live transactions. The `apiKey` should correspond to the selected environment.

### 1. Using the tap-payment hook (v2.0.0 and above)

```javascript
import { useState } from 'react';
import { useTAPPayment } from 'react-tap-payment';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const config_v2 = {
  env: 'production', // or 'sandbox'
  transID: `KLMNOYZabcdefghijkl${Math.random().toString(36).slice(2)}qrstuvwxyz`,
  email: 'john@example.com',
  amount: 20,
  apiKey: 'YOUR_API_KEY_FOR_THE_SELECTED_ENV', // e.g., your production or sandbox key
  savePaymentDetails: true, // Set to true to save payment details
  customerReference: `unique_ref_${Math.random().toString(36).slice(10)}`, // Required if savePaymentDetails is true (8 or more characters)
  phone: `09074820394`, // Required if savePaymentDetails is true
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

const TAPPaymentHookExampleV2 = () => {
  const initializePayment = useTAPPayment(config_v2);

  return (
    <div>
      <button
        onClick={() => {
          console.log('Initializing payment v2');
          initializePayment({ onSuccess, onClose });
        }}
      >
        TAPPayment Hooks Sample (v2.0.0)
      </button>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);

  const componentProps_v2 = {
    ...config_v2,
    text: 'TAPPayment Button Sample (v2.0.0)',
    onSuccess,
    onClose
  };

  // Example for deprecated v1.0.x (see below for its config)
  const config_v1 = {
    transID: `KLMNOYZabcdefghijkl${Math.random().toString(36).slice(2)}qrstuvwxyz`,
    email: 'jane@example.com',
    amount: 10,
    apiKey: 'TkdLb2VUMk46ZXRoWEdJSEF0Z24xOnB1WVUzd3dvS1c4bw==', // v1.0.4 production key example
    firstname: 'jane',
    lastname: 'doe'
  };
  const initializePayment_v1 = useTAPPayment(config_v1); // Assuming useTAPPayment is backward compatible or you'd use an older version of the lib
   const componentProps_v1 = {
    ...config_v1,
    text: 'TAPPayment Button Sample (v1.0.x - Deprecated)',
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
      <TAPPaymentHookExampleV2 />
      {/* Add TAPPaymentButton v2 example if needed */}
      {/* <TAPPaymentButton {...componentProps_v2} /> */}

      {/* Deprecated Examples Below */}
      {/* <TAPPaymentHookExampleV1 initializePayment={initializePayment_v1} /> */}
      {/* <TAPPaymentButton {...componentProps_v1} /> */}
    </div>
  );
}

export default App;

```

### 2. Using the tap-payment button (v2.0.0 and above)

```javascript
import { useState } from 'react';
import { TAPPaymentButton } from 'react-tap-payment';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const config_v2 = {
  env: 'sandbox', // or 'production'
  transID: `KLMNOYZabcdefghijkl${Math.random().toString(36).slice(2)}qrstuvwxyz`,
  email: 'john@example.com',
  amount: 20,
  apiKey: 'YOUR_API_KEY_FOR_THE_SELECTED_ENV', // e.g., your production or sandbox key
  savePaymentDetails: true, // Set to true to save payment details
  customerReference: `unique_ref_${Math.random().toString(36).slice(10)}`, // Required if savePaymentDetails is true (8 or more characters)
  phone: `09074820394`, // Required if savePaymentDetails is true
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

  const componentProps_v2 = {
    ...config_v2,
    text: 'TAPPayment Button Sample (v2.0.0)',
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
      <TAPPaymentButton {...componentProps_v2} />
    </div>
  );
}

export default App;

```

### Usage (v1.0.x - Deprecated)

The following examples apply to versions 1.0.3 and 1.0.4, which are now deprecated. These versions do not use the `env` parameter, and the API key used directly determined the environment (staging or production). The parameters `savePaymentDetails`, `customerReference`, and `phone` are not supported in v1.0.x.

#### 1. Using the tap-payment hook (v1.0.x - Deprecated)

```javascript
import { useState } from 'react';
import { useTAPPayment } from 'react-tap-payment'; // Assuming you are using an older version of the library
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Example config for v1.0.4 (Production)
const config_v1_prod = {
  transID: `KLMNOYZabcdefghijkl${Math.random().toString(36).slice(2)}qrstuvwxyz`,
  email: 'john@example.com',
  amount: 20,
  apiKey: 'TkdLb2VUMk46ZXRoWEdJSEF0Z24xOnB1WVUzd3dvS1c4bw==', // v1.0.4 Production Key
  firstname: 'john',
  lastname: 'doe'
};

// Example config for v1.0.3 (Staging)
// const config_v1_staging = {
//   transID: `KLMNOYZabcdefghijkl${Math.random().toString(36).slice(2)}qrstuvwxyz`,
//   email: 'john@example.com',
//   amount: 20,
//   apiKey: 'YOUR_STAGING_API_KEY_FOR_V1.0.3', // v1.0.3 Staging Key
//   firstname: 'john',
//   lastname: 'doe'
// };


const onSuccess = (response) => {
  // Implementation for whatever you want to do with response and after success call.
  console.log('response', response);
};

const onClose = () => {
  // implementation for whatever you want to do when the TAPPayment dialog closed.
  console.log('closed');
};

const TAPPaymentHookExampleV1 = () => {
  // Choose the appropriate config for the v1.0.x version you are targeting
  const initializePayment = useTAPPayment(config_v1_prod);

  return (
    <div>
      <button
        onClick={() => {
          console.log('Initializing payment v1');
          initializePayment({ onSuccess, onClose });
        }}
      >
        TAPPayment Hooks Sample (v1.0.x - Deprecated)
      </button>
    </div>
  );
};

// App component structure would be similar to the v2 example,
// but using config_v1_prod or config_v1_staging
// ... (rest of App component for v1 example)
```

#### 2. Using the tap-payment button (v1.0.x - Deprecated)

```javascript
import { useState } from 'react';
import { TAPPaymentButton } from 'react-tap-payment'; // Assuming you are using an older version of the library
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Example config for v1.0.4 (Production)
const config_v1_prod = {
  transID: `KLMNOYZabcdefghijkl${Math.random().toString(36).slice(2)}qrstuvwxyz`,
  email: 'john@example.com',
  amount: 20,
  apiKey: 'TkdLb2VUMk46ZXRoWEdJSEF0Z24xOnB1WVUzd3dvS1c4bw==', // v1.0.4 Production Key
  firstname: 'john',
  lastname: 'doe'
};

// Example config for v1.0.3 (Staging)
// const config_v1_staging = {
//   transID: `KLMNOYZabcdefghijkl${Math.random().toString(36).slice(2)}qrstuvwxyz`,
//   email: 'john@example.com',
//   amount: 20,
//   apiKey: 'YOUR_STAGING_API_KEY_FOR_V1.0.3', // v1.0.3 Staging Key
//   firstname: 'john',
//   lastname: 'doe'
// };

const onSuccess = (response) => {
  // Implementation for whatever you want to do with response and after success call.
  console.log('response', response);
};

const onClose = () => {
  // implementation for whatever you want to do when the TAPPayment dialog closed.
  console.log('closed');
};

function AppV1() {
  const [count, setCount] = useState(0);

  const componentProps_v1 = {
    // Choose the appropriate config for the v1.0.x version
    ...config_v1_prod,
    text: 'TAPPayment Button Sample (v1.0.x - Deprecated)',
    onSuccess,
    onClose
  };

  return (
    <div className="App">
      {/* ... (App structure similar to v2 example) ... */}
      <p className="read-the-docs">Click on the buttons to test either usecase (v1.0.x - Deprecated)</p>
      <TAPPaymentButton {...componentProps_v1} />
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