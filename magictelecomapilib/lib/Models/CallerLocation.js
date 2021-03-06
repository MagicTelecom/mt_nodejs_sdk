
/**
 * MagicTelecomAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 on 04/20/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CallerLocation
 *
 * @constructor
 */
function CallerLocation() {
    this.name = null;     
    this.address = null;     
    this.city = null;     
    this.region = null;     
    this.postalCode = null;     
    this.unitType = null;     
    this.unitNumber = null;     
    this.country = null;     
    //Append to variable dictionary
    this._variableDict['postalCode'] = 'postal_code';
    this._variableDict['unitType'] = 'unit_type';
    this._variableDict['unitNumber'] = 'unit_number';
}

CallerLocation.prototype = new BaseModel();
CallerLocation.prototype.constructor = BaseModel;

/**
 * Location Name
 *
 * @return {string}
 */
CallerLocation.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string} value 
 */
CallerLocation.prototype.setName = function(value) {
    this.name = value;
};

/**
 * Address
 *
 * @return {string}
 */
CallerLocation.prototype.getAddress = function() {
    return this.address;
};

/**
 * Setter for Address
 * 
 * @param {string} value 
 */
CallerLocation.prototype.setAddress = function(value) {
    this.address = value;
};

/**
 * City
 *
 * @return {string}
 */
CallerLocation.prototype.getCity = function() {
    return this.city;
};

/**
 * Setter for City
 * 
 * @param {string} value 
 */
CallerLocation.prototype.setCity = function(value) {
    this.city = value;
};

/**
 * Region
 *
 * @return {string}
 */
CallerLocation.prototype.getRegion = function() {
    return this.region;
};

/**
 * Setter for Region
 * 
 * @param {string} value 
 */
CallerLocation.prototype.setRegion = function(value) {
    this.region = value;
};

/**
 * Postal Code
 *
 * @return {int}
 */
CallerLocation.prototype.getPostalCode = function() {
    return this.postalCode;
};

/**
 * Setter for PostalCode
 * 
 * @param {int} value 
 */
CallerLocation.prototype.setPostalCode = function(value) {
    this.postalCode = value;
};

/**
 * Unit Type
 *
 * @return {string}
 */
CallerLocation.prototype.getUnitType = function() {
    return this.unitType;
};

/**
 * Setter for UnitType
 * 
 * @param {string} value 
 */
CallerLocation.prototype.setUnitType = function(value) {
    this.unitType = value;
};

/**
 * Unit Number
 *
 * @return {int}
 */
CallerLocation.prototype.getUnitNumber = function() {
    return this.unitNumber;
};

/**
 * Setter for UnitNumber
 * 
 * @param {int} value 
 */
CallerLocation.prototype.setUnitNumber = function(value) {
    this.unitNumber = value;
};

/**
 * Country Name
 *
 * @return {string}
 */
CallerLocation.prototype.getCountry = function() {
    return this.country;
};

/**
 * Setter for Country
 * 
 * @param {string} value 
 */
CallerLocation.prototype.setCountry = function(value) {
    this.country = value;
};

module.exports = CallerLocation;