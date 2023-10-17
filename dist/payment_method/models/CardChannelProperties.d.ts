/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 * Card Channel Properties
 * @export
 * @interface CardChannelProperties
 */
export interface CardChannelProperties {
    /**
     * This field value is only being used for reusability = MULTIPLE_USE. To indicate whether to perform 3DS during the linking phase. Defaults to false.
     * @type {boolean}
     * @memberof CardChannelProperties
     */
    skipThreeDSecure?: boolean | null;
    /**
     * URL where the end-customer is redirected if the authorization is successful
     * @type {string}
     * @memberof CardChannelProperties
     */
    successReturnUrl?: string | null;
    /**
     * URL where the end-customer is redirected if the authorization failed
     * @type {string}
     * @memberof CardChannelProperties
     */
    failureReturnUrl?: string | null;
    /**
     * Type of “credential-on-file” / “card-on-file” payment being made. Indicate that this payment uses a previously linked Payment Method for charging.
     * @type {string}
     * @memberof CardChannelProperties
     */
    cardonfileType?: CardChannelPropertiesCardonfileTypeEnum;
}
/**
 * @export
 */
export declare const CardChannelPropertiesCardonfileTypeEnum: {
    readonly MerchantUnscheduled: "MERCHANT_UNSCHEDULED";
    readonly CustomerUnscheduled: "CUSTOMER_UNSCHEDULED";
    readonly Recurring: "RECURRING";
};
export type CardChannelPropertiesCardonfileTypeEnum = typeof CardChannelPropertiesCardonfileTypeEnum[keyof typeof CardChannelPropertiesCardonfileTypeEnum];
/**
 * Check if a given object implements the CardChannelProperties interface.
 */
export declare function instanceOfCardChannelProperties(value: object): boolean;
export declare function CardChannelPropertiesFromJSON(json: any): CardChannelProperties;
export declare function CardChannelPropertiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardChannelProperties;
export declare function CardChannelPropertiesToJSON(value?: CardChannelProperties | null): any;
