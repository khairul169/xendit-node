"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.KYCDocumentResponseToJSON = exports.KYCDocumentResponseFromJSONTyped = exports.KYCDocumentResponseFromJSON = exports.instanceOfKYCDocumentResponse = void 0;
var KYCDocumentSubType_1 = require("./KYCDocumentSubType");
var KYCDocumentType_1 = require("./KYCDocumentType");
/**
 * Check if a given object implements the KYCDocumentResponse interface.
 */
function instanceOfKYCDocumentResponse(value) {
    var isInstance = true;
    isInstance = isInstance && "country" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "subType" in value;
    isInstance = isInstance && "documentName" in value;
    isInstance = isInstance && "documentNumber" in value;
    isInstance = isInstance && "expiresAt" in value;
    isInstance = isInstance && "holderName" in value;
    isInstance = isInstance && "documentImages" in value;
    return isInstance;
}
exports.instanceOfKYCDocumentResponse = instanceOfKYCDocumentResponse;
function KYCDocumentResponseFromJSON(json) {
    return KYCDocumentResponseFromJSONTyped(json, false);
}
exports.KYCDocumentResponseFromJSON = KYCDocumentResponseFromJSON;
function KYCDocumentResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'country': json['country'],
        'type': (0, KYCDocumentType_1.KYCDocumentTypeFromJSON)(json['type']),
        'subType': (0, KYCDocumentSubType_1.KYCDocumentSubTypeFromJSON)(json['sub_type']),
        'documentName': json['document_name'],
        'documentNumber': json['document_number'],
        'expiresAt': json['expires_at'],
        'holderName': json['holder_name'],
        'documentImages': json['document_images'],
    };
}
exports.KYCDocumentResponseFromJSONTyped = KYCDocumentResponseFromJSONTyped;
function KYCDocumentResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'country': value.country,
        'type': (0, KYCDocumentType_1.KYCDocumentTypeToJSON)(value.type),
        'sub_type': (0, KYCDocumentSubType_1.KYCDocumentSubTypeToJSON)(value.subType),
        'document_name': value.documentName,
        'document_number': value.documentNumber,
        'expires_at': value.expiresAt,
        'holder_name': value.holderName,
        'document_images': value.documentImages,
    };
}
exports.KYCDocumentResponseToJSON = KYCDocumentResponseToJSON;
