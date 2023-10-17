"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInvoiceRequestToJSON = exports.CreateInvoiceRequestFromJSONTyped = exports.CreateInvoiceRequestFromJSON = exports.instanceOfCreateInvoiceRequest = void 0;
var runtime_1 = require("../../runtime");
var CustomerObject_1 = require("./CustomerObject");
var InvoiceFee_1 = require("./InvoiceFee");
var InvoiceItem_1 = require("./InvoiceItem");
var NotificationPreference_1 = require("./NotificationPreference");
/**
 * Check if a given object implements the CreateInvoiceRequest interface.
 */
function instanceOfCreateInvoiceRequest(value) {
    var isInstance = true;
    isInstance = isInstance && "externalId" in value;
    isInstance = isInstance && "amount" in value;
    return isInstance;
}
exports.instanceOfCreateInvoiceRequest = instanceOfCreateInvoiceRequest;
function CreateInvoiceRequestFromJSON(json) {
    return CreateInvoiceRequestFromJSONTyped(json, false);
}
exports.CreateInvoiceRequestFromJSON = CreateInvoiceRequestFromJSON;
function CreateInvoiceRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'externalId': json['external_id'],
        'amount': json['amount'],
        'payerEmail': !(0, runtime_1.exists)(json, 'payer_email') ? undefined : json['payer_email'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'invoiceDuration': !(0, runtime_1.exists)(json, 'invoice_duration') ? undefined : json['invoice_duration'],
        'callbackVirtualAccountId': !(0, runtime_1.exists)(json, 'callback_virtual_account_id') ? undefined : json['callback_virtual_account_id'],
        'shouldSendEmail': !(0, runtime_1.exists)(json, 'should_send_email') ? undefined : json['should_send_email'],
        'customer': !(0, runtime_1.exists)(json, 'customer') ? undefined : (0, CustomerObject_1.CustomerObjectFromJSON)(json['customer']),
        'customerNotificationPreference': !(0, runtime_1.exists)(json, 'customer_notification_preference') ? undefined : (0, NotificationPreference_1.NotificationPreferenceFromJSON)(json['customer_notification_preference']),
        'successRedirectUrl': !(0, runtime_1.exists)(json, 'success_redirect_url') ? undefined : json['success_redirect_url'],
        'failureRedirectUrl': !(0, runtime_1.exists)(json, 'failure_redirect_url') ? undefined : json['failure_redirect_url'],
        'paymentMethods': !(0, runtime_1.exists)(json, 'payment_methods') ? undefined : json['payment_methods'],
        'midLabel': !(0, runtime_1.exists)(json, 'mid_label') ? undefined : json['mid_label'],
        'shouldAuthenticateCreditCard': !(0, runtime_1.exists)(json, 'should_authenticate_credit_card') ? undefined : json['should_authenticate_credit_card'],
        'currency': !(0, runtime_1.exists)(json, 'currency') ? undefined : json['currency'],
        'reminderTime': !(0, runtime_1.exists)(json, 'reminder_time') ? undefined : json['reminder_time'],
        'local': !(0, runtime_1.exists)(json, 'local') ? undefined : json['local'],
        'reminderTimeUnit': !(0, runtime_1.exists)(json, 'reminder_time_unit') ? undefined : json['reminder_time_unit'],
        'items': !(0, runtime_1.exists)(json, 'items') ? undefined : (json['items'].map(InvoiceItem_1.InvoiceItemFromJSON)),
        'fees': !(0, runtime_1.exists)(json, 'fees') ? undefined : (json['fees'].map(InvoiceFee_1.InvoiceFeeFromJSON)),
    };
}
exports.CreateInvoiceRequestFromJSONTyped = CreateInvoiceRequestFromJSONTyped;
function CreateInvoiceRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'external_id': value.externalId,
        'amount': value.amount,
        'payer_email': value.payerEmail,
        'description': value.description,
        'invoice_duration': value.invoiceDuration,
        'callback_virtual_account_id': value.callbackVirtualAccountId,
        'should_send_email': value.shouldSendEmail,
        'customer': (0, CustomerObject_1.CustomerObjectToJSON)(value.customer),
        'customer_notification_preference': (0, NotificationPreference_1.NotificationPreferenceToJSON)(value.customerNotificationPreference),
        'success_redirect_url': value.successRedirectUrl,
        'failure_redirect_url': value.failureRedirectUrl,
        'payment_methods': value.paymentMethods,
        'mid_label': value.midLabel,
        'should_authenticate_credit_card': value.shouldAuthenticateCreditCard,
        'currency': value.currency,
        'reminder_time': value.reminderTime,
        'local': value.local,
        'reminder_time_unit': value.reminderTimeUnit,
        'items': value.items === undefined ? undefined : (value.items.map(InvoiceItem_1.InvoiceItemToJSON)),
        'fees': value.fees === undefined ? undefined : (value.fees.map(InvoiceFee_1.InvoiceFeeToJSON)),
    };
}
exports.CreateInvoiceRequestToJSON = CreateInvoiceRequestToJSON;