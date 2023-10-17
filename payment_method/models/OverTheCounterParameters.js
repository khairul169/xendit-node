"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverTheCounterParametersToJSON = exports.OverTheCounterParametersFromJSONTyped = exports.OverTheCounterParametersFromJSON = exports.instanceOfOverTheCounterParameters = void 0;
var runtime_1 = require("../../runtime");
var OverTheCounterChannelCode_1 = require("./OverTheCounterChannelCode");
var OverTheCounterChannelProperties_1 = require("./OverTheCounterChannelProperties");
/**
 * Check if a given object implements the OverTheCounterParameters interface.
 */
function instanceOfOverTheCounterParameters(value) {
    var isInstance = true;
    isInstance = isInstance && "channelCode" in value;
    isInstance = isInstance && "channelProperties" in value;
    return isInstance;
}
exports.instanceOfOverTheCounterParameters = instanceOfOverTheCounterParameters;
function OverTheCounterParametersFromJSON(json) {
    return OverTheCounterParametersFromJSONTyped(json, false);
}
exports.OverTheCounterParametersFromJSON = OverTheCounterParametersFromJSON;
function OverTheCounterParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : json['amount'],
        'currency': !(0, runtime_1.exists)(json, 'currency') ? undefined : json['currency'],
        'channelCode': (0, OverTheCounterChannelCode_1.OverTheCounterChannelCodeFromJSON)(json['channel_code']),
        'channelProperties': (0, OverTheCounterChannelProperties_1.OverTheCounterChannelPropertiesFromJSON)(json['channel_properties']),
    };
}
exports.OverTheCounterParametersFromJSONTyped = OverTheCounterParametersFromJSONTyped;
function OverTheCounterParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'currency': value.currency,
        'channel_code': (0, OverTheCounterChannelCode_1.OverTheCounterChannelCodeToJSON)(value.channelCode),
        'channel_properties': (0, OverTheCounterChannelProperties_1.OverTheCounterChannelPropertiesToJSON)(value.channelProperties),
    };
}
exports.OverTheCounterParametersToJSON = OverTheCounterParametersToJSON;