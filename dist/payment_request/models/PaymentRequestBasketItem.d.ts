/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 *
 * @export
 * @interface PaymentRequestBasketItem
 */
export interface PaymentRequestBasketItem {
    /**
     *
     * @type {string}
     * @memberof PaymentRequestBasketItem
     */
    referenceId?: string;
    /**
     *
     * @type {string}
     * @memberof PaymentRequestBasketItem
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof PaymentRequestBasketItem
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof PaymentRequestBasketItem
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof PaymentRequestBasketItem
     */
    category: string;
    /**
     *
     * @type {string}
     * @memberof PaymentRequestBasketItem
     */
    subCategory?: string;
    /**
     *
     * @type {string}
     * @memberof PaymentRequestBasketItem
     */
    currency: string;
    /**
     *
     * @type {number}
     * @memberof PaymentRequestBasketItem
     */
    quantity: number;
    /**
     *
     * @type {number}
     * @memberof PaymentRequestBasketItem
     */
    price: number;
    /**
     *
     * @type {string}
     * @memberof PaymentRequestBasketItem
     */
    payerChargedCurrency?: string;
    /**
     *
     * @type {number}
     * @memberof PaymentRequestBasketItem
     */
    payerChargedPrice?: number;
    /**
     *
     * @type {string}
     * @memberof PaymentRequestBasketItem
     */
    url?: string;
    /**
     *
     * @type {object}
     * @memberof PaymentRequestBasketItem
     */
    metadata?: object;
}
/**
 * Check if a given object implements the PaymentRequestBasketItem interface.
 */
export declare function instanceOfPaymentRequestBasketItem(value: object): boolean;
export declare function PaymentRequestBasketItemFromJSON(json: any): PaymentRequestBasketItem;
export declare function PaymentRequestBasketItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentRequestBasketItem;
export declare function PaymentRequestBasketItemToJSON(value?: PaymentRequestBasketItem | null): any;
