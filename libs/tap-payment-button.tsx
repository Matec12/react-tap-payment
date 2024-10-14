import React, { ReactNode } from 'react';
import { callback, TAPPaymentProps } from './types';
import useTAPPaymentPayment from './use-tap-payment';

interface TAPPaymentButtonProps extends TAPPaymentProps {
  text?: string;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
  onSuccess?: callback;
  onClose?: callback;
}

const TAPPaymentButton = ({
  text,
  className,
  children,
  onSuccess,
  onClose,
  disabled,
  ...config
}: TAPPaymentButtonProps): JSX.Element => {
  const initializePayment = useTAPPaymentPayment(config);

  return (
    <button
      className={className}
      onClick={(): void => initializePayment({ config, onSuccess, onClose })}
      disabled={disabled}
    >
      {text || children}
    </button>
  );
};

export default TAPPaymentButton;
