"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardParametersToJSON = exports.CardParametersFromJSONTyped = exports.CardParametersFromJSON = exports.instanceOfCardParameters = void 0;
var runtime_1 = require("../../runtime");
var CardChannelProperties_1 = require("./CardChannelProperties");
var CardParametersCardInformation_1 = require("./CardParametersCardInformation");
/**
 * Check if a given object implements the CardParameters interface.
 */
function instanceOfCardParameters(value) {
    var isInstance = true;
    isInstance = isInstance && "currency" in value;
    return isInstance;
}
exports.instanceOfCardParameters = instanceOfCardParameters;
function CardParametersFromJSON(json) {
    return CardParametersFromJSONTyped(json, false);
}
exports.CardParametersFromJSON = CardParametersFromJSON;
function CardParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'currency': json['currency'],
        'channelProperties': !(0, runtime_1.exists)(json, 'channel_properties') ? undefined : (0, CardChannelProperties_1.CardChannelPropertiesFromJSON)(json['channel_properties']),
        'cardInformation': !(0, runtime_1.exists)(json, 'card_information') ? undefined : (0, CardParametersCardInformation_1.CardParametersCardInformationFromJSON)(json['card_information']),
    };
}
exports.CardParametersFromJSONTyped = CardParametersFromJSONTyped;
function CardParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'currency': value.currency,
        'channel_properties': (0, CardChannelProperties_1.CardChannelPropertiesToJSON)(value.channelProperties),
        'card_information': (0, CardParametersCardInformation_1.CardParametersCardInformationToJSON)(value.cardInformation),
    };
}
exports.CardParametersToJSON = CardParametersToJSON;
