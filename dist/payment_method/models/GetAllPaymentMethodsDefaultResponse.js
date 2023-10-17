"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllPaymentMethodsDefaultResponseToJSON = exports.GetAllPaymentMethodsDefaultResponseFromJSONTyped = exports.GetAllPaymentMethodsDefaultResponseFromJSON = exports.instanceOfGetAllPaymentMethodsDefaultResponse = void 0;
var runtime_1 = require("../../runtime");
/**
 * Check if a given object implements the GetAllPaymentMethodsDefaultResponse interface.
 */
function instanceOfGetAllPaymentMethodsDefaultResponse(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfGetAllPaymentMethodsDefaultResponse = instanceOfGetAllPaymentMethodsDefaultResponse;
function GetAllPaymentMethodsDefaultResponseFromJSON(json) {
    return GetAllPaymentMethodsDefaultResponseFromJSONTyped(json, false);
}
exports.GetAllPaymentMethodsDefaultResponseFromJSON = GetAllPaymentMethodsDefaultResponseFromJSON;
function GetAllPaymentMethodsDefaultResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'errorCode': !(0, runtime_1.exists)(json, 'error_code') ? undefined : json['error_code'],
        'message': !(0, runtime_1.exists)(json, 'message') ? undefined : json['message'],
    };
}
exports.GetAllPaymentMethodsDefaultResponseFromJSONTyped = GetAllPaymentMethodsDefaultResponseFromJSONTyped;
function GetAllPaymentMethodsDefaultResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'error_code': value.errorCode,
        'message': value.message,
    };
}
exports.GetAllPaymentMethodsDefaultResponseToJSON = GetAllPaymentMethodsDefaultResponseToJSON;
