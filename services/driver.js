let checkDriver = (email, password) => {
    
    return new Promise((resolve, reject) => {
        try {
            conn.query(`select * from driver where driver_email='${email}' 
                and driver_password = '${password}';`, (err, res) => {
                    
                    if (err)reject(err);
                    resolve(res);
                });
        } catch (error) {
            console.log(error);
            return error;
        }
    })

}
let insertDriver = (data) => {
    return new Promise((resolve, reject) => {
        try {
            let resp = conn.query(`insert into driver(driver_name, driver_phone, driver_email, driver_password)
            values('${data.driver_name}','${data.driver_phone}','${data.driver_email}','${data.driver_password}')
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
    checkDriver,
    insertDriver
}