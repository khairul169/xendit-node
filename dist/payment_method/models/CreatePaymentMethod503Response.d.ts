/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 *
 * @export
 * @interface CreatePaymentMethod503Response
 */
export interface CreatePaymentMethod503Response {
    /**
     *
     * @type {string}
     * @memberof CreatePaymentMethod503Response
     */
    errorCode?: CreatePaymentMethod503ResponseErrorCodeEnum;
    /**
     *
     * @type {string}
     * @memberof CreatePaymentMethod503Response
     */
    message?: string;
}
/**
 * @export
 */
export declare const CreatePaymentMethod503ResponseErrorCodeEnum: {
    readonly ChannelUnavailable: "CHANNEL_UNAVAILABLE";
    readonly OtpDeliveryError: "OTP_DELIVERY_ERROR";
};
export type CreatePaymentMethod503ResponseErrorCodeEnum = typeof CreatePaymentMethod503ResponseErrorCodeEnum[keyof typeof CreatePaymentMethod503ResponseErrorCodeEnum];
/**
 * Check if a given object implements the CreatePaymentMethod503Response interface.
 */
export declare function instanceOfCreatePaymentMethod503Response(value: object): boolean;
export declare function CreatePaymentMethod503ResponseFromJSON(json: any): CreatePaymentMethod503Response;
export declare function CreatePaymentMethod503ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePaymentMethod503Response;
export declare function CreatePaymentMethod503ResponseToJSON(value?: CreatePaymentMethod503Response | null): any;
