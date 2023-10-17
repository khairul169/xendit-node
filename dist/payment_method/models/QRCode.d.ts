/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
import type { QRCodeChannelCode } from './QRCodeChannelCode';
import type { QRCodeChannelProperties } from './QRCodeChannelProperties';
/**
 * QR Code Payment Method Details
 * @export
 * @interface QRCode
 */
export interface QRCode {
    /**
     *
     * @type {number}
     * @memberof QRCode
     */
    amount?: number | null;
    /**
     *
     * @type {string}
     * @memberof QRCode
     */
    currency?: string;
    /**
     *
     * @type {QRCodeChannelCode}
     * @memberof QRCode
     */
    channelCode?: QRCodeChannelCode | null;
    /**
     *
     * @type {QRCodeChannelProperties}
     * @memberof QRCode
     */
    channelProperties?: QRCodeChannelProperties | null;
}
/**
 * Check if a given object implements the QRCode interface.
 */
export declare function instanceOfQRCode(value: object): boolean;
export declare function QRCodeFromJSON(json: any): QRCode;
export declare function QRCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): QRCode;
export declare function QRCodeToJSON(value?: QRCode | null): any;