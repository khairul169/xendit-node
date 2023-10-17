"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodApi = void 0;
var runtime = require("../../runtime");
var models_1 = require("../models");
/**
 *
 */
var PaymentMethodApi = /** @class */ (function (_super) {
    __extends(PaymentMethodApi, _super);
    function PaymentMethodApi(_a) {
        var secretKey = _a.secretKey, xenditURL = _a.xenditURL;
        var _this = this;
        var conf = new runtime.Configuration({
            basePath: xenditURL || 'https://api.xendit.co'
        });
        _this = _super.call(this, conf) || this;
        _this.secretKey = "";
        _this.xenditURL = "";
        _this.secretKey = secretKey;
        return _this;
    }
    /**
     * This endpoint validates a payment method linking OTP
     * Validate a payment method\'s linking OTP
     */
    PaymentMethodApi.prototype.authPaymentMethodRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.paymentMethodId === null || requestParameters.paymentMethodId === undefined) {
                            throw new runtime.RequiredError('paymentMethodId', 'Required parameter requestParameters.paymentMethodId was null or undefined when calling authPaymentMethod.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters["Authorization"] = "Basic " + btoa(this.secretKey + ":");
                        headerParameters['Content-Type'] = 'application/json';
                        if (requestParameters.idempotencyKey !== undefined && requestParameters.idempotencyKey !== null) {
                            headerParameters['idempotency-key'] = String(requestParameters.idempotencyKey);
                        }
                        return [4 /*yield*/, this.request({
                                path: "/v2/payment_methods/{paymentMethodId}/auth".replace("{".concat("paymentMethodId", "}"), encodeURIComponent(String(requestParameters.paymentMethodId))),
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                                body: (0, models_1.PaymentMethodAuthParametersToJSON)(requestParameters.data),
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, models_1.PaymentMethodFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * This endpoint validates a payment method linking OTP
     * Validate a payment method\'s linking OTP
     */
    PaymentMethodApi.prototype.authPaymentMethod = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authPaymentMethodRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This endpoint initiates creation of payment method
     * Creates payment method
     */
    PaymentMethodApi.prototype.createPaymentMethodRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters["Authorization"] = "Basic " + btoa(this.secretKey + ":");
                        headerParameters['Content-Type'] = 'application/json';
                        return [4 /*yield*/, this.request({
                                path: "/v2/payment_methods",
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                                body: (0, models_1.PaymentMethodParametersToJSON)(requestParameters.data),
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, models_1.PaymentMethodFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * This endpoint initiates creation of payment method
     * Creates payment method
     */
    PaymentMethodApi.prototype.createPaymentMethod = function (requestParameters) {
        if (requestParameters === void 0) { requestParameters = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createPaymentMethodRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This endpoint expires a payment method and performs unlinking if necessary
     * Expires a payment method
     */
    PaymentMethodApi.prototype.expirePaymentMethodRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.paymentMethodId === null || requestParameters.paymentMethodId === undefined) {
                            throw new runtime.RequiredError('paymentMethodId', 'Required parameter requestParameters.paymentMethodId was null or undefined when calling expirePaymentMethod.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters["Authorization"] = "Basic " + btoa(this.secretKey + ":");
                        headerParameters['Content-Type'] = 'application/json';
                        if (requestParameters.idempotencyKey !== undefined && requestParameters.idempotencyKey !== null) {
                            headerParameters['idempotency-key'] = String(requestParameters.idempotencyKey);
                        }
                        return [4 /*yield*/, this.request({
                                path: "/v2/payment_methods/{paymentMethodId}/expire".replace("{".concat("paymentMethodId", "}"), encodeURIComponent(String(requestParameters.paymentMethodId))),
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                                body: (0, models_1.PaymentMethodExpireParametersToJSON)(requestParameters.data),
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, models_1.PaymentMethodFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * This endpoint expires a payment method and performs unlinking if necessary
     * Expires a payment method
     */
    PaymentMethodApi.prototype.expirePaymentMethod = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.expirePaymentMethodRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get all payment methods by filters
     * Get all payment methods by filters
     */
    PaymentMethodApi.prototype.getAllPaymentMethodsRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParameters = {};
                        if (requestParameters.id) {
                            queryParameters['id'] = requestParameters.id;
                        }
                        if (requestParameters.type) {
                            queryParameters['type'] = requestParameters.type;
                        }
                        if (requestParameters.status) {
                            queryParameters['status'] = requestParameters.status;
                        }
                        if (requestParameters.reusability !== undefined) {
                            queryParameters['reusability'] = requestParameters.reusability;
                        }
                        if (requestParameters.customerId !== undefined) {
                            queryParameters['customer_id'] = requestParameters.customerId;
                        }
                        if (requestParameters.referenceId !== undefined) {
                            queryParameters['reference_id'] = requestParameters.referenceId;
                        }
                        if (requestParameters.afterId !== undefined) {
                            queryParameters['after_id'] = requestParameters.afterId;
                        }
                        if (requestParameters.beforeId !== undefined) {
                            queryParameters['before_id'] = requestParameters.beforeId;
                        }
                        if (requestParameters.limit !== undefined) {
                            queryParameters['limit'] = requestParameters.limit;
                        }
                        headerParameters = {};
                        headerParameters["Authorization"] = "Basic " + btoa(this.secretKey + ":");
                        if (requestParameters.idempotencyKey !== undefined && requestParameters.idempotencyKey !== null) {
                            headerParameters['idempotency-key'] = String(requestParameters.idempotencyKey);
                        }
                        return [4 /*yield*/, this.request({
                                path: "/v2/payment_methods",
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, models_1.PaymentMethodListFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * Get all payment methods by filters
     * Get all payment methods by filters
     */
    PaymentMethodApi.prototype.getAllPaymentMethods = function (requestParameters) {
        if (requestParameters === void 0) { requestParameters = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllPaymentMethodsRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get payment method by ID
     * Get payment method by ID
     */
    PaymentMethodApi.prototype.getPaymentMethodByIDRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.paymentMethodId === null || requestParameters.paymentMethodId === undefined) {
                            throw new runtime.RequiredError('paymentMethodId', 'Required parameter requestParameters.paymentMethodId was null or undefined when calling getPaymentMethodByID.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters["Authorization"] = "Basic " + btoa(this.secretKey + ":");
                        if (requestParameters.idempotencyKey !== undefined && requestParameters.idempotencyKey !== null) {
                            headerParameters['idempotency-key'] = String(requestParameters.idempotencyKey);
                        }
                        return [4 /*yield*/, this.request({
                                path: "/v2/payment_methods/{paymentMethodId}".replace("{".concat("paymentMethodId", "}"), encodeURIComponent(String(requestParameters.paymentMethodId))),
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, models_1.PaymentMethodFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * Get payment method by ID
     * Get payment method by ID
     */
    PaymentMethodApi.prototype.getPaymentMethodByID = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPaymentMethodByIDRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns payments with matching PaymentMethodID.
     * Returns payments with matching PaymentMethodID.
     */
    PaymentMethodApi.prototype.getPaymentsByPaymentMethodIdRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.paymentMethodId === null || requestParameters.paymentMethodId === undefined) {
                            throw new runtime.RequiredError('paymentMethodId', 'Required parameter requestParameters.paymentMethodId was null or undefined when calling getPaymentsByPaymentMethodId.');
                        }
                        queryParameters = {};
                        if (requestParameters.paymentRequestId) {
                            queryParameters['payment_request_id'] = requestParameters.paymentRequestId;
                        }
                        if (requestParameters.paymentMethodId2) {
                            queryParameters['payment_method_id'] = requestParameters.paymentMethodId2;
                        }
                        if (requestParameters.referenceId) {
                            queryParameters['reference_id'] = requestParameters.referenceId;
                        }
                        if (requestParameters.paymentMethodType) {
                            queryParameters['payment_method_type'] = requestParameters.paymentMethodType;
                        }
                        if (requestParameters.channelCode) {
                            queryParameters['channel_code'] = requestParameters.channelCode;
                        }
                        if (requestParameters.status) {
                            queryParameters['status'] = requestParameters.status;
                        }
                        if (requestParameters.currency) {
                            queryParameters['currency'] = requestParameters.currency;
                        }
                        if (requestParameters.createdGte !== undefined) {
                            queryParameters['created[gte]'] = requestParameters.createdGte.toISOString();
                        }
                        if (requestParameters.createdLte !== undefined) {
                            queryParameters['created[lte]'] = requestParameters.createdLte.toISOString();
                        }
                        if (requestParameters.updatedGte !== undefined) {
                            queryParameters['updated[gte]'] = requestParameters.updatedGte.toISOString();
                        }
                        if (requestParameters.updatedLte !== undefined) {
                            queryParameters['updated[lte]'] = requestParameters.updatedLte.toISOString();
                        }
                        if (requestParameters.limit !== undefined) {
                            queryParameters['limit'] = requestParameters.limit;
                        }
                        headerParameters = {};
                        headerParameters["Authorization"] = "Basic " + btoa(this.secretKey + ":");
                        if (requestParameters.idempotencyKey !== undefined && requestParameters.idempotencyKey !== null) {
                            headerParameters['idempotency-key'] = String(requestParameters.idempotencyKey);
                        }
                        return [4 /*yield*/, this.request({
                                path: "/v2/payment_methods/{paymentMethodId}/payments".replace("{".concat("paymentMethodId", "}"), encodeURIComponent(String(requestParameters.paymentMethodId))),
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response)];
                }
            });
        });
    };
    /**
     * Returns payments with matching PaymentMethodID.
     * Returns payments with matching PaymentMethodID.
     */
    PaymentMethodApi.prototype.getPaymentsByPaymentMethodId = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPaymentsByPaymentMethodIdRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This endpoint is used to toggle the ```status``` of an e-Wallet or a Direct Debit payment method to ```ACTIVE``` or ```INACTIVE```.  This is also used to update the details of an Over-the-Counter or a Virtual Account payment method.
     * Patch payment methods
     */
    PaymentMethodApi.prototype.patchPaymentMethodRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.paymentMethodId === null || requestParameters.paymentMethodId === undefined) {
                            throw new runtime.RequiredError('paymentMethodId', 'Required parameter requestParameters.paymentMethodId was null or undefined when calling patchPaymentMethod.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters["Authorization"] = "Basic " + btoa(this.secretKey + ":");
                        headerParameters['Content-Type'] = 'application/json';
                        if (requestParameters.idempotencyKey !== undefined && requestParameters.idempotencyKey !== null) {
                            headerParameters['idempotency-key'] = String(requestParameters.idempotencyKey);
                        }
                        return [4 /*yield*/, this.request({
                                path: "/v2/payment_methods/{paymentMethodId}".replace("{".concat("paymentMethodId", "}"), encodeURIComponent(String(requestParameters.paymentMethodId))),
                                method: 'PATCH',
                                headers: headerParameters,
                                query: queryParameters,
                                body: (0, models_1.PaymentMethodUpdateParametersToJSON)(requestParameters.data),
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, models_1.PaymentMethodFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * This endpoint is used to toggle the ```status``` of an e-Wallet or a Direct Debit payment method to ```ACTIVE``` or ```INACTIVE```.  This is also used to update the details of an Over-the-Counter or a Virtual Account payment method.
     * Patch payment methods
     */
    PaymentMethodApi.prototype.patchPaymentMethod = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.patchPaymentMethodRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Makes payment with matching PaymentMethodID.
     * Makes payment with matching PaymentMethodID.
     */
    PaymentMethodApi.prototype.simulatePaymentRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.paymentMethodId === null || requestParameters.paymentMethodId === undefined) {
                            throw new runtime.RequiredError('paymentMethodId', 'Required parameter requestParameters.paymentMethodId was null or undefined when calling simulatePayment.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters["Authorization"] = "Basic " + btoa(this.secretKey + ":");
                        headerParameters['Content-Type'] = 'application/json';
                        if (requestParameters.idempotencyKey !== undefined && requestParameters.idempotencyKey !== null) {
                            headerParameters['idempotency-key'] = String(requestParameters.idempotencyKey);
                        }
                        return [4 /*yield*/, this.request({
                                path: "/v2/payment_methods/{paymentMethodId}/payments/simulate".replace("{".concat("paymentMethodId", "}"), encodeURIComponent(String(requestParameters.paymentMethodId))),
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                                body: (0, models_1.SimulatePaymentRequestToJSON)(requestParameters.data),
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.VoidApiResponse(response)];
                }
            });
        });
    };
    /**
     * Makes payment with matching PaymentMethodID.
     * Makes payment with matching PaymentMethodID.
     */
    PaymentMethodApi.prototype.simulatePayment = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.simulatePaymentRaw(requestParameters)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return PaymentMethodApi;
}(runtime.BaseAPI));
exports.PaymentMethodApi = PaymentMethodApi;