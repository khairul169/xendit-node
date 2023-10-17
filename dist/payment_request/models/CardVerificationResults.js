"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardVerificationResultsToJSON = exports.CardVerificationResultsFromJSONTyped = exports.CardVerificationResultsFromJSON = exports.instanceOfCardVerificationResults = void 0;
var runtime_1 = require("../../runtime");
var CardVerificationResultsThreeDSecure_1 = require("./CardVerificationResultsThreeDSecure");
/**
 * Check if a given object implements the CardVerificationResults interface.
 */
function instanceOfCardVerificationResults(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfCardVerificationResults = instanceOfCardVerificationResults;
function CardVerificationResultsFromJSON(json) {
    return CardVerificationResultsFromJSONTyped(json, false);
}
exports.CardVerificationResultsFromJSON = CardVerificationResultsFromJSON;
function CardVerificationResultsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'threeDSecure': !(0, runtime_1.exists)(json, 'three_d_secure') ? undefined : (0, CardVerificationResultsThreeDSecure_1.CardVerificationResultsThreeDSecureFromJSON)(json['three_d_secure']),
        'cvvResult': !(0, runtime_1.exists)(json, 'cvv_result') ? undefined : json['cvv_result'],
        'addressVerificationResult': !(0, runtime_1.exists)(json, 'address_verification_result') ? undefined : json['address_verification_result'],
    };
}
exports.CardVerificationResultsFromJSONTyped = CardVerificationResultsFromJSONTyped;
function CardVerificationResultsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'three_d_secure': (0, CardVerificationResultsThreeDSecure_1.CardVerificationResultsThreeDSecureToJSON)(value.threeDSecure),
        'cvv_result': value.cvvResult,
        'address_verification_result': value.addressVerificationResult,
    };
}
exports.CardVerificationResultsToJSON = CardVerificationResultsToJSON;