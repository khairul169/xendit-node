/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 * Supported amount ranges for payouts to this channel
 * @export
 * @interface ChannelAmountLimits
 */
export interface ChannelAmountLimits {
    /**
     * Lowest amount supported for a payout to this channel
     * @type {number}
     * @memberof ChannelAmountLimits
     */
    minimum: number;
    /**
     * Highest amount supported for a payout to this channel
     * @type {number}
     * @memberof ChannelAmountLimits
     */
    maximum: number;
    /**
     * Supported increments
     * @type {number}
     * @memberof ChannelAmountLimits
     */
    minimumIncrement: number;
}
/**
 * Check if a given object implements the ChannelAmountLimits interface.
 */
export declare function instanceOfChannelAmountLimits(value: object): boolean;
export declare function ChannelAmountLimitsFromJSON(json: any): ChannelAmountLimits;
export declare function ChannelAmountLimitsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelAmountLimits;
export declare function ChannelAmountLimitsToJSON(value?: ChannelAmountLimits | null): any;