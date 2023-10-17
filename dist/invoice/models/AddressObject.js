"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressObjectToJSON = exports.AddressObjectFromJSONTyped = exports.AddressObjectFromJSON = exports.instanceOfAddressObject = void 0;
var runtime_1 = require("../../runtime");
/**
 * Check if a given object implements the AddressObject interface.
 */
function instanceOfAddressObject(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfAddressObject = instanceOfAddressObject;
function AddressObjectFromJSON(json) {
    return AddressObjectFromJSONTyped(json, false);
}
exports.AddressObjectFromJSON = AddressObjectFromJSON;
function AddressObjectFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'country': !(0, runtime_1.exists)(json, 'country') ? undefined : json['country'],
        'streetLine1': !(0, runtime_1.exists)(json, 'street_line1') ? undefined : json['street_line1'],
        'streetLine2': !(0, runtime_1.exists)(json, 'street_line2') ? undefined : json['street_line2'],
        'city': !(0, runtime_1.exists)(json, 'city') ? undefined : json['city'],
        'province': !(0, runtime_1.exists)(json, 'province') ? undefined : json['province'],
        'state': !(0, runtime_1.exists)(json, 'state') ? undefined : json['state'],
        'postalCode': !(0, runtime_1.exists)(json, 'postal_code') ? undefined : json['postal_code'],
    };
}
exports.AddressObjectFromJSONTyped = AddressObjectFromJSONTyped;
function AddressObjectToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'country': value.country,
        'street_line1': value.streetLine1,
        'street_line2': value.streetLine2,
        'city': value.city,
        'province': value.province,
        'state': value.state,
        'postal_code': value.postalCode,
    };
}
exports.AddressObjectToJSON = AddressObjectToJSON;
