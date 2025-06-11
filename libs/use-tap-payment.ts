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
      amount,
      transID,
      firstname,
      lastname,
      phone,
      email,
      env,
      savePaymentDetails,
      customerReference,
      billerID,
      productID,
      metadata,
      label,
      quantity,
      ...rest
    } = args;
    const tapPaymentArgs: Record<string, any> = {
      callback: onSuccess ? onSuccess : () => null,
      onClose: onClose ? onClose : () => null,
      apiKey,
      transID,
      email,
      amount,
      env,
      phone: phone ?? undefined,
      savePaymentDetails: savePaymentDetails ?? undefined,
      customerReference: customerReference ?? undefined,
      customPayload: {
        ...(firstname && { firstname }),
        ...(lastname && { lastname }),
        ...(email && { email }),
        ...(phone && { phone }),
        ...(billerID && { billerID }),
        ...(productID && { productID }),
        ...(metadata && { metadata }),
        ...(label && { label }),
        ...(quantity && { quantity }),
        ...(rest && { ...rest })
      }
    };

    callTAPPaymentPop(tapPaymentArgs);
  }

  return initializePayment;
}
