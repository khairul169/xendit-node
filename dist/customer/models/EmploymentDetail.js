"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This file is auto generated by Xendit.
 * Do not edit the class manually.
 * Improvements? Share your ideas at https://github.com/xendit/xendit-node
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmploymentDetailToJSON = exports.EmploymentDetailFromJSONTyped = exports.EmploymentDetailFromJSON = exports.instanceOfEmploymentDetail = void 0;
var runtime_1 = require("../../runtime");
/**
 * Check if a given object implements the EmploymentDetail interface.
 */
function instanceOfEmploymentDetail(value) {
    var isInstance = true;
    return isInstance;
}
exports.instanceOfEmploymentDetail = instanceOfEmploymentDetail;
function EmploymentDetailFromJSON(json) {
    return EmploymentDetailFromJSONTyped(json, false);
}
exports.EmploymentDetailFromJSON = EmploymentDetailFromJSON;
function EmploymentDetailFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'employerName': !(0, runtime_1.exists)(json, 'employer_name') ? undefined : json['employer_name'],
        'natureOfBusiness': !(0, runtime_1.exists)(json, 'nature_of_business') ? undefined : json['nature_of_business'],
        'roleDescription': !(0, runtime_1.exists)(json, 'role_description') ? undefined : json['role_description'],
    };
}
exports.EmploymentDetailFromJSONTyped = EmploymentDetailFromJSONTyped;
function EmploymentDetailToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'employer_name': value.employerName,
        'nature_of_business': value.natureOfBusiness,
        'role_description': value.roleDescription,
    };
}
exports.EmploymentDetailToJSON = EmploymentDetailToJSON;