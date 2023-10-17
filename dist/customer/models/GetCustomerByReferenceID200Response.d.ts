/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
import type { Customer } from './Customer';
/**
 *
 * @export
 * @interface GetCustomerByReferenceID200Response
 */
export interface GetCustomerByReferenceID200Response {
    /**
     *
     * @type {boolean}
     * @memberof GetCustomerByReferenceID200Response
     */
    hasMore?: boolean;
    /**
     *
     * @type {Array<Customer>}
     * @memberof GetCustomerByReferenceID200Response
     */
    data?: Array<Customer>;
}
/**
 * Check if a given object implements the GetCustomerByReferenceID200Response interface.
 */
export declare function instanceOfGetCustomerByReferenceID200Response(value: object): boolean;
export declare function GetCustomerByReferenceID200ResponseFromJSON(json: any): GetCustomerByReferenceID200Response;
export declare function GetCustomerByReferenceID200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCustomerByReferenceID200Response;
export declare function GetCustomerByReferenceID200ResponseToJSON(value?: GetCustomerByReferenceID200Response | null): any;
