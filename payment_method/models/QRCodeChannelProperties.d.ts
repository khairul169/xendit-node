/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 * QR Code Channel Properties
 * @export
 * @interface QRCodeChannelProperties
 */
export interface QRCodeChannelProperties {
    /**
     * QR string to be rendered for display to end users. QR string to image rendering are commonly available in software libraries (e.g Nodejs, PHP, Java)
     * @type {string}
     * @memberof QRCodeChannelProperties
     */
    qrString?: string;
    /**
     *
     * @type {Date}
     * @memberof QRCodeChannelProperties
     */
    expiresAt?: Date;
}
/**
 * Check if a given object implements the QRCodeChannelProperties interface.
 */
export declare function instanceOfQRCodeChannelProperties(value: object): boolean;
export declare function QRCodeChannelPropertiesFromJSON(json: any): QRCodeChannelProperties;
export declare function QRCodeChannelPropertiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): QRCodeChannelProperties;
export declare function QRCodeChannelPropertiesToJSON(value?: QRCodeChannelProperties | null): any;