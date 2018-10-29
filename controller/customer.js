const services = require('../services');
const Boom = require('boom');
const jwt = require('jsonwebtoken');
let registerCustomer = async (data)=>
{
    try {
        let check = await services.customer_service.checkCustomer(data.customer_email, data.customer_password);
       console.log(check);
        if(check.length == 0){
        
            let resp = await services.customer_service.insertCustomer(data);
            return {statusCode: 200, message: "Customer Added Successfully", data: resp};
        }
        return Boom.conflict("User Already Exist");
    } catch (error) { 
        console.log(error);
        throw error;
    }
}


let updateCustomer = async function(req) {
    try {
        let data = await jwt.verify(req.headers.authorization, 'secret');
        let check = await services.customer_service.checkCustomer(data.customer_email, data.customer_password);
        let list = await services.customer_service.updateCustomer(check,req.payload);
        console.log(list);
        return {statusCode: 200, message:"Updated Successful", data:list};
    } catch (error) {
        console.log(error);
        return Boom.badRequest("Error Fetching Customer");
    }
}
let loginCustomer = async function loginCustomer(req)
{
    try {
        let checkExistingId = await services.customer_service.checkCustomer(req.payload.customer_email,req.payload.customer_password);
        console.log(checkExistingId);
        if(checkExistingId.length != 0)
       { 
           let userToken = await jwt.sign(req.payload, 'secret');
           let mydata = {customer_name: checkExistingId[0].customer_name, 
            customer_phone:checkExistingId[0].customer_phone,
            customer_email:checkExistingId[0].customer_email,accessToken:userToken}
           
           return {statusCode:200,message:"token generated",data:mydata};
        }
        else
        {
            return Boom.badRequest("id does not exist");
        }
    } catch (error) {
        console.log(error);
       return Boom.badRequest("token not received");
    }
}


module.exports = {
    registerCustomer,
    updateCustomer,
    loginCustomer
}
