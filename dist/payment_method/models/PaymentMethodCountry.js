"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodCountryToJSON = exports.PaymentMethodCountryFromJSONTyped = exports.PaymentMethodCountryFromJSON = exports.PaymentMethodCountry = void 0;
/**
 *
 * @export
 */
exports.PaymentMethodCountry = {
    Ph: 'PH',
    Id: 'ID',
    Vn: 'VN',
    Th: 'TH',
    My: 'MY'
};
function PaymentMethodCountryFromJSON(json) {
    return PaymentMethodCountryFromJSONTyped(json, false);
}
exports.PaymentMethodCountryFromJSON = PaymentMethodCountryFromJSON;
function PaymentMethodCountryFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.PaymentMethodCountryFromJSONTyped = PaymentMethodCountryFromJSONTyped;
function PaymentMethodCountryToJSON(value) {
    return value;
}
exports.PaymentMethodCountryToJSON = PaymentMethodCountryToJSON;