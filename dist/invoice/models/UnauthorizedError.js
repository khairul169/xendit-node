"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedErrorToJSON = exports.UnauthorizedErrorFromJSONTyped = exports.UnauthorizedErrorFromJSON = exports.instanceOfUnauthorizedError = exports.UnauthorizedErrorErrorCodeEnum = void 0;
/**
 * @export
 */
exports.UnauthorizedErrorErrorCodeEnum = {
    InvalidApiKey: 'INVALID_API_KEY'
};
/**
 * Check if a given object implements the UnauthorizedError interface.
 */
function instanceOfUnauthorizedError(value) {
    var isInstance = true;
    isInstance = isInstance && "errorCode" in value;
    isInstance = isInstance && "message" in value;
    return isInstance;
}
exports.instanceOfUnauthorizedError = instanceOfUnauthorizedError;
function UnauthorizedErrorFromJSON(json) {
    return UnauthorizedErrorFromJSONTyped(json, false);
}
exports.UnauthorizedErrorFromJSON = UnauthorizedErrorFromJSON;
function UnauthorizedErrorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'errorCode': json['error_code'],
        'message': json['message'],
    };
}
exports.UnauthorizedErrorFromJSONTyped = UnauthorizedErrorFromJSONTyped;
function UnauthorizedErrorToJSON(value) {
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
exports.UnauthorizedErrorToJSON = UnauthorizedErrorToJSON;
