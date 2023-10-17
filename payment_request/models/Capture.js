"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaptureToJSON = exports.CaptureFromJSONTyped = exports.CaptureFromJSON = exports.instanceOfCapture = exports.CaptureStatusEnum = void 0;
var PaymentMethod_1 = require("./PaymentMethod");
/**
 * @export
 */
exports.CaptureStatusEnum = {
    Succeeded: 'SUCCEEDED',
    Failed: 'FAILED'
};
/**
 * Check if a given object implements the Capture interface.
 */
function instanceOfCapture(value) {
    var isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "paymentRequestId" in value;
    isInstance = isInstance && "paymentId" in value;
    isInstance = isInstance && "referenceId" in value;
    isInstance = isInstance && "currency" in value;
    isInstance = isInstance && "authorizedAmount" in value;
    isInstance = isInstance && "capturedAmount" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "paymentMethod" in value;
    isInstance = isInstance && "failureCode" in value;
    isInstance = isInstance && "customerId" in value;
    isInstance = isInstance && "metadata" in value;
    isInstance = isInstance && "channelProperties" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "updated" in value;
    return isInstance;
}
exports.instanceOfCapture = instanceOfCapture;
function CaptureFromJSON(json) {
    return CaptureFromJSONTyped(json, false);
}
exports.CaptureFromJSON = CaptureFromJSON;
function CaptureFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'paymentRequestId': json['payment_request_id'],
        'paymentId': json['payment_id'],
        'referenceId': json['reference_id'],
        'currency': json['currency'],
        'authorizedAmount': json['authorized_amount'],
        'capturedAmount': json['captured_amount'],
        'status': json['status'],
        'paymentMethod': (0, PaymentMethod_1.PaymentMethodFromJSON)(json['payment_method']),
        'failureCode': json['failure_code'],
        'customerId': json['customer_id'],
        'metadata': json['metadata'],
        'channelProperties': json['channel_properties'],
        'created': json['created'],
        'updated': json['updated'],
    };
}
exports.CaptureFromJSONTyped = CaptureFromJSONTyped;
function CaptureToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'payment_request_id': value.paymentRequestId,
        'payment_id': value.paymentId,
        'reference_id': value.referenceId,
        'currency': value.currency,
        'authorized_amount': value.authorizedAmount,
        'captured_amount': value.capturedAmount,
        'status': value.status,
        'payment_method': (0, PaymentMethod_1.PaymentMethodToJSON)(value.paymentMethod),
        'failure_code': value.failureCode,
        'customer_id': value.customerId,
        'metadata': value.metadata,
        'channel_properties': value.channelProperties,
        'created': value.created,
        'updated': value.updated,
    };
}
exports.CaptureToJSON = CaptureToJSON;