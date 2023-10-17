"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllPaymentMethods404ResponseToJSON = exports.GetAllPaymentMethods404ResponseFromJSONTyped = exports.GetAllPaymentMethods404ResponseFromJSON = exports.instanceOfGetAllPaymentMethods404Response = exports.GetAllPaymentMethods404ResponseErrorCodeEnum = void 0;
var runtime_1 = require("../../runtime");
/**
 * @export
 */
exports.GetAllPaymentMethods404ResponseErrorCodeEnum = {
    DataNotFound: 'DATA_NOT_FOUND'
};
/**
 * Check if a given object implements the GetAllPaymentMethods404Response interface.
 */
function instanceOfGetAllPaymentMethods404Response(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfGetAllPaymentMethods404Response = instanceOfGetAllPaymentMethods404Response;
function GetAllPaymentMethods404ResponseFromJSON(json) {
    return GetAllPaymentMethods404ResponseFromJSONTyped(json, false);
}
exports.GetAllPaymentMethods404ResponseFromJSON = GetAllPaymentMethods404ResponseFromJSON;
function GetAllPaymentMethods404ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'errorCode': !(0, runtime_1.exists)(json, 'error_code') ? undefined : json['error_code'],
        'message': !(0, runtime_1.exists)(json, 'message') ? undefined : json['message'],
    };
}
exports.GetAllPaymentMethods404ResponseFromJSONTyped = GetAllPaymentMethods404ResponseFromJSONTyped;
function GetAllPaymentMethods404ResponseToJSON(value) {
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
exports.GetAllPaymentMethods404ResponseToJSON = GetAllPaymentMethods404ResponseToJSON;