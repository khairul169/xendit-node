/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 * Alternative Display Object
 * @export
 * @interface VirtualAccountAlternativeDisplay
 */
export interface VirtualAccountAlternativeDisplay {
    /**
     * Type of the alternative display
     * @type {string}
     * @memberof VirtualAccountAlternativeDisplay
     */
    readonly type?: VirtualAccountAlternativeDisplayTypeEnum;
    /**
     * Data payload of the given alternative display
     * @type {string}
     * @memberof VirtualAccountAlternativeDisplay
     */
    data?: string;
}
/**
 * @export
 */
export declare const VirtualAccountAlternativeDisplayTypeEnum: {
    readonly QrString: "QR_STRING";
};
export type VirtualAccountAlternativeDisplayTypeEnum = typeof VirtualAccountAlternativeDisplayTypeEnum[keyof typeof VirtualAccountAlternativeDisplayTypeEnum];
/**
 * Check if a given object implements the VirtualAccountAlternativeDisplay interface.
 */
export declare function instanceOfVirtualAccountAlternativeDisplay(value: object): boolean;
export declare function VirtualAccountAlternativeDisplayFromJSON(json: any): VirtualAccountAlternativeDisplay;
export declare function VirtualAccountAlternativeDisplayFromJSONTyped(json: any, ignoreDiscriminator: boolean): VirtualAccountAlternativeDisplay;
export declare function VirtualAccountAlternativeDisplayToJSON(value?: VirtualAccountAlternativeDisplay | null): any;
