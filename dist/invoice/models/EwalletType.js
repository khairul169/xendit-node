"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EwalletTypeToJSON = exports.EwalletTypeFromJSONTyped = exports.EwalletTypeFromJSON = exports.EwalletType = void 0;
/**
 * Representing the available eWallet channels used for invoice-related transactions.
 * @export
 */
exports.EwalletType = {
    Ovo: 'OVO',
    Dana: 'DANA',
    Linkaja: 'LINKAJA',
    Paymaya: 'PAYMAYA',
    Shopeepay: 'SHOPEEPAY',
    Gcash: 'GCASH',
    Grabpay: 'GRABPAY',
    Astrapay: 'ASTRAPAY',
    Nexcash: 'NEXCASH',
    Jeniuspay: 'JENIUSPAY'
};
function EwalletTypeFromJSON(json) {
    return EwalletTypeFromJSONTyped(json, false);
}
exports.EwalletTypeFromJSON = EwalletTypeFromJSON;
function EwalletTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.EwalletTypeFromJSONTyped = EwalletTypeFromJSONTyped;
function EwalletTypeToJSON(value) {
    return value;
}
exports.EwalletTypeToJSON = EwalletTypeToJSON;
