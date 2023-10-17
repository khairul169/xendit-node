/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
import type { RetailOutletName } from './RetailOutletName';
/**
 * An object representing retail outlet details for invoices.
 * @export
 * @interface RetailOutlet
 */
export interface RetailOutlet {
    /**
     *
     * @type {RetailOutletName}
     * @memberof RetailOutlet
     */
    retailOutletName: RetailOutletName;
    /**
     * The payment code.
     * @type {string}
     * @memberof RetailOutlet
     */
    paymentCode?: string;
    /**
     * The transfer amount.
     * @type {number}
     * @memberof RetailOutlet
     */
    transferAmount?: number;
    /**
     * The name of the merchant.
     * @type {string}
     * @memberof RetailOutlet
     */
    merchantName?: string;
}
/**
 * Check if a given object implements the RetailOutlet interface.
 */
export declare function instanceOfRetailOutlet(value: object): boolean;
export declare function RetailOutletFromJSON(json: any): RetailOutlet;
export declare function RetailOutletFromJSONTyped(json: any, ignoreDiscriminator: boolean): RetailOutlet;
export declare function RetailOutletToJSON(value?: RetailOutlet | null): any;
