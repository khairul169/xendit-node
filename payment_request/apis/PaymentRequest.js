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
exports.PaymentRequestApi = void 0;
var runtime = require("../../runtime");
var models_1 = require("../models");
/**
 *
 */
var PaymentRequestApi = /** @class */ (function (_super) {
    __extends(PaymentRequestApi, _super);
    function PaymentRequestApi(_a) {
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
     * Payment Request Authorize
     * Payment Request Authorize
     */
    PaymentRequestApi.prototype.authorizePaymentRequestRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.paymentRequestId === null || requestParameters.paymentRequestId === undefined) {
                            throw new runtime.RequiredError('paymentRequestId', 'Required parameter requestParameters.paymentRequestId was null or undefined when calling authorizePaymentRequest.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters["Authorization"] = "Basic " + btoa(this.secretKey + ":");
                        headerParameters['Content-Type'] = 'application/json';
                        if (requestParameters.idempotencyKey !== undefined && requestParameters.idempotencyKey !== null) {
                            headerParameters['idempotency-key'] = String(requestParameters.idempotencyKey);
                        }
                        if (requestParameters.forUserId !== undefined && requestParameters.forUserId !== null) {
                            headerParameters['for-user-id'] = String(requestParameters.forUserId);
                        }
                        return [4 /*yield*/, this.request({
                                path: "/payment_requests/{paymentRequestId}/auth".replace("{".concat("paymentRequestId", "}"), encodeURIComponent(String(requestParameters.paymentRequestId))),
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                                body: (0, models_1.PaymentRequestAuthParametersToJSON)(requestParameters.data),
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, models_1.PaymentRequestFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * Payment Request Authorize
     * Payment Request Authorize
     */
    PaymentRequestApi.prototype.authorizePaymentRequest = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authorizePaymentRequestRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Payment Request Capture
     * Payment Request Capture
     */
    PaymentRequestApi.prototype.capturePaymentRequestRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.paymentRequestId === null || requestParameters.paymentRequestId === undefined) {
                            throw new runtime.RequiredError('paymentRequestId', 'Required parameter requestParameters.paymentRequestId was null or undefined when calling capturePaymentRequest.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters["Authorization"] = "Basic " + btoa(this.secretKey + ":");
                        headerParameters['Content-Type'] = 'application/json';
                        if (requestParameters.idempotencyKey !== undefined && requestParameters.idempotencyKey !== null) {
                            headerParameters['idempotency-key'] = String(requestParameters.idempotencyKey);
                        }
                        if (requestParameters.forUserId !== undefined && requestParameters.forUserId !== null) {
                            headerParameters['for-user-id'] = String(requestParameters.forUserId);
                        }
                        return [4 /*yield*/, this.request({
                                path: "/payment_requests/{paymentRequestId}/captures".replace("{".concat("paymentRequestId", "}"), encodeURIComponent(String(requestParameters.paymentRequestId))),
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                                body: (0, models_1.CaptureParametersToJSON)(requestParameters.data),
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, models_1.CaptureFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * Payment Request Capture
     * Payment Request Capture
     */
    PaymentRequestApi.prototype.capturePaymentRequest = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.capturePaymentRequestRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Create Payment Request
     * Create Payment Request
     */
    PaymentRequestApi.prototype.createPaymentRequestRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters["Authorization"] = "Basic " + btoa(this.secretKey + ":");
                        headerParameters['Content-Type'] = 'application/json';
                        if (requestParameters.idempotencyKey !== undefined && requestParameters.idempotencyKey !== null) {
                            headerParameters['idempotency-key'] = String(requestParameters.idempotencyKey);
                        }
                        if (requestParameters.forUserId !== undefined && requestParameters.forUserId !== null) {
                            headerParameters['for-user-id'] = String(requestParameters.forUserId);
                        }
                        return [4 /*yield*/, this.request({
                                path: "/payment_requests",
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                                body: (0, models_1.PaymentRequestParametersToJSON)(requestParameters.data),
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, models_1.PaymentRequestFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * Create Payment Request
     * Create Payment Request
     */
    PaymentRequestApi.prototype.createPaymentRequest = function (requestParameters) {
        if (requestParameters === void 0) { requestParameters = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createPaymentRequestRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get all payment requests by filter
     * Get all payment requests by filter
     */
    PaymentRequestApi.prototype.getAllPaymentRequestsRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParameters = {};
                        if (requestParameters.referenceId) {
                            queryParameters['reference_id'] = requestParameters.referenceId;
                        }
                        if (requestParameters.id) {
                            queryParameters['id'] = requestParameters.id;
                        }
                        if (requestParameters.customerId) {
                            queryParameters['customer_id'] = requestParameters.customerId;
                        }
                        if (requestParameters.limit !== undefined) {
                            queryParameters['limit'] = requestParameters.limit;
                        }
                        if (requestParameters.beforeId !== undefined) {
                            queryParameters['before_id'] = requestParameters.beforeId;
                        }
                        if (requestParameters.afterId !== undefined) {
                            queryParameters['after_id'] = requestParameters.afterId;
                        }
                        headerParameters = {};
                        headerParameters["Authorization"] = "Basic " + btoa(this.secretKey + ":");
                        if (requestParameters.idempotencyKey !== undefined && requestParameters.idempotencyKey !== null) {
                            headerParameters['idempotency-key'] = String(requestParameters.idempotencyKey);
                        }
                        if (requestParameters.forUserId !== undefined && requestParameters.forUserId !== null) {
                            headerParameters['for-user-id'] = String(requestParameters.forUserId);
                        }
                        return [4 /*yield*/, this.request({
                                path: "/payment_requests",
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, models_1.PaymentRequestListResponseFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * Get all payment requests by filter
     * Get all payment requests by filter
     */
    PaymentRequestApi.prototype.getAllPaymentRequests = function (requestParameters) {
        if (requestParameters === void 0) { requestParameters = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllPaymentRequestsRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get payment request by ID
     * Get payment request by ID
     */
    PaymentRequestApi.prototype.getPaymentRequestByIDRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.paymentRequestId === null || requestParameters.paymentRequestId === undefined) {
                            throw new runtime.RequiredError('paymentRequestId', 'Required parameter requestParameters.paymentRequestId was null or undefined when calling getPaymentRequestByID.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters["Authorization"] = "Basic " + btoa(this.secretKey + ":");
                        if (requestParameters.idempotencyKey !== undefined && requestParameters.idempotencyKey !== null) {
                            headerParameters['idempotency-key'] = String(requestParameters.idempotencyKey);
                        }
                        if (requestParameters.forUserId !== undefined && requestParameters.forUserId !== null) {
                            headerParameters['for-user-id'] = String(requestParameters.forUserId);
                        }
                        return [4 /*yield*/, this.request({
                                path: "/payment_requests/{paymentRequestId}".replace("{".concat("paymentRequestId", "}"), encodeURIComponent(String(requestParameters.paymentRequestId))),
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, models_1.PaymentRequestFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * Get payment request by ID
     * Get payment request by ID
     */
    PaymentRequestApi.prototype.getPaymentRequestByID = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPaymentRequestByIDRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get Payment Request Capture
     * Get Payment Request Capture
     */
    PaymentRequestApi.prototype.getPaymentRequestCapturesRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.paymentRequestId === null || requestParameters.paymentRequestId === undefined) {
                            throw new runtime.RequiredError('paymentRequestId', 'Required parameter requestParameters.paymentRequestId was null or undefined when calling getPaymentRequestCaptures.');
                        }
                        queryParameters = {};
                        if (requestParameters.limit !== undefined) {
                            queryParameters['limit'] = requestParameters.limit;
                        }
                        headerParameters = {};
                        headerParameters["Authorization"] = "Basic " + btoa(this.secretKey + ":");
                        if (requestParameters.idempotencyKey !== undefined && requestParameters.idempotencyKey !== null) {
                            headerParameters['idempotency-key'] = String(requestParameters.idempotencyKey);
                        }
                        if (requestParameters.forUserId !== undefined && requestParameters.forUserId !== null) {
                            headerParameters['for-user-id'] = String(requestParameters.forUserId);
                        }
                        return [4 /*yield*/, this.request({
                                path: "/payment_requests/{paymentRequestId}/captures".replace("{".concat("paymentRequestId", "}"), encodeURIComponent(String(requestParameters.paymentRequestId))),
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, models_1.CaptureListResponseFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * Get Payment Request Capture
     * Get Payment Request Capture
     */
    PaymentRequestApi.prototype.getPaymentRequestCaptures = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPaymentRequestCapturesRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Payment Request Resend Auth
     * Payment Request Resend Auth
     */
    PaymentRequestApi.prototype.resendPaymentRequestAuthRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.paymentRequestId === null || requestParameters.paymentRequestId === undefined) {
                            throw new runtime.RequiredError('paymentRequestId', 'Required parameter requestParameters.paymentRequestId was null or undefined when calling resendPaymentRequestAuth.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters["Authorization"] = "Basic " + btoa(this.secretKey + ":");
                        if (requestParameters.idempotencyKey !== undefined && requestParameters.idempotencyKey !== null) {
                            headerParameters['idempotency-key'] = String(requestParameters.idempotencyKey);
                        }
                        if (requestParameters.forUserId !== undefined && requestParameters.forUserId !== null) {
                            headerParameters['for-user-id'] = String(requestParameters.forUserId);
                        }
                        return [4 /*yield*/, this.request({
                                path: "/payment_requests/{paymentRequestId}/auth/resend".replace("{".concat("paymentRequestId", "}"), encodeURIComponent(String(requestParameters.paymentRequestId))),
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, models_1.PaymentRequestFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * Payment Request Resend Auth
     * Payment Request Resend Auth
     */
    PaymentRequestApi.prototype.resendPaymentRequestAuth = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resendPaymentRequestAuthRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return PaymentRequestApi;
}(runtime.BaseAPI));
exports.PaymentRequestApi = PaymentRequestApi;