const customer = require('./customer.js');
const driver = require('./driver.js');
const booking = require('./booking.js');
const admin = require('./admin.js');
const address = require('./address.js');
const boom = require('boom');
 
let model_index = async () =>
{
    try {
        
    await customer.sql_cust();
    await driver.sql_driv();
    await address.sql_addr(); 
     await booking.sql_book(); 
    await admin.sql_admi();
    } catch (error) {
        boom.badRequest('error in creating table');
    }
   
}
 module.exports = model_index;













