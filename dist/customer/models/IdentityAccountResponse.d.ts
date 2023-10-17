/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
import type { IdentityAccountResponseProperties } from './IdentityAccountResponseProperties';
/**
 *
 * @export
 * @interface IdentityAccountResponse
 */
export interface IdentityAccountResponse {
    /**
     *
     * @type {string}
     * @memberof IdentityAccountResponse
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof IdentityAccountResponse
     */
    code?: string | null;
    /**
     *
     * @type {string}
     * @memberof IdentityAccountResponse
     */
    company: string | null;
    /**
     *
     * @type {string}
     * @memberof IdentityAccountResponse
     */
    description: string | null;
    /**
     * ISO3166-2 country code
     * @type {string}
     * @memberof IdentityAccountResponse
     */
    country: string | null;
    /**
     *
     * @type {string}
     * @memberof IdentityAccountResponse
     */
    holderName?: string | null;
    /**
     *
     * @type {string}
     * @memberof IdentityAccountResponse
     */
    type: IdentityAccountResponseTypeEnum;
    /**
     *
     * @type {IdentityAccountResponseProperties}
     * @memberof IdentityAccountResponse
     */
    properties: IdentityAccountResponseProperties;
    /**
     *
     * @type {Date}
     * @memberof IdentityAccountResponse
     */
    created?: Date;
}
/**
 * @export
 */
export declare const IdentityAccountResponseTypeEnum: {
    readonly BankAccount: "BANK_ACCOUNT";
    readonly Ewallet: "EWALLET";
    readonly CreditCard: "CREDIT_CARD";
    readonly Otc: "OTC";
    readonly QrCode: "QR_CODE";
    readonly CardlessCredit: "CARDLESS_CREDIT";
};
export type IdentityAccountResponseTypeEnum = typeof IdentityAccountResponseTypeEnum[keyof typeof IdentityAccountResponseTypeEnum];
/**
 * Check if a given object implements the IdentityAccountResponse interface.
 */
export declare function instanceOfIdentityAccountResponse(value: object): boolean;
export declare function IdentityAccountResponseFromJSON(json: any): IdentityAccountResponse;
export declare function IdentityAccountResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityAccountResponse;
export declare function IdentityAccountResponseToJSON(value?: IdentityAccountResponse | null): any;
