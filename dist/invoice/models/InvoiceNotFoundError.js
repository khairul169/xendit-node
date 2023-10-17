"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceNotFoundErrorToJSON = exports.InvoiceNotFoundErrorFromJSONTyped = exports.InvoiceNotFoundErrorFromJSON = exports.instanceOfInvoiceNotFoundError = exports.InvoiceNotFoundErrorErrorCodeEnum = void 0;
/**
 * @export
 */
exports.InvoiceNotFoundErrorErrorCodeEnum = {
    CallbackVirtualAccountNotFoundError: 'CALLBACK_VIRTUAL_ACCOUNT_NOT_FOUND_ERROR',
    UniqueAccountNumberUnavailableError: 'UNIQUE_ACCOUNT_NUMBER_UNAVAILABLE_ERROR',
    PaymentCodeNotAvailableError: 'PAYMENT_CODE_NOT_AVAILABLE_ERROR'
};
/**
 * Check if a given object implements the InvoiceNotFoundError interface.
 */
function instanceOfInvoiceNotFoundError(value) {
    var isInstance = true;
    isInstance = isInstance && "errorCode" in value;
    isInstance = isInstance && "message" in value;
    return isInstance;
}
exports.instanceOfInvoiceNotFoundError = instanceOfInvoiceNotFoundError;
function InvoiceNotFoundErrorFromJSON(json) {
    return InvoiceNotFoundErrorFromJSONTyped(json, false);
}
exports.InvoiceNotFoundErrorFromJSON = InvoiceNotFoundErrorFromJSON;
function InvoiceNotFoundErrorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'errorCode': json['error_code'],
        'message': json['message'],
    };
}
exports.InvoiceNotFoundErrorFromJSONTyped = InvoiceNotFoundErrorFromJSONTyped;
function InvoiceNotFoundErrorToJSON(value) {
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
exports.InvoiceNotFoundErrorToJSON = InvoiceNotFoundErrorToJSON;
