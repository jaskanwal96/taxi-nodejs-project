const services = require('../services');
const Boom = require('boom');
let registerDriver = async (data)=>
{
    try {
        let check = await services.driver_service.checkDriver(data.driver_email, data.driver_password);
       console.log(check);
        if(check.length == 0){
        
            let resp = await services.driver_service.insertDriver(data);
            return {statusCode: 200, message: "Driver Added Successfully", data: resp};
        }
        return Boom.conflict("User Already Exist");
    } catch (error) { 
        console.log(error);
        throw error;
    }
} 


module.exports = {
    registerDriver
}
