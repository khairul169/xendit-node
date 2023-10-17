/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 * EWallet Account Properties
 * @export
 * @interface EWalletAccount
 */
export interface EWalletAccount {
    /**
     * Name of the eWallet account holder. The value is null if unavailableName of the eWallet account holder. The value is null if unavailable
     * @type {string}
     * @memberof EWalletAccount
     */
    name?: string | null;
    /**
     * Identifier from eWallet provider e.g. phone number. The value is null if unavailable
     * @type {string}
     * @memberof EWalletAccount
     */
    accountDetails?: string | null;
    /**
     * The main balance amount on eWallet account provided from eWallet provider. The value is null if unavailable
     * @type {number}
     * @memberof EWalletAccount
     */
    balance?: number | null;
    /**
     * The point balance amount on eWallet account. Applicable only on some eWallet provider that has point system. The value is null if unavailabl
     * @type {number}
     * @memberof EWalletAccount
     */
    pointBalance?: number | null;
}
/**
 * Check if a given object implements the EWalletAccount interface.
 */
export declare function instanceOfEWalletAccount(value: object): boolean;
export declare function EWalletAccountFromJSON(json: any): EWalletAccount;
export declare function EWalletAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): EWalletAccount;
export declare function EWalletAccountToJSON(value?: EWalletAccount | null): any;
