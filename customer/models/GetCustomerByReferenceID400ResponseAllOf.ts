/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
/**
 * 
 * @export
 * @interface GetCustomerByReferenceID400ResponseAllOf
 */
export interface GetCustomerByReferenceID400ResponseAllOf {
    /**
     * 
     * @type {string}
     * @memberof GetCustomerByReferenceID400ResponseAllOf
     */
    errorCode?: GetCustomerByReferenceID400ResponseAllOfErrorCodeEnum;
    /**
     * 
     * @type {any}
     * @memberof GetCustomerByReferenceID400ResponseAllOf
     */
    message?: any | null;
}


/**
 * @export
 */
export const GetCustomerByReferenceID400ResponseAllOfErrorCodeEnum = {
    EntityNotFoundError: 'ENTITY_NOT_FOUND_ERROR',
    ClientNotFoundError: 'CLIENT_NOT_FOUND_ERROR',
    EndCustomerNotFoundError: 'END_CUSTOMER_NOT_FOUND_ERROR',
    ApiValidationError: 'API_VALIDATION_ERROR'
} as const;
export type GetCustomerByReferenceID400ResponseAllOfErrorCodeEnum = typeof GetCustomerByReferenceID400ResponseAllOfErrorCodeEnum[keyof typeof GetCustomerByReferenceID400ResponseAllOfErrorCodeEnum];


/**
 * Check if a given object implements the GetCustomerByReferenceID400ResponseAllOf interface.
 */
export function instanceOfGetCustomerByReferenceID400ResponseAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetCustomerByReferenceID400ResponseAllOfFromJSON(json: any): GetCustomerByReferenceID400ResponseAllOf {
    return GetCustomerByReferenceID400ResponseAllOfFromJSONTyped(json, false);
}

export function GetCustomerByReferenceID400ResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCustomerByReferenceID400ResponseAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errorCode': !exists(json, 'error_code') ? undefined : json['error_code'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function GetCustomerByReferenceID400ResponseAllOfToJSON(value?: GetCustomerByReferenceID400ResponseAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error_code': value.errorCode,
        'message': value.message,
    };
}
