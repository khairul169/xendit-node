"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRequestParametersChannelPropertiesToJSON = exports.PaymentRequestParametersChannelPropertiesFromJSONTyped = exports.PaymentRequestParametersChannelPropertiesFromJSON = exports.instanceOfPaymentRequestParametersChannelProperties = void 0;
var runtime_1 = require("../../runtime");
/**
 * Check if a given object implements the PaymentRequestParametersChannelProperties interface.
 */
function instanceOfPaymentRequestParametersChannelProperties(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfPaymentRequestParametersChannelProperties = instanceOfPaymentRequestParametersChannelProperties;
function PaymentRequestParametersChannelPropertiesFromJSON(json) {
    return PaymentRequestParametersChannelPropertiesFromJSONTyped(json, false);
}
exports.PaymentRequestParametersChannelPropertiesFromJSON = PaymentRequestParametersChannelPropertiesFromJSON;
function PaymentRequestParametersChannelPropertiesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'successReturnUrl': !(0, runtime_1.exists)(json, 'success_return_url') ? undefined : json['success_return_url'],
        'failureReturnUrl': !(0, runtime_1.exists)(json, 'failure_return_url') ? undefined : json['failure_return_url'],
        'cancelReturnUrl': !(0, runtime_1.exists)(json, 'cancel_return_url') ? undefined : json['cancel_return_url'],
        'redeemPoints': !(0, runtime_1.exists)(json, 'redeem_points') ? undefined : json['redeem_points'],
        'requireAuth': !(0, runtime_1.exists)(json, 'require_auth') ? undefined : json['require_auth'],
        'merchantIdTag': !(0, runtime_1.exists)(json, 'merchant_id_tag') ? undefined : json['merchant_id_tag'],
        'cardonfileType': !(0, runtime_1.exists)(json, 'cardonfile_type') ? undefined : json['cardonfile_type'],
        'cvv': !(0, runtime_1.exists)(json, 'cvv') ? undefined : json['cvv'],
    };
}
exports.PaymentRequestParametersChannelPropertiesFromJSONTyped = PaymentRequestParametersChannelPropertiesFromJSONTyped;
function PaymentRequestParametersChannelPropertiesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'success_return_url': value.successReturnUrl,
        'failure_return_url': value.failureReturnUrl,
        'cancel_return_url': value.cancelReturnUrl,
        'redeem_points': value.redeemPoints,
        'require_auth': value.requireAuth,
        'merchant_id_tag': value.merchantIdTag,
        'cardonfile_type': value.cardonfileType,
        'cvv': value.cvv,
    };
}
exports.PaymentRequestParametersChannelPropertiesToJSON = PaymentRequestParametersChannelPropertiesToJSON;