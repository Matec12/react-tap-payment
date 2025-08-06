import React from 'react';
import TAPPaymentContext from './tap-payment-context';
import useTAPPayment from './use-tap-payment';
import { callback, TAPPaymentProps } from './types';

interface TAPPaymentProviderProps extends TAPPaymentProps {
  children: React.JSX.Element;
  onSuccess: callback;
  onClose: callback;
}

const TAPPaymentProvider = ({
  children,
  onSuccess,
  onClose,
  ...config
}: TAPPaymentProviderProps): React.JSX.Element => {
  const initializePayment = useTAPPayment(config);

  return (
    <TAPPaymentContext.Provider value={{ config, initializePayment, onSuccess, onClose }}>
      {children}
    </TAPPaymentContext.Provider>
  );
};

export default TAPPaymentProvider;
