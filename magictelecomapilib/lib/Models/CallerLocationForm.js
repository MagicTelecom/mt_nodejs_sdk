
/**
 * MagicTelecomAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 on 04/20/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CallerLocationForm
 *
 * @constructor
 */
function CallerLocationForm() {
    this.callerLocation = null;     
    //Append to variable dictionary
    this._variableDict['callerLocation'] = 'caller_location';
}

CallerLocationForm.prototype = new BaseModel();
CallerLocationForm.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {CallerLocation}
 */
CallerLocationForm.prototype.getCallerLocation = function() {
    return this.callerLocation;
};

/**
 * Setter for CallerLocation
 * 
 * @param {CallerLocation} value 
 */
CallerLocationForm.prototype.setCallerLocation = function(value) {
    this.callerLocation = value;
};

module.exports = CallerLocationForm;