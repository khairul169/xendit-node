/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 *
 * @export
 */
export declare const PaymentRequestCountry: {
    readonly Id: "ID";
    readonly Ph: "PH";
    readonly Vn: "VN";
    readonly Th: "TH";
    readonly My: "MY";
};
export type PaymentRequestCountry = typeof PaymentRequestCountry[keyof typeof PaymentRequestCountry];
export declare function PaymentRequestCountryFromJSON(json: any): PaymentRequestCountry;
export declare function PaymentRequestCountryFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentRequestCountry;
export declare function PaymentRequestCountryToJSON(value?: PaymentRequestCountry | null): any;