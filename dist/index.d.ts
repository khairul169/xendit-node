export * from './runtime';
import { Refund } from './refund';
export { Refund } from './refund';
import { Invoice } from './invoice';
export { Invoice } from './invoice';
import { Payout } from './payout';
export { Payout } from './payout';
import { PaymentMethod } from './payment_method';
export { PaymentMethod } from './payment_method';
import { PaymentRequest } from './payment_request';
export { PaymentRequest } from './payment_request';
import { Customer } from './customer';
export { Customer } from './customer';
import { Transaction, Balance } from './balance_and_transaction';
export { Transaction, Balance } from './balance_and_transaction';
export interface XenditOpts {
    secretKey: string;
    xenditURL?: string;
}
export declare class Xendit {
    opts: XenditOpts;
    Refund: Refund;
    Invoice: Invoice;
    Payout: Payout;
    PaymentMethod: PaymentMethod;
    PaymentRequest: PaymentRequest;
    Customer: Customer;
    Transaction: Transaction;
    Balance: Balance;
    constructor({ secretKey: _secretKey, xenditURL: _xenditURL }: XenditOpts);
}
export default Xendit;
