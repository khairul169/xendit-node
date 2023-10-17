/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 *
 * @export
 * @interface PaymentMethodAuthParameters
 */
export interface PaymentMethodAuthParameters {
    /**
     *
     * @type {string}
     * @memberof PaymentMethodAuthParameters
     */
    authCode: string;
}
/**
 * Check if a given object implements the PaymentMethodAuthParameters interface.
 */
export declare function instanceOfPaymentMethodAuthParameters(value: object): boolean;
export declare function PaymentMethodAuthParametersFromJSON(json: any): PaymentMethodAuthParameters;
export declare function PaymentMethodAuthParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentMethodAuthParameters;
export declare function PaymentMethodAuthParametersToJSON(value?: PaymentMethodAuthParameters | null): any;
