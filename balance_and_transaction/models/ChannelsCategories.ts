/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */


/**
 * 
 * @export
 */
export const ChannelsCategories = {
    Bank: 'BANK',
    CardlessCredit: 'CARDLESS_CREDIT',
    Paylater: 'PAYLATER',
    Cards: 'CARDS',
    Cash: 'CASH',
    DirectDebit: 'DIRECT_DEBIT',
    Ewallet: 'EWALLET',
    Invoice: 'INVOICE',
    QrCode: 'QR_CODE',
    RetailOutlet: 'RETAIL_OUTLET',
    VirtualAccount: 'VIRTUAL_ACCOUNT',
    Xenplatform: 'XENPLATFORM',
    DirectBankTransfer: 'DIRECT_BANK_TRANSFER',
    Other: 'OTHER'
} as const;
export type ChannelsCategories = typeof ChannelsCategories[keyof typeof ChannelsCategories];


export function ChannelsCategoriesFromJSON(json: any): ChannelsCategories {
    return ChannelsCategoriesFromJSONTyped(json, false);
}

export function ChannelsCategoriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelsCategories {
    return json as ChannelsCategories;
}

export function ChannelsCategoriesToJSON(value?: ChannelsCategories | null): any {
    return value as any;
}
