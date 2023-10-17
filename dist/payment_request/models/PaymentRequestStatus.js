"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRequestStatusToJSON = exports.PaymentRequestStatusFromJSONTyped = exports.PaymentRequestStatusFromJSON = exports.PaymentRequestStatus = void 0;
/**
 *
 * @export
 */
exports.PaymentRequestStatus = {
    Pending: 'PENDING',
    RequiresAction: 'REQUIRES_ACTION',
    Canceled: 'CANCELED',
    Succeeded: 'SUCCEEDED',
    Failed: 'FAILED',
    Voided: 'VOIDED',
    Unknown: 'UNKNOWN',
    AwaitingCapture: 'AWAITING_CAPTURE'
};
function PaymentRequestStatusFromJSON(json) {
    return PaymentRequestStatusFromJSONTyped(json, false);
}
exports.PaymentRequestStatusFromJSON = PaymentRequestStatusFromJSON;
function PaymentRequestStatusFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.PaymentRequestStatusFromJSONTyped = PaymentRequestStatusFromJSONTyped;
function PaymentRequestStatusToJSON(value) {
    return value;
}
exports.PaymentRequestStatusToJSON = PaymentRequestStatusToJSON;
