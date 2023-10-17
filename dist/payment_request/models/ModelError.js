"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelErrorToJSON = exports.ModelErrorFromJSONTyped = exports.ModelErrorFromJSON = exports.instanceOfModelError = exports.ModelErrorErrorCodeEnum = void 0;
var runtime_1 = require("../../runtime");
/**
 * @export
 */
exports.ModelErrorErrorCodeEnum = {
    AccountAccessBlocked: 'ACCOUNT_ACCESS_BLOCKED',
    AddressValidationFailed: 'ADDRESS_VALIDATION_FAILED',
    AmountMismatched: 'AMOUNT_MISMATCHED',
    ApiValidationError: 'API_VALIDATION_ERROR',
    AuthenticationFailed: 'AUTHENTICATION_FAILED',
    AuthenticationRequired: 'AUTHENTICATION_REQUIRED',
    CardDeclined: 'CARD_DECLINED',
    ChannelCodeNotSupportedError: 'CHANNEL_CODE_NOT_SUPPORTED_ERROR',
    ChannelNotActivated: 'CHANNEL_NOT_ACTIVATED',
    ChannelUnavailable: 'CHANNEL_UNAVAILABLE',
    CofCombinationNotAllowedError: 'COF_COMBINATION_NOT_ALLOWED_ERROR',
    CurrencyMismatched: 'CURRENCY_MISMATCHED',
    CustomerNotFoundError: 'CUSTOMER_NOT_FOUND_ERROR',
    CustomerPaymentMethodMismatched: 'CUSTOMER_PAYMENT_METHOD_MISMATCHED',
    DataNotFound: 'DATA_NOT_FOUND',
    DataNotFoundError: 'DATA_NOT_FOUND_ERROR',
    DeclinedByIssuer: 'DECLINED_BY_ISSUER',
    DeclinedByProcessor: 'DECLINED_BY_PROCESSOR',
    DeniedPersonListMatched: 'DENIED_PERSON_LIST_MATCHED',
    DuplicateError: 'DUPLICATE_ERROR',
    DuplicateReference: 'DUPLICATE_REFERENCE',
    ExceedsCapturableAmount: 'EXCEEDS_CAPTURABLE_AMOUNT',
    ExpiredCard: 'EXPIRED_CARD',
    ExpiredOtpError: 'EXPIRED_OTP_ERROR',
    FeatureNotActivated: 'FEATURE_NOT_ACTIVATED',
    IdempotencyError: 'IDEMPOTENCY_ERROR',
    InactiveOrUnauthorizedCard: 'INACTIVE_OR_UNAUTHORIZED_CARD',
    InsufficientBalance: 'INSUFFICIENT_BALANCE',
    InvalidAccountDetails: 'INVALID_ACCOUNT_DETAILS',
    InvalidCvv: 'INVALID_CVV',
    InvalidOtpError: 'INVALID_OTP_ERROR',
    InvalidPaymentMethod: 'INVALID_PAYMENT_METHOD',
    IssuerUnavailable: 'ISSUER_UNAVAILABLE',
    ManualCaptureNotSupported: 'MANUAL_CAPTURE_NOT_SUPPORTED',
    MaxAccountLinking: 'MAX_ACCOUNT_LINKING',
    MaxAmountLimitError: 'MAX_AMOUNT_LIMIT_ERROR',
    MaxOtpAttemptsError: 'MAX_OTP_ATTEMPTS_ERROR',
    OperationNotAllowed: 'OPERATION_NOT_ALLOWED',
    OtpDeliveryError: 'OTP_DELIVERY_ERROR',
    PaymentMethodNotFoundError: 'PAYMENT_METHOD_NOT_FOUND_ERROR',
    PaymentRequestAlreadyCompleted: 'PAYMENT_REQUEST_ALREADY_COMPLETED',
    PaymentRequestAlreadyFailed: 'PAYMENT_REQUEST_ALREADY_FAILED',
    PaymentRequestAlreadyFullyCaptured: 'PAYMENT_REQUEST_ALREADY_FULLY_CAPTURED',
    PaymentStatusFailed: 'PAYMENT_STATUS_FAILED',
    ProcessorConfigurationError: 'PROCESSOR_CONFIGURATION_ERROR',
    ProcessorError: 'PROCESSOR_ERROR',
    ProcessorTemporarilyUnavailable: 'PROCESSOR_TEMPORARILY_UNAVAILABLE',
    ProcessorTimeout: 'PROCESSOR_TIMEOUT',
    RejectedByAcquirer: 'REJECTED_BY_ACQUIRER',
    ServerError: 'SERVER_ERROR',
    StolenCard: 'STOLEN_CARD',
    StrongCustomerAuthenticationRequired: 'STRONG_CUSTOMER_AUTHENTICATION_REQUIRED',
    SuspectedFraudulent: 'SUSPECTED_FRAUDULENT',
    Unauthorized: 'UNAUTHORIZED',
    DuplicatedFixedPaymentInstrument: 'DUPLICATED_FIXED_PAYMENT_INSTRUMENT'
};
/**
 * Check if a given object implements the ModelError interface.
 */
function instanceOfModelError(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfModelError = instanceOfModelError;
function ModelErrorFromJSON(json) {
    return ModelErrorFromJSONTyped(json, false);
}
exports.ModelErrorFromJSON = ModelErrorFromJSON;
function ModelErrorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'errorCode': !(0, runtime_1.exists)(json, 'error_code') ? undefined : json['error_code'],
        'message': !(0, runtime_1.exists)(json, 'message') ? undefined : json['message'],
    };
}
exports.ModelErrorFromJSONTyped = ModelErrorFromJSONTyped;
function ModelErrorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'error_code': value.errorCode,
        'message': value.message,
    };
}
exports.ModelErrorToJSON = ModelErrorToJSON;
