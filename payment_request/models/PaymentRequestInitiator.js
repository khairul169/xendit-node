"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRequestInitiatorToJSON = exports.PaymentRequestInitiatorFromJSONTyped = exports.PaymentRequestInitiatorFromJSON = exports.PaymentRequestInitiator = void 0;
/**
 *
 * @export
 */
exports.PaymentRequestInitiator = {
    Customer: 'CUSTOMER',
    Merchant: 'MERCHANT'
};
function PaymentRequestInitiatorFromJSON(json) {
    return PaymentRequestInitiatorFromJSONTyped(json, false);
}
exports.PaymentRequestInitiatorFromJSON = PaymentRequestInitiatorFromJSON;
function PaymentRequestInitiatorFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.PaymentRequestInitiatorFromJSONTyped = PaymentRequestInitiatorFromJSONTyped;
function PaymentRequestInitiatorToJSON(value) {
    return value;
}
exports.PaymentRequestInitiatorToJSON = PaymentRequestInitiatorToJSON;