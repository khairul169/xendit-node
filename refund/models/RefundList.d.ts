/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
import type { Refund } from './Refund';
/**
 *
 * @export
 * @interface RefundList
 */
export interface RefundList {
    /**
     *
     * @type {Array<Refund>}
     * @memberof RefundList
     */
    data: Array<Refund>;
    /**
     *
     * @type {boolean}
     * @memberof RefundList
     */
    hasMore?: boolean;
}
/**
 * Check if a given object implements the RefundList interface.
 */
export declare function instanceOfRefundList(value: object): boolean;
export declare function RefundListFromJSON(json: any): RefundList;
export declare function RefundListFromJSONTyped(json: any, ignoreDiscriminator: boolean): RefundList;
export declare function RefundListToJSON(value?: RefundList | null): any;