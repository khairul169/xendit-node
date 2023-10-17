"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRefund400ResponseToJSON = exports.CreateRefund400ResponseFromJSONTyped = exports.CreateRefund400ResponseFromJSON = exports.instanceOfCreateRefund400Response = exports.CreateRefund400ResponseErrorCodeEnum = void 0;
var runtime_1 = require("../../runtime");
/**
 * @export
 */
exports.CreateRefund400ResponseErrorCodeEnum = {
    ApiValidationError: 'API_VALIDATION_ERROR',
    IneligibleTransaction: 'INELIGIBLE_TRANSACTION',
    InsufficientBalance: 'INSUFFICIENT_BALANCE',
    MaximumRefundAmountReached: 'MAXIMUM_REFUND_AMOUNT_REACHED',
    PartialRefundNotSupported: 'PARTIAL_REFUND_NOT_SUPPORTED',
    RefundNotSupported: 'REFUND_NOT_SUPPORTED',
    TransactionNotFound: 'TRANSACTION_NOT_FOUND'
};
/**
 * Check if a given object implements the CreateRefund400Response interface.
 */
function instanceOfCreateRefund400Response(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfCreateRefund400Response = instanceOfCreateRefund400Response;
function CreateRefund400ResponseFromJSON(json) {
    return CreateRefund400ResponseFromJSONTyped(json, false);
}
exports.CreateRefund400ResponseFromJSON = CreateRefund400ResponseFromJSON;
function CreateRefund400ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'errorCode': !(0, runtime_1.exists)(json, 'error_code') ? undefined : json['error_code'],
        'message': !(0, runtime_1.exists)(json, 'message') ? undefined : json['message'],
    };
}
exports.CreateRefund400ResponseFromJSONTyped = CreateRefund400ResponseFromJSONTyped;
function CreateRefund400ResponseToJSON(value) {
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
exports.CreateRefund400ResponseToJSON = CreateRefund400ResponseToJSON;
