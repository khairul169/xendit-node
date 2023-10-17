"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionStatusesToJSON = exports.TransactionStatusesFromJSONTyped = exports.TransactionStatusesFromJSON = exports.TransactionStatuses = void 0;
/**
 *
 * @export
 */
exports.TransactionStatuses = {
    Success: 'SUCCESS',
    Pending: 'PENDING',
    Failed: 'FAILED',
    Reversed: 'REVERSED',
    Voided: 'VOIDED'
};
function TransactionStatusesFromJSON(json) {
    return TransactionStatusesFromJSONTyped(json, false);
}
exports.TransactionStatusesFromJSON = TransactionStatusesFromJSON;
function TransactionStatusesFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.TransactionStatusesFromJSONTyped = TransactionStatusesFromJSONTyped;
function TransactionStatusesToJSON(value) {
    return value;
}
exports.TransactionStatusesToJSON = TransactionStatusesToJSON;