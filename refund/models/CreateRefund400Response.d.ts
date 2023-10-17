/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 *
 * @export
 * @interface CreateRefund400Response
 */
export interface CreateRefund400Response {
    /**
     *
     * @type {string}
     * @memberof CreateRefund400Response
     */
    errorCode?: CreateRefund400ResponseErrorCodeEnum;
    /**
     *
     * @type {string}
     * @memberof CreateRefund400Response
     */
    message?: string;
}
/**
 * @export
 */
export declare const CreateRefund400ResponseErrorCodeEnum: {
    readonly ApiValidationError: "API_VALIDATION_ERROR";
    readonly IneligibleTransaction: "INELIGIBLE_TRANSACTION";
    readonly InsufficientBalance: "INSUFFICIENT_BALANCE";
    readonly MaximumRefundAmountReached: "MAXIMUM_REFUND_AMOUNT_REACHED";
    readonly PartialRefundNotSupported: "PARTIAL_REFUND_NOT_SUPPORTED";
    readonly RefundNotSupported: "REFUND_NOT_SUPPORTED";
    readonly TransactionNotFound: "TRANSACTION_NOT_FOUND";
};
export type CreateRefund400ResponseErrorCodeEnum = typeof CreateRefund400ResponseErrorCodeEnum[keyof typeof CreateRefund400ResponseErrorCodeEnum];
/**
 * Check if a given object implements the CreateRefund400Response interface.
 */
export declare function instanceOfCreateRefund400Response(value: object): boolean;
export declare function CreateRefund400ResponseFromJSON(json: any): CreateRefund400Response;
export declare function CreateRefund400ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateRefund400Response;
export declare function CreateRefund400ResponseToJSON(value?: CreateRefund400Response | null): any;