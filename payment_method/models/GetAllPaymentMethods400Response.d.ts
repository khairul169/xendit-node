/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 *
 * @export
 * @interface GetAllPaymentMethods400Response
 */
export interface GetAllPaymentMethods400Response {
    /**
     *
     * @type {string}
     * @memberof GetAllPaymentMethods400Response
     */
    errorCode?: GetAllPaymentMethods400ResponseErrorCodeEnum;
    /**
     *
     * @type {string}
     * @memberof GetAllPaymentMethods400Response
     */
    message?: string;
}
/**
 * @export
 */
export declare const GetAllPaymentMethods400ResponseErrorCodeEnum: {
    readonly ApiValidationError: "API_VALIDATION_ERROR";
    readonly NotSupportedByChannel: "NOT_SUPPORTED_BY_CHANNEL";
    readonly ExpiredOtpError: "EXPIRED_OTP_ERROR";
    readonly InvalidAccountDetails: "INVALID_ACCOUNT_DETAILS";
    readonly InvalidOtpError: "INVALID_OTP_ERROR";
    readonly InvalidPaymentMethod: "INVALID_PAYMENT_METHOD";
    readonly MaxOtpAttemptsError: "MAX_OTP_ATTEMPTS_ERROR";
    readonly CustomerNotFoundError: "CUSTOMER_NOT_FOUND_ERROR";
    readonly AccountAccessBlocked: "ACCOUNT_ACCESS_BLOCKED";
    readonly MaxAccountLinking: "MAX_ACCOUNT_LINKING";
    readonly InactivePaymentMethod: "INACTIVE_PAYMENT_METHOD";
    readonly PaymentMethodNotSupported: "PAYMENT_METHOD_NOT_SUPPORTED";
    readonly IncorrectAmount: "INCORRECT_AMOUNT";
    readonly DuplicatedFixedPaymentInstrument: "DUPLICATED_FIXED_PAYMENT_INSTRUMENT";
    readonly CurrencyMismatched: "CURRENCY_MISMATCHED";
};
export type GetAllPaymentMethods400ResponseErrorCodeEnum = typeof GetAllPaymentMethods400ResponseErrorCodeEnum[keyof typeof GetAllPaymentMethods400ResponseErrorCodeEnum];
/**
 * Check if a given object implements the GetAllPaymentMethods400Response interface.
 */
export declare function instanceOfGetAllPaymentMethods400Response(value: object): boolean;
export declare function GetAllPaymentMethods400ResponseFromJSON(json: any): GetAllPaymentMethods400Response;
export declare function GetAllPaymentMethods400ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAllPaymentMethods400Response;
export declare function GetAllPaymentMethods400ResponseToJSON(value?: GetAllPaymentMethods400Response | null): any;