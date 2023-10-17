/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
import type { OverTheCounterChannelCode } from './OverTheCounterChannelCode';
import type { OverTheCounterChannelProperties } from './OverTheCounterChannelProperties';
import type { PaymentRequestCurrency } from './PaymentRequestCurrency';
/**
 *
 * @export
 * @interface OverTheCounterParameters
 */
export interface OverTheCounterParameters {
    /**
     *
     * @type {number}
     * @memberof OverTheCounterParameters
     */
    amount?: number | null;
    /**
     *
     * @type {PaymentRequestCurrency}
     * @memberof OverTheCounterParameters
     */
    currency?: PaymentRequestCurrency;
    /**
     *
     * @type {OverTheCounterChannelCode}
     * @memberof OverTheCounterParameters
     */
    channelCode: OverTheCounterChannelCode;
    /**
     *
     * @type {OverTheCounterChannelProperties}
     * @memberof OverTheCounterParameters
     */
    channelProperties: OverTheCounterChannelProperties;
}
/**
 * Check if a given object implements the OverTheCounterParameters interface.
 */
export declare function instanceOfOverTheCounterParameters(value: object): boolean;
export declare function OverTheCounterParametersFromJSON(json: any): OverTheCounterParameters;
export declare function OverTheCounterParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): OverTheCounterParameters;
export declare function OverTheCounterParametersToJSON(value?: OverTheCounterParameters | null): any;