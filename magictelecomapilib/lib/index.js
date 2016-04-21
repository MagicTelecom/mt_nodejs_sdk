/**
  * @module MagicTelecomAPILib
  *  
  * Magic Telecom API
  */

var configuration = require('./configuration'),
	Hashes = require('./hashes'),
    UsersController = require('./Controllers/UsersController'),
    AccountsController = require('./Controllers/AccountsController'),
    DidsController = require('./Controllers/DidsController'),
    DidsProductsController = require('./Controllers/DidsProductsController'),
    Cdrs = require('./Models/Cdrs'),
    CartCheckoutForm = require('./Models/CartCheckoutForm'),
    Checkout = require('./Models/Checkout'),
    TokenForm = require('./Models/TokenForm'),
    AccountForm = require('./Models/AccountForm'),
    CdrForm = require('./Models/CdrForm'),
    TrunkForm = require('./Models/TrunkForm'),
    Trunk = require('./Models/Trunk'),
    Routing = require('./Models/Routing'),
    Endpoint = require('./Models/Endpoint'),
    CallerLocation = require('./Models/CallerLocation'),
    CallerLocationForm = require('./Models/CallerLocationForm'),
    Account = require('./Models/Account'),
    TelephoneNumberForm = require('./Models/TelephoneNumberForm'),
    ItemForm = require('./Models/ItemForm'),
    Item = require('./Models/Item'),
    DidItem = require('./Models/DidItem'),
    LocationItem = require('./Models/LocationItem'),
    TrunkItem = require('./Models/TrunkItem'),
    RoutingBase = require('./Models/RoutingBase'),
    TelephoneNumber = require('./Models/TelephoneNumber'),
    Token = require('./Models/Token');


function initializer(){}

//Main functional components of MagicTelecomAPILib
initializer.configuration = configuration;
initializer.Hashes = Hashes;
initializer.UsersController = UsersController;
initializer.AccountsController = AccountsController;
initializer.DidsController = DidsController;
initializer.DidsProductsController = DidsProductsController;

//Main Models of MagicTelecomAPILib
initializer.Cdrs = Cdrs;
initializer.CartCheckoutForm = CartCheckoutForm;
initializer.Checkout = Checkout;
initializer.TokenForm = TokenForm;
initializer.AccountForm = AccountForm;
initializer.CdrForm = CdrForm;
initializer.TrunkForm = TrunkForm;
initializer.Trunk = Trunk;
initializer.Routing = Routing;
initializer.Endpoint = Endpoint;
initializer.CallerLocation = CallerLocation;
initializer.CallerLocationForm = CallerLocationForm;
initializer.Account = Account;
initializer.TelephoneNumberForm = TelephoneNumberForm;
initializer.ItemForm = ItemForm;
initializer.Item = Item;
initializer.DidItem = DidItem;
initializer.TrunkItem = TrunkItem;
initializer.LocationItem = LocationItem;
initializer.RoutingBase = RoutingBase;
initializer.TelephoneNumber = TelephoneNumber;
initializer.Token = Token;

module.exports = initializer;