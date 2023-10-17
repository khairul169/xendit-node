/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 *
 * @export
 * @interface LinkItem
 */
export interface LinkItem {
    /**
     * URI of target, this will be to the next link.
     * @type {string}
     * @memberof LinkItem
     */
    href: string;
    /**
     * The relationship between source and target. The value will be `next`.
     * @type {string}
     * @memberof LinkItem
     */
    rel: string;
    /**
     * The HTTP method, the value will be `GET`.
     * @type {string}
     * @memberof LinkItem
     */
    method: string;
}
/**
 * Check if a given object implements the LinkItem interface.
 */
export declare function instanceOfLinkItem(value: object): boolean;
export declare function LinkItemFromJSON(json: any): LinkItem;
export declare function LinkItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkItem;
export declare function LinkItemToJSON(value?: LinkItem | null): any;