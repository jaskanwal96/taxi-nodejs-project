const customer_API = require('./customer.js');
const driver_API = require('./driver.js');
const address_API = require('./address.js');
const admin_API = require('./admin.js');
const booking_API = require('./booking.js');
 let routes = (server)=>
 {
    customer_API(server);
    driver_API(server);
    //  address_API(server);
    //  admin_API(server);
    //  booking_API(server);
 }
 module.exports = routes;
