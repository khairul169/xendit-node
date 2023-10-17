/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 *
 * @export
 * @interface PaymentRequestChannelProperties
 */
export interface PaymentRequestChannelProperties {
    /**
     * URL where the end-customer is redirected if the authorization is successful
     * @type {string}
     * @memberof PaymentRequestChannelProperties
     */
    successReturnUrl?: string;
    /**
     * URL where the end-customer is redirected if the authorization failed
     * @type {string}
     * @memberof PaymentRequestChannelProperties
     */
    failureReturnUrl?: string;
    /**
     * URL where the end-customer is redirected if the authorization cancelled
     * @type {string}
     * @memberof PaymentRequestChannelProperties
     */
    cancelReturnUrl?: string;
    /**
     * REDEEM_NONE will not use any point, REDEEM_ALL will use all available points before cash balance is used. For OVO and ShopeePay tokenized payment use only.
     * @type {string}
     * @memberof PaymentRequestChannelProperties
     */
    redeemPoints?: string;
    /**
     * Toggle used to require end-customer to input undergo OTP validation before completing a payment. OTP will always be required for transactions greater than 1,000,000 IDR. For BRI tokenized payment use only.
     * @type {boolean}
     * @memberof PaymentRequestChannelProperties
     */
    requireAuth?: boolean;
    /**
     * Tag for a Merchant ID that you want to associate this payment with. For merchants using their own MIDs to specify which MID they want to use
     * @type {string}
     * @memberof PaymentRequestChannelProperties
     */
    merchantIdTag?: string;
    /**
     * Type of “credential-on-file” / “card-on-file” payment being made. Indicate that this payment uses a previously linked Payment Method for charging.
     * @type {string}
     * @memberof PaymentRequestChannelProperties
     */
    cardonfileType?: string | null;
}
/**
 * Check if a given object implements the PaymentRequestChannelProperties interface.
 */
export declare function instanceOfPaymentRequestChannelProperties(value: object): boolean;
export declare function PaymentRequestChannelPropertiesFromJSON(json: any): PaymentRequestChannelProperties;
export declare function PaymentRequestChannelPropertiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentRequestChannelProperties;
export declare function PaymentRequestChannelPropertiesToJSON(value?: PaymentRequestChannelProperties | null): any;
