/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
/**
 *
 * @export
 * @interface CaptureParameters
 */
export interface CaptureParameters {
    /**
     *
     * @type {string}
     * @memberof CaptureParameters
     */
    referenceId?: string | null;
    /**
     *
     * @type {number}
     * @memberof CaptureParameters
     */
    captureAmount: number;
}
/**
 * Check if a given object implements the CaptureParameters interface.
 */
export declare function instanceOfCaptureParameters(value: object): boolean;
export declare function CaptureParametersFromJSON(json: any): CaptureParameters;
export declare function CaptureParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): CaptureParameters;
export declare function CaptureParametersToJSON(value?: CaptureParameters | null): any;