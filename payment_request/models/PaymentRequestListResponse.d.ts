/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
import type { PaymentRequest } from './PaymentRequest';
/**
 *
 * @export
 * @interface PaymentRequestListResponse
 */
export interface PaymentRequestListResponse {
    /**
     *
     * @type {Array<PaymentRequest>}
     * @memberof PaymentRequestListResponse
     */
    data: Array<PaymentRequest>;
    /**
     *
     * @type {boolean}
     * @memberof PaymentRequestListResponse
     */
    hasMore: boolean;
}
/**
 * Check if a given object implements the PaymentRequestListResponse interface.
 */
export declare function instanceOfPaymentRequestListResponse(value: object): boolean;
export declare function PaymentRequestListResponseFromJSON(json: any): PaymentRequestListResponse;
export declare function PaymentRequestListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentRequestListResponse;
export declare function PaymentRequestListResponseToJSON(value?: PaymentRequestListResponse | null): any;