"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundToJSON = exports.RefundFromJSONTyped = exports.RefundFromJSON = exports.instanceOfRefund = void 0;
var runtime_1 = require("../../runtime");
/**
 * Check if a given object implements the Refund interface.
 */
function instanceOfRefund(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfRefund = instanceOfRefund;
function RefundFromJSON(json) {
    return RefundFromJSONTyped(json, false);
}
exports.RefundFromJSON = RefundFromJSON;
function RefundFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'paymentRequestId': !(0, runtime_1.exists)(json, 'payment_request_id') ? undefined : json['payment_request_id'],
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : json['amount'],
        'channelCode': !(0, runtime_1.exists)(json, 'channel_code') ? undefined : json['channel_code'],
        'country': !(0, runtime_1.exists)(json, 'country') ? undefined : json['country'],
        'currency': !(0, runtime_1.exists)(json, 'currency') ? undefined : json['currency'],
        'referenceId': !(0, runtime_1.exists)(json, 'reference_id') ? undefined : json['reference_id'],
        'failureCode': !(0, runtime_1.exists)(json, 'failure_code') ? undefined : json['failure_code'],
        'refundFeeAmount': !(0, runtime_1.exists)(json, 'refund_fee_amount') ? undefined : json['refund_fee_amount'],
        'created': !(0, runtime_1.exists)(json, 'created') ? undefined : json['created'],
        'updated': !(0, runtime_1.exists)(json, 'updated') ? undefined : json['updated'],
        'metadata': !(0, runtime_1.exists)(json, 'metadata') ? undefined : json['metadata'],
    };
}
exports.RefundFromJSONTyped = RefundFromJSONTyped;
function RefundToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'payment_request_id': value.paymentRequestId,
        'amount': value.amount,
        'channel_code': value.channelCode,
        'country': value.country,
        'currency': value.currency,
        'reference_id': value.referenceId,
        'failure_code': value.failureCode,
        'refund_fee_amount': value.refundFeeAmount,
        'created': value.created,
        'updated': value.updated,
        'metadata': value.metadata,
    };
}
exports.RefundToJSON = RefundToJSON;