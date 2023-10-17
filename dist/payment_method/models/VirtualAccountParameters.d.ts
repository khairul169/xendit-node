/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
import type { VirtualAccountChannelCode } from './VirtualAccountChannelCode';
import type { VirtualAccountChannelProperties } from './VirtualAccountChannelProperties';
/**
 *
 * @export
 * @interface VirtualAccountParameters
 */
export interface VirtualAccountParameters {
    /**
     *
     * @type {number}
     * @memberof VirtualAccountParameters
     */
    amount?: number | null;
    /**
     *
     * @type {number}
     * @memberof VirtualAccountParameters
     */
    minAmount?: number | null;
    /**
     *
     * @type {number}
     * @memberof VirtualAccountParameters
     */
    maxAmount?: number | null;
    /**
     *
     * @type {string}
     * @memberof VirtualAccountParameters
     */
    currency?: string;
    /**
     *
     * @type {VirtualAccountChannelCode}
     * @memberof VirtualAccountParameters
     */
    channelCode: VirtualAccountChannelCode;
    /**
     *
     * @type {VirtualAccountChannelProperties}
     * @memberof VirtualAccountParameters
     */
    channelProperties: VirtualAccountChannelProperties;
    /**
     * For payments in Vietnam only, alternative display requested for the virtual account
     * @type {Array<string>}
     * @memberof VirtualAccountParameters
     */
    alternativeDisplayTypes?: Array<VirtualAccountParametersAlternativeDisplayTypesEnum>;
}
/**
 * @export
 */
export declare const VirtualAccountParametersAlternativeDisplayTypesEnum: {
    readonly QrString: "QR_STRING";
};
export type VirtualAccountParametersAlternativeDisplayTypesEnum = typeof VirtualAccountParametersAlternativeDisplayTypesEnum[keyof typeof VirtualAccountParametersAlternativeDisplayTypesEnum];
/**
 * Check if a given object implements the VirtualAccountParameters interface.
 */
export declare function instanceOfVirtualAccountParameters(value: object): boolean;
export declare function VirtualAccountParametersFromJSON(json: any): VirtualAccountParameters;
export declare function VirtualAccountParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): VirtualAccountParameters;
export declare function VirtualAccountParametersToJSON(value?: VirtualAccountParameters | null): any;
