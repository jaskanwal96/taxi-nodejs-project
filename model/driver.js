const boom = require('boom');
module.exports = {
     sql_driv : async ()=>{
        try {
            await conn.query(`create table if not exists driver(
                driver_id int AUTO_INCREMENT not null,
                driver_name varchar(20), 
                driver_phone int, 
                driver_email varchar(20), 
                driver_password varchar(20),
                OTP int, 
                date timestamp, 
                PRIMARY KEY(driver_id)
                );
         `) 
        } catch (error) {
            console.log(error);
            boom.badData('driver table error');
        }
      
    } 
     
}