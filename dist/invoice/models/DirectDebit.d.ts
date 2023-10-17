/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
import type { DirectDebitType } from './DirectDebitType';
/**
 * An object representing direct debit details for invoices.
 * @export
 * @interface DirectDebit
 */
export interface DirectDebit {
    /**
     *
     * @type {DirectDebitType}
     * @memberof DirectDebit
     */
    directDebitType: DirectDebitType;
}
/**
 * Check if a given object implements the DirectDebit interface.
 */
export declare function instanceOfDirectDebit(value: object): boolean;
export declare function DirectDebitFromJSON(json: any): DirectDebit;
export declare function DirectDebitFromJSONTyped(json: any, ignoreDiscriminator: boolean): DirectDebit;
export declare function DirectDebitToJSON(value?: DirectDebit | null): any;
