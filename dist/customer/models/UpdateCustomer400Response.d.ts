/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 *
 * @export
 * @interface UpdateCustomer400Response
 */
export interface UpdateCustomer400Response {
    /**
     *
     * @type {string}
     * @memberof UpdateCustomer400Response
     */
    errorCode: UpdateCustomer400ResponseErrorCodeEnum;
    /**
     *
     * @type {any}
     * @memberof UpdateCustomer400Response
     */
    message: any | null;
    /**
     *
     * @type {Array<object>}
     * @memberof UpdateCustomer400Response
     */
    errors?: Array<object>;
}
/**
 * @export
 */
export declare const UpdateCustomer400ResponseErrorCodeEnum: {
    readonly EntityNotFoundError: "ENTITY_NOT_FOUND_ERROR";
    readonly ClientNotFoundError: "CLIENT_NOT_FOUND_ERROR";
    readonly EndCustomerNotFoundError: "END_CUSTOMER_NOT_FOUND_ERROR";
    readonly DuplicateEndCustomerError: "DUPLICATE_END_CUSTOMER_ERROR";
    readonly ApiValidationError: "API_VALIDATION_ERROR";
};
export type UpdateCustomer400ResponseErrorCodeEnum = typeof UpdateCustomer400ResponseErrorCodeEnum[keyof typeof UpdateCustomer400ResponseErrorCodeEnum];
/**
 * Check if a given object implements the UpdateCustomer400Response interface.
 */
export declare function instanceOfUpdateCustomer400Response(value: object): boolean;
export declare function UpdateCustomer400ResponseFromJSON(json: any): UpdateCustomer400Response;
export declare function UpdateCustomer400ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateCustomer400Response;
export declare function UpdateCustomer400ResponseToJSON(value?: UpdateCustomer400Response | null): any;