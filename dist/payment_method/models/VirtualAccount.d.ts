/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
import type { VirtualAccountAlternativeDisplay } from './VirtualAccountAlternativeDisplay';
import type { VirtualAccountChannelCode } from './VirtualAccountChannelCode';
import type { VirtualAccountChannelProperties } from './VirtualAccountChannelProperties';
/**
 * Virtual Account Payment Method Details
 * @export
 * @interface VirtualAccount
 */
export interface VirtualAccount {
    /**
     *
     * @type {number}
     * @memberof VirtualAccount
     */
    amount?: number | null;
    /**
     *
     * @type {number}
     * @memberof VirtualAccount
     */
    minAmount?: number | null;
    /**
     *
     * @type {number}
     * @memberof VirtualAccount
     */
    maxAmount?: number | null;
    /**
     *
     * @type {string}
     * @memberof VirtualAccount
     */
    currency?: string;
    /**
     *
     * @type {VirtualAccountChannelCode}
     * @memberof VirtualAccount
     */
    channelCode: VirtualAccountChannelCode;
    /**
     *
     * @type {VirtualAccountChannelProperties}
     * @memberof VirtualAccount
     */
    channelProperties: VirtualAccountChannelProperties;
    /**
     * For payments in Vietnam only, alternative display requested for the virtual account
     * @type {Array<string>}
     * @memberof VirtualAccount
     */
    alternativeDisplayTypes?: Array<VirtualAccountAlternativeDisplayTypesEnum>;
    /**
     *
     * @type {Array<VirtualAccountAlternativeDisplay>}
     * @memberof VirtualAccount
     */
    alternativeDisplays?: Array<VirtualAccountAlternativeDisplay>;
}
/**
 * @export
 */
export declare const VirtualAccountAlternativeDisplayTypesEnum: {
    readonly QrString: "QR_STRING";
};
export type VirtualAccountAlternativeDisplayTypesEnum = typeof VirtualAccountAlternativeDisplayTypesEnum[keyof typeof VirtualAccountAlternativeDisplayTypesEnum];
/**
 * Check if a given object implements the VirtualAccount interface.
 */
export declare function instanceOfVirtualAccount(value: object): boolean;
export declare function VirtualAccountFromJSON(json: any): VirtualAccount;
export declare function VirtualAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): VirtualAccount;
export declare function VirtualAccountToJSON(value?: VirtualAccount | null): any;
