"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaptureParametersToJSON = exports.CaptureParametersFromJSONTyped = exports.CaptureParametersFromJSON = exports.instanceOfCaptureParameters = void 0;
var runtime_1 = require("../../runtime");
/**
 * Check if a given object implements the CaptureParameters interface.
 */
function instanceOfCaptureParameters(value) {
    var isInstance = true;
    isInstance = isInstance && "captureAmount" in value;
    return isInstance;
}
exports.instanceOfCaptureParameters = instanceOfCaptureParameters;
function CaptureParametersFromJSON(json) {
    return CaptureParametersFromJSONTyped(json, false);
}
exports.CaptureParametersFromJSON = CaptureParametersFromJSON;
function CaptureParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'referenceId': !(0, runtime_1.exists)(json, 'reference_id') ? undefined : json['reference_id'],
        'captureAmount': json['capture_amount'],
    };
}
exports.CaptureParametersFromJSONTyped = CaptureParametersFromJSONTyped;
function CaptureParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'reference_id': value.referenceId,
        'capture_amount': value.captureAmount,
    };
}
exports.CaptureParametersToJSON = CaptureParametersToJSON;