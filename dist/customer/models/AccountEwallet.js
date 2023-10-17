"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountEwalletToJSON = exports.AccountEwalletFromJSONTyped = exports.AccountEwalletFromJSON = exports.instanceOfAccountEwallet = void 0;
var runtime_1 = require("../../runtime");
/**
 * Check if a given object implements the AccountEwallet interface.
 */
function instanceOfAccountEwallet(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfAccountEwallet = instanceOfAccountEwallet;
function AccountEwalletFromJSON(json) {
    return AccountEwalletFromJSONTyped(json, false);
}
exports.AccountEwalletFromJSON = AccountEwalletFromJSON;
function AccountEwalletFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountNumber': !(0, runtime_1.exists)(json, 'account_number') ? undefined : json['account_number'],
        'accountHolderName': !(0, runtime_1.exists)(json, 'account_holder_name') ? undefined : json['account_holder_name'],
        'currency': !(0, runtime_1.exists)(json, 'currency') ? undefined : json['currency'],
    };
}
exports.AccountEwalletFromJSONTyped = AccountEwalletFromJSONTyped;
function AccountEwalletToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'account_number': value.accountNumber,
        'account_holder_name': value.accountHolderName,
        'currency': value.currency,
    };
}
exports.AccountEwalletToJSON = AccountEwalletToJSON;
