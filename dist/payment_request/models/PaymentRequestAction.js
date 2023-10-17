"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRequestActionToJSON = exports.PaymentRequestActionFromJSONTyped = exports.PaymentRequestActionFromJSON = exports.instanceOfPaymentRequestAction = exports.PaymentRequestActionUrlTypeEnum = exports.PaymentRequestActionActionEnum = void 0;
/**
 * @export
 */
exports.PaymentRequestActionActionEnum = {
    Auth: 'AUTH',
    ResendAuth: 'RESEND_AUTH',
    Capture: 'CAPTURE',
    Cancel: 'CANCEL',
    PresentToCustomer: 'PRESENT_TO_CUSTOMER'
};
/**
 * @export
 */
exports.PaymentRequestActionUrlTypeEnum = {
    Api: 'API',
    Web: 'WEB',
    Mobile: 'MOBILE',
    Deeplink: 'DEEPLINK'
};
/**
 * Check if a given object implements the PaymentRequestAction interface.
 */
function instanceOfPaymentRequestAction(value) {
    var isInstance = true;
    isInstance = isInstance && "action" in value;
    isInstance = isInstance && "urlType" in value;
    isInstance = isInstance && "method" in value;
    isInstance = isInstance && "url" in value;
    isInstance = isInstance && "qrCode" in value;
    return isInstance;
}
exports.instanceOfPaymentRequestAction = instanceOfPaymentRequestAction;
function PaymentRequestActionFromJSON(json) {
    return PaymentRequestActionFromJSONTyped(json, false);
}
exports.PaymentRequestActionFromJSON = PaymentRequestActionFromJSON;
function PaymentRequestActionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'action': json['action'],
        'urlType': json['url_type'],
        'method': json['method'],
        'url': json['url'],
        'qrCode': json['qr_code'],
    };
}
exports.PaymentRequestActionFromJSONTyped = PaymentRequestActionFromJSONTyped;
function PaymentRequestActionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'action': value.action,
        'url_type': value.urlType,
        'method': value.method,
        'url': value.url,
        'qr_code': value.qrCode,
    };
}
exports.PaymentRequestActionToJSON = PaymentRequestActionToJSON;