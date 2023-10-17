/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 * Direct Debit Channel Properties
 * @export
 * @interface DirectDebitChannelProperties
 */
export interface DirectDebitChannelProperties {
    /**
     *
     * @type {string}
     * @memberof DirectDebitChannelProperties
     */
    successReturnUrl?: string;
    /**
     *
     * @type {string}
     * @memberof DirectDebitChannelProperties
     */
    failureReturnUrl?: string | null;
    /**
     * Mobile number of the customer registered to the partner channel
     * @type {string}
     * @memberof DirectDebitChannelProperties
     */
    mobileNumber?: string | null;
    /**
     * Last four digits of the debit card
     * @type {string}
     * @memberof DirectDebitChannelProperties
     */
    cardLastFour?: string | null;
    /**
     * Expiry month and year of the debit card (in MM/YY format)
     * @type {string}
     * @memberof DirectDebitChannelProperties
     */
    cardExpiry?: string | null;
    /**
     * Email address of the customer that is registered to the partner channel
     * @type {string}
     * @memberof DirectDebitChannelProperties
     */
    email?: string | null;
    /**
     * Identity number of the customer registered to the partner channel
     * @type {string}
     * @memberof DirectDebitChannelProperties
     */
    identityDocumentNumber?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof DirectDebitChannelProperties
     */
    requireAuth?: boolean | null;
}
/**
 * Check if a given object implements the DirectDebitChannelProperties interface.
 */
export declare function instanceOfDirectDebitChannelProperties(value: object): boolean;
export declare function DirectDebitChannelPropertiesFromJSON(json: any): DirectDebitChannelProperties;
export declare function DirectDebitChannelPropertiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): DirectDebitChannelProperties;
export declare function DirectDebitChannelPropertiesToJSON(value?: DirectDebitChannelProperties | null): any;
