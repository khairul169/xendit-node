"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenizedCardInformationToJSON = exports.TokenizedCardInformationFromJSONTyped = exports.TokenizedCardInformationFromJSON = exports.instanceOfTokenizedCardInformation = void 0;
var runtime_1 = require("../../runtime");
/**
 * Check if a given object implements the TokenizedCardInformation interface.
 */
function instanceOfTokenizedCardInformation(value) {
    var isInstance = true;
    isInstance = isInstance && "tokenId" in value;
    isInstance = isInstance && "maskedCardNumber" in value;
    isInstance = isInstance && "expiryMonth" in value;
    isInstance = isInstance && "expiryYear" in value;
    isInstance = isInstance && "fingerprint" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "country" in value;
    isInstance = isInstance && "issuer" in value;
    return isInstance;
}
exports.instanceOfTokenizedCardInformation = instanceOfTokenizedCardInformation;
function TokenizedCardInformationFromJSON(json) {
    return TokenizedCardInformationFromJSONTyped(json, false);
}
exports.TokenizedCardInformationFromJSON = TokenizedCardInformationFromJSON;
function TokenizedCardInformationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'tokenId': json['token_id'],
        'maskedCardNumber': json['masked_card_number'],
        'cardholderName': !(0, runtime_1.exists)(json, 'cardholder_name') ? undefined : json['cardholder_name'],
        'expiryMonth': json['expiry_month'],
        'expiryYear': json['expiry_year'],
        'fingerprint': json['fingerprint'],
        'type': json['type'],
        'network': json['network'],
        'country': json['country'],
        'issuer': json['issuer'],
    };
}
exports.TokenizedCardInformationFromJSONTyped = TokenizedCardInformationFromJSONTyped;
function TokenizedCardInformationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'token_id': value.tokenId,
        'masked_card_number': value.maskedCardNumber,
        'cardholder_name': value.cardholderName,
        'expiry_month': value.expiryMonth,
        'expiry_year': value.expiryYear,
        'fingerprint': value.fingerprint,
        'type': value.type,
        'network': value.network,
        'country': value.country,
        'issuer': value.issuer,
    };
}
exports.TokenizedCardInformationToJSON = TokenizedCardInformationToJSON;