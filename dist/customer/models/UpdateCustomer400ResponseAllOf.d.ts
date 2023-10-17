/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 *
 * @export
 * @interface UpdateCustomer400ResponseAllOf
 */
export interface UpdateCustomer400ResponseAllOf {
    /**
     *
     * @type {string}
     * @memberof UpdateCustomer400ResponseAllOf
     */
    errorCode?: UpdateCustomer400ResponseAllOfErrorCodeEnum;
    /**
     *
     * @type {any}
     * @memberof UpdateCustomer400ResponseAllOf
     */
    message?: any | null;
}
/**
 * @export
 */
export declare const UpdateCustomer400ResponseAllOfErrorCodeEnum: {
    readonly EntityNotFoundError: "ENTITY_NOT_FOUND_ERROR";
    readonly ClientNotFoundError: "CLIENT_NOT_FOUND_ERROR";
    readonly EndCustomerNotFoundError: "END_CUSTOMER_NOT_FOUND_ERROR";
    readonly DuplicateEndCustomerError: "DUPLICATE_END_CUSTOMER_ERROR";
    readonly ApiValidationError: "API_VALIDATION_ERROR";
};
export type UpdateCustomer400ResponseAllOfErrorCodeEnum = typeof UpdateCustomer400ResponseAllOfErrorCodeEnum[keyof typeof UpdateCustomer400ResponseAllOfErrorCodeEnum];
/**
 * Check if a given object implements the UpdateCustomer400ResponseAllOf interface.
 */
export declare function instanceOfUpdateCustomer400ResponseAllOf(value: object): boolean;
export declare function UpdateCustomer400ResponseAllOfFromJSON(json: any): UpdateCustomer400ResponseAllOf;
export declare function UpdateCustomer400ResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateCustomer400ResponseAllOf;
export declare function UpdateCustomer400ResponseAllOfToJSON(value?: UpdateCustomer400ResponseAllOf | null): any;