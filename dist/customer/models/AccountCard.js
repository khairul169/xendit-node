"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCardToJSON = exports.AccountCardFromJSONTyped = exports.AccountCardFromJSON = exports.instanceOfAccountCard = void 0;
var runtime_1 = require("../../runtime");
/**
 * Check if a given object implements the AccountCard interface.
 */
function instanceOfAccountCard(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfAccountCard = instanceOfAccountCard;
function AccountCardFromJSON(json) {
    return AccountCardFromJSONTyped(json, false);
}
exports.AccountCardFromJSON = AccountCardFromJSON;
function AccountCardFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'tokenId': !(0, runtime_1.exists)(json, 'token_id') ? undefined : json['token_id'],
    };
}
exports.AccountCardFromJSONTyped = AccountCardFromJSONTyped;
function AccountCardToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'token_id': value.tokenId,
    };
}
exports.AccountCardToJSON = AccountCardToJSON;