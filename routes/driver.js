const controller = require('../controller');
const joi = require('joi');  
let driver_API = (server)=>{
    server.route(
        {
            method: 'POST',
            path: '/driver/register',
            handler: function (req,res)
            { 
                return controller.driver_controller.registerDriver(req.payload);
            },
            config:
            {
                description:'get all drivers',
                tags:['api'],
                validate:
                {
                    payload:
                    {
                        driver_name : joi.string().required(), 
                        driver_phone : joi.string().required(), 
                        driver_email : joi.string().required(), 
                        driver_password : joi.string().required()
                    }
                }
            }
        });
 



    }

    module.exports  = driver_API;