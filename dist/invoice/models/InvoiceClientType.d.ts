/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 * Representing the client type or source of an invoice.
 * @export
 */
export declare const InvoiceClientType: {
    readonly Dashboard: "DASHBOARD";
    readonly ApiGateway: "API_GATEWAY";
    readonly Integration: "INTEGRATION";
    readonly OnDemand: "ON_DEMAND";
    readonly Recurring: "RECURRING";
    readonly Mobile: "MOBILE";
};
export type InvoiceClientType = typeof InvoiceClientType[keyof typeof InvoiceClientType];
export declare function InvoiceClientTypeFromJSON(json: any): InvoiceClientType;
export declare function InvoiceClientTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceClientType;
export declare function InvoiceClientTypeToJSON(value?: InvoiceClientType | null): any;