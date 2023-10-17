"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.QRCodeChannelCodeToJSON = exports.QRCodeChannelCodeFromJSONTyped = exports.QRCodeChannelCodeFromJSON = exports.QRCodeChannelCode = void 0;
/**
 * QR Code Channel Code
 * @export
 */
exports.QRCodeChannelCode = {
    Dana: 'DANA',
    Rcbc: 'RCBC',
    Linkaja: 'LINKAJA',
    Promptpay: 'PROMPTPAY'
};
function QRCodeChannelCodeFromJSON(json) {
    return QRCodeChannelCodeFromJSONTyped(json, false);
}
exports.QRCodeChannelCodeFromJSON = QRCodeChannelCodeFromJSON;
function QRCodeChannelCodeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.QRCodeChannelCodeFromJSONTyped = QRCodeChannelCodeFromJSONTyped;
function QRCodeChannelCodeToJSON(value) {
    return value;
}
exports.QRCodeChannelCodeToJSON = QRCodeChannelCodeToJSON;