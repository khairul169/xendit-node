/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 * Virtual Account Channel Properties
 * @export
 * @interface VirtualAccountChannelProperties
 */
export interface VirtualAccountChannelProperties {
    /**
     * Name of customer.
     * @type {string}
     * @memberof VirtualAccountChannelProperties
     */
    customerName: string;
    /**
     * You can assign specific Virtual Account number using this parameter. If you do not send one, one will be picked at random. Make sure the number you specify is within your Virtual Account range.
     * @type {string}
     * @memberof VirtualAccountChannelProperties
     */
    virtualAccountNumber?: string;
    /**
     * The date and time in ISO 8601 UTC+0 when the virtual account number will be expired. Default: The default expiration date will be 31 years from creation date.
     * @type {Date}
     * @memberof VirtualAccountChannelProperties
     */
    expiresAt?: Date;
    /**
     * The suggested amount you want to assign. Note: Suggested amounts is the amounts that can see as a suggestion, but user can still put any numbers (only supported for Mandiri and BRI)
     * @type {number}
     * @memberof VirtualAccountChannelProperties
     */
    suggestedAmount?: number;
}
/**
 * Check if a given object implements the VirtualAccountChannelProperties interface.
 */
export declare function instanceOfVirtualAccountChannelProperties(value: object): boolean;
export declare function VirtualAccountChannelPropertiesFromJSON(json: any): VirtualAccountChannelProperties;
export declare function VirtualAccountChannelPropertiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): VirtualAccountChannelProperties;
export declare function VirtualAccountChannelPropertiesToJSON(value?: VirtualAccountChannelProperties | null): any;