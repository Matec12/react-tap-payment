import React from 'react';
import TAPPaymentContext from './tap-payment-context';
import useTAPPaymentPayment from './use-tap-payment';
import { callback, TAPPaymentProps } from './types';

interface TAPPaymentProviderProps extends TAPPaymentProps {
  children: JSX.Element;
  onSuccess: callback;
  onClose: callback;
}

const TAPPaymentProvider = ({
  children,
  onSuccess,
  onClose,
  ...config
}: TAPPaymentProviderProps): JSX.Element => {
  const initializePayment = useTAPPaymentPayment(config);

  return (
    <TAPPaymentContext.Provider value={{ config, initializePayment, onSuccess, onClose }}>
      {children}
    </TAPPaymentContext.Provider>
  );
};

export default TAPPaymentProvider;
