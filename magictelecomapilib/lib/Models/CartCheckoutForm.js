
/**
 * MagicTelecomAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 on 04/20/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CartCheckoutForm
 *
 * @constructor
 */
function CartCheckoutForm() {
    this.checkout = null;     
}

CartCheckoutForm.prototype = new BaseModel();
CartCheckoutForm.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {Checkout}
 */
CartCheckoutForm.prototype.getCheckout = function() {
    return this.checkout;
};

/**
 * Setter for Checkout
 * 
 * @param {Checkout} value 
 */
CartCheckoutForm.prototype.setCheckout = function(value) {
    this.checkout = value;
};

module.exports = CartCheckoutForm;