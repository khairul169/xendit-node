"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPayouts200ResponseDataInnerToJSON = exports.GetPayouts200ResponseDataInnerFromJSONTyped = exports.GetPayouts200ResponseDataInnerFromJSON = exports.instanceOfGetPayouts200ResponseDataInner = exports.GetPayouts200ResponseDataInnerFailureCodeEnum = exports.GetPayouts200ResponseDataInnerStatusEnum = void 0;
var runtime_1 = require("../../runtime");
var DigitalPayoutChannelProperties_1 = require("./DigitalPayoutChannelProperties");
var ReceiptNotification_1 = require("./ReceiptNotification");
/**
 * @export
 */
exports.GetPayouts200ResponseDataInnerStatusEnum = {
    Succeeded: 'SUCCEEDED',
    Failed: 'FAILED',
    Accepted: 'ACCEPTED',
    Requested: 'REQUESTED',
    Locked: 'LOCKED',
    Cancelled: 'CANCELLED',
    Reversed: 'REVERSED'
};
/**
 * @export
 */
exports.GetPayouts200ResponseDataInnerFailureCodeEnum = {
    InsufficientBalance: 'INSUFFICIENT_BALANCE',
    RejectedByChannel: 'REJECTED_BY_CHANNEL',
    TemporaryTransferError: 'TEMPORARY_TRANSFER_ERROR',
    InvalidDestination: 'INVALID_DESTINATION',
    TransferError: 'TRANSFER_ERROR'
};
/**
 * Check if a given object implements the GetPayouts200ResponseDataInner interface.
 */
function instanceOfGetPayouts200ResponseDataInner(value) {
    var isInstance = true;
    isInstance = isInstance && "referenceId" in value;
    isInstance = isInstance && "channelCode" in value;
    isInstance = isInstance && "channelProperties" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "currency" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "updated" in value;
    isInstance = isInstance && "businessId" in value;
    isInstance = isInstance && "status" in value;
    return isInstance;
}
exports.instanceOfGetPayouts200ResponseDataInner = instanceOfGetPayouts200ResponseDataInner;
function GetPayouts200ResponseDataInnerFromJSON(json) {
    return GetPayouts200ResponseDataInnerFromJSONTyped(json, false);
}
exports.GetPayouts200ResponseDataInnerFromJSON = GetPayouts200ResponseDataInnerFromJSON;
function GetPayouts200ResponseDataInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'referenceId': json['reference_id'],
        'channelCode': json['channel_code'],
        'channelProperties': (0, DigitalPayoutChannelProperties_1.DigitalPayoutChannelPropertiesFromJSON)(json['channel_properties']),
        'amount': json['amount'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'currency': json['currency'],
        'receiptNotification': !(0, runtime_1.exists)(json, 'receipt_notification') ? undefined : (0, ReceiptNotification_1.ReceiptNotificationFromJSON)(json['receipt_notification']),
        'metadata': !(0, runtime_1.exists)(json, 'metadata') ? undefined : json['metadata'],
        'id': json['id'],
        'created': (new Date(json['created'])),
        'updated': (new Date(json['updated'])),
        'businessId': json['business_id'],
        'status': json['status'],
        'failureCode': !(0, runtime_1.exists)(json, 'failure_code') ? undefined : json['failure_code'],
        'estimatedArrivalTime': !(0, runtime_1.exists)(json, 'estimated_arrival_time') ? undefined : (new Date(json['estimated_arrival_time'])),
    };
}
exports.GetPayouts200ResponseDataInnerFromJSONTyped = GetPayouts200ResponseDataInnerFromJSONTyped;
function GetPayouts200ResponseDataInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'reference_id': value.referenceId,
        'channel_code': value.channelCode,
        'channel_properties': (0, DigitalPayoutChannelProperties_1.DigitalPayoutChannelPropertiesToJSON)(value.channelProperties),
        'amount': value.amount,
        'description': value.description,
        'currency': value.currency,
        'receipt_notification': (0, ReceiptNotification_1.ReceiptNotificationToJSON)(value.receiptNotification),
        'metadata': value.metadata,
        'id': value.id,
        'created': (value.created.toISOString()),
        'updated': (value.updated.toISOString()),
        'business_id': value.businessId,
        'status': value.status,
        'failure_code': value.failureCode,
        'estimated_arrival_time': value.estimatedArrivalTime === undefined ? undefined : (value.estimatedArrivalTime.toISOString()),
    };
}
exports.GetPayouts200ResponseDataInnerToJSON = GetPayouts200ResponseDataInnerToJSON;
