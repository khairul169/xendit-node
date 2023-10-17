/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
import type { BillingInformation } from './BillingInformation';
import type { Card } from './Card';
import type { DirectDebit } from './DirectDebit';
import type { EWallet } from './EWallet';
import type { OverTheCounter } from './OverTheCounter';
import type { PaymentMethodAction } from './PaymentMethodAction';
import type { PaymentMethodCountry } from './PaymentMethodCountry';
import type { PaymentMethodReusability } from './PaymentMethodReusability';
import type { PaymentMethodStatus } from './PaymentMethodStatus';
import type { PaymentMethodType } from './PaymentMethodType';
import type { QRCode } from './QRCode';
import type { VirtualAccount } from './VirtualAccount';
/**
 *
 * @export
 * @interface PaymentMethod
 */
export interface PaymentMethod {
    /**
     *
     * @type {string}
     * @memberof PaymentMethod
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof PaymentMethod
     */
    businessId?: string;
    /**
     *
     * @type {PaymentMethodType}
     * @memberof PaymentMethod
     */
    type?: PaymentMethodType;
    /**
     *
     * @type {PaymentMethodCountry}
     * @memberof PaymentMethod
     */
    country?: PaymentMethodCountry;
    /**
     *
     * @type {string}
     * @memberof PaymentMethod
     */
    customerId?: string | null;
    /**
     *
     * @type {object}
     * @memberof PaymentMethod
     */
    customer?: object | null;
    /**
     *
     * @type {string}
     * @memberof PaymentMethod
     */
    referenceId?: string;
    /**
     *
     * @type {string}
     * @memberof PaymentMethod
     */
    description?: string | null;
    /**
     *
     * @type {PaymentMethodStatus}
     * @memberof PaymentMethod
     */
    status?: PaymentMethodStatus;
    /**
     *
     * @type {PaymentMethodReusability}
     * @memberof PaymentMethod
     */
    reusability?: PaymentMethodReusability;
    /**
     *
     * @type {Array<PaymentMethodAction>}
     * @memberof PaymentMethod
     */
    actions?: Array<PaymentMethodAction>;
    /**
     *
     * @type {object}
     * @memberof PaymentMethod
     */
    metadata?: object | null;
    /**
     *
     * @type {BillingInformation}
     * @memberof PaymentMethod
     */
    billingInformation?: BillingInformation | null;
    /**
     *
     * @type {string}
     * @memberof PaymentMethod
     */
    failureCode?: string | null;
    /**
     *
     * @type {Date}
     * @memberof PaymentMethod
     */
    created?: Date;
    /**
     *
     * @type {Date}
     * @memberof PaymentMethod
     */
    updated?: Date;
    /**
     *
     * @type {EWallet}
     * @memberof PaymentMethod
     */
    ewallet?: EWallet | null;
    /**
     *
     * @type {DirectDebit}
     * @memberof PaymentMethod
     */
    directDebit?: DirectDebit | null;
    /**
     *
     * @type {OverTheCounter}
     * @memberof PaymentMethod
     */
    overTheCounter?: OverTheCounter | null;
    /**
     *
     * @type {Card}
     * @memberof PaymentMethod
     */
    card?: Card | null;
    /**
     *
     * @type {QRCode}
     * @memberof PaymentMethod
     */
    qrCode?: QRCode | null;
    /**
     *
     * @type {VirtualAccount}
     * @memberof PaymentMethod
     */
    virtualAccount?: VirtualAccount | null;
}
/**
 * Check if a given object implements the PaymentMethod interface.
 */
export declare function instanceOfPaymentMethod(value: object): boolean;
export declare function PaymentMethodFromJSON(json: any): PaymentMethod;
export declare function PaymentMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentMethod;
export declare function PaymentMethodToJSON(value?: PaymentMethod | null): any;