const boom = require('boom');
module.exports = {
     sql_addr : async ()=>{
        try {
            await conn.query(`create table if not exists address(
                address_id int AUTO_INCREMENT not null,
                source_address_lattitude float, 
                source_address_longitude float, 
                destination_address_lattitude float,
                destination_address_longitude float,
                PRIMARY KEY(address_id)
                );
         `) 
        } catch (error) {
            console.log(error);
            boom.badData('address table error');
        }
      
    } 
     
}