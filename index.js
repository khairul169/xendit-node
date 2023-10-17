"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Xendit = exports.Balance = exports.Transaction = exports.Customer = exports.PaymentRequest = exports.PaymentMethod = exports.Payout = exports.Invoice = exports.Refund = void 0;
/* tslint:disable */
/* eslint-disable */
__exportStar(require("./runtime"), exports);
var refund_1 = require("./refund");
var refund_2 = require("./refund");
Object.defineProperty(exports, "Refund", { enumerable: true, get: function () { return refund_2.Refund; } });
var invoice_1 = require("./invoice");
var invoice_2 = require("./invoice");
Object.defineProperty(exports, "Invoice", { enumerable: true, get: function () { return invoice_2.Invoice; } });
var payout_1 = require("./payout");
var payout_2 = require("./payout");
Object.defineProperty(exports, "Payout", { enumerable: true, get: function () { return payout_2.Payout; } });
var payment_method_1 = require("./payment_method");
var payment_method_2 = require("./payment_method");
Object.defineProperty(exports, "PaymentMethod", { enumerable: true, get: function () { return payment_method_2.PaymentMethod; } });
var payment_request_1 = require("./payment_request");
var payment_request_2 = require("./payment_request");
Object.defineProperty(exports, "PaymentRequest", { enumerable: true, get: function () { return payment_request_2.PaymentRequest; } });
var customer_1 = require("./customer");
var customer_2 = require("./customer");
Object.defineProperty(exports, "Customer", { enumerable: true, get: function () { return customer_2.Customer; } });
var balance_and_transaction_1 = require("./balance_and_transaction");
var balance_and_transaction_2 = require("./balance_and_transaction");
Object.defineProperty(exports, "Transaction", { enumerable: true, get: function () { return balance_and_transaction_2.Transaction; } });
Object.defineProperty(exports, "Balance", { enumerable: true, get: function () { return balance_and_transaction_2.Balance; } });
var Xendit = /** @class */ (function () {
    function Xendit(_a) {
        var _secretKey = _a.secretKey, _xenditURL = _a.xenditURL;
        var secretKey = _secretKey || '';
        var xenditURL = _xenditURL || 'https://api.xendit.co';
        if (secretKey.startsWith('xnd_development_')) {
            console.warn("You are using Xendit's TEST secret key. Please use your LIVE secret key when you are ready to go live.");
        }
        else if (secretKey.startsWith('xnd_production_')) {
            // do nothing
        }
        else {
            console.error("Invalid secret key provided. Please use your Xendit secret key that starts with 'xnd_'");
        }
        this.opts = {
            secretKey: secretKey,
            xenditURL: xenditURL
        };
        this.Refund = new refund_1.Refund(this.opts);
        this.Invoice = new invoice_1.Invoice(this.opts);
        this.Payout = new payout_1.Payout(this.opts);
        this.PaymentMethod = new payment_method_1.PaymentMethod(this.opts);
        this.PaymentRequest = new payment_request_1.PaymentRequest(this.opts);
        this.Customer = new customer_1.Customer(this.opts);
        this.Transaction = new balance_and_transaction_1.Transaction(this.opts);
        this.Balance = new balance_and_transaction_1.Balance(this.opts);
    }
    return Xendit;
}());
exports.Xendit = Xendit;
exports.default = Xendit;