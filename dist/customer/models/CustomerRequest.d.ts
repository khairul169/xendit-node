/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
import type { AddressRequest } from './AddressRequest';
import type { BusinessDetail } from './BusinessDetail';
import type { IdentityAccountRequest } from './IdentityAccountRequest';
import type { IndividualDetail } from './IndividualDetail';
import type { KYCDocumentRequest } from './KYCDocumentRequest';
/**
 *
 * @export
 * @interface CustomerRequest
 */
export interface CustomerRequest {
    /**
     * Entity's name for this client
     * @type {string}
     * @memberof CustomerRequest
     */
    clientName?: string;
    /**
     * Merchant's reference of this end customer, eg Merchant's user's id. Must be unique.
     * @type {string}
     * @memberof CustomerRequest
     */
    referenceId: string;
    /**
     *
     * @type {string}
     * @memberof CustomerRequest
     */
    type?: CustomerRequestTypeEnum;
    /**
     *
     * @type {IndividualDetail}
     * @memberof CustomerRequest
     */
    individualDetail?: IndividualDetail | null;
    /**
     *
     * @type {BusinessDetail}
     * @memberof CustomerRequest
     */
    businessDetail?: BusinessDetail | null;
    /**
     *
     * @type {string}
     * @memberof CustomerRequest
     */
    description?: string | null;
    /**
     *
     * @type {string}
     * @memberof CustomerRequest
     */
    email?: string;
    /**
     *
     * @type {string}
     * @memberof CustomerRequest
     */
    mobileNumber?: string;
    /**
     *
     * @type {string}
     * @memberof CustomerRequest
     */
    phoneNumber?: string;
    /**
     *
     * @type {Array<AddressRequest>}
     * @memberof CustomerRequest
     */
    addresses?: Array<AddressRequest>;
    /**
     *
     * @type {Array<IdentityAccountRequest>}
     * @memberof CustomerRequest
     */
    identityAccounts?: Array<IdentityAccountRequest>;
    /**
     *
     * @type {Array<KYCDocumentRequest>}
     * @memberof CustomerRequest
     */
    kycDocuments?: Array<KYCDocumentRequest>;
    /**
     *
     * @type {object}
     * @memberof CustomerRequest
     */
    metadata?: object;
}
/**
 * @export
 */
export declare const CustomerRequestTypeEnum: {
    readonly Individual: "INDIVIDUAL";
    readonly Business: "BUSINESS";
};
export type CustomerRequestTypeEnum = typeof CustomerRequestTypeEnum[keyof typeof CustomerRequestTypeEnum];
/**
 * Check if a given object implements the CustomerRequest interface.
 */
export declare function instanceOfCustomerRequest(value: object): boolean;
export declare function CustomerRequestFromJSON(json: any): CustomerRequest;
export declare function CustomerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerRequest;
export declare function CustomerRequestToJSON(value?: CustomerRequest | null): any;
