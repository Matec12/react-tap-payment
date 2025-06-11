interface TAPPaymentMetadata {
  [key: string]: any;
}

export type callback = (response?: any) => void;

export interface TAPPaymentProps {
  apiKey: string;
  transID: string;
  email: string;
  amount: number;
  env: 'sandbox' | 'production';
  customPayload?: TAPPaymentMetadata;
  firstname?: string;
  lastname?: string;
  phone?: number | string;
  savePaymentDetails: boolean;
  customerReference: string;
  billerID?: string;
  productID?: string;
  metadata?: TAPPaymentMetadata;
  label?: string;
  quantity?: number;
  transaction_charge?: number;
}

export type InitializePayment = (options: {
  onSuccess?: callback;
  onClose?: callback;
  config?: Omit<TAPPaymentProps, 'apiKey'>;
}) => void;

export type HookConfig = Omit<Partial<TAPPaymentProps>, 'apiKey'> & Pick<TAPPaymentProps, 'apiKey'>;
