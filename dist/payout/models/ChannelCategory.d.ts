/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 * Category of channel code, as some channels might require more fields during processing
 * @export
 */
export declare const ChannelCategory: {
    readonly Bank: "BANK";
    readonly Ewallet: "EWALLET";
    readonly Otc: "OTC";
};
export type ChannelCategory = typeof ChannelCategory[keyof typeof ChannelCategory];
export declare function ChannelCategoryFromJSON(json: any): ChannelCategory;
export declare function ChannelCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelCategory;
export declare function ChannelCategoryToJSON(value?: ChannelCategory | null): any;
