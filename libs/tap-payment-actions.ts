import { TAPPaymentPop } from 'tap-payment-popupjs';

export const callTAPPaymentPop = (tapPaymentArgs: Record<string, any>): void => {
  const handler = TAPPaymentPop.setup(tapPaymentArgs);
  handler.openIframe();
};
