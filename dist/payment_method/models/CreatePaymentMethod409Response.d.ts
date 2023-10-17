/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 *
 * @export
 * @interface CreatePaymentMethod409Response
 */
export interface CreatePaymentMethod409Response {
    /**
     *
     * @type {string}
     * @memberof CreatePaymentMethod409Response
     */
    errorCode?: CreatePaymentMethod409ResponseErrorCodeEnum;
    /**
     *
     * @type {string}
     * @memberof CreatePaymentMethod409Response
     */
    message?: string;
}
/**
 * @export
 */
export declare const CreatePaymentMethod409ResponseErrorCodeEnum: {
    readonly PaymentMethodAlreadyActive: "PAYMENT_METHOD_ALREADY_ACTIVE";
    readonly PaymentMethodAlreadyFailed: "PAYMENT_METHOD_ALREADY_FAILED";
    readonly DuplicateError: "DUPLICATE_ERROR";
    readonly IdempotencyError: "IDEMPOTENCY_ERROR";
};
export type CreatePaymentMethod409ResponseErrorCodeEnum = typeof CreatePaymentMethod409ResponseErrorCodeEnum[keyof typeof CreatePaymentMethod409ResponseErrorCodeEnum];
/**
 * Check if a given object implements the CreatePaymentMethod409Response interface.
 */
export declare function instanceOfCreatePaymentMethod409Response(value: object): boolean;
export declare function CreatePaymentMethod409ResponseFromJSON(json: any): CreatePaymentMethod409Response;
export declare function CreatePaymentMethod409ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatePaymentMethod409Response;
export declare function CreatePaymentMethod409ResponseToJSON(value?: CreatePaymentMethod409Response | null): any;
