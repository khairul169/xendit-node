"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityAccountRequestToJSON = exports.IdentityAccountRequestFromJSONTyped = exports.IdentityAccountRequestFromJSON = exports.instanceOfIdentityAccountRequest = void 0;
var runtime_1 = require("../../runtime");
var IdentityAccountRequestProperties_1 = require("./IdentityAccountRequestProperties");
var IdentityAccountType_1 = require("./IdentityAccountType");
/**
 * Check if a given object implements the IdentityAccountRequest interface.
 */
function instanceOfIdentityAccountRequest(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfIdentityAccountRequest = instanceOfIdentityAccountRequest;
function IdentityAccountRequestFromJSON(json) {
    return IdentityAccountRequestFromJSONTyped(json, false);
}
exports.IdentityAccountRequestFromJSON = IdentityAccountRequestFromJSON;
function IdentityAccountRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : (0, IdentityAccountType_1.IdentityAccountTypeFromJSON)(json['type']),
        'company': !(0, runtime_1.exists)(json, 'company') ? undefined : json['company'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'country': !(0, runtime_1.exists)(json, 'country') ? undefined : json['country'],
        'properties': !(0, runtime_1.exists)(json, 'properties') ? undefined : (0, IdentityAccountRequestProperties_1.IdentityAccountRequestPropertiesFromJSON)(json['properties']),
    };
}
exports.IdentityAccountRequestFromJSONTyped = IdentityAccountRequestFromJSONTyped;
function IdentityAccountRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': (0, IdentityAccountType_1.IdentityAccountTypeToJSON)(value.type),
        'company': value.company,
        'description': value.description,
        'country': value.country,
        'properties': (0, IdentityAccountRequestProperties_1.IdentityAccountRequestPropertiesToJSON)(value.properties),
    };
}
exports.IdentityAccountRequestToJSON = IdentityAccountRequestToJSON;