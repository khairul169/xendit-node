"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressStatusToJSON = exports.AddressStatusFromJSONTyped = exports.AddressStatusFromJSON = exports.AddressStatus = void 0;
/**
 *
 * @export
 */
exports.AddressStatus = {
    Active: 'ACTIVE',
    Deleted: 'DELETED'
};
function AddressStatusFromJSON(json) {
    return AddressStatusFromJSONTyped(json, false);
}
exports.AddressStatusFromJSON = AddressStatusFromJSON;
function AddressStatusFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.AddressStatusFromJSONTyped = AddressStatusFromJSONTyped;
function AddressStatusToJSON(value) {
    return value;
}
exports.AddressStatusToJSON = AddressStatusToJSON;