/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
import type { OverTheCounterUpdateParameters } from './OverTheCounterUpdateParameters';
import type { PaymentMethodReusability } from './PaymentMethodReusability';
import type { PaymentMethodStatus } from './PaymentMethodStatus';
import type { VirtualAccountUpdateParameters } from './VirtualAccountUpdateParameters';
/**
 *
 * @export
 * @interface PaymentMethodUpdateParameters
 */
export interface PaymentMethodUpdateParameters {
    /**
     *
     * @type {string}
     * @memberof PaymentMethodUpdateParameters
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof PaymentMethodUpdateParameters
     */
    referenceId?: string;
    /**
     *
     * @type {PaymentMethodReusability}
     * @memberof PaymentMethodUpdateParameters
     */
    reusability?: PaymentMethodReusability;
    /**
     *
     * @type {PaymentMethodStatus}
     * @memberof PaymentMethodUpdateParameters
     */
    status?: PaymentMethodStatus;
    /**
     *
     * @type {OverTheCounterUpdateParameters}
     * @memberof PaymentMethodUpdateParameters
     */
    overTheCounter?: OverTheCounterUpdateParameters;
    /**
     *
     * @type {VirtualAccountUpdateParameters}
     * @memberof PaymentMethodUpdateParameters
     */
    virtualAccount?: VirtualAccountUpdateParameters;
}
/**
 * Check if a given object implements the PaymentMethodUpdateParameters interface.
 */
export declare function instanceOfPaymentMethodUpdateParameters(value: object): boolean;
export declare function PaymentMethodUpdateParametersFromJSON(json: any): PaymentMethodUpdateParameters;
export declare function PaymentMethodUpdateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentMethodUpdateParameters;
export declare function PaymentMethodUpdateParametersToJSON(value?: PaymentMethodUpdateParameters | null): any;
