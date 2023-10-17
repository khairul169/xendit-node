"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.QRCodeParametersToJSON = exports.QRCodeParametersFromJSONTyped = exports.QRCodeParametersFromJSON = exports.instanceOfQRCodeParameters = void 0;
var runtime_1 = require("../../runtime");
var QRCodeChannelCode_1 = require("./QRCodeChannelCode");
var QRCodeChannelProperties_1 = require("./QRCodeChannelProperties");
/**
 * Check if a given object implements the QRCodeParameters interface.
 */
function instanceOfQRCodeParameters(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfQRCodeParameters = instanceOfQRCodeParameters;
function QRCodeParametersFromJSON(json) {
    return QRCodeParametersFromJSONTyped(json, false);
}
exports.QRCodeParametersFromJSON = QRCodeParametersFromJSON;
function QRCodeParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : json['amount'],
        'currency': !(0, runtime_1.exists)(json, 'currency') ? undefined : json['currency'],
        'channelCode': !(0, runtime_1.exists)(json, 'channel_code') ? undefined : (0, QRCodeChannelCode_1.QRCodeChannelCodeFromJSON)(json['channel_code']),
        'channelProperties': !(0, runtime_1.exists)(json, 'channel_properties') ? undefined : (0, QRCodeChannelProperties_1.QRCodeChannelPropertiesFromJSON)(json['channel_properties']),
    };
}
exports.QRCodeParametersFromJSONTyped = QRCodeParametersFromJSONTyped;
function QRCodeParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'currency': value.currency,
        'channel_code': (0, QRCodeChannelCode_1.QRCodeChannelCodeToJSON)(value.channelCode),
        'channel_properties': (0, QRCodeChannelProperties_1.QRCodeChannelPropertiesToJSON)(value.channelProperties),
    };
}
exports.QRCodeParametersToJSON = QRCodeParametersToJSON;
