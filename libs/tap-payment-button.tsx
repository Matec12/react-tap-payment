import React, { ReactNode } from 'react';
import { callback, TAPPaymentProps } from './types';
import useTAPPayment from './use-tap-payment';

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
}: TAPPaymentButtonProps): React.JSX.Element => {
  const initializePayment = useTAPPayment(config);

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
