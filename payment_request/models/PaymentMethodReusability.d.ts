/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 *
 * @export
 */
export declare const PaymentMethodReusability: {
    readonly MultipleUse: "MULTIPLE_USE";
    readonly OneTimeUse: "ONE_TIME_USE";
};
export type PaymentMethodReusability = typeof PaymentMethodReusability[keyof typeof PaymentMethodReusability];
export declare function PaymentMethodReusabilityFromJSON(json: any): PaymentMethodReusability;
export declare function PaymentMethodReusabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentMethodReusability;
export declare function PaymentMethodReusabilityToJSON(value?: PaymentMethodReusability | null): any;