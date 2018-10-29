let checkCustomer = (email, password) => {
    
    return new Promise((resolve, reject) => {
        try {
            conn.query(`select * from customer where customer_email='${email}' 
                and customer_password = '${password}';`, (err, res) => {
                    
                    if (err)reject(err);
                    resolve(res);
                });
        } catch (error) {
            console.log(error);
            return error;
        }
    })

}
let updateCustomer = async function(original, data){
    return new Promise(async (resolve, reject)=>{
        try{
            // console.log(original,data);
            let updateQuery = `update customer set 
            customer_name='${data.customer_name}',
            customer_phone='${data.customer_phone}',
            customer_email='${data.customer_email}',
            customer_password='${data.customer_password}' 
            where customer_email='${original[0].customer_email}' and customer_password='${original[0].customer_password}';`;
            
            let response = await  conn.query(updateQuery, (err, res)=>{
                if(err)reject(err);
                resolve(res);
            });
           
        }
        catch(err){
            console.log(err);
            return err;
        }
    });
}
 
let insertCustomer = (data) => {
    return new Promise((resolve, reject) => {
        try {
            let resp = conn.query(`insert into customer(customer_name, customer_phone, customer_email, customer_password)
            values('${data.customer_name}','${data.customer_phone}','${data.customer_email}','${data.customer_password}')
            `, (err, res) => {
                    if (err) reject(err);
                    resolve(res);
                });
        } catch (error) {
            console.log(error);
            return error;
        }
    })
}
module.exports = {
    checkCustomer,
    insertCustomer,
    updateCustomer
}