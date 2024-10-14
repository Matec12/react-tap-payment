import { HookConfig, InitializePayment } from './types';
import { callTAPPaymentPop } from './tap-payment-actions';

export default function useTAPPaymentPayment(hookConfig: HookConfig): InitializePayment {
  function initializePayment({
    config,
    onSuccess,
    onClose
  }: Parameters<InitializePayment>[0]): void {
    const args = { ...hookConfig, ...config };

    const {
      apiKey,
      firstname,
      lastname,
      phone,
      email,
      amount,
      transID,
      billerID,
      productID,
      metadata,
      label,
      quantity,
      transaction_charge,
      ...rest
    } = args;
    const tapPaymentArgs: Record<string, any> = {
      callback: onSuccess ? onSuccess : () => null,
      onClose: onClose ? onClose : () => null,
      apiKey,
      transID,
      email,
      amount,
      customPayload: {
        ...(firstname && { firstname }),
        ...(lastname && { lastname }),
        ...(phone && { phone }),
        ...(billerID && { billerID }),
        ...(productID && { productID }),
        ...(metadata && { metadata }),
        ...(label && { label }),
        ...(transaction_charge && { transaction_charge }),
        ...(quantity && { quantity }),
        ...(rest && { ...rest })
      }
    };

    callTAPPaymentPop(tapPaymentArgs);
  }

  return initializePayment;
}
