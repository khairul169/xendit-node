/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
import * as runtime from '../../runtime';
import type { ChannelsCategories, Currency, DateRangeFilter, TransactionResponse, TransactionStatuses, TransactionTypes, TransactionsResponse } from '../models';
export interface GetAllTransactionsRequest {
    forUserId?: string;
    types?: Array<TransactionTypes>;
    statuses?: Array<TransactionStatuses>;
    channelCategories?: Array<ChannelsCategories>;
    referenceId?: string;
    productId?: string;
    accountIdentifier?: string;
    amount?: number;
    currency?: Currency;
    created?: DateRangeFilter;
    updated?: DateRangeFilter;
    limit?: number;
    afterId?: string;
    beforeId?: string;
    idempotencyKey?: string;
}
export interface GetTransactionByIDRequest {
    id: string;
    forUserId?: string;
    idempotencyKey?: string;
}
/**
 *
 */
export declare class TransactionApi extends runtime.BaseAPI {
    secretKey: string;
    xenditURL: string;
    constructor({ secretKey, xenditURL }: {
        secretKey: string;
        xenditURL?: string;
    });
    /**
     * Get a list of all transactions based on filter and search parameters.
     * Get a list of transactions
     */
    private getAllTransactionsRaw;
    /**
     * Get a list of all transactions based on filter and search parameters.
     * Get a list of transactions
     */
    getAllTransactions(requestParameters?: GetAllTransactionsRequest): Promise<TransactionsResponse>;
    /**
     * Get single specific transaction by transaction id.
     * Get a transaction based on its id
     */
    private getTransactionByIDRaw;
    /**
     * Get single specific transaction by transaction id.
     * Get a transaction based on its id
     */
    getTransactionByID(requestParameters: GetTransactionByIDRequest): Promise<TransactionResponse>;
}