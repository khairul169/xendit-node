"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodTypeToJSON = exports.PaymentMethodTypeFromJSONTyped = exports.PaymentMethodTypeFromJSON = exports.PaymentMethodType = void 0;
/**
 *
 * @export
 */
exports.PaymentMethodType = {
    Card: 'CARD',
    Cryptocurrency: 'CRYPTOCURRENCY',
    DirectBankTransfer: 'DIRECT_BANK_TRANSFER',
    DirectDebit: 'DIRECT_DEBIT',
    Ewallet: 'EWALLET',
    OverTheCounter: 'OVER_THE_COUNTER',
    QrCode: 'QR_CODE',
    VirtualAccount: 'VIRTUAL_ACCOUNT'
};
function PaymentMethodTypeFromJSON(json) {
    return PaymentMethodTypeFromJSONTyped(json, false);
}
exports.PaymentMethodTypeFromJSON = PaymentMethodTypeFromJSON;
function PaymentMethodTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.PaymentMethodTypeFromJSONTyped = PaymentMethodTypeFromJSONTyped;
function PaymentMethodTypeToJSON(value) {
    return value;
}
exports.PaymentMethodTypeToJSON = PaymentMethodTypeToJSON;
