/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
import type { AddressObject } from './AddressObject';
/**
 * An object representing a customer with various properties, including addresses.
 * @export
 * @interface CustomerObject
 */
export interface CustomerObject {
    /**
     * The unique identifier for the customer.
     * @type {string}
     * @memberof CustomerObject
     */
    id?: string | null;
    /**
     * The customer's phone number.
     * @type {string}
     * @memberof CustomerObject
     */
    phoneNumber?: string | null;
    /**
     * The customer's given names or first names.
     * @type {string}
     * @memberof CustomerObject
     */
    givenNames?: string | null;
    /**
     * The customer's surname or last name.
     * @type {string}
     * @memberof CustomerObject
     */
    surname?: string | null;
    /**
     * The customer's email address.
     * @type {string}
     * @memberof CustomerObject
     */
    email?: string | null;
    /**
     * The customer's mobile phone number.
     * @type {string}
     * @memberof CustomerObject
     */
    mobileNumber?: string | null;
    /**
     * An additional identifier for the customer.
     * @type {string}
     * @memberof CustomerObject
     */
    customerId?: string | null;
    /**
     * An array of addresses associated with the customer.
     * @type {Array<AddressObject>}
     * @memberof CustomerObject
     */
    addresses?: Array<AddressObject> | null;
}
/**
 * Check if a given object implements the CustomerObject interface.
 */
export declare function instanceOfCustomerObject(value: object): boolean;
export declare function CustomerObjectFromJSON(json: any): CustomerObject;
export declare function CustomerObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerObject;
export declare function CustomerObjectToJSON(value?: CustomerObject | null): any;