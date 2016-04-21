
/**
 * MagicTelecomAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 on 04/20/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of Account
 *
 * @constructor
 */
function Account() {
    this.number = null;     
    this.roles = null;     
    this.email = null;     
    this.contactNumber = null;     
    this.firstname = null;     
    this.lastname = null;     
    //Append to variable dictionary
    this._variableDict['contactNumber'] = 'contact_number';
}

Account.prototype = new BaseModel();
Account.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Account.prototype.getNumber = function() {
    return this.number;
};

/**
 * Setter for Number
 * 
 * @param {string} value 
 */
Account.prototype.setNumber = function(value) {
    this.number = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array}
 */
Account.prototype.getRoles = function() {
    return this.roles;
};

/**
 * Setter for Roles
 * 
 * @param {array} value 
 */
Account.prototype.setRoles = function(value) {
    this.roles = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Account.prototype.getEmail = function() {
    return this.email;
};

/**
 * Setter for Email
 * 
 * @param {string} value 
 */
Account.prototype.setEmail = function(value) {
    this.email = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Account.prototype.getContactNumber = function() {
    return this.contactNumber;
};

/**
 * Setter for ContactNumber
 * 
 * @param {string} value 
 */
Account.prototype.setContactNumber = function(value) {
    this.contactNumber = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Account.prototype.getFirstname = function() {
    return this.firstname;
};

/**
 * Setter for Firstname
 * 
 * @param {string} value 
 */
Account.prototype.setFirstname = function(value) {
    this.firstname = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
Account.prototype.getLastname = function() {
    return this.lastname;
};

/**
 * Setter for Lastname
 * 
 * @param {string} value 
 */
Account.prototype.setLastname = function(value) {
    this.lastname = value;
};

module.exports = Account;