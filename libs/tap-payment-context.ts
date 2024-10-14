import { createContext } from 'react';
import { InitializePayment, TAPPaymentProps } from './types';

type TAPPaymentContextProps = {
  config: TAPPaymentProps;
  initializePayment: InitializePayment;
  onSuccess: () => void;
  onClose: () => void;
};

const TAPPaymentContext = createContext<TAPPaymentContextProps>({
  config: {} as TAPPaymentProps,
  initializePayment: () => null,
  onSuccess: () => null,
  onClose: () => null
});

export default TAPPaymentContext;
