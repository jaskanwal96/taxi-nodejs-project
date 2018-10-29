const boom = require('boom');
module.exports = {
     sql_admi : async ()=>{
        try {
            await conn.query(`create table if not exists admin(
                admin_id int AUTO_INCREMENT not null ,
                admin_name varchar(20), 
                admin_phone varchar(15), 
                admin_email varchar(20), 
                admin_password varchar(20), 
                date timestamp default current_timestamp, 
                PRIMARY KEY(admin_id)
                );
            `);
            await conn.query(`select * from admin where admin_email='admin1@gmail.com'`, async (err, data)=>{
                if(data.length == 0){
                    await conn.query(`insert into admin(admin_name, admin_phone, admin_email, admin_password)
                    values('admin1', '8186100007', 'admin1@gmail.com', 'abcdef')`);
                }
            });
            await conn.query(`select * from admin where admin_email='admin1@gmail.com'`, async (err, data)=>{
                if(data.length == 0){
                    await conn.query(`insert into admin(admin_name, admin_phone, admin_email, admin_password)
                    values('admin2', '8186109211', 'admin2@gmail.com', 'abcdef')`);  
                }
            });
            
        } catch (error) {
            console.log(error);
            boom.badData('admin table error');
        }
      
    } 
     
}