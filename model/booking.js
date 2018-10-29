const boom = require('boom');
module.exports = {
     sql_book : async ()=>{
        try {
            await conn.query(`create table if not exists booking(
                booking_id int AUTO_INCREMENT not null, 
                customer_id int, 
                driver_id int,
                no_of_seats int,  
                address_id int,
                date timestamp,
                FOREIGN KEY(customer_id) references customer(customer_id), 
                FOREIGN KEY(driver_id) references driver(driver_id),
                FOREIGN KEY(address_id) references address(address_id),
                PRIMARY KEY(booking_id)
                );
         `) 
        } catch (error) {
            console.log(error);
            boom.badData('booking table error');
        }
      
    } 
     
}