/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 * Available account types (applicable for MY_DUITNOW)
 * @export
 */
export declare const ChannelAccountType: {
    readonly NationalId: "NATIONAL_ID";
    readonly MobileNo: "MOBILE_NO";
    readonly Passport: "PASSPORT";
    readonly BusinessRegistration: "BUSINESS_REGISTRATION";
    readonly BankAccount: "BANK_ACCOUNT";
};
export type ChannelAccountType = typeof ChannelAccountType[keyof typeof ChannelAccountType];
export declare function ChannelAccountTypeFromJSON(json: any): ChannelAccountType;
export declare function ChannelAccountTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelAccountType;
export declare function ChannelAccountTypeToJSON(value?: ChannelAccountType | null): any;