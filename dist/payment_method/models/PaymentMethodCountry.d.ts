/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 *
 * @export
 */
export declare const PaymentMethodCountry: {
    readonly Ph: "PH";
    readonly Id: "ID";
    readonly Vn: "VN";
    readonly Th: "TH";
    readonly My: "MY";
};
export type PaymentMethodCountry = typeof PaymentMethodCountry[keyof typeof PaymentMethodCountry];
export declare function PaymentMethodCountryFromJSON(json: any): PaymentMethodCountry;
export declare function PaymentMethodCountryFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentMethodCountry;
export declare function PaymentMethodCountryToJSON(value?: PaymentMethodCountry | null): any;