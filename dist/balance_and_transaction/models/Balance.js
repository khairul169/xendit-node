"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceToJSON = exports.BalanceFromJSONTyped = exports.BalanceFromJSON = exports.instanceOfBalance = void 0;
/**
 * Check if a given object implements the Balance interface.
 */
function instanceOfBalance(value) {
    var isInstance = true;
    isInstance = isInstance && "balance" in value;
    return isInstance;
}
exports.instanceOfBalance = instanceOfBalance;
function BalanceFromJSON(json) {
    return BalanceFromJSONTyped(json, false);
}
exports.BalanceFromJSON = BalanceFromJSON;
function BalanceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'balance': json['balance'],
    };
}
exports.BalanceFromJSONTyped = BalanceFromJSONTyped;
function BalanceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'balance': value.balance,
    };
}
exports.BalanceToJSON = BalanceToJSON;
