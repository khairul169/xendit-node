"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionResponseToJSON = exports.TransactionResponseFromJSONTyped = exports.TransactionResponseFromJSON = exports.instanceOfTransactionResponse = exports.TransactionResponseSettlementStatusEnum = exports.TransactionResponseCashflowEnum = void 0;
var runtime_1 = require("../../runtime");
var ChannelsCategories_1 = require("./ChannelsCategories");
var Currency_1 = require("./Currency");
var FeeResponse_1 = require("./FeeResponse");
var TransactionResponseType_1 = require("./TransactionResponseType");
var TransactionStatuses_1 = require("./TransactionStatuses");
/**
 * @export
 */
exports.TransactionResponseCashflowEnum = {
    In: 'MONEY_IN',
    Out: 'MONEY_OUT'
};
/**
 * @export
 */
exports.TransactionResponseSettlementStatusEnum = {
    Pending: 'PENDING',
    Settled: 'SETTLED'
};
/**
 * Check if a given object implements the TransactionResponse interface.
 */
function instanceOfTransactionResponse(value) {
    var isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "productId" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "channelCategory" in value;
    isInstance = isInstance && "channelCode" in value;
    isInstance = isInstance && "accountIdentifier" in value;
    isInstance = isInstance && "referenceId" in value;
    isInstance = isInstance && "currency" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "cashflow" in value;
    isInstance = isInstance && "businessId" in value;
    isInstance = isInstance && "fee" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "updated" in value;
    return isInstance;
}
exports.instanceOfTransactionResponse = instanceOfTransactionResponse;
function TransactionResponseFromJSON(json) {
    return TransactionResponseFromJSONTyped(json, false);
}
exports.TransactionResponseFromJSON = TransactionResponseFromJSON;
function TransactionResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'productId': json['product_id'],
        'type': (0, TransactionResponseType_1.TransactionResponseTypeFromJSON)(json['type']),
        'status': (0, TransactionStatuses_1.TransactionStatusesFromJSON)(json['status']),
        'channelCategory': (0, ChannelsCategories_1.ChannelsCategoriesFromJSON)(json['channel_category']),
        'channelCode': json['channel_code'],
        'accountIdentifier': json['account_identifier'],
        'referenceId': json['reference_id'],
        'currency': (0, Currency_1.CurrencyFromJSON)(json['currency']),
        'amount': json['amount'],
        'cashflow': json['cashflow'],
        'settlementStatus': !(0, runtime_1.exists)(json, 'settlement_status') ? undefined : json['settlement_status'],
        'estimatedSettlementTime': !(0, runtime_1.exists)(json, 'estimated_settlement_time') ? undefined : (json['estimated_settlement_time'] === null ? null : new Date(json['estimated_settlement_time'])),
        'businessId': json['business_id'],
        'fee': (0, FeeResponse_1.FeeResponseFromJSON)(json['fee']),
        'created': (new Date(json['created'])),
        'updated': (new Date(json['updated'])),
    };
}
exports.TransactionResponseFromJSONTyped = TransactionResponseFromJSONTyped;
function TransactionResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'product_id': value.productId,
        'type': (0, TransactionResponseType_1.TransactionResponseTypeToJSON)(value.type),
        'status': (0, TransactionStatuses_1.TransactionStatusesToJSON)(value.status),
        'channel_category': (0, ChannelsCategories_1.ChannelsCategoriesToJSON)(value.channelCategory),
        'channel_code': value.channelCode,
        'account_identifier': value.accountIdentifier,
        'reference_id': value.referenceId,
        'currency': (0, Currency_1.CurrencyToJSON)(value.currency),
        'amount': value.amount,
        'cashflow': value.cashflow,
        'settlement_status': value.settlementStatus,
        'estimated_settlement_time': value.estimatedSettlementTime === undefined ? undefined : (value.estimatedSettlementTime === null ? null : value.estimatedSettlementTime.toISOString()),
        'business_id': value.businessId,
        'fee': (0, FeeResponse_1.FeeResponseToJSON)(value.fee),
        'created': (value.created.toISOString()),
        'updated': (value.updated.toISOString()),
    };
}
exports.TransactionResponseToJSON = TransactionResponseToJSON;
