/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 * An object representing an item within an invoice.
 * @export
 * @interface InvoiceItem
 */
export interface InvoiceItem {
    /**
     * The name of the item.
     * @type {string}
     * @memberof InvoiceItem
     */
    name: string;
    /**
     * The price of the item.
     * @type {number}
     * @memberof InvoiceItem
     */
    price: number;
    /**
     * The quantity of the item. Must be greater than or equal to 0.
     * @type {number}
     * @memberof InvoiceItem
     */
    quantity: number;
    /**
     * The reference ID of the item.
     * @type {string}
     * @memberof InvoiceItem
     */
    referenceId?: string;
    /**
     * The URL associated with the item.
     * @type {string}
     * @memberof InvoiceItem
     */
    url?: string;
    /**
     * The category of the item.
     * @type {string}
     * @memberof InvoiceItem
     */
    category?: string;
}
/**
 * Check if a given object implements the InvoiceItem interface.
 */
export declare function instanceOfInvoiceItem(value: object): boolean;
export declare function InvoiceItemFromJSON(json: any): InvoiceItem;
export declare function InvoiceItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceItem;
export declare function InvoiceItemToJSON(value?: InvoiceItem | null): any;
