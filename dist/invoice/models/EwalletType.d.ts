/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 * Representing the available eWallet channels used for invoice-related transactions.
 * @export
 */
export declare const EwalletType: {
    readonly Ovo: "OVO";
    readonly Dana: "DANA";
    readonly Linkaja: "LINKAJA";
    readonly Paymaya: "PAYMAYA";
    readonly Shopeepay: "SHOPEEPAY";
    readonly Gcash: "GCASH";
    readonly Grabpay: "GRABPAY";
    readonly Astrapay: "ASTRAPAY";
    readonly Nexcash: "NEXCASH";
    readonly Jeniuspay: "JENIUSPAY";
};
export type EwalletType = typeof EwalletType[keyof typeof EwalletType];
export declare function EwalletTypeFromJSON(json: any): EwalletType;
export declare function EwalletTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EwalletType;
export declare function EwalletTypeToJSON(value?: EwalletType | null): any;
