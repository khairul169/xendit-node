"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EWalletAccountToJSON = exports.EWalletAccountFromJSONTyped = exports.EWalletAccountFromJSON = exports.instanceOfEWalletAccount = void 0;
var runtime_1 = require("../../runtime");
/**
 * Check if a given object implements the EWalletAccount interface.
 */
function instanceOfEWalletAccount(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfEWalletAccount = instanceOfEWalletAccount;
function EWalletAccountFromJSON(json) {
    return EWalletAccountFromJSONTyped(json, false);
}
exports.EWalletAccountFromJSON = EWalletAccountFromJSON;
function EWalletAccountFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'accountDetails': !(0, runtime_1.exists)(json, 'account_details') ? undefined : json['account_details'],
        'balance': !(0, runtime_1.exists)(json, 'balance') ? undefined : json['balance'],
        'pointBalance': !(0, runtime_1.exists)(json, 'point_balance') ? undefined : json['point_balance'],
    };
}
exports.EWalletAccountFromJSONTyped = EWalletAccountFromJSONTyped;
function EWalletAccountToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'account_details': value.accountDetails,
        'balance': value.balance,
        'point_balance': value.pointBalance,
    };
}
exports.EWalletAccountToJSON = EWalletAccountToJSON;
