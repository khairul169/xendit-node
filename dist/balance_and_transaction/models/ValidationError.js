"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationErrorToJSON = exports.ValidationErrorFromJSONTyped = exports.ValidationErrorFromJSON = exports.instanceOfValidationError = void 0;
var runtime_1 = require("../../runtime");
/**
 * Check if a given object implements the ValidationError interface.
 */
function instanceOfValidationError(value) {
    var isInstance = true;
    isInstance = isInstance && "statusCode" in value;
    isInstance = isInstance && "error" in value;
    isInstance = isInstance && "message" in value;
    return isInstance;
}
exports.instanceOfValidationError = instanceOfValidationError;
function ValidationErrorFromJSON(json) {
    return ValidationErrorFromJSONTyped(json, false);
}
exports.ValidationErrorFromJSON = ValidationErrorFromJSON;
function ValidationErrorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'statusCode': json['status_code'],
        'error': json['error'],
        'message': json['message'],
        'validation': !(0, runtime_1.exists)(json, 'validation') ? undefined : json['validation'],
    };
}
exports.ValidationErrorFromJSONTyped = ValidationErrorFromJSONTyped;
function ValidationErrorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'status_code': value.statusCode,
        'error': value.error,
        'message': value.message,
        'validation': value.validation,
    };
}
exports.ValidationErrorToJSON = ValidationErrorToJSON;
