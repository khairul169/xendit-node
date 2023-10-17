/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 *
 * @export
 * @interface PaymentRequestShippingInformation
 */
export interface PaymentRequestShippingInformation {
    /**
     *
     * @type {string}
     * @memberof PaymentRequestShippingInformation
     */
    country: string;
    /**
     *
     * @type {string}
     * @memberof PaymentRequestShippingInformation
     */
    streetLine1?: string;
    /**
     *
     * @type {string}
     * @memberof PaymentRequestShippingInformation
     */
    streetLine2?: string;
    /**
     *
     * @type {string}
     * @memberof PaymentRequestShippingInformation
     */
    city?: string;
    /**
     *
     * @type {string}
     * @memberof PaymentRequestShippingInformation
     */
    provinceState?: string;
    /**
     *
     * @type {string}
     * @memberof PaymentRequestShippingInformation
     */
    postalCode?: string;
}
/**
 * Check if a given object implements the PaymentRequestShippingInformation interface.
 */
export declare function instanceOfPaymentRequestShippingInformation(value: object): boolean;
export declare function PaymentRequestShippingInformationFromJSON(json: any): PaymentRequestShippingInformation;
export declare function PaymentRequestShippingInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentRequestShippingInformation;
export declare function PaymentRequestShippingInformationToJSON(value?: PaymentRequestShippingInformation | null): any;
