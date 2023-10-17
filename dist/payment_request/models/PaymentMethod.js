"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodToJSON = exports.PaymentMethodFromJSONTyped = exports.PaymentMethodFromJSON = exports.instanceOfPaymentMethod = void 0;
var runtime_1 = require("../../runtime");
var Card_1 = require("./Card");
var DirectDebit_1 = require("./DirectDebit");
var EWallet_1 = require("./EWallet");
var OverTheCounter_1 = require("./OverTheCounter");
var PaymentMethodReusability_1 = require("./PaymentMethodReusability");
var PaymentMethodStatus_1 = require("./PaymentMethodStatus");
var PaymentMethodType_1 = require("./PaymentMethodType");
var QRCode_1 = require("./QRCode");
var VirtualAccount_1 = require("./VirtualAccount");
/**
 * Check if a given object implements the PaymentMethod interface.
 */
function instanceOfPaymentMethod(value) {
    var isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "reusability" in value;
    isInstance = isInstance && "status" in value;
    return isInstance;
}
exports.instanceOfPaymentMethod = instanceOfPaymentMethod;
function PaymentMethodFromJSON(json) {
    return PaymentMethodFromJSONTyped(json, false);
}
exports.PaymentMethodFromJSON = PaymentMethodFromJSON;
function PaymentMethodFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'type': (0, PaymentMethodType_1.PaymentMethodTypeFromJSON)(json['type']),
        'created': !(0, runtime_1.exists)(json, 'created') ? undefined : json['created'],
        'updated': !(0, runtime_1.exists)(json, 'updated') ? undefined : json['updated'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'referenceId': !(0, runtime_1.exists)(json, 'reference_id') ? undefined : json['reference_id'],
        'card': !(0, runtime_1.exists)(json, 'card') ? undefined : (0, Card_1.CardFromJSON)(json['card']),
        'directDebit': !(0, runtime_1.exists)(json, 'direct_debit') ? undefined : (0, DirectDebit_1.DirectDebitFromJSON)(json['direct_debit']),
        'ewallet': !(0, runtime_1.exists)(json, 'ewallet') ? undefined : (0, EWallet_1.EWalletFromJSON)(json['ewallet']),
        'overTheCounter': !(0, runtime_1.exists)(json, 'over_the_counter') ? undefined : (0, OverTheCounter_1.OverTheCounterFromJSON)(json['over_the_counter']),
        'virtualAccount': !(0, runtime_1.exists)(json, 'virtual_account') ? undefined : (0, VirtualAccount_1.VirtualAccountFromJSON)(json['virtual_account']),
        'qrCode': !(0, runtime_1.exists)(json, 'qr_code') ? undefined : (0, QRCode_1.QRCodeFromJSON)(json['qr_code']),
        'reusability': (0, PaymentMethodReusability_1.PaymentMethodReusabilityFromJSON)(json['reusability']),
        'status': (0, PaymentMethodStatus_1.PaymentMethodStatusFromJSON)(json['status']),
        'metadata': !(0, runtime_1.exists)(json, 'metadata') ? undefined : json['metadata'],
    };
}
exports.PaymentMethodFromJSONTyped = PaymentMethodFromJSONTyped;
function PaymentMethodToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'type': (0, PaymentMethodType_1.PaymentMethodTypeToJSON)(value.type),
        'created': value.created,
        'updated': value.updated,
        'description': value.description,
        'reference_id': value.referenceId,
        'card': (0, Card_1.CardToJSON)(value.card),
        'direct_debit': (0, DirectDebit_1.DirectDebitToJSON)(value.directDebit),
        'ewallet': (0, EWallet_1.EWalletToJSON)(value.ewallet),
        'over_the_counter': (0, OverTheCounter_1.OverTheCounterToJSON)(value.overTheCounter),
        'virtual_account': (0, VirtualAccount_1.VirtualAccountToJSON)(value.virtualAccount),
        'qr_code': (0, QRCode_1.QRCodeToJSON)(value.qrCode),
        'reusability': (0, PaymentMethodReusability_1.PaymentMethodReusabilityToJSON)(value.reusability),
        'status': (0, PaymentMethodStatus_1.PaymentMethodStatusToJSON)(value.status),
        'metadata': value.metadata,
    };
}
exports.PaymentMethodToJSON = PaymentMethodToJSON;
