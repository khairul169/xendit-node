/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */

import { exists, mapValues } from '../../runtime';
import type { ChannelAccountType } from './ChannelAccountType';
import {
    ChannelAccountTypeFromJSON,
    ChannelAccountTypeFromJSONTyped,
    ChannelAccountTypeToJSON,
} from './ChannelAccountType';

/**
 * Channel information for digital destinations (banks, e-wallets)
 * @export
 * @interface DigitalPayoutChannelProperties
 */
export interface DigitalPayoutChannelProperties {
    /**
     * Registered account name
     * @type {string}
     * @memberof DigitalPayoutChannelProperties
     */
    accountHolderName?: string | null;
    /**
     * Registered account number
     * @type {string}
     * @memberof DigitalPayoutChannelProperties
     */
    accountNumber: string;
    /**
     * 
     * @type {ChannelAccountType}
     * @memberof DigitalPayoutChannelProperties
     */
    accountType?: ChannelAccountType;
}

/**
 * Check if a given object implements the DigitalPayoutChannelProperties interface.
 */
export function instanceOfDigitalPayoutChannelProperties(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accountNumber" in value;

    return isInstance;
}

export function DigitalPayoutChannelPropertiesFromJSON(json: any): DigitalPayoutChannelProperties {
    return DigitalPayoutChannelPropertiesFromJSONTyped(json, false);
}

export function DigitalPayoutChannelPropertiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): DigitalPayoutChannelProperties {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountHolderName': !exists(json, 'account_holder_name') ? undefined : json['account_holder_name'],
        'accountNumber': json['account_number'],
        'accountType': !exists(json, 'account_type') ? undefined : ChannelAccountTypeFromJSON(json['account_type']),
    };
}

export function DigitalPayoutChannelPropertiesToJSON(value?: DigitalPayoutChannelProperties | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_holder_name': value.accountHolderName,
        'account_number': value.accountNumber,
        'account_type': ChannelAccountTypeToJSON(value.accountType),
    };
}
