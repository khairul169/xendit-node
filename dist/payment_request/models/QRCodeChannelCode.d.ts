/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 * QR Code Channel Code
 * @export
 */
export declare const QRCodeChannelCode: {
    readonly Dana: "DANA";
    readonly Rcbc: "RCBC";
    readonly Linkaja: "LINKAJA";
    readonly Promptpay: "PROMPTPAY";
};
export type QRCodeChannelCode = typeof QRCodeChannelCode[keyof typeof QRCodeChannelCode];
export declare function QRCodeChannelCodeFromJSON(json: any): QRCodeChannelCode;
export declare function QRCodeChannelCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): QRCodeChannelCode;
export declare function QRCodeChannelCodeToJSON(value?: QRCodeChannelCode | null): any;