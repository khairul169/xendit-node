"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimulatePaymentRequestToJSON = exports.SimulatePaymentRequestFromJSONTyped = exports.SimulatePaymentRequestFromJSON = exports.instanceOfSimulatePaymentRequest = void 0;
var runtime_1 = require("../../runtime");
/**
 * Check if a given object implements the SimulatePaymentRequest interface.
 */
function instanceOfSimulatePaymentRequest(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfSimulatePaymentRequest = instanceOfSimulatePaymentRequest;
function SimulatePaymentRequestFromJSON(json) {
    return SimulatePaymentRequestFromJSONTyped(json, false);
}
exports.SimulatePaymentRequestFromJSON = SimulatePaymentRequestFromJSON;
function SimulatePaymentRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : json['amount'],
    };
}
exports.SimulatePaymentRequestFromJSONTyped = SimulatePaymentRequestFromJSONTyped;
function SimulatePaymentRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
    };
}
exports.SimulatePaymentRequestToJSON = SimulatePaymentRequestToJSON;
