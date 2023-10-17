/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
import * as runtime from '../../runtime';
import type { Capture, CaptureListResponse, CaptureParameters, PaymentRequest, PaymentRequestAuthParameters, PaymentRequestListResponse, PaymentRequestParameters } from '../models';
export interface AuthorizePaymentRequestRequest {
    paymentRequestId: string;
    idempotencyKey?: string;
    forUserId?: string;
    data?: PaymentRequestAuthParameters;
}
export interface CapturePaymentRequestRequest {
    paymentRequestId: string;
    idempotencyKey?: string;
    forUserId?: string;
    data?: CaptureParameters;
}
export interface CreatePaymentRequestRequest {
    idempotencyKey?: string;
    forUserId?: string;
    data?: PaymentRequestParameters;
}
export interface GetAllPaymentRequestsRequest {
    referenceId?: Array<string>;
    id?: Array<string>;
    customerId?: Array<string>;
    limit?: number;
    beforeId?: string;
    afterId?: string;
    idempotencyKey?: string;
    forUserId?: string;
}
export interface GetPaymentRequestByIDRequest {
    paymentRequestId: string;
    idempotencyKey?: string;
    forUserId?: string;
}
export interface GetPaymentRequestCapturesRequest {
    paymentRequestId: string;
    limit?: number;
    idempotencyKey?: string;
    forUserId?: string;
}
export interface ResendPaymentRequestAuthRequest {
    paymentRequestId: string;
    idempotencyKey?: string;
    forUserId?: string;
}
/**
 *
 */
export declare class PaymentRequestApi extends runtime.BaseAPI {
    secretKey: string;
    xenditURL: string;
    constructor({ secretKey, xenditURL }: {
        secretKey: string;
        xenditURL?: string;
    });
    /**
     * Payment Request Authorize
     * Payment Request Authorize
     */
    private authorizePaymentRequestRaw;
    /**
     * Payment Request Authorize
     * Payment Request Authorize
     */
    authorizePaymentRequest(requestParameters: AuthorizePaymentRequestRequest): Promise<PaymentRequest>;
    /**
     * Payment Request Capture
     * Payment Request Capture
     */
    private capturePaymentRequestRaw;
    /**
     * Payment Request Capture
     * Payment Request Capture
     */
    capturePaymentRequest(requestParameters: CapturePaymentRequestRequest): Promise<Capture>;
    /**
     * Create Payment Request
     * Create Payment Request
     */
    private createPaymentRequestRaw;
    /**
     * Create Payment Request
     * Create Payment Request
     */
    createPaymentRequest(requestParameters?: CreatePaymentRequestRequest): Promise<PaymentRequest>;
    /**
     * Get all payment requests by filter
     * Get all payment requests by filter
     */
    private getAllPaymentRequestsRaw;
    /**
     * Get all payment requests by filter
     * Get all payment requests by filter
     */
    getAllPaymentRequests(requestParameters?: GetAllPaymentRequestsRequest): Promise<PaymentRequestListResponse>;
    /**
     * Get payment request by ID
     * Get payment request by ID
     */
    private getPaymentRequestByIDRaw;
    /**
     * Get payment request by ID
     * Get payment request by ID
     */
    getPaymentRequestByID(requestParameters: GetPaymentRequestByIDRequest): Promise<PaymentRequest>;
    /**
     * Get Payment Request Capture
     * Get Payment Request Capture
     */
    private getPaymentRequestCapturesRaw;
    /**
     * Get Payment Request Capture
     * Get Payment Request Capture
     */
    getPaymentRequestCaptures(requestParameters: GetPaymentRequestCapturesRequest): Promise<CaptureListResponse>;
    /**
     * Payment Request Resend Auth
     * Payment Request Resend Auth
     */
    private resendPaymentRequestAuthRaw;
    /**
     * Payment Request Resend Auth
     * Payment Request Resend Auth
     */
    resendPaymentRequestAuth(requestParameters: ResendPaymentRequestAuthRequest): Promise<PaymentRequest>;
}
