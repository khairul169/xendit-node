/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 * Representing the payment method used for an invoice.
 * @export
 */
export declare const InvoicePaymentMethod: {
    readonly Pool: "POOL";
    readonly CallbackVirtualAccount: "CALLBACK_VIRTUAL_ACCOUNT";
    readonly CreditCard: "CREDIT_CARD";
    readonly RetailOutlet: "RETAIL_OUTLET";
    readonly QrCode: "QR_CODE";
    readonly Qris: "QRIS";
    readonly Ewallet: "EWALLET";
    readonly DirectDebit: "DIRECT_DEBIT";
    readonly BankTransfer: "BANK_TRANSFER";
    readonly Paylater: "PAYLATER";
};
export type InvoicePaymentMethod = typeof InvoicePaymentMethod[keyof typeof InvoicePaymentMethod];
export declare function InvoicePaymentMethodFromJSON(json: any): InvoicePaymentMethod;
export declare function InvoicePaymentMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoicePaymentMethod;
export declare function InvoicePaymentMethodToJSON(value?: InvoicePaymentMethod | null): any;
