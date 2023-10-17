"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomer400ResponseAllOfToJSON = exports.CreateCustomer400ResponseAllOfFromJSONTyped = exports.CreateCustomer400ResponseAllOfFromJSON = exports.instanceOfCreateCustomer400ResponseAllOf = exports.CreateCustomer400ResponseAllOfErrorCodeEnum = void 0;
var runtime_1 = require("../../runtime");
/**
 * @export
 */
exports.CreateCustomer400ResponseAllOfErrorCodeEnum = {
    DuplicateEndCustomerError: 'DUPLICATE_END_CUSTOMER_ERROR',
    ApiValidationError: 'API_VALIDATION_ERROR'
};
/**
 * Check if a given object implements the CreateCustomer400ResponseAllOf interface.
 */
function instanceOfCreateCustomer400ResponseAllOf(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfCreateCustomer400ResponseAllOf = instanceOfCreateCustomer400ResponseAllOf;
function CreateCustomer400ResponseAllOfFromJSON(json) {
    return CreateCustomer400ResponseAllOfFromJSONTyped(json, false);
}
exports.CreateCustomer400ResponseAllOfFromJSON = CreateCustomer400ResponseAllOfFromJSON;
function CreateCustomer400ResponseAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'errorCode': !(0, runtime_1.exists)(json, 'error_code') ? undefined : json['error_code'],
        'message': !(0, runtime_1.exists)(json, 'message') ? undefined : json['message'],
    };
}
exports.CreateCustomer400ResponseAllOfFromJSONTyped = CreateCustomer400ResponseAllOfFromJSONTyped;
function CreateCustomer400ResponseAllOfToJSON(value) {
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
exports.CreateCustomer400ResponseAllOfToJSON = CreateCustomer400ResponseAllOfToJSON;