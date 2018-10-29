const controller = require('../controller');
const joi = require('joi');  
let customer_API = (server)=>{
    server.route({
        method: 'POST',
        path: '/customer/update',
        handler: function (req, reply) {
            return controller.customer_controller.updateCustomer(req);
        },
        config:{
            description:'update user',
            tags:['api'],
            validate : {
                headers: joi.object({"authorization":joi.string().required()}).unknown(),
                payload:
                    {
                        customer_name : joi.string(), 
                        customer_phone : joi.string(), 
                        customer_email : joi.string(), 
                        customer_password : joi.string()
                    }
            }
        }
    });

    server.route(
        {
            method: 'POST',
            path: '/customer/register',
            handler: function (req,res)
            { 
                return controller.customer_controller.registerCustomer(req.payload);
            },
            config:
            {
                description:'get all customers',
                tags:['api'],
                validate:
                {
                    payload:
                    {
                        customer_name : joi.string(), 
                        customer_phone : joi.string(), 
                        customer_email : joi.string(), 
                        customer_password : joi.string()
                    }
                }
            }
        });
        server.route({
            method: 'POST',
            path: '/customer/login',
            handler: function(req,res){
                return controller.customer_controller.loginCustomer(req);
            },
            config: {
                description: "Customer Login",
                tags: ["api"],
                validate: {
                    payload: {
                        customer_email: joi.string().email(),
                        customer_password: joi.string().min(4)
                    }
                }
            }
             
        })

    // server.route(
    //     {
    //         method:'POST',
    //         path: '/customer',
    //         handler: function (req,res)
    //         { 
    //             return controller.customer_API.insertCustomer();
    //         },
    //         config:
    //         {
    //             description:'insert details of customer',
    //             tags:['api'],
    //             validate:
    //             {
    //                 payload:
    //                 {
    //                     customer_id : joi.number,
    //                     customer_name : joi.string, 
    //                     customer_phone : joi.number, 
    //                     customer_email : joi.string, 
    //                     customer_password : joi.string,  
    //                     OTP : joi.number ,
    //                     date:  joi.date 
    //                 }
    //             }
    //         }
    //     });
        



    }

    module.exports  = customer_API;